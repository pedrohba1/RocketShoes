import React, { Component } from 'react';
import { View, Text } from 'react-native';
import api from '../../services/api';
import { ShoeList } from './styles';

export default class Home extends Component {
    state = {
        products: [],
    };

    async componentDidMount() {
        const res = await api.get('products');
        console.log(res);
        const data = res.data.map(product => ({
            ...product,
            // para o render não ficar atualizando múltiplas vezes, eu já coloco direto o preço formatado no objeto do produto.
        }));
        this.setState({ products: data });
    }

    render() {
        const { products } = this.state;
        return <ShoeList data={products} />;
    }
}
