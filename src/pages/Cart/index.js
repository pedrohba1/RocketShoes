import React from 'react';
import { connect } from 'react-redux';
import { Container, ShoppingList } from './styles';

import CartItem from '../../components/CartItem';
import CartBottom from '../../components/CartBottom';
import EmptyCart from '../../components/EmptyCart';

function Cart({ cart, cartSize }) {
    return (
        <Container>
            <ShoppingList
                data={cart}
                renderItem={product => <CartItem product={product.item} />}
                keyExtractor={product => String(product.id)}
                ListEmptyComponent={<EmptyCart />}
            />
            {cartSize > 0 ? <CartBottom /> : null}
        </Container>
    );
}

const mapStateToProps = state => ({
    cart: state.cart,
    cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Cart);
