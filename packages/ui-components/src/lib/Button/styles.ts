import { css, styled } from "@mui/material";
import MButton from '@mui/material/Button';
// import {css} from '@emotion/react';
// import styled from '@emotion/styled';

export const SB = styled(MButton)`${({theme}) => {
  return css`
  background: ${theme.palette.secondary.main};
`}}`;