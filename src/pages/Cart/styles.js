import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import colors from '../../styles/colors';

export const BackgroundContainer = styled.View`
    flex: 1;
    background: ${colors.dark};
    padding-top: 10px;
`;

export const Container = styled.View`
    flex: 1;
`;

export const ShoppingList = styled(FlatList)``;
