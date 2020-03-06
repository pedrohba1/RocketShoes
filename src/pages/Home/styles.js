import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import colors from '../../styles/colors';

export const ShoeList = styled(FlatList).attrs({})``;

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.dark};
`;
