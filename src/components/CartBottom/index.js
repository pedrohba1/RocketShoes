import React from 'react';
import PropTypes from 'prop-types';
import { Container, TotalText } from './styles';

export default function CartBottom({ products }) {
    return (
        <Container>
            <TotalText>TOTAL</TotalText>
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
