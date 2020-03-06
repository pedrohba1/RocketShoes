import React, { Component } from 'react';
import api from '../../services/api';
import { ShoeList, Container } from './styles';
import ShoeItem from '../../components/ShoeItem';
import formatNumber from '../../utils/format';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }

    async componentDidMount() {
        const res = await api.get('products');
        console.log(res);
        const data = res.data.map(product => ({
            ...product,
            formattedPrice: `R$${formatNumber(product.price)}`,
        }));
        this.setState({ products: data });
    }

    render() {
        const { products } = this.state;
        return (
            <Container>
                <ShoeList
                    data={products}
                    renderItem={product => <ShoeItem product={product.item} />}
                    keyExtractor={product => product.id}
                />
            </Container>
        );
    }
}
