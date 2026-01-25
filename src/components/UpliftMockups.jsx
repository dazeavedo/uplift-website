/**
 * UPLIFT PRODUCT MOCKUPS
 *
 * Pixel-accurate React mockup components based on real product screenshots.
 * Use these for marketing materials, presentations, and documentation.
 *
 * Components included:
 *
 * FRAMES:
 * - MobileFrame: iPhone-style phone frame
 * - BrowserFrame: Desktop browser chrome frame
 *
 * NAVIGATION:
 * - WorkerBottomNav: 5-tab nav (Home, Schedule, Tasks, Career, More)
 * - ManagerBottomNav: 5-tab nav (Dashboard, Schedule, Tasks, Team, More)
 *
 * WORKER APP SCREENS:
 * - WorkerHomeScreen: Dashboard with Momentum Score, shifts, alerts
 * - WorkerScheduleScreen: Weekly schedule view with upcoming shifts
 * - WorkerCareerScreen: Career path progression view
 * - WorkerRewardsScreen: Points, perks, and rewards
 * - WorkerSkillsScreen: Skills and certifications tracker
 * - WorkerMarketplaceScreen: Open shifts marketplace
 *
 * MANAGER APP SCREENS:
 * - ManagerDashboardScreen: Team overview with stats
 * - ManagerApprovalsScreen: Time-off and shift swap requests
 *
 * PORTAL SCREENS:
 * - PortalDashboardScreen: HQ command center with live activity
 * - PortalSkillsScreen: Skills coverage matrix
 * - PortalScheduleScreen: AI-powered schedule builder
 *
 * Usage:
 * import { WorkerHomeScreen, PortalDashboardScreen } from './UpliftMockups';
 *
 * <WorkerHomeScreen />
 * <PortalDashboardScreen />
 */

import React from 'react';
import {
  Home, Calendar, Target, Award, User, MessageSquare, FileCheck,
  TrendingUp, Clock, MapPin, Check, ChevronRight, ChevronLeft, Star,
  Users, BarChart3, Brain, AlertCircle, Bell, Search, Filter,
  CheckCircle2, Zap, Settings, Plus, Eye, MoreHorizontal,
  Shield, Building2, Briefcase, Link2, Play, Activity, FileText
} from 'lucide-react';

// ============================================================================
// DESIGN TOKENS (from real product)
// ============================================================================
export const COLORS = {
  primary: '#F97316',      // Uplift Orange
  primaryDark: '#EA580C',
  dark: '#1E293B',         // Dark sidebar/cards
  darkest: '#0F172A',
  background: '#F8FAFC',   // Light background
  white: '#FFFFFF',
  border: '#E2E8F0',
  textPrimary: '#1E293B',
  textSecondary: '#64748B',
  textMuted: '#94A3B8',
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
  purple: '#8B5CF6',
};

// ============================================================================
// FRAME COMPONENTS
// ============================================================================

/**
 * Mobile phone frame (iPhone-style)
 */
export const MobileFrame = ({ children, className = "" }) => (
  <div className={`relative ${className}`}>
    <div style={{
      width: '280px',
      background: COLORS.dark,
      borderRadius: '40px',
      padding: '8px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
    }}>
      <div style={{
        width: '100%',
        height: '580px',
        background: COLORS.background,
        borderRadius: '32px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        {/* Dynamic Island */}
        <div style={{
          position: 'absolute',
          top: '8px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90px',
          height: '24px',
          background: '#000',
          borderRadius: '12px',
          zIndex: 20
        }} />
        {children}
      </div>
    </div>
  </div>
);

/**
 * Desktop browser frame (Chrome-style)
 */
export const BrowserFrame = ({ children, className = "", url = "portal.uplifthq.co.uk" }) => (
  <div style={{
    background: COLORS.dark,
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
  }} className={className}>
    {/* Browser Chrome */}
    <div style={{
      background: '#0F172A',
      padding: '8px 12px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
      {/* Traffic lights */}
      <div style={{ display: 'flex', gap: '6px' }}>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#EF4444' }} />
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F59E0B' }} />
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10B981' }} />
      </div>
      {/* URL Bar */}
      <div style={{
        flex: 1,
        background: '#1E293B',
        borderRadius: '6px',
        padding: '6px 12px',
        fontSize: '12px',
        color: '#94A3B8',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        border: '1px solid #334155'
      }}>
        <Shield size={12} color="#10B981" />
        {url}
      </div>
    </div>
    {children}
  </div>
);

// ============================================================================
// NAVIGATION COMPONENTS
// ============================================================================

/**
 * Worker App Bottom Navigation (5 tabs)
 */
export const WorkerBottomNav = ({ active = 'Home' }) => (
  <div style={{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: COLORS.white,
    borderTop: `1px solid ${COLORS.border}`,
    padding: '8px 8px 20px',
    display: 'flex',
    justifyContent: 'space-around'
  }}>
    {[
      { icon: Home, label: 'Home' },
      { icon: Calendar, label: 'Schedule' },
      { icon: FileCheck, label: 'Tasks' },
      { icon: Target, label: 'Career' },
      { icon: MoreHorizontal, label: 'More' }
    ].map((item, i) => (
      <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <item.icon size={22} color={item.label === active ? COLORS.primary : COLORS.textMuted} />
        <span style={{
          color: item.label === active ? COLORS.primary : COLORS.textMuted,
          fontSize: '10px',
          marginTop: '4px',
          fontWeight: 500
        }}>{item.label}</span>
      </div>
    ))}
  </div>
);

/**
 * Manager App Bottom Navigation (5 tabs)
 */
export const ManagerBottomNav = ({ active = 'Dashboard' }) => (
  <div style={{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: COLORS.white,
    borderTop: `1px solid ${COLORS.border}`,
    padding: '8px 8px 20px',
    display: 'flex',
    justifyContent: 'space-around'
  }}>
    {[
      { icon: BarChart3, label: 'Dashboard' },
      { icon: Calendar, label: 'Schedule' },
      { icon: FileCheck, label: 'Tasks' },
      { icon: Users, label: 'Team' },
      { icon: MoreHorizontal, label: 'More' }
    ].map((item, i) => (
      <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <item.icon size={22} color={item.label === active ? COLORS.primary : COLORS.textMuted} />
        <span style={{
          color: item.label === active ? COLORS.primary : COLORS.textMuted,
          fontSize: '10px',
          marginTop: '4px',
          fontWeight: 500
        }}>{item.label}</span>
      </div>
    ))}
  </div>
);

// ============================================================================
// WORKER APP SCREENS
// ============================================================================

/**
 * Worker Home Screen
 * Shows: Greeting, Momentum Score, LIVE status, certificate alerts, today's shift
 */
export const WorkerHomeScreen = () => (
  <MobileFrame>
    <div style={{ height: '100%', background: COLORS.background, padding: '44px 16px 80px', overflowY: 'auto' }}>
      {/* Header with avatar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #FDA4AF, #FB923C)', overflow: 'hidden' }} />
          <div>
            <p style={{ color: COLORS.textSecondary, fontSize: '13px', margin: 0 }}>Good evening,</p>
            <p style={{ color: COLORS.textPrimary, fontSize: '18px', fontWeight: 600, margin: '2px 0 0' }}>Sarah</p>
            <p style={{ color: COLORS.primary, fontSize: '12px', margin: '2px 0 0' }}>Grand Metro Hotels</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <MessageSquare size={18} color={COLORS.textSecondary} />
            <div style={{ position: 'absolute', top: '6px', right: '6px', width: '16px', height: '16px', background: COLORS.primary, borderRadius: '50%', fontSize: '10px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>3</div>
          </div>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Bell size={18} color={COLORS.textSecondary} />
          </div>
        </div>
      </div>

      {/* Momentum Score Card */}
      <div style={{ background: COLORS.dark, borderRadius: '16px', padding: '16px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: COLORS.primary, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'white', fontSize: '22px', fontWeight: 700 }}>87</span>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ color: 'white', fontSize: '14px', fontWeight: 500, margin: 0 }}>Momentum Score</p>
            <p style={{ color: COLORS.textMuted, fontSize: '12px', margin: '4px 0 8px' }}>Level 12 • 2,450 XP</p>
            <div style={{ height: '6px', background: '#334155', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ width: '70%', height: '100%', background: `linear-gradient(90deg, ${COLORS.primary}, #FB923C)` }} />
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ color: COLORS.textMuted, fontSize: '11px', margin: 0 }}>550 XP to</p>
            <p style={{ color: COLORS.textMuted, fontSize: '11px', margin: 0 }}>next</p>
          </div>
        </div>
      </div>

      {/* LIVE Status Bar */}
      <div style={{ background: COLORS.dark, borderRadius: '12px', padding: '12px 16px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '8px', height: '8px', background: COLORS.success, borderRadius: '50%' }} />
          <span style={{ color: COLORS.success, fontSize: '12px', fontWeight: 600 }}>LIVE</span>
        </div>
        <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: COLORS.textMuted }}>
          <span>12 on shift</span>
          <span>3 On Break</span>
          <span>5 open</span>
        </div>
      </div>

      {/* Certificate Alert */}
      <div style={{ background: '#FFF7ED', borderLeft: `4px solid ${COLORS.primary}`, borderRadius: '0 12px 12px 0', padding: '12px 16px', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#FFEDD5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Shield size={18} color={COLORS.primary} />
          </div>
          <div>
            <p style={{ color: COLORS.textPrimary, fontSize: '13px', fontWeight: 500, margin: 0 }}>Food Safety Certificate</p>
            <p style={{ color: COLORS.primary, fontSize: '12px', margin: 0 }}>Expires in 5 days</p>
          </div>
        </div>
        <ChevronRight size={18} color={COLORS.textMuted} />
      </div>

      {/* Today's Shift */}
      <div style={{ marginBottom: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <p style={{ color: COLORS.textPrimary, fontSize: '16px', fontWeight: 600, margin: 0 }}>Today's Shift</p>
          <span style={{ color: COLORS.primary, fontSize: '13px' }}>See All</span>
        </div>
        <div style={{ background: 'white', borderRadius: '16px', padding: '16px', border: `1px solid ${COLORS.border}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                <div style={{ width: '8px', height: '8px', background: COLORS.success, borderRadius: '50%' }} />
                <span style={{ color: COLORS.textSecondary, fontSize: '12px' }}>Scheduled</span>
              </div>
              <p style={{ color: COLORS.textPrimary, fontSize: '16px', fontWeight: 600, margin: 0 }}>Senior Server</p>
            </div>
            <span style={{ background: '#F1F5F9', color: COLORS.textSecondary, fontSize: '12px', padding: '4px 10px', borderRadius: '8px' }}>8h</span>
          </div>
          <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: COLORS.textSecondary, marginBottom: '12px' }}>
            <span>9:00am - 5:00pm</span>
          </div>
          <div style={{ display: 'flex', gap: '8px', fontSize: '13px', color: COLORS.textSecondary }}>
            <MapPin size={14} />
            <span>The Grand Hotel - Main Restaurant</span>
          </div>
          <button style={{ width: '100%', marginTop: '16px', padding: '14px', background: COLORS.primary, color: 'white', border: 'none', borderRadius: '12px', fontSize: '14px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer' }}>
            <Clock size={16} /> Clock In
          </button>
        </div>
      </div>

      <WorkerBottomNav active="Home" />
    </div>
  </MobileFrame>
);

/**
 * Worker Schedule Screen
 * Shows: Week view, stats, upcoming shifts with timeline
 */
export const WorkerScheduleScreen = () => (
  <MobileFrame>
    <div style={{ height: '100%', background: COLORS.background, padding: '44px 16px 80px', overflowY: 'auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div>
          <p style={{ color: COLORS.textPrimary, fontSize: '22px', fontWeight: 700, margin: 0 }}>My Schedule</p>
          <p style={{ color: COLORS.textSecondary, fontSize: '13px', margin: '4px 0 0' }}>26 Jan - 1 Feb</p>
        </div>
        <div style={{ display: 'flex', background: COLORS.border, borderRadius: '10px', overflow: 'hidden' }}>
          <span style={{ padding: '8px 14px', background: COLORS.primary, color: 'white', fontSize: '13px', fontWeight: 500 }}>Week</span>
          <span style={{ padding: '8px 14px', color: COLORS.textSecondary, fontSize: '13px' }}>Month</span>
        </div>
      </div>

      {/* Stats Row */}
      <div style={{ display: 'flex', gap: '12px', background: 'white', borderRadius: '12px', padding: '14px', marginBottom: '16px', border: `1px solid ${COLORS.border}` }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#FFF7ED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Clock size={18} color={COLORS.primary} />
          </div>
          <div>
            <p style={{ color: COLORS.textPrimary, fontSize: '18px', fontWeight: 700, margin: 0 }}>33h</p>
            <p style={{ color: COLORS.textSecondary, fontSize: '11px', margin: 0 }}>This week</p>
          </div>
        </div>
        <div style={{ width: '1px', background: COLORS.border }} />
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#DCFCE7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Calendar size={18} color={COLORS.success} />
          </div>
          <div>
            <p style={{ color: COLORS.textPrimary, fontSize: '18px', fontWeight: 700, margin: 0 }}>5</p>
            <p style={{ color: COLORS.textSecondary, fontSize: '11px', margin: 0 }}>Upcoming</p>
          </div>
        </div>
        <div style={{ width: '1px', background: COLORS.border }} />
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#DBEAFE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Check size={18} color={COLORS.info} />
          </div>
          <div>
            <p style={{ color: COLORS.textPrimary, fontSize: '18px', fontWeight: 700, margin: 0 }}>5</p>
            <p style={{ color: COLORS.textSecondary, fontSize: '11px', margin: 0 }}>Confirmed</p>
          </div>
        </div>
      </div>

      {/* Week Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
        <ChevronLeft size={20} color={COLORS.textMuted} />
        <span style={{ color: COLORS.primary, fontSize: '14px', fontWeight: 500 }}>Today</span>
        <ChevronRight size={20} color={COLORS.textMuted} />
      </div>

      {/* Week Days */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        {[
          { day: 'Mon', date: 26, dot: COLORS.error },
          { day: 'Tue', date: 27, dot: COLORS.info },
          { day: 'Wed', date: 28, dot: COLORS.success },
          { day: 'Thu', date: 29, dot: COLORS.warning },
          { day: 'Fri', date: 30, dot: null }
        ].map((d, i) => (
          <div key={i} style={{ flex: 1, textAlign: 'center', padding: '10px 6px', borderRadius: '12px', background: 'white', border: `1px solid ${COLORS.border}` }}>
            <p style={{ fontSize: '11px', color: COLORS.textSecondary, margin: 0 }}>{d.day}</p>
            <p style={{ fontSize: '18px', fontWeight: 600, color: COLORS.textPrimary, margin: '4px 0' }}>{d.date}</p>
            <p style={{ fontSize: '10px', color: COLORS.textSecondary, margin: 0 }}>Jan</p>
            {d.dot && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: d.dot, margin: '6px auto 0' }} />}
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
        <button style={{ flex: 1, background: COLORS.primary, color: 'white', border: 'none', borderRadius: '12px', padding: '14px', fontSize: '14px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer' }}>
          <Clock size={16} /> Clock In
        </button>
        <button style={{ flex: 1, background: 'white', color: COLORS.primary, border: `2px solid ${COLORS.primary}`, borderRadius: '12px', padding: '14px', fontSize: '14px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer' }}>
          <Calendar size={16} /> Request Time Off
        </button>
      </div>

      {/* Upcoming Shifts */}
      <p style={{ fontWeight: 600, fontSize: '16px', color: COLORS.textPrimary, marginBottom: '12px' }}>Upcoming Shifts</p>
      <div style={{ background: 'white', borderRadius: '16px', padding: '16px', border: `1px solid ${COLORS.border}`, borderLeft: `4px solid ${COLORS.info}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
          <div>
            <span style={{ background: '#DBEAFE', color: COLORS.info, fontSize: '11px', fontWeight: 500, padding: '4px 8px', borderRadius: '6px' }}>Front of House</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
              <Check size={14} color={COLORS.success} />
              <span style={{ color: COLORS.success, fontSize: '12px', fontWeight: 500 }}>Confirmed</span>
            </div>
          </div>
        </div>
        <p style={{ color: COLORS.textPrimary, fontSize: '16px', fontWeight: 600, margin: '0 0 8px' }}>Senior Server</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '13px', color: COLORS.textSecondary }}>
          <span>25 Jan (Sun)</span>
          <span>09:00 - 17:00</span>
          <span style={{ background: '#F1F5F9', padding: '2px 8px', borderRadius: '6px' }}>8h</span>
        </div>
      </div>

      <WorkerBottomNav active="Schedule" />
    </div>
  </MobileFrame>
);

/**
 * Worker Career Path Screen
 * Shows: Current role, momentum score, progress to next role
 */
export const WorkerCareerScreen = () => (
  <MobileFrame>
    <div style={{ height: '100%', background: COLORS.background, padding: '44px 16px 80px', overflowY: 'auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '8px' }}>
        <p style={{ color: COLORS.primary, fontSize: '13px', margin: '0 0 4px' }}>← Back</p>
        <p style={{ color: COLORS.textPrimary, fontSize: '22px', fontWeight: 700, margin: 0 }}>Career Path</p>
        <p style={{ color: COLORS.textSecondary, fontSize: '13px', marginTop: '4px' }}>Your Career Path</p>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '24px', marginBottom: '16px', borderBottom: `2px solid ${COLORS.border}` }}>
        <span style={{ color: COLORS.primary, fontSize: '14px', fontWeight: 500, paddingBottom: '8px', borderBottom: `2px solid ${COLORS.primary}`, marginBottom: '-2px' }}>Career Path</span>
        <span style={{ color: COLORS.textSecondary, fontSize: '14px', paddingBottom: '8px' }}>Skills</span>
        <span style={{ color: COLORS.textSecondary, fontSize: '14px', paddingBottom: '8px' }}>Training</span>
      </div>

      {/* Current Role Card */}
      <div style={{ background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)`, borderRadius: '16px', padding: '20px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Building2 size={20} color="white" />
          </div>
          <div>
            <p style={{ color: 'white', fontSize: '18px', fontWeight: 600, margin: 0 }}>Floor Associate</p>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', margin: 0 }}>Level 2 • Since March 2025</p>
          </div>
        </div>
        <div style={{ marginBottom: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px' }}>Momentum Score</span>
            <span style={{ color: 'white', fontSize: '18px', fontWeight: 700 }}>85</span>
          </div>
          <div style={{ height: '6px', background: 'rgba(255,255,255,0.3)', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: '85%', height: '100%', background: 'white' }} />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          {[
            { value: '5,300', label: 'Total XP' },
            { value: '9', label: 'Verified' },
            { value: '1', label: 'Courses' }
          ].map((stat, i) => (
            <div key={i} style={{ flex: 1, background: 'rgba(255,255,255,0.2)', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
              <p style={{ color: 'white', fontSize: '18px', fontWeight: 700, margin: 0 }}>{stat.value}</p>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '11px', margin: 0 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Progress to Next Role */}
      <p style={{ color: COLORS.textPrimary, fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>Progress to Next Role</p>
      <div style={{ background: 'white', borderRadius: '16px', padding: '16px', border: `1px solid ${COLORS.border}`, borderLeft: `4px solid ${COLORS.primary}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <p style={{ color: COLORS.textPrimary, fontSize: '16px', fontWeight: 600, margin: 0 }}>Senior Floor Associate</p>
            <p style={{ color: COLORS.primary, fontSize: '13px', margin: '4px 0' }}>£13-15/hr</p>
            <p style={{ color: COLORS.success, fontSize: '12px', margin: 0 }}>Ready now</p>
          </div>
          <span style={{ background: '#DCFCE7', color: '#16A34A', fontSize: '13px', fontWeight: 600, padding: '4px 10px', borderRadius: '8px' }}>92%</span>
        </div>
        <div style={{ marginTop: '12px' }}>
          {['Customer Service', 'Cash Handling'].map((skill, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <Check size={14} color={COLORS.success} />
              <span style={{ color: COLORS.success, fontSize: '13px' }}>{skill}</span>
            </div>
          ))}
        </div>
      </div>

      <WorkerBottomNav active="Career" />
    </div>
  </MobileFrame>
);

/**
 * Worker Rewards Screen
 * Shows: Points balance, level progress, perks and discounts
 */
export const WorkerRewardsScreen = () => (
  <MobileFrame>
    <div style={{ height: '100%', background: COLORS.background, overflowY: 'auto' }}>
      {/* Dark Header */}
      <div style={{ background: COLORS.dark, padding: '44px 16px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
          <span style={{ color: COLORS.primary, fontSize: '13px' }}>← Back</span>
          <p style={{ color: 'white', fontSize: '18px', fontWeight: 600, margin: 0, flex: 1, textAlign: 'center' }}>Rewards</p>
          <div style={{ width: '40px' }} />
        </div>
        <p style={{ color: COLORS.primary, fontSize: '13px', textAlign: 'center', margin: 0 }}>Grand Metro Hotels Perks</p>

        {/* Level Progress */}
        <div style={{ background: '#334155', borderRadius: '12px', padding: '14px', marginTop: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Award size={16} color={COLORS.primary} />
              <span style={{ color: COLORS.primary, fontWeight: 600, fontSize: '14px' }}>Gold</span>
            </div>
            <span style={{ color: COLORS.textMuted, fontSize: '12px' }}>Level 3</span>
          </div>
          <div style={{ height: '6px', background: '#475569', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: '70%', height: '100%', background: COLORS.primary }} />
          </div>
          <p style={{ color: COLORS.textMuted, fontSize: '11px', textAlign: 'right', margin: '6px 0 0' }}>520 pts to Platinum</p>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
          <div style={{ flex: 1, background: COLORS.primary, borderRadius: '12px', padding: '14px' }}>
            <Star size={16} color="white" style={{ marginBottom: '4px' }} />
            <p style={{ color: 'white', fontSize: '22px', fontWeight: 700, margin: 0 }}>1,980</p>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '11px', margin: 0 }}>Available Points</p>
          </div>
          <div style={{ flex: 1, background: COLORS.success, borderRadius: '12px', padding: '14px' }}>
            <TrendingUp size={16} color="white" style={{ marginBottom: '4px' }} />
            <p style={{ color: 'white', fontSize: '22px', fontWeight: 700, margin: 0 }}>£848</p>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '11px', margin: 0 }}>Total Saved</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
          <button style={{ flex: 1, background: COLORS.primary, color: 'white', border: 'none', borderRadius: '10px', padding: '12px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>
            % Perks & Discounts
          </button>
          <button style={{ flex: 1, background: '#475569', color: 'white', border: 'none', borderRadius: '10px', padding: '12px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>
            Redeem Points
          </button>
        </div>
      </div>

      {/* Light Content */}
      <div style={{ padding: '16px 16px 80px' }}>
        {/* Filter Tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          {['All', 'Dining', 'Shopping', 'Entertainment'].map((tab, i) => (
            <span key={i} style={{
              padding: '8px 14px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 500,
              background: i === 0 ? COLORS.primary : 'white',
              color: i === 0 ? 'white' : COLORS.textSecondary,
              border: i === 0 ? 'none' : `1px solid ${COLORS.border}`
            }}>{tab}</span>
          ))}
        </div>

        {/* Featured Offers */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <p style={{ color: COLORS.textPrimary, fontSize: '16px', fontWeight: 600, margin: 0 }}>Featured Offers</p>
          <span style={{ color: COLORS.primary, fontSize: '13px' }}>29+ perks</span>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          {[
            { logo: 'T', name: 'Tesco', discount: '7% OFF', color: '#1D4ED8' },
            { logo: 'O', name: 'Odeon', discount: '25% OFF', color: '#BE185D' }
          ].map((offer, i) => (
            <div key={i} style={{ flex: 1, background: 'white', borderRadius: '16px', padding: '16px', border: `1px solid ${COLORS.border}` }}>
              <div style={{ position: 'relative', marginBottom: '12px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: offer.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'white', fontSize: '20px', fontWeight: 700 }}>{offer.logo}</span>
                </div>
                <span style={{ position: 'absolute', top: '-4px', right: '0', background: COLORS.success, color: 'white', fontSize: '10px', fontWeight: 600, padding: '3px 8px', borderRadius: '6px' }}>{offer.discount}</span>
              </div>
              <p style={{ color: COLORS.textPrimary, fontSize: '14px', fontWeight: 600, margin: '0 0 12px' }}>{offer.name}</p>
              <button style={{ width: '100%', background: '#FFF7ED', color: COLORS.primary, border: 'none', borderRadius: '8px', padding: '10px', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>Get Perk</button>
            </div>
          ))}
        </div>
      </div>

      <WorkerBottomNav active="Career" />
    </div>
  </MobileFrame>
);

// ============================================================================
// MANAGER APP SCREENS
// ============================================================================

/**
 * Manager Dashboard Screen
 * Shows: Team stats, quick actions, team list
 */
export const ManagerDashboardScreen = () => (
  <MobileFrame>
    <div style={{ height: '100%', background: COLORS.white, padding: '48px 16px 80px' }}>
      {/* Header */}
      <div style={{ marginBottom: '20px' }}>
        <p style={{ color: COLORS.textSecondary, fontSize: '14px', margin: 0 }}>Good morning</p>
        <p style={{ color: COLORS.textPrimary, fontSize: '22px', fontWeight: 600, margin: '4px 0 0' }}>James Wilson</p>
      </div>

      {/* Today Overview Card */}
      <div style={{ background: `linear-gradient(135deg, ${COLORS.info} 0%, #1D4ED8 100%)`, borderRadius: '20px', padding: '20px', marginBottom: '16px' }}>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', margin: 0 }}>Today's Team</p>
        <p style={{ color: 'white', fontSize: '36px', fontWeight: 700, margin: '4px 0 8px' }}>8 / 10</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <CheckCircle2 size={14} color="white" />
          <span style={{ color: 'white', fontSize: '13px' }}>2 pending requests</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
        <div style={{ background: COLORS.background, borderRadius: '16px', padding: '16px', border: `1px solid ${COLORS.border}`, textAlign: 'center' }}>
          <CheckCircle2 size={24} color={COLORS.info} style={{ marginBottom: '8px' }} />
          <p style={{ color: COLORS.textPrimary, fontSize: '14px', fontWeight: 600, margin: 0 }}>Approvals</p>
          <p style={{ color: COLORS.info, fontSize: '12px', margin: '4px 0 0' }}>2 pending</p>
        </div>
        <div style={{ background: COLORS.background, borderRadius: '16px', padding: '16px', border: `1px solid ${COLORS.border}`, textAlign: 'center' }}>
          <Calendar size={24} color={COLORS.info} style={{ marginBottom: '8px' }} />
          <p style={{ color: COLORS.textPrimary, fontSize: '14px', fontWeight: 600, margin: 0 }}>Schedule</p>
          <p style={{ color: COLORS.textSecondary, fontSize: '12px', margin: '4px 0 0' }}>View rota</p>
        </div>
      </div>

      {/* Team Today */}
      <div style={{ background: COLORS.background, borderRadius: '16px', padding: '16px', border: `1px solid ${COLORS.border}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
          <span style={{ color: COLORS.textPrimary, fontSize: '14px', fontWeight: 600 }}>Team Today</span>
          <span style={{ color: COLORS.info, fontSize: '13px' }}>View all</span>
        </div>
        {[
          { name: 'Sarah M.', role: 'Sales Associate', status: 'On shift', statusColor: COLORS.success },
          { name: 'Tom K.', role: 'Cashier', status: 'Starting 10am', statusColor: COLORS.warning },
          { name: 'Emma L.', role: 'Stock', status: 'On break', statusColor: COLORS.textSecondary }
        ].map((member, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: i > 0 ? '10px' : 0, marginTop: i > 0 ? '10px' : 0, borderTop: i > 0 ? `1px solid ${COLORS.border}` : 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#DBEAFE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <User size={16} color={COLORS.info} />
              </div>
              <div>
                <p style={{ color: COLORS.textPrimary, fontSize: '14px', fontWeight: 500, margin: 0 }}>{member.name}</p>
                <p style={{ color: COLORS.textSecondary, fontSize: '12px', margin: 0 }}>{member.role}</p>
              </div>
            </div>
            <span style={{ color: member.statusColor, fontSize: '12px', fontWeight: 500 }}>{member.status}</span>
          </div>
        ))}
      </div>

      <ManagerBottomNav active="Dashboard" />
    </div>
  </MobileFrame>
);

/**
 * Manager Approvals Screen
 * Shows: Pending time-off requests, shift swaps, with approve/deny buttons
 */
export const ManagerApprovalsScreen = () => (
  <MobileFrame>
    <div style={{ height: '100%', background: COLORS.white, padding: '48px 16px 80px' }}>
      {/* Header */}
      <div style={{ marginBottom: '20px' }}>
        <p style={{ color: COLORS.textPrimary, fontSize: '20px', fontWeight: 600, margin: 0 }}>Approvals</p>
        <p style={{ color: COLORS.textSecondary, fontSize: '13px', marginTop: '4px' }}>8 pending requests</p>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        {['All 8', 'Time Off 2', 'Swaps 2'].map((tab, i) => (
          <div key={i} style={{
            background: i === 0 ? COLORS.primary : COLORS.background,
            color: i === 0 ? 'white' : COLORS.textSecondary,
            padding: '8px 14px',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: 500,
            border: i === 0 ? 'none' : `1px solid ${COLORS.border}`
          }}>{tab}</div>
        ))}
      </div>

      {/* Approval Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {[
          { name: 'Sarah Johnson', type: 'Holiday Request', details: '15-19 Feb (5 days)', urgent: false },
          { name: 'Mike Chen', type: 'Sick Leave', details: '24 Jan (1 day)', urgent: true }
        ].map((request, i) => (
          <div key={i} style={{
            background: COLORS.background,
            borderRadius: '16px',
            padding: '16px',
            border: request.urgent ? `1px solid ${COLORS.warning}` : `1px solid ${COLORS.border}`
          }}>
            {request.urgent && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                <AlertCircle size={14} color={COLORS.warning} />
                <span style={{ color: '#D97706', fontSize: '12px', fontWeight: 500 }}>Urgent</span>
              </div>
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#DBEAFE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <User size={18} color={COLORS.info} />
              </div>
              <div>
                <p style={{ color: COLORS.textPrimary, fontSize: '15px', fontWeight: 600, margin: 0 }}>{request.name}</p>
                <p style={{ color: COLORS.info, fontSize: '12px', margin: 0 }}>{request.type}</p>
              </div>
            </div>
            <p style={{ color: COLORS.textPrimary, fontSize: '14px', margin: '0 0 12px' }}>{request.details}</p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{ flex: 1, background: COLORS.success, color: 'white', border: 'none', borderRadius: '10px', padding: '10px', fontWeight: 600, fontSize: '13px', cursor: 'pointer' }}>Approve</button>
              <button style={{ flex: 1, background: '#F1F5F9', color: COLORS.textSecondary, border: `1px solid ${COLORS.border}`, borderRadius: '10px', padding: '10px', fontWeight: 600, fontSize: '13px', cursor: 'pointer' }}>Decline</button>
            </div>
          </div>
        ))}
      </div>

      <ManagerBottomNav active="Dashboard" />
    </div>
  </MobileFrame>
);

// ============================================================================
// PORTAL SCREENS (Desktop)
// ============================================================================

/**
 * Portal Dashboard Screen
 * Shows: Welcome message, LIVE status, alerts, stats, activity feed, team health
 */
export const PortalDashboardScreen = () => (
  <BrowserFrame url="portal.uplifthq.co.uk/dashboard">
    <div style={{ display: 'flex', height: '480px' }}>
      {/* Sidebar */}
      <div style={{ width: '200px', background: COLORS.dark, padding: '16px', display: 'flex', flexDirection: 'column' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
          <div style={{ width: '32px', height: '32px', background: COLORS.primary, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'white', fontWeight: 700, fontSize: '16px' }}>U</span>
          </div>
          <span style={{ color: 'white', fontSize: '18px', fontWeight: 600 }}>Uplift</span>
        </div>

        {/* Nav Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {[
            { icon: BarChart3, label: 'Dashboard', active: true },
            { icon: Users, label: 'Employees' },
            { icon: Calendar, label: 'Schedule' },
            { icon: FileCheck, label: 'Templates' },
            { icon: Clock, label: 'Time Tracking' },
            { icon: Calendar, label: 'Time Off' },
            { icon: MapPin, label: 'Locations' },
            { icon: Award, label: 'Skills', badge: 'NEW' },
            { icon: Briefcase, label: 'Opportunities', badge: 'NEW' },
            { icon: FileText, label: 'Bulk Import' },
            { icon: Activity, label: 'Activity', badge: 'NEW' },
            { icon: BarChart3, label: 'Reports' },
            { icon: Link2, label: 'Integrations' },
            { icon: Settings, label: 'Settings' }
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 10px',
              borderRadius: '8px',
              background: item.active ? COLORS.primary : 'transparent',
              cursor: 'pointer'
            }}>
              <item.icon size={16} color={item.active ? 'white' : COLORS.textMuted} />
              <span style={{ color: item.active ? 'white' : COLORS.textMuted, fontSize: '13px', flex: 1 }}>{item.label}</span>
              {item.badge && <span style={{ background: COLORS.success, color: 'white', fontSize: '9px', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>{item.badge}</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, background: COLORS.background, padding: '16px', overflowY: 'auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div>
            <h1 style={{ fontSize: '20px', fontWeight: 600, color: COLORS.textPrimary, margin: 0 }}>Welcome back,</h1>
            <p style={{ color: COLORS.textSecondary, fontSize: '13px', marginTop: '2px' }}>Here's what's happening today</p>
          </div>
          <button style={{ background: COLORS.primary, color: 'white', border: 'none', borderRadius: '8px', padding: '10px 16px', fontWeight: 500, fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Calendar size={16} /> Create Schedule
          </button>
        </div>

        {/* LIVE Status Bar */}
        <div style={{ background: COLORS.dark, borderRadius: '10px', padding: '12px 16px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '8px', height: '8px', background: COLORS.success, borderRadius: '50%' }} />
            <span style={{ color: COLORS.success, fontSize: '12px', fontWeight: 600 }}>LIVE</span>
          </div>
          <div style={{ display: 'flex', gap: '24px', fontSize: '12px', color: COLORS.textMuted }}>
            <span><strong style={{ color: 'white' }}>28</strong> On Shift</span>
            <span><strong style={{ color: 'white' }}>8</strong> On Break</span>
            <span><strong style={{ color: 'white' }}>2</strong> Just Clocked In</span>
            <span><strong style={{ color: 'white' }}>2</strong> Running Late</span>
            <span><strong style={{ color: 'white' }}>12</strong> Open Shifts</span>
          </div>
          <span style={{ marginLeft: 'auto', color: COLORS.primary, fontSize: '12px' }}>Activity Feed →</span>
        </div>

        {/* Alert Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '16px' }}>
          {[
            { title: 'Certifications expiring soon', sub: '3 employees', color: COLORS.primary, bg: '#FFF7ED', icon: Shield },
            { title: 'Training in progress', sub: '3 employees', color: COLORS.info, bg: '#DBEAFE', icon: Play },
            { title: 'Probation reviews due', sub: '1 employee', color: COLORS.warning, bg: '#FEF3C7', icon: AlertCircle }
          ].map((alert, i) => (
            <div key={i} style={{ background: alert.bg, borderRadius: '10px', padding: '14px', borderLeft: `4px solid ${alert.color}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <alert.icon size={16} color={alert.color} />
                <div>
                  <p style={{ color: COLORS.textPrimary, fontSize: '13px', fontWeight: 500, margin: 0 }}>{alert.title}</p>
                  <p style={{ color: alert.color, fontSize: '11px', margin: 0 }}>{alert.sub} - Click to see who</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '16px' }}>
          {[
            { value: '24', label: "Today's Shifts", sub: '19 filled', color: COLORS.info, bg: '#EFF6FF', icon: Calendar },
            { value: '8', label: 'Active Employees', sub: '+3 this week', color: COLORS.success, bg: '#ECFDF5', icon: Users },
            { value: '5', label: 'Open Shifts', color: COLORS.primary, bg: '#FFF7ED', icon: AlertCircle },
            { value: '15', label: 'Pending Approvals', color: COLORS.error, bg: '#FEF2F2', icon: Clock }
          ].map((stat, i) => (
            <div key={i} style={{ background: 'white', borderRadius: '10px', padding: '16px', border: `1px solid ${stat.color}20` }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: stat.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                <stat.icon size={18} color={stat.color} />
              </div>
              <p style={{ fontSize: '28px', fontWeight: 700, color: COLORS.textPrimary, margin: 0 }}>{stat.value}</p>
              <p style={{ fontSize: '12px', color: COLORS.textSecondary, margin: '4px 0 0' }}>{stat.label}</p>
              {stat.sub && <p style={{ fontSize: '11px', color: COLORS.success, margin: '2px 0 0' }}>{stat.sub}</p>}
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '16px' }}>
          {/* Live Activity */}
          <div style={{ background: 'white', borderRadius: '10px', padding: '16px', border: `1px solid ${COLORS.border}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Activity size={16} color={COLORS.primary} />
                <span style={{ fontWeight: 600, color: COLORS.textPrimary, fontSize: '14px' }}>Live Activity</span>
              </div>
              <span style={{ color: COLORS.textMuted, fontSize: '11px' }}>Auto-updating</span>
            </div>
            {[
              { name: 'Sarah M.', action: 'clocked in at Main Restaurant', time: '2 min ago' },
              { name: 'James K.', action: 'requested shift swap with Sophie B.', time: '5 min ago' }
            ].map((activity, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 0', borderBottom: i === 0 ? `1px solid ${COLORS.border}` : 'none' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: COLORS.success, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '11px', fontWeight: 600 }}>
                  {activity.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p style={{ fontSize: '13px', color: COLORS.textPrimary, margin: 0 }}><strong>{activity.name}</strong> {activity.action}</p>
                  <p style={{ fontSize: '11px', color: COLORS.textMuted, margin: '2px 0 0' }}>{activity.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Team Health */}
          <div style={{ background: 'white', borderRadius: '10px', padding: '16px', border: `1px solid ${COLORS.border}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Target size={16} color={COLORS.warning} />
                <span style={{ fontWeight: 600, color: COLORS.textPrimary, fontSize: '14px' }}>Team Health</span>
              </div>
              <span style={{ color: COLORS.primary, fontSize: '11px' }}>View More</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <TrendingUp size={20} color={COLORS.success} />
              <div>
                <p style={{ fontSize: '28px', fontWeight: 700, color: COLORS.success, margin: 0 }}>94%</p>
                <p style={{ fontSize: '12px', color: COLORS.textSecondary, margin: 0 }}>Retention Rate</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '18px', fontWeight: 700, color: COLORS.textPrimary, margin: 0 }}>1</p>
                <p style={{ fontSize: '11px', color: COLORS.textSecondary, margin: 0 }}>New Hires</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '18px', fontWeight: 700, color: COLORS.textPrimary, margin: 0 }}>1</p>
                <p style={{ fontSize: '11px', color: COLORS.textSecondary, margin: 0 }}>Onboarding</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BrowserFrame>
);

// ============================================================================
// EXPORTS
// ============================================================================

export default {
  // Design tokens
  COLORS,

  // Frames
  MobileFrame,
  BrowserFrame,

  // Navigation
  WorkerBottomNav,
  ManagerBottomNav,

  // Worker App Screens
  WorkerHomeScreen,
  WorkerScheduleScreen,
  WorkerCareerScreen,
  WorkerRewardsScreen,

  // Manager App Screens
  ManagerDashboardScreen,
  ManagerApprovalsScreen,

  // Portal Screens
  PortalDashboardScreen,
};
