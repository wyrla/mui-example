// import { css, styled } from "@mui/material";
import MButton from '@mui/material/IconButton'
import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const IB = styled(MButton)`${({theme}) => {
  return css`
  background: ${theme.palette.primary[200]}
`}}`;