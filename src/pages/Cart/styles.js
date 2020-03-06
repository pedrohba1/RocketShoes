import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import colors from '../../styles/colors';

export const Container = styled.View`
    flex: 1;
    background: ${colors.dark};
`;

export const ShoppingList = styled(FlatList)``;
