import { css, styled } from "@mui/material";
import MButton from '@mui/material/Button'
// import {} from '@emotion/styled';

export const SB = styled(MButton)`${({theme}) => {
  console.log('SB =  mui', theme)
  return css`
  background: ${theme.palette.secondary.main}
`}}`;