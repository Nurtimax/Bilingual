import { FC } from 'react';
import { Box, styled } from '@mui/material';

interface DescriptionHeadlineProps {}

const DescriptionHeadline: FC<DescriptionHeadlineProps> = ({}) => {
  return (
    <StyledDescriptionHeadline>
      For nearly 30 years, learners have turned to Rosetta Stone to build the
      fluency and confidence they need to speak new languages.
    </StyledDescriptionHeadline>
  );
};

export default DescriptionHeadline;

const StyledDescriptionHeadline = styled(Box)(() => ({
  width: '70%',
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '20px',
  lineHeight: '30px',

  color: '#23212A',
}));
