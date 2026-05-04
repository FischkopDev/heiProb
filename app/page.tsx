'use client';

import React, { useState } from 'react';
import DashboardLayout from './components/DashboardLayout';
import SandboxProjectView from './components/SandboxProjectView';
import ProblemView from './table_views/ProblemView';
import ExpertenNetzwerkView from './table_views/ExpertenNetzwerkView';

export default function EnhancedDashboardMockup() {
  const [activeView, setActiveView] = useState<'sandbox' | 'database' | 'experten'>('sandbox');

  //Auswahl der zu zeigenden Ansicht basierend auf dem aktiven View-Status
  const renderContent = () => {
    switch (activeView) {
      case 'sandbox':
        return <SandboxProjectView />;
      case 'database':
        return <ProblemView />;
      case 'experten':
        return <ExpertenNetzwerkView />;
      default:
        return <SandboxProjectView />;
    }
  };

  return (
    <DashboardLayout activeView={activeView} onViewChange={setActiveView}>
      {renderContent()}
    </DashboardLayout>
  );
}
