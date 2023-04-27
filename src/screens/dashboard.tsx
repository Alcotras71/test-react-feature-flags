import React from 'react';

import { PageLayout } from '../components/page-layout';
import { PersonalInfoDetails } from '../components/personal-info-details';
import { MedicationDetails } from '../components/medication-details';

export const DashboardScreen = () => (
  <PageLayout className="dashboard">
    <h1>Dashboard</h1>
    <div className="dashboard-details">
      <PersonalInfoDetails />
    </div>
    <div className="dashboard-details">
      <MedicationDetails />
    </div>
  </PageLayout>
);

export default DashboardScreen;
