import React from 'react';
import PropTypes from 'prop-types';

import {
    Container,
    ProductPrice,
    ProductContainer,
    ProductTextContainer,
    ProductName,
    ProductImage,
    TrashIcon,
    DeleteButton,
    ProductAmountContainer,
    IncreaseButton,
    DecreaseButton,
    IncreaseIcon,
    DecreaseIcon,
    AmountInput,
} from './styles';

export default function CartItem({ product }) {
    return (
        <Container>
            <ProductContainer>
                <ProductImage source={{ uri: product.image }} />
                <ProductTextContainer>
                    <ProductName>{product.title}</ProductName>
                    <ProductPrice>{product.formattedPrice}</ProductPrice>
                </ProductTextContainer>
                <DeleteButton>
                    <TrashIcon />
                </DeleteButton>
            </ProductContainer>
            <ProductAmountContainer>
                <DecreaseButton>
                    <DecreaseIcon />
                </DecreaseButton>
                <AmountInput> {product.amount}</AmountInput>
                <IncreaseButton>
                    <IncreaseIcon />
                </IncreaseButton>
            </ProductAmountContainer>
        </Container>
    );
}

CartItem.propTypes = {
    product: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        formattedPrice: PropTypes.string,
        amount: PropTypes.number,
    }).isRequired,
};
