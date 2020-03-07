import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, ShoppingList } from './styles';
import * as CartActions from '../../store/modules/cart/actions';

import CartItem from '../../components/CartItem';
import CartBottom from '../../components/CartBottom';
import EmptyCart from '../../components/EmptyCart';

function Cart({ cart, cartSize, removeFromCart }) {
    function handleDelete(product) {
        removeFromCart(product);
    }

    return (
        <Container>
            <ShoppingList
                data={cart}
                renderItem={product => (
                    <CartItem product={product.item} onDelete={handleDelete} />
                )}
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

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
