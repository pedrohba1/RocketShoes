import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Header, Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import colors from '../../styles/colors';

import { Logo, BasketContainer, ItemCount } from './styles';

function ShoesHeader() {
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
                    <ItemCount>{0}</ItemCount>
                </BasketContainer>
            )}
        />
    );
}
export default ShoesHeader;
