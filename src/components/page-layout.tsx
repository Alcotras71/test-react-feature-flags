import React, { FC, PropsWithChildren } from 'react';

import { PromotionalBanner } from './promotional-banner';

type Props = {
  className: string;
};

export const PageLayout: FC<PropsWithChildren<Props>> = ({ children, className }): JSX.Element => (
  <div className={`page-layout ${className}`}>
    <PromotionalBanner />
    {children}
  </div>
);
