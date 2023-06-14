import React, { FC } from 'react';
import { Grid, styled } from '@mui/material';

import CardItem from './components/CardItem';
import PigWithCoinItem from './components/PigWithCoinItem';
import PigCoinItem from './components/PigCoinItem';
import CoinItem from './components/CoinItem';
import CoinBodyOne from './components/CoinBodyOne';
import CoinBodySecond from './components/CoinBodySecond';
import CoinBodyThirth from './components/CoinBodyThirth';
import CoinBodyFourth from './components/CoinBodyFourth';
import CoinRegular from './components/CoinRegular';
import CoinMedium from './components/CoinMedium';
import CoinBold from './components/CoinBold';

interface ICoinContentProps {
   [key: string]: unknown;
}

const StyledCoinContent = styled(Grid)(() => ({
   width: '300px',
   height: '176px',
   position: 'relative',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center'
}));

const CoinContent: FC<ICoinContentProps> = () => {
   return (
      <StyledCoinContent>
         <CardItem />
         <PigWithCoinItem />
         <PigCoinItem />
         <CoinItem />
         <CoinBodyOne />
         <CoinBodySecond />
         <CoinBodyThirth />
         <CoinBodyFourth />
         <CoinRegular />
         <CoinMedium />
         <CoinBold />
      </StyledCoinContent>
   );
};

export default CoinContent;
