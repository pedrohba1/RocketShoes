import React from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    TotalText,
    TotalPrice,
    BuyButton,
    BuyButtonText,
} from './styles';

export default function CartBottom({ total }) {
    return (
        <Container>
            <TotalText>TOTAL</TotalText>
            <TotalPrice>{total}</TotalPrice>
            <BuyButton>
                <BuyButtonText>FINALIZAR PEDIDO</BuyButtonText>
            </BuyButton>
        </Container>
    );
}

CartBottom.propTypes = {
    total: PropTypes.string.isRequired,
};
