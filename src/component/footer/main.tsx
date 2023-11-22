import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, styled, IconButton } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';

import { BilingualFullIcon } from '../../assets/icons/BilingualFullIcon';
import { SOCIAL_ICONS } from '../../utils/constants/icons';
import accordions from '../../utils/constants/accordions';

const StyledMainFooter = styled(Box)`
   padding: 2rem 0 0;
`;

const MainFooter = () => {
   return (
      <StyledMainFooter>
         <Typography variant="h5" color="inherit">
            FAQ:
         </Typography>
         <Box pt={5} pb={10}>
            {accordions.map((accordion) => (
               <Accordion key={accordion.id}>
                  <AccordionSummary expandIcon={<AddIcon sx={{ color: 'white' }} />}>
                     {accordion.summary}{' '}
                  </AccordionSummary>
                  <AccordionDetails sx={{ color: '#fff' }}>{accordion.details}</AccordionDetails>
               </Accordion>
            ))}
         </Box>
         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <BilingualFullIcon style={{ height: '44px', width: '220px' }} />
            <Box py={1}>
               {[SOCIAL_ICONS.youtube, SOCIAL_ICONS.facebook, SOCIAL_ICONS.instagram].map((icon, i) => (
                  <IconButton color="inherit" size="large" key={i}>
                     {icon}
                  </IconButton>
               ))}
            </Box>
         </Box>
         <Typography variant="subtitle1" textAlign="center" py={1} color="#98A2B3" fontWeight={400}>
            © Copyright PeakSoft. All Rights Reserved
         </Typography>
      </StyledMainFooter>
   );
};

export default MainFooter;
