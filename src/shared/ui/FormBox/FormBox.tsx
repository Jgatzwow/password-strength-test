import {FC, PropsWithChildren} from 'react';
import {StyledFormBox} from './StyledFormBox';

interface FlexBoxProps {
  width?: string
  gap?: string
}

export const FormBox: FC<PropsWithChildren<FlexBoxProps>> = ({children, ...restProps}) => {
  return <StyledFormBox {...restProps}>{children}</StyledFormBox>
}