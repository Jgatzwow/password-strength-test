import React, {FC, PropsWithChildren} from 'react';
import {StyledText} from './StyledText';

interface TextProps {
  fontSize?: string
  margin?: string
  color?: string
  lineHeight?: string
}

export const Text: FC<PropsWithChildren<TextProps>> = ({children, ...restProps}) => {
  return <StyledText {...restProps} >{children}</StyledText>
};
