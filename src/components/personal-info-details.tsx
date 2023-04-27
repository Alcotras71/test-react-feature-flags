import React, { FC } from 'react';

import { useUser } from '../helpers/mock/mock-data';
import { DetailsItem } from './details-item';

export const PersonalInfoDetails: FC = (): JSX.Element => {
  const { name, age, country } = useUser();

  const personalInfo: Array<[string, string | number]> = [['Name', name], ['Age', age], ['Country', country]];

  return (
    <>
      <h3>Your information</h3>
      <ul>
        {personalInfo.map(([listName, value]) => (
          <DetailsItem key={`${listName}_${value}`} name={listName} value={value} />
        ))}
      </ul>
    </>
  );
};
