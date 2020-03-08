import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Container, ShoppingList } from './styles';
import * as CartActions from '../../store/modules/cart/actions';
import formatPrice from '../../utils/format';

import CartItem from '../../components/CartItem';
import CartBottom from '../../components/CartBottom';
import EmptyCart from '../../components/EmptyCart';

function Cart({ cart, cartSize, removeFromCart, updateAmount, total }) {
    function handleDelete(product) {
        removeFromCart(product);
    }

    function handleIncrement(product) {
        updateAmount(product, product.amount + 1);
    }

    function handleDecrement(product) {
        updateAmount(product, product.amount - 1);
    }

    console.tron.log(cart);
    return (
        <Container>
            <ShoppingList
                data={cart}
                renderItem={product => (
                    <CartItem
                        product={product.item}
                        onIncrement={handleIncrement}
                        onDecrement={handleDecrement}
                        onDelete={handleDelete}
                        subtotal={product.item.subtotal}
                    />
                )}
                keyExtractor={product => String(product.id)}
                ListEmptyComponent={<EmptyCart />}
            />
            {cartSize > 0 ? <CartBottom products={cart} total={total} /> : null}
        </Container>
    );
}

Cart.defaultProps = {
    cart: [],
    cartSize: 0,
};

Cart.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            price: PropTypes.number,
            amount: PropTypes.number,
            image: PropTypes.string,
            title: PropTypes.string,
            formattedPrice: PropTypes.string,
            subtotal: PropTypes.string,
        }).isRequired
    ),
    total: PropTypes.string.isRequired,
    cartSize: PropTypes.number,
    removeFromCart: PropTypes.func.isRequired,
    updateAmount: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    cart: state.cart.map(product => ({
        ...product,
        subtotal: `R$ ${formatPrice(product.price * product.amount)}`,
    })),
    total: formatPrice(
        state.cart.reduce((total, product) => {
            return total + product.price * product.amount;
        }, 0)
    ),
    cartSize: state.cart.length,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
