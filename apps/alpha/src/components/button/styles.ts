import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Button } from "ui-components";

export const WrappedBtn = styled(Button)`${({theme}) => css`
  color: ${theme.palette.success[100]};
  background: ${theme.palette.primary[100]};
  `}`