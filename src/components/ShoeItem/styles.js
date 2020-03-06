import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { darken } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.white};
    padding: 10px 20px;
    margin: 10px 20px;
    border-radius: 2px;
    flex-direction: column;
`;

export const ProductName = styled.Text`
    flex: 1;
    font-weight: bold;
    font-size: 20px;
    color: ${colors.fontDark};
`;

export const ProductPrice = styled.Text`
    flex: 6;
    font-weight: bold;
    font-size: 40px;
    color: ${colors.fontDark};
`;

export const ProductImage = styled.Image.attrs({
    resizeMode: 'contain',
})`
    width: 100%;
    height: 200px;
    align-self: center;
    width: 100%;
`;

export const AddButton = styled(RectButton)`
    background-color: ${colors.primary};
    width: 100%;
    flex-direction: row;
    height: 50px;
    border-radius: 2px;
`;

export const ButtonAmountText = styled.Text`
    font-size: 20px;
    color: ${colors.white};
`;

export const ButtonAmount = styled.View`
    padding: 10px 20px;
    flex-direction: row;
    background: ${darken(0.03, colors.primary)};
`;

export const ButtonText = styled.Text`
    padding: 10px 20px;
    margin-left: 10px;
    font-size: 20px;
    color: ${colors.white};
`;
