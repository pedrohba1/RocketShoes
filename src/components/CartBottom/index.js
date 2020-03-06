import React from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    TotalText,
    TotalPrice,
    BuyButton,
    BuyButtonText,
} from './styles';

export default function CartBottom({ products }) {
    return (
        <Container>
            <TotalText>TOTAL</TotalText>
            <TotalPrice>R$ 220,0</TotalPrice>
            <BuyButton>
                <BuyButtonText>FINALIZAR PEDIDO</BuyButtonText>
            </BuyButton>
        </Container>
    );
}

CartBottom.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string,
            title: PropTypes.string,
            formattedPrice: PropTypes.string,
        }).isRequired
    ).isRequired,
};
