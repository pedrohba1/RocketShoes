import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, ShoppingList, BackgroundContainer } from './styles';

import CartItem from '../../components/CartItem';
import CartBottom from '../../components/CartBottom';

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 3,
                    title: 'Tênis Adidas Duramo Lite 2.0',
                    price: 219.9,
                    image:
                        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
                    formattedPrice: 'R$ 219,9',
                },
                {
                    id: 4,
                    title: 'Tênis Adidas Duramo Lite 2.0',
                    price: 219.9,
                    image:
                        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
                    formattedPrice: 'R$ 219,9',
                },
            ],
        };
    }

    render() {
        const { products } = this.state;
        return (
            <BackgroundContainer>
                <Container>
                    <ShoppingList
                        data={products}
                        renderItem={product => (
                            <CartItem product={product.item} />
                        )}
                        keyExtractor={product => String(product.id)}
                    />
                </Container>
            </BackgroundContainer>
        );
    }
}
