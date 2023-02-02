import React, { FC, PropsWithChildren } from 'react'
import { StyledFlexBox } from './StyledFlexBox'

interface FlexBoxProps {
  flexDirection?: string
  alignItems?: string
  justifyContent?: string
  gap?: string
  margin?: string
  padding?: string
  width?: string
  height?: string
}

export const FlexBox: FC<PropsWithChildren<FlexBoxProps>> = ({
  children,
  ...restProps
}) => {
  return <StyledFlexBox {...restProps}>{children}</StyledFlexBox>
}
