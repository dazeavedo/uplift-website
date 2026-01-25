import React from 'react';
import { useParams } from 'react-router-dom';
import {
  MobileFrame,
  BrowserFrame,
  WorkerHomeScreen,
  WorkerScheduleScreen,
  WorkerCareerScreen,
  WorkerRewardsScreen,
  ManagerDashboardScreen,
  ManagerApprovalsScreen,
  PortalDashboardScreen
} from '../components/UpliftMockups';

// Individual mockup components for capture
const mockups = {
  'worker-home': {
    name: 'Worker App - Home',
    width: 375,
    height: 812,
    component: () => (
      <MobileFrame>
        <WorkerHomeScreen />
      </MobileFrame>
    )
  },
  'worker-schedule': {
    name: 'Worker App - Schedule',
    width: 375,
    height: 812,
    component: () => (
      <MobileFrame>
        <WorkerScheduleScreen />
      </MobileFrame>
    )
  },
  'worker-career': {
    name: 'Worker App - Career Path',
    width: 375,
    height: 812,
    component: () => (
      <MobileFrame>
        <WorkerCareerScreen />
      </MobileFrame>
    )
  },
  'worker-rewards': {
    name: 'Worker App - Rewards',
    width: 375,
    height: 812,
    component: () => (
      <MobileFrame>
        <WorkerRewardsScreen />
      </MobileFrame>
    )
  },
  'manager-dashboard': {
    name: 'Manager App - Dashboard',
    width: 375,
    height: 812,
    component: () => (
      <MobileFrame>
        <ManagerDashboardScreen />
      </MobileFrame>
    )
  },
  'manager-approvals': {
    name: 'Manager App - Approvals',
    width: 375,
    height: 812,
    component: () => (
      <MobileFrame>
        <ManagerApprovalsScreen />
      </MobileFrame>
    )
  },
  'portal-dashboard': {
    name: 'Head Office Portal - Dashboard',
    width: 1280,
    height: 800,
    component: () => (
      <BrowserFrame url="app.uplifthq.com/dashboard">
        <PortalDashboardScreen />
      </BrowserFrame>
    )
  }
};

export default function MockupCapture() {
  const { mockupId } = useParams();

  // If specific mockup requested
  if (mockupId && mockups[mockupId]) {
    const MockupComponent = mockups[mockupId].component;
    return (
      <div
        id="capture-target"
        style={{
          display: 'inline-block',
          background: mockupId.includes('portal') ? '#F1F5F9' : '#E2E8F0',
          padding: '40px'
        }}
      >
        <MockupComponent />
      </div>
    );
  }

  // Show all mockups for preview
  return (
    <div style={{ padding: '40px', background: '#0F172A', minHeight: '100vh' }}>
      <h1 style={{ color: 'white', marginBottom: '40px', fontFamily: 'system-ui' }}>
        Uplift Mockups - Capture Preview
      </h1>
      <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '40px', fontFamily: 'system-ui' }}>
        Available mockups: {Object.keys(mockups).join(', ')}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
        {Object.entries(mockups).map(([id, { name, component: Component }]) => (
          <div key={id} style={{ textAlign: 'center' }}>
            <p style={{ color: 'white', marginBottom: '16px', fontFamily: 'system-ui' }}>{name}</p>
            <div style={{
              transform: id.includes('portal') ? 'scale(0.5)' : 'scale(0.8)',
              transformOrigin: 'top center'
            }}>
              <Component />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { mockups };
