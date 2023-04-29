import { Grid, GridProps, styled } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, ReactNode, useMemo } from 'react';

interface LinkItemProps extends GridProps {
  children: ReactNode;
  to: string;
}

const LinkItem: FC<LinkItemProps> = ({ children, to, ...props }) => {
  const { pathname } = useRouter();

  const isActive = useMemo(() => {
    return pathname.split('').includes(to);
  }, [to, pathname]);

  return (
    <Grid item {...props}>
      <StyledLink href={to} className={isActive ? 'active' : ''}>
        {children}
      </StyledLink>
    </Grid>
  );
};

export default LinkItem;

const StyledLink = styled(Link)(({ theme }) => ({
  fontFamily: 'DINNextRoundedLTPro-Bold',
  fontSize: '15px',
  fontWeight: '900',

  textTransform: 'uppercase',

  color: '#4C4859',

  '&.active': {
    color: theme.palette.primary.main,
  },
}));
