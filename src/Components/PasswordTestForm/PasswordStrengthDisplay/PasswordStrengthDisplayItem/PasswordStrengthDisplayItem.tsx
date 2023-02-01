import React, {FC, PropsWithChildren} from 'react';
import {StyledPasswordStrengthDisplayItem} from './StyledPasswordStrengthDisplayItem';

export const PasswordStrengthDisplayItem: FC<PropsWithChildren> = ({children}) => {
  return <StyledPasswordStrengthDisplayItem>{children}</StyledPasswordStrengthDisplayItem>
};
