import React, { Component } from 'react';
import { Container, ShoppingList } from './styles';

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <ShoppingList />
            </Container>
        );
    }
}
