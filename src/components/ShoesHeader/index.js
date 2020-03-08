import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Header, Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import colors from '../../styles/colors';

import { Logo, BasketContainer, ItemCount } from './styles';

function ShoesHeader({ cartSize }) {
    const navigation = useNavigation();

    return (
        <Header
            statusBarProps={{
                barStyle: 'light-content',
                backgroundColor: colors.dark,
            }}
            containerStyle={{
                backgroundColor: colors.dark,
                justifyContent: 'space-around',
            }}
            leftComponent={() => (
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Logo />
                </TouchableOpacity>
            )}
            rightComponent={() => (
                <BasketContainer onPress={() => navigation.navigate('Cart')}>
                    <Icon name="shopping-basket" color="#FFF" size={24} />
                    <ItemCount>{cartSize}</ItemCount>
                </BasketContainer>
            )}
        />
    );
}

ShoesHeader.defaultProps = {
    cartSize: 0,
};

ShoesHeader.propTypes = {
    cartSize: PropTypes.number,
};

export default connect(state => ({
    cartSize: state.cart.length,
}))(ShoesHeader);
