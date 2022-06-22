import React, { FC, ReactNode } from 'react';
import * as s from './styles';

export interface IProps {
  children: ReactNode
}
export const MainAppWrapper: FC<IProps> = ({ children }) => (
  <s.MainAppWrapper>
    {children}
  </s.MainAppWrapper>
);
