import { ButtonProps } from '@mui/material/Button'

import {SB} from './styles';


const Button:React.FC<ButtonProps> = ({children, ...props}: ButtonProps)  => {
  return <SB {...props}>{children}</SB>
};

export default Button;