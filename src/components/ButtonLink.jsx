import { styled, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ButtonLink(props) {
  return (
    <Tooltip arrow title={props.title}>
      {!props?.href?.startsWith('http') ? (
        <ReactLink id={props.id} to={props.href} preventScrollReset={false}>
          {props.label}
        </ReactLink>
      ) : (
        <StyledLink
          href={props.href}
          id={props.id}
          target='_blank'
          rel='noreferrer'>
          {props.label}
        </StyledLink>
      )}
    </Tooltip>
  );
}

const StyledLink = styled('a')(({ theme }) => ({
  // container
  display: 'block',

  // text
  color: 'rgba(16, 24, 40, 1)',
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '28px',
  textDecoration: 'none',
  textAlign: 'center',

  // background
  padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
  border: '1px solid rgba(234, 236, 240, 1)',
  borderRadius: theme.spacing(1),
  background: 'rgba(234, 236, 240, 1)',

  '&:hover': {
    background: 'rgba(208, 213, 221, 1)',
    borderColor: 'rgba(208, 213, 221, 1)',
  },

  '&:active': {
    borderColor: 'rgba(152, 162, 179, 1)',
  },
}));

const ReactLink = styled(Link)(({ theme }) => ({
  // container
  display: 'block',

  // text
  color: 'rgba(16, 24, 40, 1)',
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '28px',
  textDecoration: 'none',
  textAlign: 'center',

  // background
  padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
  border: '1px solid rgba(234, 236, 240, 1)',
  borderRadius: theme.spacing(1),
  background: 'rgba(234, 236, 240, 1)',

  '&:hover': {
    background: 'rgba(208, 213, 221, 1)',
    borderColor: 'rgba(208, 213, 221, 1)',
  },

  '&:active': {
    borderColor: 'rgba(152, 162, 179, 1)',
  },
}));
