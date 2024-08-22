import { WrappedBtn } from "./styles"

const AlphaButton = ({children}:{
  children: React.ReactNode;
}) => {
  return <WrappedBtn>{children}</WrappedBtn>
}

export default AlphaButton;