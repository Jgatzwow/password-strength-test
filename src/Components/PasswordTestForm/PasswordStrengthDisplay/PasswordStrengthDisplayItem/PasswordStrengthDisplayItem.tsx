import React, {FC, PropsWithChildren} from 'react';
import {StyledPasswordStrengthDisplayItem} from './StyledPasswordStrengthDisplayItem';
import {StrengthType} from '../../PasswordTestForm';

interface PasswordStrengthDisplayItemProps {
  passwordStr: StrengthType
}

export const PasswordStrengthDisplayItem: FC<PropsWithChildren<PasswordStrengthDisplayItemProps>> = ({
                                                                                                       children,
                                                                                                       passwordStr
                                                                                                     }) => {
  return <StyledPasswordStrengthDisplayItem passwordStr={passwordStr}>{children}</StyledPasswordStrengthDisplayItem>
};
