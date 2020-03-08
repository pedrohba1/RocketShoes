import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import api from '../../services/api';
import { ShoeList, Container } from './styles';
import ShoeItem from '../../components/ShoeItem';
import formatNumber from '../../utils/format';
import * as CartActions from '../../store/modules/cart/actions';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }

    async componentDidMount() {
        const res = await api.get('products');
        const data = res.data.map(product => ({
            ...product,
            formattedPrice: `R$ ${formatNumber(product.price)}`,
        }));
        this.setState({ products: data });
    }

    handleAddProduct = id => {
        const { addToCartRequest } = this.props;
        addToCartRequest(id);
    };

    render() {
        const { products } = this.state;
        const { amount } = this.props;

        return (
            <Container>
                <ShoeList
                    data={products}
                    renderItem={product => (
                        <ShoeItem
                            product={product.item}
                            onAddProduct={this.handleAddProduct}
                            amount={amount[product.item.id]}
                        />
                    )}
                    keyExtractor={product => String(product.id)}
                />
            </Container>
        );
    }
}

Home.defaultProps = {
    amount: {},
};

Home.propTypes = {
    addToCartRequest: PropTypes.func.isRequired,
    amount: PropTypes.shape({
        id: PropTypes.number,
    }),
};

const mapStateToProps = state => ({
    amount: state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount;
        return amount;
    }, {}),
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
