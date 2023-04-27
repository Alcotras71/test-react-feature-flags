import React, { memo } from 'react';

type Props = {
  name: string;
  value: string | number;
};

export const DetailsItem = memo<Props>(({ name, value }: Props): JSX.Element => (
  <li>
    {`${name}: ${value}`}
  </li>
));
