import { IconButtonProps } from '@mui/material/IconButton'

import { IB} from './styles';


const IconButton:React.FC<IconButtonProps> = ({children, ...props}: IconButtonProps)  => {
  return <IB {...props}>{children}</IB>
};

export default IconButton;