import styled from 'styled-components';

import NumberFormat from 'react-number-format';

export const FormattedNumber = styled(NumberFormat).attrs({
    thousandSeparator: true,
    prefix: 'R$',
})``;
