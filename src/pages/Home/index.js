import React, { Component } from 'react';
import { connect } from 'react-redux';
import api from '../../services/api';
import { ShoeList, Container } from './styles';
import ShoeItem from '../../components/ShoeItem';
import formatNumber from '../../utils/format';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }

    async componentDidMount() {
        const res = await api.get('products');
        const data = res.data.map(product => ({
            ...product,
            formattedPrice: `R$ ${formatNumber(product.price)}`,
        }));
        this.setState({ products: data });
    }

    handleAddProduct = product => {
        const { dispatch } = this.props;

        dispatch({
            type: '@cart/ADD_TO_CART',
            product,
        });
    };

    render() {
        const { products } = this.state;
        return (
            <Container>
                <ShoeList
                    data={products}
                    renderItem={product => (
                        <ShoeItem
                            product={product.item}
                            onAddProduct={this.handleAddProduct}
                        />
                    )}
                    keyExtractor={product => String(product.id)}
                />
            </Container>
        );
    }
}

export default connect()(Home);
