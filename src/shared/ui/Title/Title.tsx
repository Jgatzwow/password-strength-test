import React, {FC, PropsWithChildren} from 'react';
import {StyledTitle} from './StyledTitle';

interface TitleProps {
  fontSize?: string
  lineHeight?: string
  color?: string
  marginBottom: string
}

export const Title: FC<PropsWithChildren<TitleProps>> = ({children, ...restProps}) => {
  return <StyledTitle {...restProps}>{children}</StyledTitle>;
};
