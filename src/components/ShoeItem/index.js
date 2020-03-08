import React from 'react';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import {
    Container,
    ProductImage,
    ProductName,
    ProductPrice,
    AddButton,
    ButtonText,
    ButtonAmountText,
    ButtonAmount,
} from './styles';

function ShoeItem({ product, onAddProduct, amount }) {
    return (
        <Container>
            <ProductImage source={{ uri: product.image }} />
            <ProductName> {product.title}</ProductName>
            <ProductPrice> {product.formattedPrice}</ProductPrice>
            <AddButton onPress={() => onAddProduct(product)}>
                <ButtonAmount>
                    <Icon name="add-shopping-cart" color="#fff" size={24} />
                    <ButtonAmountText>{amount}</ButtonAmountText>
                </ButtonAmount>
                <ButtonText>Adicionar ao carrinho</ButtonText>
            </AddButton>
        </Container>
    );
}

ShoeItem.defaultProps = {
    amount: 0,
};

ShoeItem.propTypes = {
    product: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        formattedPrice: PropTypes.string,
    }).isRequired,
    onAddProduct: PropTypes.func.isRequired,
    amount: PropTypes.number,
};

export default ShoeItem;
