import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ArrowRight, ArrowUpRight, Check, ChevronRight, ChevronDown, Users, Calendar, 
  TrendingUp, Zap, Shield, BarChart3, Smartphone, Monitor, Play, Pause, Star, Menu, X,
  Target, Award, Clock, DollarSign, Building2, Briefcase, GraduationCap,
  Settings, Link2, Lock, Globe, MessageSquare, Bell, FileCheck, Route,
  Sparkles, Brain, CheckCircle2, MapPin, ChevronUp, Home, User, Wallet,
  AlertCircle, MoreHorizontal, Search, Filter, Plus, Eye, Edit, Trash2,
  ChevronLeft, ArrowLeft, RotateCcw
} from 'lucide-react';

// ============================================================================
// LOGO COMPONENT
// ============================================================================
const RisingULogo = ({ size = 40, variant = "full", color = "dark" }) => {
  const textColor = color === "light" ? "#FFFFFF" : "#0F172A";
  
  if (variant === "mark") {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" rx="20" fill="#FF6B35"/>
        <path d="M22 20 L22 65 Q22 80 37 80 L63 80 Q78 80 78 65 L78 42 L66 28 L66 65 Q66 70 63 70 L37 70 Q34 70 34 65 L34 20 Z" fill="white"/>
        <path d="M66 28 L78 42 L90 28 L78 14 Z" fill="white"/>
      </svg>
    );
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" rx="20" fill="#FF6B35"/>
        <path d="M22 20 L22 65 Q22 80 37 80 L63 80 Q78 80 78 65 L78 42 L66 28 L66 65 Q66 70 63 70 L37 70 Q34 70 34 65 L34 20 Z" fill="white"/>
        <path d="M66 28 L78 42 L90 28 L78 14 Z" fill="white"/>
      </svg>
      <span style={{ fontSize: '24px', fontWeight: 600, color: textColor, fontFamily: "'Outfit', sans-serif" }}>Uplift</span>
    </div>
  );
};

// ============================================================================
// MOBILE APP MOCKUPS - Based on actual app screens
// ============================================================================

// Mobile Frame Component
const MobileFrame = ({ children, className = "" }) => (
  <div className={`relative ${className}`}>
    <div style={{
      width: '280px',
      background: '#1E293B',
      borderRadius: '40px',
      padding: '8px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
    }}>
      <div style={{
        width: '100%',
        height: '580px',
        background: '#0F172A',
        borderRadius: '32px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        {/* Notch */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '120px',
          height: '28px',
          background: '#0F172A',
          borderBottomLeftRadius: '16px',
          borderBottomRightRadius: '16px',
          zIndex: 10
        }} />
        {children}
      </div>
    </div>
  </div>
);

// Mobile: Home Dashboard Screen (Light Mode)
const MobileHomeScreen = () => (
  <MobileFrame>
    <div style={{ height: '100%', background: '#FFFFFF', padding: '48px 16px 16px' }}>
      {/* Header */}
      <div style={{ marginBottom: '20px' }}>
        <p style={{ color: '#64748B', fontSize: '14px', margin: 0 }}>Good morning</p>
        <p style={{ color: '#0F172A', fontSize: '22px', fontWeight: 600, margin: '4px 0 0' }}>Sarah Mitchell</p>
      </div>
      
      {/* Earnings Card */}
      <div style={{
        background: 'linear-gradient(135deg, #FF6B35 0%, #E55A2B 100%)',
        borderRadius: '20px',
        padding: '20px',
        marginBottom: '16px'
      }}>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', margin: 0 }}>This week</p>
        <p style={{ color: 'white', fontSize: '36px', fontWeight: 700, margin: '4px 0 8px' }}>£342.50</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <TrendingUp size={14} color="white" />
          <span style={{ color: 'white', fontSize: '13px' }}>+12% from last week</span>
        </div>
      </div>
      
      {/* Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
        <div style={{ background: '#F8FAFC', borderRadius: '16px', padding: '16px', border: '1px solid #E2E8F0' }}>
          <p style={{ color: '#64748B', fontSize: '12px', margin: 0 }}>Hours</p>
          <p style={{ color: '#0F172A', fontSize: '24px', fontWeight: 600, margin: '4px 0 0' }}>28.5</p>
        </div>
        <div style={{ background: '#F8FAFC', borderRadius: '16px', padding: '16px', border: '1px solid #E2E8F0' }}>
          <p style={{ color: '#64748B', fontSize: '12px', margin: 0 }}>Shifts</p>
          <p style={{ color: '#0F172A', fontSize: '24px', fontWeight: 600, margin: '4px 0 0' }}>6</p>
        </div>
      </div>
      
      {/* Next Shift */}
      <div style={{ background: '#F8FAFC', borderRadius: '16px', padding: '16px', border: '1px solid #E2E8F0', marginBottom: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ color: '#FF6B35', fontSize: '13px', fontWeight: 500 }}>Next shift</span>
          <span style={{ color: '#64748B', fontSize: '12px' }}>Tomorrow</span>
        </div>
        <p style={{ color: '#0F172A', fontWeight: 500, margin: 0 }}>09:00 - 17:00</p>
        <p style={{ color: '#64748B', fontSize: '13px', margin: '4px 0 0' }}>Oxford Street Store</p>
      </div>
      
      {/* Career Path CTA */}
      <div style={{
        background: 'linear-gradient(90deg, #FFF7ED 0%, #FEF3C7 100%)',
        borderRadius: '16px',
        padding: '14px',
        border: '1px solid #FFEDD5'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Target size={18} color="#FF6B35" />
          <span style={{ color: '#0F172A', fontSize: '14px' }}>3 skills away from Shift Supervisor</span>
        </div>
      </div>
      
      {/* Bottom Nav - 7 tabs: Home, Feed, Schedule, Tasks, Career, Rewards, Profile */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        padding: '8px 8px 20px',
        display: 'flex',
        justifyContent: 'space-around'
      }}>
        {[
          { icon: Home, label: 'Home', active: true },
          { icon: MessageSquare, label: 'Feed', active: false },
          { icon: Calendar, label: 'Schedule', active: false },
          { icon: FileCheck, label: 'Tasks', active: false },
          { icon: Target, label: 'Career', active: false },
          { icon: Award, label: 'Rewards', active: false },
          { icon: User, label: 'Profile', active: false }
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <item.icon size={20} color={item.active ? '#FF6B35' : '#94A3B8'} />
            <span style={{ color: item.active ? '#FF6B35' : '#94A3B8', fontSize: '9px', marginTop: '2px', fontWeight: 500 }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </MobileFrame>
);

// Mobile: Career Path Screen (Light Mode)
const MobileCareerScreen = () => (
  <MobileFrame>
    <div style={{ height: '100%', background: '#FFFFFF', padding: '48px 16px 80px' }}>
      {/* Header */}
      <div style={{ marginBottom: '20px' }}>
        <p style={{ color: '#0F172A', fontSize: '20px', fontWeight: 600, margin: 0 }}>Career Path</p>
        <p style={{ color: '#64748B', fontSize: '13px', marginTop: '4px' }}>See where you can go</p>
      </div>
      
      {/* Current Role */}
      <div style={{
        background: 'linear-gradient(135deg, #FF6B35 0%, #E55A2B 100%)',
        borderRadius: '16px',
        padding: '16px',
        marginBottom: '16px'
      }}>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', margin: 0 }}>Current Role</p>
        <p style={{ color: 'white', fontSize: '18px', fontWeight: 600, margin: '4px 0' }}>Sales Associate</p>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', margin: 0 }}>Since March 2024</p>
      </div>
      
      {/* Career Ladder */}
      <div style={{ position: 'relative', paddingLeft: '24px' }}>
        {/* Vertical Line */}
        <div style={{ position: 'absolute', left: '8px', top: '8px', bottom: '8px', width: '2px', background: 'linear-gradient(180deg, #FF6B35, #8B5CF6)' }} />
        
        {[
          { role: 'Store Manager', timeline: '3-4 years', skills: 5, locked: true },
          { role: 'Shift Supervisor', timeline: '1-2 years', skills: 3, locked: false, next: true },
          { role: 'Senior Associate', timeline: '6-12 months', skills: 2, locked: false },
          { role: 'Sales Associate', timeline: 'Current', skills: 0, locked: false, current: true }
        ].map((step, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px', position: 'relative' }}>
            <div style={{
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              background: step.current ? '#FF6B35' : step.next ? '#8B5CF6' : step.locked ? '#CBD5E1' : '#10B981',
              border: '3px solid #FFFFFF',
              position: 'absolute',
              left: '-24px',
              boxShadow: '0 0 0 2px #E2E8F0'
            }} />
            <div style={{
              flex: 1,
              background: step.current ? '#FFF7ED' : '#F8FAFC',
              borderRadius: '12px',
              padding: '12px',
              border: `1px solid ${step.current ? '#FFEDD5' : '#E2E8F0'}`,
              opacity: step.locked ? 0.6 : 1
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p style={{ color: '#0F172A', fontWeight: 500, fontSize: '14px', margin: 0 }}>{step.role}</p>
                {step.current && <span style={{ background: '#FF6B35', color: 'white', fontSize: '10px', padding: '2px 8px', borderRadius: '10px' }}>You</span>}
                {step.next && <span style={{ background: '#8B5CF6', color: 'white', fontSize: '10px', padding: '2px 8px', borderRadius: '10px' }}>Next</span>}
              </div>
              <p style={{ color: '#64748B', fontSize: '12px', margin: '4px 0 0' }}>{step.timeline}</p>
              {step.skills > 0 && (
                <p style={{ color: '#FF6B35', fontSize: '12px', margin: '6px 0 0' }}>{step.skills} skills needed</p>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom Nav - 7 tabs */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        padding: '8px 8px 20px',
        display: 'flex',
        justifyContent: 'space-around'
      }}>
        {[
          { icon: Home, label: 'Home', active: false },
          { icon: MessageSquare, label: 'Feed', active: false },
          { icon: Calendar, label: 'Schedule', active: false },
          { icon: FileCheck, label: 'Tasks', active: false },
          { icon: Target, label: 'Career', active: true },
          { icon: Award, label: 'Rewards', active: false },
          { icon: User, label: 'Profile', active: false }
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <item.icon size={20} color={item.active ? '#FF6B35' : '#94A3B8'} />
            <span style={{ color: item.active ? '#FF6B35' : '#94A3B8', fontSize: '9px', marginTop: '2px', fontWeight: 500 }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </MobileFrame>
);

// Mobile: Shift Marketplace Screen (Light Mode)
const MobileMarketplaceScreen = () => (
  <MobileFrame>
    <div style={{ height: '100%', background: '#FFFFFF', padding: '48px 16px 80px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div>
          <p style={{ color: '#0F172A', fontSize: '20px', fontWeight: 600, margin: 0 }}>Open Shifts</p>
          <p style={{ color: '#64748B', fontSize: '13px', marginTop: '4px' }}>Pick up extra hours</p>
        </div>
        <div style={{ background: '#F8FAFC', borderRadius: '10px', padding: '8px 12px', border: '1px solid #E2E8F0' }}>
          <Filter size={18} color="#64748B" />
        </div>
      </div>
      
      {/* Filter Pills */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', overflowX: 'auto' }}>
        {['All', 'Today', 'This Week', 'My Skills'].map((filter, i) => (
          <div key={i} style={{
            background: i === 0 ? '#FF6B35' : '#F8FAFC',
            color: i === 0 ? 'white' : '#64748B',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            border: i === 0 ? 'none' : '1px solid #E2E8F0'
          }}>{filter}</div>
        ))}
      </div>
      
      {/* Shift Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {[
          { date: 'Tomorrow', time: '09:00 - 17:00', location: 'Oxford Street', role: 'Floor Associate', pay: 85, match: 95, urgent: false },
          { date: 'Sat 11 Jan', time: '14:00 - 22:00', location: 'Regent Street', role: 'Cashier', pay: 96, match: 88, urgent: true },
          { date: 'Sun 12 Jan', time: '10:00 - 18:00', location: 'Oxford Street', role: 'Stock Room', pay: 80, match: 92, urgent: false }
        ].map((shift, i) => (
          <div key={i} style={{
            background: '#FFFFFF',
            borderRadius: '16px',
            padding: '16px',
            border: shift.urgent ? '2px solid #F59E0B' : '1px solid #E2E8F0',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <p style={{ color: '#0F172A', fontWeight: 500, fontSize: '15px', margin: 0 }}>{shift.role}</p>
                  {shift.urgent && <span style={{ background: '#FEF3C7', color: '#D97706', fontSize: '10px', padding: '2px 6px', borderRadius: '8px', fontWeight: 600 }}>Urgent</span>}
                </div>
                <p style={{ color: '#64748B', fontSize: '13px', margin: '4px 0 0' }}>{shift.date} • {shift.time}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ color: '#10B981', fontWeight: 700, fontSize: '18px', margin: 0 }}>£{shift.pay}</p>
                <p style={{ color: '#64748B', fontSize: '11px', margin: '2px 0 0' }}>{shift.match}% match</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
              <MapPin size={14} color="#94A3B8" />
              <span style={{ color: '#64748B', fontSize: '13px' }}>{shift.location}</span>
            </div>
            <button style={{
              width: '100%',
              background: '#FF6B35',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              padding: '12px',
              fontWeight: 600,
              fontSize: '14px',
              cursor: 'pointer'
            }}>Claim Shift</button>
          </div>
        ))}
      </div>
      
      {/* Bottom Nav - 7 tabs */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        padding: '8px 8px 20px',
        display: 'flex',
        justifyContent: 'space-around'
      }}>
        {[
          { icon: Home, label: 'Home', active: false },
          { icon: MessageSquare, label: 'Feed', active: false },
          { icon: Calendar, label: 'Schedule', active: true },
          { icon: FileCheck, label: 'Tasks', active: false },
          { icon: Target, label: 'Career', active: false },
          { icon: Award, label: 'Rewards', active: false },
          { icon: User, label: 'Profile', active: false }
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <item.icon size={20} color={item.active ? '#FF6B35' : '#94A3B8'} />
            <span style={{ color: item.active ? '#FF6B35' : '#94A3B8', fontSize: '9px', marginTop: '2px', fontWeight: 500 }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </MobileFrame>
);

// Mobile: Skills Screen (Light Mode)
const MobileSkillsScreen = () => (
  <MobileFrame>
    <div style={{ height: '100%', background: '#FFFFFF', padding: '48px 16px 80px', overflowY: 'auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '20px' }}>
        <p style={{ color: '#0F172A', fontSize: '20px', fontWeight: 600, margin: 0 }}>My Skills</p>
        <p style={{ color: '#64748B', fontSize: '13px', marginTop: '4px' }}>Track your certifications</p>
      </div>
      
      {/* Progress Ring */}
      <div style={{
        background: '#F8FAFC',
        borderRadius: '16px',
        padding: '20px',
        marginBottom: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        border: '1px solid #E2E8F0'
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: `conic-gradient(#FF6B35 0deg ${7/12*360}deg, #E2E8F0 ${7/12*360}deg 360deg)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#0F172A', fontWeight: 700, fontSize: '16px' }}>7/12</span>
          </div>
        </div>
        <div>
          <p style={{ color: '#0F172A', fontWeight: 600, margin: 0 }}>Skills Verified</p>
          <p style={{ color: '#64748B', fontSize: '13px', margin: '4px 0 0' }}>5 more to unlock Shift Supervisor</p>
        </div>
      </div>
      
      {/* Skills List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {[
          { name: 'Cash Handling', category: 'Core', verified: true, expiry: null },
          { name: 'Customer Service', category: 'Core', verified: true, expiry: null },
          { name: 'First Aid', category: 'Safety', verified: true, expiry: 'Dec 2026' },
          { name: 'Food Safety L2', category: 'Compliance', verified: true, expiry: 'Mar 2026' },
          { name: 'Team Leadership', category: 'Management', verified: false, expiry: null },
          { name: 'Conflict Resolution', category: 'Management', verified: false, expiry: null },
          { name: 'Stock Management', category: 'Operations', verified: true, expiry: null }
        ].map((skill, i) => (
          <div key={i} style={{
            background: '#FFFFFF',
            borderRadius: '12px',
            padding: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '1px solid #E2E8F0'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: skill.verified ? '#DCFCE7' : '#FEF3C7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {skill.verified ? <CheckCircle2 size={18} color="#16A34A" /> : <Clock size={18} color="#D97706" />}
              </div>
              <div>
                <p style={{ color: '#0F172A', fontWeight: 500, fontSize: '14px', margin: 0 }}>{skill.name}</p>
                <p style={{ color: '#94A3B8', fontSize: '12px', margin: '2px 0 0' }}>{skill.category}</p>
              </div>
            </div>
            {skill.verified ? (
              <div style={{ textAlign: 'right' }}>
                <span style={{ background: '#DCFCE7', color: '#16A34A', fontSize: '10px', padding: '3px 8px', borderRadius: '8px', fontWeight: 600 }}>Verified</span>
                {skill.expiry && <p style={{ color: '#94A3B8', fontSize: '11px', margin: '4px 0 0' }}>Exp: {skill.expiry}</p>}
              </div>
            ) : (
              <span style={{ background: '#FEF3C7', color: '#D97706', fontSize: '10px', padding: '3px 8px', borderRadius: '8px', fontWeight: 600 }}>Pending</span>
            )}
          </div>
        ))}
      </div>
      
      {/* Bottom Nav - 7 tabs */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        padding: '8px 8px 20px',
        display: 'flex',
        justifyContent: 'space-around'
      }}>
        {[
          { icon: Home, label: 'Home', active: false },
          { icon: MessageSquare, label: 'Feed', active: false },
          { icon: Calendar, label: 'Schedule', active: false },
          { icon: FileCheck, label: 'Tasks', active: false },
          { icon: Target, label: 'Career', active: false },
          { icon: Award, label: 'Rewards', active: true },
          { icon: User, label: 'Profile', active: false }
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <item.icon size={20} color={item.active ? '#FF6B35' : '#94A3B8'} />
            <span style={{ color: item.active ? '#FF6B35' : '#94A3B8', fontSize: '9px', marginTop: '2px', fontWeight: 500 }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </MobileFrame>
);

// Mobile: Feed Screen (Light Mode - No Emojis, Better Spacing)
const MobileFeedScreen = () => (
  <MobileFrame>
    <div style={{ height: '100%', background: '#FFFFFF', padding: '48px 16px 80px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <p style={{ color: '#0F172A', fontSize: '20px', fontWeight: 600, margin: 0 }}>Feed</p>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Bell size={20} color="#64748B" />
          <Plus size={20} color="#FF6B35" />
        </div>
      </div>
      
      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        {['All', 'Announcements', 'Recognition'].map((tab, i) => (
          <span key={i} style={{
            padding: '8px 14px',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: 500,
            background: i === 0 ? '#0F172A' : '#F8FAFC',
            color: i === 0 ? 'white' : '#64748B',
            border: i === 0 ? 'none' : '1px solid #E2E8F0'
          }}>{tab}</span>
        ))}
      </div>
      
      {/* Feed Posts */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {/* Announcement Post */}
        <div style={{ background: '#F8FAFC', borderRadius: '16px', padding: '16px', border: '1px solid #E2E8F0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ width: '40px', height: '40px', minWidth: '40px', flexShrink: 0, borderRadius: '50%', background: '#0F172A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Building2 size={20} color="white" />
            </div>
            <div style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
              <p style={{ fontWeight: 600, fontSize: '14px', color: '#0F172A', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Company Update</p>
              <p style={{ fontSize: '12px', color: '#94A3B8', margin: '2px 0 0' }}>2 hours ago</p>
            </div>
            <div style={{ background: '#DBEAFE', padding: '4px 10px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
              <Bell size={12} color="#1E40AF" />
              <span style={{ color: '#1E40AF', fontSize: '11px', fontWeight: 500 }}>Announcement</span>
            </div>
          </div>
          <p style={{ fontSize: '14px', color: '#334155', margin: 0, lineHeight: 1.5 }}>Holiday rota is live! Check your schedule for December.</p>
          <div style={{ display: 'flex', gap: '20px', marginTop: '14px', paddingTop: '12px', borderTop: '1px solid #E2E8F0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Star size={16} color="#94A3B8" />
              <span style={{ fontSize: '13px', color: '#64748B' }}>24</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MessageSquare size={16} color="#94A3B8" />
              <span style={{ fontSize: '13px', color: '#64748B' }}>8</span>
            </div>
          </div>
        </div>
        
        {/* Recognition Post */}
        <div style={{ background: 'linear-gradient(135deg, #FFF7ED, #FFFBEB)', borderRadius: '16px', padding: '16px', border: '1px solid #FFEDD5' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ width: '40px', height: '40px', minWidth: '40px', flexShrink: 0, borderRadius: '50%', background: 'linear-gradient(135deg, #FF6B35, #F59E0B)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '14px', fontWeight: 600 }}>AT</div>
            <div style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
              <p style={{ fontWeight: 600, fontSize: '14px', color: '#0F172A', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Alex Thompson</p>
              <p style={{ fontSize: '12px', color: '#94A3B8', margin: '2px 0 0' }}>5 hours ago</p>
            </div>
            <div style={{ background: '#FEF3C7', padding: '4px 10px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
              <Star size={12} color="#D97706" />
              <span style={{ color: '#D97706', fontSize: '11px', fontWeight: 500 }}>Recognition</span>
            </div>
          </div>
          <p style={{ fontSize: '14px', color: '#334155', margin: 0, lineHeight: 1.5 }}>Shoutout to <strong style={{ color: '#FF6B35' }}>@Sarah M</strong> for covering my shift!</p>
          <div style={{ display: 'flex', gap: '20px', marginTop: '14px', paddingTop: '12px', borderTop: '1px solid #FFEDD5' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Star size={16} color="#F59E0B" fill="#F59E0B" />
              <span style={{ fontSize: '13px', color: '#92400E' }}>42</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MessageSquare size={16} color="#D97706" />
              <span style={{ fontSize: '13px', color: '#92400E' }}>12</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Nav - 7 tabs */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        padding: '8px 8px 20px',
        display: 'flex',
        justifyContent: 'space-around'
      }}>
        {[
          { icon: Home, label: 'Home', active: false },
          { icon: MessageSquare, label: 'Feed', active: true },
          { icon: Calendar, label: 'Schedule', active: false },
          { icon: FileCheck, label: 'Tasks', active: false },
          { icon: Target, label: 'Career', active: false },
          { icon: Award, label: 'Rewards', active: false },
          { icon: User, label: 'Profile', active: false }
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <item.icon size={20} color={item.active ? '#FF6B35' : '#94A3B8'} />
            <span style={{ color: item.active ? '#FF6B35' : '#94A3B8', fontSize: '9px', marginTop: '2px', fontWeight: 500 }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </MobileFrame>
);

// Mobile: Rewards Screen (Light Mode - Matches Actual App)
const MobileRewardsScreen = () => (
  <MobileFrame>
    <div style={{ height: '100%', background: '#FFFFFF', padding: '48px 16px 80px', overflowY: 'auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <p style={{ color: '#0F172A', fontSize: '20px', fontWeight: 600, margin: 0 }}>Rewards</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#FEF3C7', padding: '6px 10px', borderRadius: '8px' }}>
          <Zap size={14} color="#D97706" />
          <span style={{ color: '#D97706', fontSize: '12px', fontWeight: 600 }}>12 day streak</span>
        </div>
      </div>
      
      {/* Points Card */}
      <div style={{
        background: 'linear-gradient(135deg, #FF6B35 0%, #F59E0B 100%)',
        borderRadius: '20px',
        padding: '20px',
        marginBottom: '16px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '120px', height: '120px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
          <div>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', margin: 0 }}>Available Points</p>
            <p style={{ color: 'white', fontSize: '38px', fontWeight: 700, margin: '2px 0', letterSpacing: '-1px' }}>1,980</p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px', margin: 0 }}>Lifetime: 4,250 pts</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: '12px', padding: '10px 14px', textAlign: 'center' }}>
            <Award size={22} color="white" />
            <p style={{ color: 'white', fontSize: '11px', margin: '4px 0 0', fontWeight: 600 }}>Gold Level</p>
          </div>
        </div>
      </div>
      
      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', overflowX: 'auto' }}>
        {['All', 'Vouchers', 'Time Off', 'Merch'].map((tab, i) => (
          <span key={i} style={{
            padding: '8px 14px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 500,
            background: i === 0 ? '#FF6B35' : '#F8FAFC',
            color: i === 0 ? 'white' : '#64748B',
            border: i === 0 ? 'none' : '1px solid #E2E8F0',
            whiteSpace: 'nowrap'
          }}>{tab}</span>
        ))}
      </div>
      
      {/* Featured Reward */}
      <div style={{ background: 'linear-gradient(135deg, #F0FDF4, #ECFDF5)', borderRadius: '16px', padding: '14px', marginBottom: '12px', border: '1px solid #BBF7D0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '48px', height: '48px', minWidth: '48px', flexShrink: 0, borderRadius: '12px', background: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Clock size={24} color="white" />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px', flexWrap: 'wrap' }}>
              <p style={{ fontWeight: 600, fontSize: '14px', color: '#0F172A', margin: 0 }}>Extra Day Off</p>
              <span style={{ background: '#10B981', color: 'white', fontSize: '9px', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>POPULAR</span>
            </div>
            <p style={{ fontSize: '11px', color: '#64748B', margin: 0 }}>Full day paid time off</p>
            <p style={{ fontSize: '13px', color: '#10B981', margin: '4px 0 0', fontWeight: 700 }}>2,000 pts</p>
          </div>
          <button style={{ background: '#10B981', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '8px', fontSize: '11px', fontWeight: 600, flexShrink: 0, whiteSpace: 'nowrap' }}>Redeem</button>
        </div>
      </div>
      
      {/* Rewards List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {[
          { name: '£20 Amazon', desc: 'Digital gift card', points: 500, icon: DollarSign, color: '#3B82F6', affordable: true },
          { name: '£10 Coffee Shop', desc: 'Costa or Starbucks', points: 250, icon: Star, color: '#8B5CF6', affordable: true },
          { name: 'Cinema Tickets x2', desc: 'Any Odeon cinema', points: 400, icon: Star, color: '#EC4899', affordable: true },
          { name: 'Company Hoodie', desc: 'Premium branded', points: 600, icon: Award, color: '#F59E0B', affordable: true },
          { name: '£50 Voucher', desc: 'High street shops', points: 1200, icon: DollarSign, color: '#10B981', affordable: true }
        ].map((reward, i) => (
          <div key={i} style={{ background: '#F8FAFC', borderRadius: '14px', padding: '12px', display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid #E2E8F0' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: `${reward.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <reward.icon size={22} color={reward.color} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: 600, fontSize: '13px', color: '#0F172A', margin: 0 }}>{reward.name}</p>
              <p style={{ fontSize: '11px', color: '#64748B', margin: '1px 0 0' }}>{reward.desc}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '13px', color: '#FF6B35', fontWeight: 700, margin: 0 }}>{reward.points} pts</p>
              {reward.affordable && <Check size={14} color="#10B981" style={{ marginTop: '2px' }} />}
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom Nav - 7 tabs */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        padding: '8px 8px 20px',
        display: 'flex',
        justifyContent: 'space-around'
      }}>
        {[
          { icon: Home, label: 'Home', active: false },
          { icon: MessageSquare, label: 'Feed', active: false },
          { icon: Calendar, label: 'Schedule', active: false },
          { icon: FileCheck, label: 'Tasks', active: false },
          { icon: Target, label: 'Career', active: false },
          { icon: Award, label: 'Rewards', active: true },
          { icon: User, label: 'Profile', active: false }
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <item.icon size={20} color={item.active ? '#FF6B35' : '#94A3B8'} />
            <span style={{ color: item.active ? '#FF6B35' : '#94A3B8', fontSize: '9px', marginTop: '2px', fontWeight: 500 }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </MobileFrame>
);

// Mobile: Schedule Screen (Light Mode)
const MobileScheduleScreen = () => (
  <MobileFrame>
    <div style={{ height: '100%', background: '#FFFFFF', padding: '48px 16px 80px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <p style={{ color: '#0F172A', fontSize: '20px', fontWeight: 600, margin: 0 }}>My Schedule</p>
        <div style={{ background: '#F8FAFC', borderRadius: '8px', padding: '6px 12px', border: '1px solid #E2E8F0' }}>
          <span style={{ fontSize: '13px', color: '#0F172A', fontWeight: 500 }}>Jan 2026</span>
        </div>
      </div>
      
      {/* Week Selector */}
      <div style={{ display: 'flex', gap: '6px', marginBottom: '16px' }}>
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => {
          const isToday = i === 4; // Friday
          const hasShift = [0, 1, 2, 3, 4].includes(i);
          return (
            <div key={i} style={{
              flex: 1,
              textAlign: 'center',
              padding: '8px 4px',
              borderRadius: '10px',
              background: isToday ? '#FF6B35' : hasShift ? '#FFF7ED' : '#F8FAFC',
              border: isToday ? 'none' : '1px solid #E2E8F0'
            }}>
              <p style={{ fontSize: '10px', color: isToday ? 'rgba(255,255,255,0.8)' : '#64748B', margin: 0 }}>{day}</p>
              <p style={{ fontSize: '14px', fontWeight: 600, color: isToday ? 'white' : '#0F172A', margin: '2px 0 0' }}>{6 + i}</p>
              {hasShift && <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: isToday ? 'white' : '#FF6B35', margin: '4px auto 0' }} />}
            </div>
          );
        })}
      </div>
      
      {/* Today's Shifts */}
      <div style={{ marginBottom: '16px' }}>
        <p style={{ fontWeight: 600, fontSize: '14px', color: '#0F172A', marginBottom: '10px' }}>Today - Friday 10 Jan</p>
        <div style={{
          background: 'linear-gradient(90deg, #FF6B35, #E55A2B)',
          borderRadius: '16px',
          padding: '16px',
          color: 'white'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
            <div>
              <p style={{ fontWeight: 600, fontSize: '16px', margin: 0 }}>09:00 - 17:00</p>
              <p style={{ fontSize: '13px', opacity: 0.9, margin: '4px 0 0' }}>Oxford Street Store</p>
            </div>
            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 10px', borderRadius: '8px', fontSize: '12px' }}>8h</span>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button style={{ flex: 1, background: 'white', color: '#FF6B35', border: 'none', borderRadius: '10px', padding: '10px', fontWeight: 600, fontSize: '13px' }}>Clock In</button>
            <button style={{ flex: 1, background: 'rgba(255,255,255,0.2)', color: 'white', border: 'none', borderRadius: '10px', padding: '10px', fontWeight: 600, fontSize: '13px' }}>View Details</button>
          </div>
        </div>
      </div>
      
      {/* Upcoming Shifts */}
      <div>
        <p style={{ fontWeight: 600, fontSize: '14px', color: '#0F172A', marginBottom: '10px' }}>Upcoming</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            { day: 'Sat 11 Jan', time: '10:00 - 18:00', location: 'Regent Street', hours: '8h' },
            { day: 'Mon 13 Jan', time: '09:00 - 17:00', location: 'Oxford Street', hours: '8h' }
          ].map((shift, i) => (
            <div key={i} style={{ background: '#F8FAFC', borderRadius: '12px', padding: '14px', border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ fontWeight: 500, fontSize: '14px', color: '#0F172A', margin: 0 }}>{shift.day}</p>
                <p style={{ fontSize: '13px', color: '#64748B', margin: '2px 0 0' }}>{shift.time} • {shift.location}</p>
              </div>
              <span style={{ background: '#E2E8F0', padding: '4px 10px', borderRadius: '8px', fontSize: '12px', color: '#475569' }}>{shift.hours}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom Nav - 7 tabs */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        padding: '8px 8px 20px',
        display: 'flex',
        justifyContent: 'space-around'
      }}>
        {[
          { icon: Home, label: 'Home', active: false },
          { icon: MessageSquare, label: 'Feed', active: false },
          { icon: Calendar, label: 'Schedule', active: true },
          { icon: FileCheck, label: 'Tasks', active: false },
          { icon: Target, label: 'Career', active: false },
          { icon: Award, label: 'Rewards', active: false },
          { icon: User, label: 'Profile', active: false }
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <item.icon size={20} color={item.active ? '#FF6B35' : '#94A3B8'} />
            <span style={{ color: item.active ? '#FF6B35' : '#94A3B8', fontSize: '9px', marginTop: '2px', fontWeight: 500 }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </MobileFrame>
);

// ============================================================================
// PORTAL MOCKUPS - Based on actual portal screens
// ============================================================================

// Browser Frame Component
const BrowserFrame = ({ children, className = "", url = "portal.uplifthq.co.uk" }) => (
  <div className={className} style={{
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    overflow: 'hidden',
    border: '1px solid #E2E8F0'
  }}>
    {/* Browser Chrome */}
    <div style={{
      background: '#F1F5F9',
      padding: '12px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      borderBottom: '1px solid #E2E8F0'
    }}>
      <div style={{ display: 'flex', gap: '8px' }}>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#EF4444' }} />
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F59E0B' }} />
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10B981' }} />
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <div style={{
          background: 'white',
          borderRadius: '6px',
          padding: '6px 16px',
          fontSize: '13px',
          color: '#64748B',
          border: '1px solid #E2E8F0'
        }}>{url}</div>
      </div>
    </div>
    {children}
  </div>
);

// Portal: People Hub - FULL VERSION (More Powerful)
const PortalDashboard = () => (
  <BrowserFrame url="portal.uplifthq.co.uk/people">
    <div style={{ display: 'flex', height: '480px' }}>
      {/* Sidebar */}
      <div style={{ width: '64px', background: '#0F172A', padding: '16px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <RisingULogo variant="mark" size={32} />
        <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[BarChart3, Users, Calendar, Award, Briefcase, Link2, Settings].map((Icon, i) => (
            <div key={i} style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: i === 1 ? 'rgba(255,107,53,0.2)' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Icon size={20} color={i === 1 ? '#FF6B35' : '#64748B'} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Main Content */}
      <div style={{ flex: 1, background: '#F8FAFC', padding: '16px', overflowY: 'auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <div>
            <h1 style={{ fontSize: '18px', fontWeight: 600, color: '#0F172A', margin: 0 }}>People Hub</h1>
            <p style={{ color: '#64748B', fontSize: '12px', marginTop: '2px' }}>156 employees • Oxford Street</p>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <div style={{ background: 'white', borderRadius: '8px', padding: '8px 12px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Search size={14} color="#64748B" />
              <span style={{ fontSize: '12px', color: '#94A3B8' }}>Search employees...</span>
            </div>
            <button style={{ background: '#0F172A', color: 'white', border: 'none', borderRadius: '8px', padding: '8px 14px', fontWeight: 500, fontSize: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Plus size={14} /> Add Employee
            </button>
          </div>
        </div>
        
        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px', marginBottom: '14px' }}>
          {[
            { label: 'Total', value: '156', color: '#3B82F6', icon: Users },
            { label: 'Active Today', value: '42', color: '#10B981', icon: Calendar },
            { label: 'On Leave', value: '8', color: '#8B5CF6', icon: Clock },
            { label: 'At Risk', value: '3', color: '#EF4444', icon: AlertCircle },
            { label: 'Ready for Promotion', value: '12', color: '#FF6B35', icon: TrendingUp }
          ].map((stat, i) => (
            <div key={i} style={{ background: 'white', borderRadius: '10px', padding: '12px', border: '1px solid #E2E8F0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <p style={{ color: '#64748B', fontSize: '11px', margin: 0 }}>{stat.label}</p>
                <stat.icon size={14} color={stat.color} />
              </div>
              <span style={{ fontSize: '22px', fontWeight: 700, color: '#0F172A' }}>{stat.value}</span>
            </div>
          ))}
        </div>
        
        {/* Filter Tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
          {['All Employees', 'Scheduled Today', 'At Risk', 'Ready for Promotion'].map((tab, i) => (
            <span key={i} style={{
              padding: '6px 12px',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: 500,
              background: i === 0 ? '#0F172A' : 'white',
              color: i === 0 ? 'white' : '#64748B',
              border: i === 0 ? 'none' : '1px solid #E2E8F0',
              cursor: 'pointer'
            }}>{tab}</span>
          ))}
        </div>
        
        {/* Employee Table */}
        <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
          {/* Table Header */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 80px', padding: '10px 14px', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#64748B' }}>EMPLOYEE</span>
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#64748B' }}>ROLE</span>
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#64748B' }}>SKILLS</span>
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#64748B' }}>TENURE</span>
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#64748B' }}>STATUS</span>
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#64748B' }}>ACTIONS</span>
          </div>
          
          {/* Employee Rows */}
          {[
            { name: 'Sarah Mitchell', avatar: 'SM', role: 'Shift Supervisor', skills: 95, tenure: '2y 3m', status: 'promotion', statusLabel: 'Ready', color: '#FF6B35' },
            { name: 'Emily Roberts', avatar: 'ER', role: 'Senior Associate', skills: 87, tenure: '1y 8m', status: 'active', statusLabel: 'Active', color: '#10B981' },
            { name: 'James Taylor', avatar: 'JT', role: 'Associate', skills: 72, tenure: '11m', status: 'active', statusLabel: 'Active', color: '#10B981' },
            { name: 'Alex Thompson', avatar: 'AT', role: 'Associate', skills: 65, tenure: '8m', status: 'training', statusLabel: 'Training', color: '#8B5CF6' },
            { name: 'Lisa Chen', avatar: 'LC', role: 'Associate', skills: 45, tenure: '3m', status: 'risk', statusLabel: 'At Risk', color: '#EF4444' },
            { name: 'David Park', avatar: 'DP', role: 'Team Lead', skills: 92, tenure: '3y 1m', status: 'active', statusLabel: 'Active', color: '#10B981' }
          ].map((emp, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 80px', padding: '12px 14px', borderBottom: i < 5 ? '1px solid #F1F5F9' : 'none', alignItems: 'center' }}>
              {/* Employee */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: `linear-gradient(135deg, ${emp.color}, ${emp.color}99)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '11px', fontWeight: 600 }}>{emp.avatar}</div>
                <span style={{ fontSize: '13px', fontWeight: 500, color: '#0F172A' }}>{emp.name}</span>
              </div>
              {/* Role */}
              <span style={{ fontSize: '12px', color: '#64748B' }}>{emp.role}</span>
              {/* Skills Progress */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '50px', height: '6px', background: '#E2E8F0', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: `${emp.skills}%`, height: '100%', background: emp.skills >= 90 ? '#10B981' : emp.skills >= 70 ? '#3B82F6' : emp.skills >= 50 ? '#F59E0B' : '#EF4444', borderRadius: '3px' }} />
                </div>
                <span style={{ fontSize: '11px', color: '#64748B' }}>{emp.skills}%</span>
              </div>
              {/* Tenure */}
              <span style={{ fontSize: '12px', color: '#64748B' }}>{emp.tenure}</span>
              {/* Status */}
              <span style={{ fontSize: '11px', fontWeight: 500, color: emp.color, background: `${emp.color}15`, padding: '4px 8px', borderRadius: '4px', display: 'inline-block', width: 'fit-content' }}>{emp.statusLabel}</span>
              {/* Actions */}
              <div style={{ display: 'flex', gap: '6px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <Eye size={14} color="#64748B" />
                </div>
                <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <MoreHorizontal size={14} color="#64748B" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </BrowserFrame>
);

// Portal: Schedule with AI Panel - FULL VERSION
const PortalSchedule = () => (
  <BrowserFrame url="portal.uplifthq.co.uk/schedule">
    <div style={{ display: 'flex', height: '480px' }}>
      {/* Sidebar */}
      <div style={{ width: '64px', background: '#0F172A', padding: '16px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <RisingULogo variant="mark" size={32} />
        <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[BarChart3, Users, Calendar, Award, Briefcase, Link2, Settings].map((Icon, i) => (
            <div key={i} style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: i === 2 ? 'rgba(255,107,53,0.2)' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Icon size={20} color={i === 2 ? '#FF6B35' : '#64748B'} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Main Content */}
      <div style={{ flex: 1, background: '#F8FAFC', padding: '16px', display: 'flex', gap: '16px' }}>
        {/* Schedule Grid */}
        <div style={{ flex: 1 }}>
          {/* Header with controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <h1 style={{ fontSize: '18px', fontWeight: 600, color: '#0F172A', margin: 0 }}>Schedule</h1>
              <select style={{ padding: '6px 12px', borderRadius: '6px', border: '1px solid #E2E8F0', fontSize: '13px', background: 'white' }}>
                <option>Oxford Street</option>
              </select>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{ background: 'white', padding: '6px 12px', borderRadius: '6px', fontSize: '13px', color: '#0F172A', border: '1px solid #E2E8F0', cursor: 'pointer' }}>←</span>
              <span style={{ fontWeight: 600, fontSize: '14px', color: '#0F172A' }}>6 - 12 Jan 2026</span>
              <span style={{ background: 'white', padding: '6px 12px', borderRadius: '6px', fontSize: '13px', color: '#0F172A', border: '1px solid #E2E8F0', cursor: 'pointer' }}>→</span>
            </div>
          </div>
          
          {/* Cost Summary Bar */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '12px', padding: '10px 14px', background: 'white', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
            <div>
              <span style={{ fontSize: '11px', color: '#64748B' }}>Total Hours</span>
              <p style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A', margin: 0 }}>312h</p>
            </div>
            <div style={{ borderLeft: '1px solid #E2E8F0', paddingLeft: '16px' }}>
              <span style={{ fontSize: '11px', color: '#64748B' }}>Labour Cost</span>
              <p style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A', margin: 0 }}>£4,680</p>
            </div>
            <div style={{ borderLeft: '1px solid #E2E8F0', paddingLeft: '16px' }}>
              <span style={{ fontSize: '11px', color: '#64748B' }}>Budget</span>
              <p style={{ fontSize: '16px', fontWeight: 700, color: '#10B981', margin: 0 }}>£5,000 ✓</p>
            </div>
            <div style={{ borderLeft: '1px solid #E2E8F0', paddingLeft: '16px' }}>
              <span style={{ fontSize: '11px', color: '#64748B' }}>Open Shifts</span>
              <p style={{ fontSize: '16px', fontWeight: 700, color: '#F59E0B', margin: 0 }}>3</p>
            </div>
            <div style={{ marginLeft: 'auto' }}>
              <button style={{ background: '#0F172A', color: 'white', border: 'none', borderRadius: '6px', padding: '8px 14px', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>+ Add Shift</button>
            </div>
          </div>
          
          {/* Week Grid */}
          <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
            {/* Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '160px repeat(7, 1fr)', borderBottom: '1px solid #E2E8F0', background: '#F8FAFC' }}>
              <div style={{ padding: '10px 12px', fontWeight: 600, fontSize: '12px', color: '#64748B' }}>Employee</div>
              {['Mon 6', 'Tue 7', 'Wed 8', 'Thu 9', 'Fri 10', 'Sat 11', 'Sun 12'].map((day, i) => (
                <div key={day} style={{ padding: '10px 6px', fontWeight: 600, fontSize: '11px', color: i === 4 ? '#FF6B35' : '#64748B', textAlign: 'center', background: i === 4 ? '#FFF7ED' : 'transparent' }}>{day}</div>
              ))}
            </div>
            
            {/* Employee Rows */}
            {[
              { name: 'Sarah Mitchell', role: 'Senior Assoc.', rate: '£15/h', hours: '40h', avatar: 'SM', shifts: ['09-17', '09-17', '09-17', '09-17', '09-17', 'OFF', 'OFF'] },
              { name: 'Alex Thompson', role: 'Associate', rate: '£12/h', hours: '32h', avatar: 'AT', shifts: ['OFF', '12-20', '12-20', '12-20', '12-20', '10-18', 'OFF'] },
              { name: 'Emily Roberts', role: 'Associate', rate: '£12/h', hours: '24h', avatar: 'ER', shifts: ['09-17', 'OFF', '09-17', 'OFF', '09-17', 'OFF', 'OFF'] },
              { name: 'James Taylor', role: 'Supervisor', rate: '£18/h', hours: '40h', avatar: 'JT', shifts: ['09-17', '09-17', '09-17', '09-17', '09-17', 'OFF', '10-18'] },
              { name: 'Lisa Chen', role: 'Associate', rate: '£12/h', hours: '24h', avatar: 'LC', shifts: ['OPEN', '09-17', 'OFF', '09-17', 'OFF', '10-18', 'OFF'] },
              { name: 'David Wilson', role: 'Associate', rate: '£12.50/h', hours: '32h', avatar: 'DW', shifts: ['12-20', '12-20', 'OFF', 'OPEN', '12-20', '12-20', 'OFF'] }
            ].map((emp, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '160px repeat(7, 1fr)', borderBottom: '1px solid #E2E8F0' }}>
                <div style={{ padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #FF6B35, #E55A2B)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '11px', fontWeight: 600 }}>{emp.avatar}</div>
                  <div>
                    <p style={{ fontSize: '12px', fontWeight: 600, color: '#0F172A', margin: 0 }}>{emp.name}</p>
                    <p style={{ fontSize: '10px', color: '#64748B', margin: 0 }}>{emp.role} • {emp.rate}</p>
                  </div>
                </div>
                {emp.shifts.map((shift, j) => (
                  <div key={j} style={{ padding: '6px 4px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: j === 4 ? '#FFFBEB' : 'transparent' }}>
                    <span style={{
                      padding: '6px 8px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: 500,
                      background: shift === 'OFF' ? '#F1F5F9' : shift === 'OPEN' ? '#FEF3C7' : '#DBEAFE',
                      color: shift === 'OFF' ? '#94A3B8' : shift === 'OPEN' ? '#D97706' : '#1E40AF',
                      border: shift === 'OPEN' ? '1px dashed #F59E0B' : 'none',
                      cursor: shift === 'OPEN' ? 'pointer' : 'default'
                    }}>{shift}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        {/* AI Panel */}
        <div style={{ width: '220px', background: 'white', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '14px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #8B5CF6, #6366F1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Brain size={16} color="white" />
            </div>
            <div>
              <span style={{ fontWeight: 600, fontSize: '14px', color: '#0F172A', display: 'block' }}>AI Scheduler</span>
              <span style={{ fontSize: '10px', color: '#64748B' }}>8 rules active</span>
            </div>
          </div>
          
          {/* Rules */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px', flex: 1, overflowY: 'auto' }}>
            {[
              { name: 'Min rest between shifts', value: '11h', on: true, category: 'Compliance' },
              { name: 'Max weekly hours', value: '48h', on: true, category: 'Compliance' },
              { name: 'Required skills per shift', value: '', on: true, category: 'Safety' },
              { name: 'Supervisor ratio', value: '1:5', on: true, category: 'Operations' },
              { name: 'Consecutive days limit', value: '6', on: true, category: 'Wellbeing' },
              { name: 'Preference weighting', value: 'High', on: true, category: 'Preference' },
              { name: 'Fair hours distribution', value: '±10%', on: true, category: 'Fairness' },
              { name: 'Skill matching', value: '', on: true, category: 'Operations' }
            ].map((rule, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 8px', background: '#F8FAFC', borderRadius: '6px' }}>
                <div>
                  <span style={{ fontSize: '11px', color: '#334155', display: 'block' }}>{rule.name}</span>
                  {rule.value && <span style={{ fontSize: '10px', color: '#8B5CF6', fontWeight: 600 }}>{rule.value}</span>}
                </div>
                <div style={{ width: '28px', height: '16px', borderRadius: '8px', background: rule.on ? '#8B5CF6' : '#E2E8F0', position: 'relative' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'white', position: 'absolute', top: '2px', left: rule.on ? '14px' : '2px', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }} />
                </div>
              </div>
            ))}
          </div>
          
          {/* Generate Button */}
          <button style={{
            width: '100%',
            background: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '12px',
            fontWeight: 600,
            fontSize: '13px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px'
          }}>
            <Sparkles size={16} />
            Fill 3 Open Shifts
          </button>
          
          <p style={{ fontSize: '10px', color: '#64748B', textAlign: 'center', marginTop: '8px' }}>Last generated: 2h ago</p>
        </div>
      </div>
    </div>
  </BrowserFrame>
);

// Portal: Skills Matrix - FULL VERSION
const PortalSkillsMatrix = () => (
  <BrowserFrame url="portal.uplifthq.co.uk/skills">
    <div style={{ display: 'flex', height: '420px' }}>
      {/* Sidebar */}
      <div style={{ width: '64px', background: '#0F172A', padding: '16px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <RisingULogo variant="mark" size={32} />
        <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[BarChart3, Users, Calendar, Award, Briefcase, Link2, Settings].map((Icon, i) => (
            <div key={i} style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: i === 3 ? 'rgba(255,107,53,0.2)' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Icon size={20} color={i === 3 ? '#FF6B35' : '#64748B'} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Main Content */}
      <div style={{ flex: 1, background: '#F8FAFC', padding: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <h1 style={{ fontSize: '18px', fontWeight: 600, color: '#0F172A', margin: 0 }}>Skills Matrix</h1>
          <button style={{ background: '#0F172A', color: 'white', border: 'none', borderRadius: '6px', padding: '8px 14px', fontWeight: 500, fontSize: '12px', cursor: 'pointer' }}>+ Add Skill</button>
        </div>
        
        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '14px' }}>
          {[
            { label: 'Total Skills', value: '12', icon: Award, color: '#3B82F6' },
            { label: 'Verified', value: '186', change: '+12%', icon: CheckCircle2, color: '#10B981' },
            { label: 'Pending', value: '23', icon: Clock, color: '#F59E0B' },
            { label: 'Expiring Soon', value: '11', warning: true, icon: AlertCircle, color: '#EF4444' }
          ].map((stat, i) => (
            <div key={i} style={{ background: 'white', borderRadius: '10px', padding: '12px', border: '1px solid #E2E8F0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div>
                  <p style={{ color: '#64748B', fontSize: '11px', margin: 0 }}>{stat.label}</p>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginTop: '4px' }}>
                    <span style={{ fontSize: '20px', fontWeight: 700, color: stat.warning ? '#EF4444' : '#0F172A' }}>{stat.value}</span>
                    {stat.change && <span style={{ color: '#10B981', fontSize: '11px' }}>{stat.change}</span>}
                  </div>
                </div>
                <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: `${stat.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <stat.icon size={14} color={stat.color} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          {[
            { name: 'Cash Handling', category: 'Core', verified: 45, total: 52, color: '#3B82F6', level: 'Basic' },
            { name: 'Customer Service', category: 'Core', verified: 52, total: 58, color: '#3B82F6', level: 'Advanced' },
            { name: 'First Aid', category: 'Safety', verified: 23, total: 35, color: '#EF4444', required: true, level: 'Certified' },
            { name: 'Food Safety L2', category: 'Compliance', verified: 18, total: 25, color: '#8B5CF6', level: 'Certified' },
            { name: 'Team Leadership', category: 'Management', verified: 15, total: 20, color: '#10B981', level: 'Intermediate' },
            { name: 'Forklift License', category: 'Specialist', verified: 8, total: 12, color: '#F59E0B', required: true, level: 'Licensed' }
          ].map((skill, i) => (
            <div key={i} style={{ background: 'white', borderRadius: '10px', padding: '12px', border: '1px solid #E2E8F0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
                <div>
                  <p style={{ fontWeight: 600, fontSize: '13px', color: '#0F172A', margin: 0 }}>{skill.name}</p>
                  <div style={{ display: 'flex', gap: '4px', marginTop: '4px' }}>
                    <span style={{ fontSize: '10px', color: skill.color, background: `${skill.color}15`, padding: '2px 6px', borderRadius: '4px' }}>{skill.category}</span>
                    <span style={{ fontSize: '10px', color: '#64748B', background: '#F1F5F9', padding: '2px 6px', borderRadius: '4px' }}>{skill.level}</span>
                  </div>
                </div>
                {skill.required && <span style={{ fontSize: '9px', color: '#EF4444', background: '#FEE2E2', padding: '2px 6px', borderRadius: '4px' }}>Required</span>}
              </div>
              {/* Progress Ring + Stats */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: `conic-gradient(${skill.color} 0deg ${skill.verified/skill.total*360}deg, #E2E8F0 ${skill.verified/skill.total*360}deg 360deg)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '10px', fontWeight: 600, color: '#0F172A' }}>{Math.round(skill.verified/skill.total*100)}%</span>
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: '12px', color: '#0F172A', margin: 0 }}><strong>{skill.verified}</strong> / {skill.total} verified</p>
                  <p style={{ fontSize: '11px', color: '#64748B', margin: '1px 0 0' }}>{skill.total - skill.verified} pending</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </BrowserFrame>
);

// Portal: Integrations Hub - FULL VERSION
const PortalIntegrations = () => (
  <BrowserFrame url="portal.uplifthq.co.uk/integrations">
    <div style={{ display: 'flex', height: '440px' }}>
      {/* Sidebar */}
      <div style={{ width: '64px', background: '#0F172A', padding: '16px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <RisingULogo variant="mark" size={32} />
        <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[BarChart3, Users, Calendar, Award, Briefcase, Link2, Settings].map((Icon, i) => (
            <div key={i} style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: i === 5 ? 'rgba(255,107,53,0.2)' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Icon size={20} color={i === 5 ? '#FF6B35' : '#64748B'} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Main Content */}
      <div style={{ flex: 1, background: '#F8FAFC', padding: '16px', overflowY: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div>
            <h1 style={{ fontSize: '18px', fontWeight: 600, color: '#0F172A', margin: 0 }}>Integrations</h1>
            <p style={{ color: '#64748B', fontSize: '12px', marginTop: '2px' }}>12 integrations live</p>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{ background: 'white', color: '#0F172A', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '8px 14px', fontWeight: 500, fontSize: '12px', cursor: 'pointer' }}>API Docs</button>
            <button style={{ background: '#0F172A', color: 'white', border: 'none', borderRadius: '6px', padding: '8px 14px', fontWeight: 500, fontSize: '12px', cursor: 'pointer' }}>+ Add Integration</button>
          </div>
        </div>
        
        {/* Connected Integrations */}
        <div style={{ marginBottom: '20px' }}>
          <p style={{ fontSize: '12px', fontWeight: 600, color: '#64748B', marginBottom: '10px' }}>CONNECTED (4)</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
            {[
              { name: 'Workday', category: 'HRIS', color: '#3B82F6', synced: '2m ago' },
              { name: 'ADP', category: 'Payroll', color: '#10B981', synced: '1h ago' },
              { name: 'Slack', category: 'Comms', color: '#8B5CF6', synced: 'Live' },
              { name: 'Okta', category: 'SSO', color: '#F59E0B', synced: 'Active' }
            ].map((int, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '10px', padding: '12px', border: '2px solid #10B981', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '8px', right: '8px', width: '18px', height: '18px', borderRadius: '50%', background: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Check size={10} color="white" />
                </div>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: `${int.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                  <Link2 size={18} color={int.color} />
                </div>
                <p style={{ fontWeight: 600, fontSize: '13px', color: '#0F172A', margin: 0 }}>{int.name}</p>
                <p style={{ fontSize: '11px', color: '#64748B', margin: '2px 0 0' }}>{int.category}</p>
                <p style={{ fontSize: '10px', color: '#10B981', margin: '4px 0 0' }}>Synced: {int.synced}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Available by Category */}
        <div>
          <p style={{ fontSize: '12px', fontWeight: 600, color: '#64748B', marginBottom: '10px' }}>AVAILABLE BY CATEGORY</p>
          
          {/* HRIS */}
          <div style={{ marginBottom: '14px' }}>
            <p style={{ fontSize: '11px', fontWeight: 600, color: '#3B82F6', marginBottom: '8px' }}>HRIS</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
              {['BambooHR', 'HiBob', 'Personio', 'SAP SuccessFactors'].map((name, i) => (
                <div key={i} style={{ background: 'white', borderRadius: '8px', padding: '10px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Link2 size={14} color="#64748B" />
                  </div>
                  <span style={{ fontSize: '12px', color: '#334155' }}>{name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Payroll */}
          <div style={{ marginBottom: '14px' }}>
            <p style={{ fontSize: '11px', fontWeight: 600, color: '#10B981', marginBottom: '8px' }}>PAYROLL</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
              {['Gusto', 'Sage', 'Xero', 'Paychex'].map((name, i) => (
                <div key={i} style={{ background: 'white', borderRadius: '8px', padding: '10px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Link2 size={14} color="#64748B" />
                  </div>
                  <span style={{ fontSize: '12px', color: '#334155' }}>{name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Identity & Automation */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div>
              <p style={{ fontSize: '11px', fontWeight: 600, color: '#F59E0B', marginBottom: '8px' }}>IDENTITY</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                {['Azure AD', 'Google'].map((name, i) => (
                  <div key={i} style={{ background: 'white', borderRadius: '8px', padding: '10px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Link2 size={14} color="#64748B" />
                    </div>
                    <span style={{ fontSize: '12px', color: '#334155' }}>{name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontSize: '11px', fontWeight: 600, color: '#8B5CF6', marginBottom: '8px' }}>AUTOMATION</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                {['Zapier', 'Webhooks'].map((name, i) => (
                  <div key={i} style={{ background: 'white', borderRadius: '8px', padding: '10px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Link2 size={14} color="#64748B" />
                    </div>
                    <span style={{ fontSize: '12px', color: '#334155' }}>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BrowserFrame>
);


// ============================================================================
// VIDEO DEMO COMPONENTS
// ============================================================================
// ============================================================================
// MOBILE FRAME COMPONENT
// ============================================================================
const VideoMobileFrame = ({ children, scale = 1 }) => (
  <div style={{ transform: `scale(${scale})`, transformOrigin: 'center center' }}>
    <div style={{
      width: '280px',
      background: '#1E293B',
      borderRadius: '40px',
      padding: '8px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.1)'
    }}>
      <div style={{
        background: '#0F172A',
        borderRadius: '32px',
        overflow: 'hidden',
        position: 'relative',
        height: '580px'
      }}>
        {/* Notch */}
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '120px',
          height: '28px',
          background: '#1E293B',
          borderRadius: '20px',
          zIndex: 40
        }}>
          <div style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '10px',
            height: '10px',
            background: '#334155',
            borderRadius: '50%'
          }} />
        </div>
        {children}
      </div>
    </div>
  </div>
);

// ============================================================================
// BROWSER FRAME COMPONENT
// ============================================================================
const VideoBrowserFrame = ({ children, url = "portal.uplifthq.co.uk", scale = 1 }) => (
  <div style={{ transform: `scale(${scale})`, transformOrigin: 'center center' }}>
    <div style={{
      background: '#1E293B',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.1)',
      width: '900px'
    }}>
      {/* Browser Chrome */}
      <div style={{
        background: '#0F172A',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#EF4444' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F59E0B' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10B981' }} />
        </div>
        <div style={{
          flex: 1,
          background: '#1E293B',
          borderRadius: '6px',
          padding: '8px 12px',
          fontSize: '13px',
          color: '#94A3B8',
          border: '1px solid #334155'
        }}>{url}</div>
      </div>
      {children}
    </div>
  </div>
);

// ============================================================================
// SCREEN 1: MOBILE HOME DASHBOARD
// ============================================================================
const VideoMobileHomeScreen = ({ highlightEarnings, highlightShift, highlightCareer }) => (
  <VideoMobileFrame scale={1.2}>
    <div style={{ height: '100%', background: '#FFFFFF', padding: '48px 16px 80px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <p style={{ color: '#64748B', fontSize: '13px', margin: 0 }}>Good morning</p>
          <p style={{ color: '#0F172A', fontSize: '22px', fontWeight: 600, margin: '2px 0 0' }}>Sarah Mitchell</p>
        </div>
        <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, #FF6B35, #F59E0B)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 600, fontSize: '16px' }}>SM</div>
      </div>
      
      {/* Earnings Card */}
      <div style={{
        background: 'linear-gradient(135deg, #FF6B35 0%, #F59E0B 100%)',
        borderRadius: '20px',
        padding: '20px',
        marginBottom: '16px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.5s ease',
        transform: highlightEarnings ? 'scale(1.02)' : 'scale(1)',
        boxShadow: highlightEarnings ? '0 0 0 3px rgba(255,107,53,0.5), 0 20px 40px rgba(255,107,53,0.3)' : 'none'
      }}>
        <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }} />
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', margin: 0 }}>This Week's Earnings</p>
        <p style={{ color: 'white', fontSize: '36px', fontWeight: 700, margin: '4px 0' }}>£342.50</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <TrendingUp size={14} color="white" />
          <span style={{ color: 'white', fontSize: '13px' }}>+£48.50 from last week</span>
        </div>
      </div>
      
      {/* Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
        <div style={{ background: '#F8FAFC', borderRadius: '16px', padding: '16px', border: '1px solid #E2E8F0' }}>
          <Clock size={20} color="#FF6B35" />
          <p style={{ color: '#0F172A', fontSize: '24px', fontWeight: 700, margin: '8px 0 0' }}>28.5h</p>
          <p style={{ color: '#64748B', fontSize: '12px', margin: '2px 0 0' }}>Hours this week</p>
        </div>
        <div style={{ background: '#F8FAFC', borderRadius: '16px', padding: '16px', border: '1px solid #E2E8F0' }}>
          <Calendar size={20} color="#FF6B35" />
          <p style={{ color: '#0F172A', fontSize: '24px', fontWeight: 700, margin: '8px 0 0' }}>6</p>
          <p style={{ color: '#64748B', fontSize: '12px', margin: '2px 0 0' }}>Shifts scheduled</p>
        </div>
      </div>
      
      {/* Next Shift */}
      <div style={{
        background: '#F8FAFC',
        borderRadius: '16px',
        padding: '16px',
        marginBottom: '16px',
        border: '1px solid #E2E8F0',
        transition: 'all 0.5s ease',
        transform: highlightShift ? 'scale(1.02)' : 'scale(1)',
        boxShadow: highlightShift ? '0 0 0 3px rgba(16,185,129,0.4), 0 10px 30px rgba(16,185,129,0.2)' : 'none'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <p style={{ fontWeight: 600, fontSize: '14px', color: '#0F172A', margin: 0 }}>Next Shift</p>
          <span style={{ background: '#DCFCE7', color: '#16A34A', fontSize: '11px', padding: '4px 10px', borderRadius: '8px', fontWeight: 500 }}>In 2 hours</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FFF7ED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Building2 size={24} color="#FF6B35" />
          </div>
          <div>
            <p style={{ fontWeight: 500, fontSize: '15px', color: '#0F172A', margin: 0 }}>Oxford Street Store</p>
            <p style={{ color: '#64748B', fontSize: '13px', margin: '2px 0 0' }}>Today, 2:00 PM - 10:00 PM</p>
          </div>
        </div>
      </div>
      
      {/* Career Progress CTA */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(255,107,53,0.1))',
        borderRadius: '16px',
        padding: '16px',
        border: '1px solid rgba(139,92,246,0.2)',
        transition: 'all 0.5s ease',
        transform: highlightCareer ? 'scale(1.02)' : 'scale(1)',
        boxShadow: highlightCareer ? '0 0 0 3px rgba(139,92,246,0.4), 0 10px 30px rgba(139,92,246,0.2)' : 'none'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, #8B5CF6, #6366F1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Target size={22} color="white" />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 600, fontSize: '14px', color: '#0F172A', margin: 0 }}>3 skills away from Shift Supervisor</p>
            <p style={{ color: '#64748B', fontSize: '12px', margin: '2px 0 0' }}>View your career path</p>
          </div>
          <ChevronRight size={20} color="#8B5CF6" />
        </div>
      </div>
      
      {/* Bottom Nav */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        padding: '8px 8px 20px',
        display: 'flex',
        justifyContent: 'space-around'
      }}>
        {[
          { icon: Home, label: 'Home', active: true },
          { icon: MessageSquare, label: 'Feed', active: false },
          { icon: Calendar, label: 'Schedule', active: false },
          { icon: FileCheck, label: 'Tasks', active: false },
          { icon: Target, label: 'Career', active: false },
          { icon: Award, label: 'Rewards', active: false },
          { icon: User, label: 'Profile', active: false }
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <item.icon size={20} color={item.active ? '#FF6B35' : '#94A3B8'} />
            <span style={{ color: item.active ? '#FF6B35' : '#94A3B8', fontSize: '9px', marginTop: '2px', fontWeight: 500 }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </VideoMobileFrame>
);

// ============================================================================
// SCREEN 2: CAREER PATH
// ============================================================================
const VideoMobileCareerScreen = ({ highlightLadder, highlightNext }) => (
  <VideoMobileFrame scale={1.2}>
    <div style={{ height: '100%', background: '#FFFFFF', padding: '48px 16px 80px', overflowY: 'auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '20px' }}>
        <p style={{ color: '#0F172A', fontSize: '20px', fontWeight: 600, margin: 0 }}>Career Path</p>
        <p style={{ color: '#64748B', fontSize: '13px', marginTop: '4px' }}>Your journey to Shift Supervisor</p>
      </div>
      
      {/* Current Role Card */}
      <div style={{
        background: 'linear-gradient(135deg, #FF6B35 0%, #F59E0B 100%)',
        borderRadius: '20px',
        padding: '20px',
        marginBottom: '24px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '80px', height: '80px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }} />
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', margin: 0 }}>CURRENT ROLE</p>
        <p style={{ color: 'white', fontSize: '22px', fontWeight: 700, margin: '4px 0' }}>Senior Associate</p>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', margin: 0 }}>£12.50/hour • 18 months</p>
      </div>
      
      {/* Career Ladder */}
      <div style={{
        position: 'relative',
        paddingLeft: '32px',
        transition: 'all 0.5s ease',
        transform: highlightLadder ? 'scale(1.01)' : 'scale(1)'
      }}>
        {/* Vertical Line */}
        <div style={{ position: 'absolute', left: '11px', top: '20px', bottom: '20px', width: '2px', background: '#E2E8F0' }} />
        
        {[
          { role: 'Store Manager', pay: '£18.00/hr', timeline: '3-4 years', status: 'locked', skills: '12 skills needed' },
          { role: 'Shift Supervisor', pay: '£15.00/hr', timeline: '6-12 months', status: 'next', skills: '3 skills needed' },
          { role: 'Senior Associate', pay: '£12.50/hr', timeline: 'Current', status: 'current', skills: '7/7 skills' },
          { role: 'Associate', pay: '£11.00/hr', timeline: 'Completed', status: 'done', skills: 'All complete' }
        ].map((step, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'flex-start',
            marginBottom: '24px',
            position: 'relative',
            transition: 'all 0.5s ease',
            transform: (highlightNext && step.status === 'next') ? 'scale(1.03)' : 'scale(1)'
          }}>
            {/* Dot */}
            <div style={{
              position: 'absolute',
              left: '-32px',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: step.status === 'current' ? 'linear-gradient(135deg, #FF6B35, #F59E0B)' : 
                         step.status === 'next' ? '#8B5CF6' :
                         step.status === 'done' ? '#10B981' : '#E2E8F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '3px solid white',
              boxShadow: (highlightNext && step.status === 'next') ? '0 0 0 4px rgba(139,92,246,0.3), 0 4px 12px rgba(139,92,246,0.4)' : '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              {step.status === 'done' && <Check size={12} color="white" />}
              {step.status === 'current' && <Star size={10} color="white" />}
              {step.status === 'locked' && <Lock size={10} color="#94A3B8" />}
            </div>
            
            {/* Content */}
            <div style={{
              flex: 1,
              background: step.status === 'next' ? 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(139,92,246,0.05))' : '#F8FAFC',
              borderRadius: '16px',
              padding: '16px',
              border: step.status === 'next' ? '2px solid #8B5CF6' : '1px solid #E2E8F0',
              opacity: step.status === 'locked' ? 0.6 : 1,
              boxShadow: (highlightNext && step.status === 'next') ? '0 10px 30px rgba(139,92,246,0.2)' : 'none'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div>
                  <p style={{ fontWeight: 600, fontSize: '15px', color: '#0F172A', margin: 0 }}>{step.role}</p>
                  <p style={{ color: '#10B981', fontSize: '13px', margin: '2px 0 0', fontWeight: 600 }}>{step.pay}</p>
                </div>
                {step.status === 'next' && (
                  <span style={{ background: '#8B5CF6', color: 'white', fontSize: '10px', padding: '4px 8px', borderRadius: '6px', fontWeight: 600 }}>NEXT</span>
                )}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
                <span style={{ color: '#64748B', fontSize: '12px' }}>{step.timeline}</span>
                <span style={{ color: step.status === 'next' ? '#8B5CF6' : '#64748B', fontSize: '12px', fontWeight: 500 }}>{step.skills}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom Nav */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        padding: '8px 8px 20px',
        display: 'flex',
        justifyContent: 'space-around'
      }}>
        {[
          { icon: Home, label: 'Home', active: false },
          { icon: MessageSquare, label: 'Feed', active: false },
          { icon: Calendar, label: 'Schedule', active: false },
          { icon: FileCheck, label: 'Tasks', active: false },
          { icon: Target, label: 'Career', active: true },
          { icon: Award, label: 'Rewards', active: false },
          { icon: User, label: 'Profile', active: false }
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <item.icon size={20} color={item.active ? '#FF6B35' : '#94A3B8'} />
            <span style={{ color: item.active ? '#FF6B35' : '#94A3B8', fontSize: '9px', marginTop: '2px', fontWeight: 500 }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </VideoMobileFrame>
);

// ============================================================================
// SCREEN 3: REWARDS
// ============================================================================
const VideoMobileRewardsScreen = ({ highlightPoints, highlightRewards }) => (
  <VideoMobileFrame scale={1.2}>
    <div style={{ height: '100%', background: '#FFFFFF', padding: '48px 16px 80px', overflowY: 'auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <p style={{ color: '#0F172A', fontSize: '20px', fontWeight: 600, margin: 0 }}>Rewards</p>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          background: '#FEF3C7',
          padding: '6px 10px',
          borderRadius: '8px',
          transition: 'all 0.5s ease',
          transform: highlightPoints ? 'scale(1.1)' : 'scale(1)',
          boxShadow: highlightPoints ? '0 4px 12px rgba(245,158,11,0.3)' : 'none'
        }}>
          <Zap size={14} color="#D97706" />
          <span style={{ color: '#D97706', fontSize: '12px', fontWeight: 600 }}>12 day streak</span>
        </div>
      </div>
      
      {/* Points Card */}
      <div style={{
        background: 'linear-gradient(135deg, #FF6B35 0%, #F59E0B 100%)',
        borderRadius: '20px',
        padding: '20px',
        marginBottom: '16px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.5s ease',
        transform: highlightPoints ? 'scale(1.02)' : 'scale(1)',
        boxShadow: highlightPoints ? '0 0 0 3px rgba(255,107,53,0.4), 0 20px 40px rgba(255,107,53,0.3)' : 'none'
      }}>
        <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '120px', height: '120px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
          <div>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', margin: 0 }}>Available Points</p>
            <p style={{ color: 'white', fontSize: '38px', fontWeight: 700, margin: '2px 0', letterSpacing: '-1px' }}>1,980</p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px', margin: 0 }}>Lifetime: 4,250 pts</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: '12px', padding: '10px 14px', textAlign: 'center' }}>
            <Award size={22} color="white" />
            <p style={{ color: 'white', fontSize: '11px', margin: '4px 0 0', fontWeight: 600 }}>Gold Level</p>
          </div>
        </div>
      </div>
      
      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', overflowX: 'auto' }}>
        {['All', 'Vouchers', 'Time Off', 'Merch'].map((tab, i) => (
          <span key={i} style={{
            padding: '8px 14px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 500,
            background: i === 0 ? '#FF6B35' : '#F8FAFC',
            color: i === 0 ? 'white' : '#64748B',
            border: i === 0 ? 'none' : '1px solid #E2E8F0',
            whiteSpace: 'nowrap'
          }}>{tab}</span>
        ))}
      </div>
      
      {/* Rewards List */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        transition: 'all 0.5s ease',
        transform: highlightRewards ? 'scale(1.01)' : 'scale(1)'
      }}>
        {[
          { name: '£20 Amazon', desc: 'Digital gift card', points: 500, icon: DollarSign, color: '#3B82F6' },
          { name: 'Extra Day Off', desc: 'Full day paid', points: 2000, icon: Clock, color: '#10B981', featured: true },
          { name: '£10 Coffee Shop', desc: 'Costa or Starbucks', points: 250, icon: Star, color: '#8B5CF6' },
          { name: 'Cinema Tickets x2', desc: 'Any Odeon cinema', points: 400, icon: Star, color: '#EC4899' }
        ].map((reward, i) => (
          <div key={i} style={{
            background: reward.featured ? 'linear-gradient(135deg, #F0FDF4, #ECFDF5)' : '#F8FAFC',
            borderRadius: '14px',
            padding: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            border: reward.featured ? '2px solid #10B981' : '1px solid #E2E8F0',
            transition: 'all 0.3s ease',
            boxShadow: (highlightRewards && reward.featured) ? '0 8px 24px rgba(16,185,129,0.25)' : 'none'
          }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: reward.featured ? '#10B981' : `${reward.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <reward.icon size={22} color={reward.featured ? 'white' : reward.color} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <p style={{ fontWeight: 600, fontSize: '13px', color: '#0F172A', margin: 0 }}>{reward.name}</p>
                {reward.featured && <span style={{ background: '#10B981', color: 'white', fontSize: '8px', padding: '2px 5px', borderRadius: '4px', fontWeight: 600 }}>POPULAR</span>}
              </div>
              <p style={{ fontSize: '11px', color: '#64748B', margin: '1px 0 0' }}>{reward.desc}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '13px', color: reward.featured ? '#10B981' : '#FF6B35', fontWeight: 700, margin: 0 }}>{reward.points} pts</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom Nav */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        padding: '8px 8px 20px',
        display: 'flex',
        justifyContent: 'space-around'
      }}>
        {[
          { icon: Home, label: 'Home', active: false },
          { icon: MessageSquare, label: 'Feed', active: false },
          { icon: Calendar, label: 'Schedule', active: false },
          { icon: FileCheck, label: 'Tasks', active: false },
          { icon: Target, label: 'Career', active: false },
          { icon: Award, label: 'Rewards', active: true },
          { icon: User, label: 'Profile', active: false }
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <item.icon size={20} color={item.active ? '#FF6B35' : '#94A3B8'} />
            <span style={{ color: item.active ? '#FF6B35' : '#94A3B8', fontSize: '9px', marginTop: '2px', fontWeight: 500 }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </VideoMobileFrame>
);

// ============================================================================
// SCREEN 4: FEED
// ============================================================================
const VideoMobileFeedScreen = ({ highlightRecognition }) => (
  <VideoMobileFrame scale={1.2}>
    <div style={{ height: '100%', background: '#FFFFFF', padding: '48px 16px 80px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <p style={{ color: '#0F172A', fontSize: '20px', fontWeight: 600, margin: 0 }}>Feed</p>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Bell size={20} color="#64748B" />
          <Plus size={20} color="#FF6B35" />
        </div>
      </div>
      
      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        {['All', 'Announcements', 'Recognition'].map((tab, i) => (
          <span key={i} style={{
            padding: '8px 14px',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: 500,
            background: i === 0 ? '#0F172A' : '#F8FAFC',
            color: i === 0 ? 'white' : '#64748B',
            border: i === 0 ? 'none' : '1px solid #E2E8F0'
          }}>{tab}</span>
        ))}
      </div>
      
      {/* Feed Posts */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {/* Recognition Post */}
        <div style={{
          background: 'linear-gradient(135deg, #FFF7ED, #FFFBEB)',
          borderRadius: '16px',
          padding: '16px',
          border: '1px solid #FFEDD5',
          transition: 'all 0.5s ease',
          transform: highlightRecognition ? 'scale(1.02)' : 'scale(1)',
          boxShadow: highlightRecognition ? '0 0 0 3px rgba(245,158,11,0.3), 0 15px 35px rgba(245,158,11,0.2)' : 'none'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ width: '40px', height: '40px', minWidth: '40px', flexShrink: 0, borderRadius: '50%', background: 'linear-gradient(135deg, #FF6B35, #F59E0B)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '14px', fontWeight: 600 }}>AT</div>
            <div style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
              <p style={{ fontWeight: 600, fontSize: '14px', color: '#0F172A', margin: 0 }}>Alex Thompson</p>
              <p style={{ fontSize: '12px', color: '#94A3B8', margin: '2px 0 0' }}>5 hours ago</p>
            </div>
            <div style={{ background: '#FEF3C7', padding: '4px 10px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
              <Star size={12} color="#D97706" />
              <span style={{ color: '#D97706', fontSize: '11px', fontWeight: 500 }}>Recognition</span>
            </div>
          </div>
          <p style={{ fontSize: '14px', color: '#334155', margin: 0, lineHeight: 1.5 }}>Shoutout to <strong style={{ color: '#FF6B35' }}>@Sarah M</strong> for covering my shift!</p>
          <div style={{ display: 'flex', gap: '20px', marginTop: '14px', paddingTop: '12px', borderTop: '1px solid #FFEDD5' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Star size={16} color="#F59E0B" fill="#F59E0B" />
              <span style={{ fontSize: '13px', color: '#92400E' }}>42</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MessageSquare size={16} color="#D97706" />
              <span style={{ fontSize: '13px', color: '#92400E' }}>12</span>
            </div>
          </div>
        </div>
        
        {/* Achievement Post */}
        <div style={{ background: 'linear-gradient(135deg, #F0FDF4, #ECFDF5)', borderRadius: '16px', padding: '16px', border: '1px solid #BBF7D0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ width: '40px', height: '40px', minWidth: '40px', flexShrink: 0, borderRadius: '50%', background: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '14px', fontWeight: 600 }}>ER</div>
            <div style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
              <p style={{ fontWeight: 600, fontSize: '14px', color: '#0F172A', margin: 0 }}>Emily Roberts</p>
              <p style={{ fontSize: '12px', color: '#94A3B8', margin: '2px 0 0' }}>Yesterday</p>
            </div>
            <div style={{ background: '#DCFCE7', padding: '4px 10px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
              <Award size={12} color="#16A34A" />
              <span style={{ color: '#16A34A', fontSize: '11px', fontWeight: 500 }}>Achievement</span>
            </div>
          </div>
          <p style={{ fontSize: '14px', color: '#334155', margin: 0, lineHeight: 1.5 }}>Just earned the <strong style={{ color: '#10B981' }}>First Aid Pro</strong> badge!</p>
          <div style={{ display: 'flex', gap: '20px', marginTop: '14px', paddingTop: '12px', borderTop: '1px solid #BBF7D0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Star size={16} color="#10B981" fill="#10B981" />
              <span style={{ fontSize: '13px', color: '#166534' }}>67</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MessageSquare size={16} color="#16A34A" />
              <span style={{ fontSize: '13px', color: '#166534' }}>15</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Nav */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        padding: '8px 8px 20px',
        display: 'flex',
        justifyContent: 'space-around'
      }}>
        {[
          { icon: Home, label: 'Home', active: false },
          { icon: MessageSquare, label: 'Feed', active: true },
          { icon: Calendar, label: 'Schedule', active: false },
          { icon: FileCheck, label: 'Tasks', active: false },
          { icon: Target, label: 'Career', active: false },
          { icon: Award, label: 'Rewards', active: false },
          { icon: User, label: 'Profile', active: false }
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <item.icon size={20} color={item.active ? '#FF6B35' : '#94A3B8'} />
            <span style={{ color: item.active ? '#FF6B35' : '#94A3B8', fontSize: '9px', marginTop: '2px', fontWeight: 500 }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </VideoMobileFrame>
);

// ============================================================================
// SCREEN 5: MANAGER MOBILE DASHBOARD
// ============================================================================
const ManagerMobileDashboard = ({ highlightStats, highlightApprovals, showApproved }) => (
  <VideoMobileFrame scale={1.2}>
    <div style={{ height: '100%', background: '#FFFFFF', padding: '48px 16px 80px', overflowY: 'auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <p style={{ color: '#64748B', fontSize: '13px', margin: 0 }}>Manager View</p>
          <p style={{ color: '#0F172A', fontSize: '20px', fontWeight: 600, margin: '2px 0 0' }}>Team Dashboard</p>
        </div>
        <div style={{ width: '40px', height: '40px', minWidth: '40px', minHeight: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #8B5CF6, #6366F1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 600, fontSize: '14px' }}>JM</div>
      </div>
      
      {/* Team Stats - Horizontal Cards */}
      <div style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '14px',
        transition: 'all 0.5s ease',
        transform: highlightStats ? 'scale(1.02)' : 'scale(1)'
      }}>
        {[
          { label: 'On Shift', value: '12', color: '#10B981', bg: '#DCFCE7' },
          { label: 'Late', value: '1', color: '#EF4444', bg: '#FEE2E2' },
          { label: 'On Break', value: '3', color: '#F59E0B', bg: '#FEF3C7' }
        ].map((stat, i) => (
          <div key={i} style={{
            flex: 1,
            background: stat.bg,
            borderRadius: '12px',
            padding: '12px 10px',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            boxShadow: highlightStats ? '0 4px 12px rgba(0,0,0,0.08)' : 'none'
          }}>
            <p style={{ color: stat.color, fontSize: '22px', fontWeight: 700, margin: 0 }}>{stat.value}</p>
            <p style={{ color: stat.color, fontSize: '10px', margin: '2px 0 0', fontWeight: 500, opacity: 0.8 }}>{stat.label}</p>
          </div>
        ))}
      </div>
      
      {/* Today's Coverage */}
      <div style={{ background: '#F8FAFC', borderRadius: '12px', padding: '12px', marginBottom: '14px', border: '1px solid #E2E8F0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <p style={{ fontWeight: 600, fontSize: '13px', color: '#0F172A', margin: 0 }}>Today's Coverage</p>
          <span style={{ color: '#10B981', fontSize: '12px', fontWeight: 600 }}>94%</span>
        </div>
        <div style={{ height: '6px', background: '#E2E8F0', borderRadius: '3px', overflow: 'hidden' }}>
          <div style={{ width: '94%', height: '100%', background: 'linear-gradient(90deg, #10B981, #34D399)', borderRadius: '3px' }} />
        </div>
        <p style={{ color: '#64748B', fontSize: '10px', margin: '6px 0 0' }}>15 of 16 shifts filled</p>
      </div>
      
      {/* Approvals Section */}
      <div style={{
        background: highlightApprovals ? 'linear-gradient(135deg, rgba(255,107,53,0.1), rgba(245,158,11,0.1))' : '#F8FAFC',
        borderRadius: '14px',
        padding: '14px',
        marginBottom: '14px',
        border: highlightApprovals ? '2px solid #FF6B35' : '1px solid #E2E8F0',
        transition: 'all 0.5s ease',
        transform: highlightApprovals ? 'scale(1.02)' : 'scale(1)',
        boxShadow: highlightApprovals ? '0 8px 24px rgba(255,107,53,0.15)' : 'none'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <p style={{ fontWeight: 600, fontSize: '14px', color: '#0F172A', margin: 0 }}>Pending Approvals</p>
            {!showApproved && (
              <span style={{
                background: '#FF6B35',
                color: 'white',
                fontSize: '10px',
                fontWeight: 700,
                padding: '2px 7px',
                borderRadius: '8px',
                animation: highlightApprovals ? 'pulse 1s infinite' : 'none'
              }}>3</span>
            )}
          </div>
          <span style={{ color: '#FF6B35', fontSize: '11px', fontWeight: 500 }}>View all</span>
        </div>
        
        {/* Approval Card */}
        <div style={{
          background: 'white',
          borderRadius: '10px',
          padding: '12px',
          border: showApproved ? '2px solid #10B981' : '1px solid #E2E8F0',
          transition: 'all 0.5s ease'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <div style={{ width: '36px', height: '36px', minWidth: '36px', minHeight: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #FF6B35, #F59E0B)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: 600 }}>ER</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontWeight: 600, fontSize: '13px', color: '#0F172A', margin: 0 }}>Emily Roberts</p>
              <p style={{ fontSize: '11px', color: '#64748B', margin: '1px 0 0' }}>Shift Swap Request</p>
            </div>
            {showApproved && (
              <div style={{ background: '#DCFCE7', borderRadius: '6px', padding: '4px 8px', display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                <CheckCircle2 size={12} color="#16A34A" />
                <span style={{ color: '#16A34A', fontSize: '10px', fontWeight: 600 }}>Done</span>
              </div>
            )}
          </div>
          <div style={{ background: '#F8FAFC', borderRadius: '6px', padding: '8px', marginBottom: '10px' }}>
            <p style={{ fontSize: '11px', color: '#64748B', margin: 0 }}>
              Swap <strong style={{ color: '#0F172A' }}>Sat 11 Jan</strong> with <strong style={{ color: '#0F172A' }}>James T.</strong>
            </p>
          </div>
          {!showApproved ? (
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{
                flex: 1,
                background: '#10B981',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                padding: '10px',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px'
              }}>
                <Check size={14} /> Approve
              </button>
              <button style={{
                flex: 1,
                background: '#F8FAFC',
                color: '#64748B',
                border: '1px solid #E2E8F0',
                borderRadius: '8px',
                padding: '10px',
                fontSize: '12px',
                fontWeight: 500,
                cursor: 'pointer'
              }}>
                Decline
              </button>
            </div>
          ) : (
            <p style={{ fontSize: '11px', color: '#10B981', textAlign: 'center', margin: 0, fontWeight: 500 }}>
              ✓ Both employees notified
            </p>
          )}
        </div>
      </div>
      
      {/* Bottom Nav - Manager 4 tabs */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        padding: '8px 16px 20px',
        display: 'flex',
        justifyContent: 'space-around'
      }}>
        {[
          { icon: Home, label: 'Dashboard', active: true },
          { icon: CheckCircle2, label: 'Approvals', active: false, badge: !showApproved ? 3 : 0 },
          { icon: Users, label: 'Team', active: false },
          { icon: Calendar, label: 'Schedule', active: false }
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <item.icon size={22} color={item.active ? '#FF6B35' : '#94A3B8'} />
            </div>
            {item.badge > 0 && (
              <span style={{
                position: 'absolute',
                top: '-2px',
                right: '4px',
                background: '#EF4444',
                color: 'white',
                fontSize: '8px',
                fontWeight: 700,
                padding: '1px 4px',
                borderRadius: '6px',
                minWidth: '14px',
                textAlign: 'center'
              }}>{item.badge}</span>
            )}
            <span style={{ color: item.active ? '#FF6B35' : '#94A3B8', fontSize: '9px', marginTop: '2px', fontWeight: 500 }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </VideoMobileFrame>
);
// ============================================================================
// SCREEN 6: PORTAL - PEOPLE HUB
// ============================================================================
const VideoPortalPeopleHub = ({ highlightStats, highlightTable }) => (
  <VideoBrowserFrame url="portal.uplifthq.co.uk/people" scale={0.75}>
    <div style={{ display: 'flex', height: '520px' }}>
      {/* Sidebar */}
      <div style={{ width: '64px', background: '#0F172A', padding: '16px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <RisingULogo variant="mark" size={32} />
        <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[BarChart3, Users, Calendar, Award, Briefcase, Link2, Settings].map((Icon, i) => (
            <div key={i} style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: i === 1 ? 'rgba(255,107,53,0.2)' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Icon size={20} color={i === 1 ? '#FF6B35' : '#64748B'} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Main Content */}
      <div style={{ flex: 1, background: '#F8FAFC', padding: '20px', overflowY: 'auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div>
            <h1 style={{ fontSize: '20px', fontWeight: 600, color: '#0F172A', margin: 0 }}>People Hub</h1>
            <p style={{ color: '#64748B', fontSize: '13px', marginTop: '2px' }}>156 employees • Oxford Street</p>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <div style={{ background: 'white', borderRadius: '8px', padding: '10px 14px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Search size={16} color="#64748B" />
              <span style={{ fontSize: '13px', color: '#94A3B8' }}>Search employees...</span>
            </div>
            <button style={{ background: '#0F172A', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 16px', fontWeight: 500, fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Plus size={16} /> Add Employee
            </button>
          </div>
        </div>
        
        {/* Stats Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '12px',
          marginBottom: '16px',
          transition: 'all 0.5s ease',
          transform: highlightStats ? 'scale(1.01)' : 'scale(1)'
        }}>
          {[
            { label: 'Total', value: '156', color: '#3B82F6', icon: Users },
            { label: 'Active Today', value: '42', color: '#10B981', icon: Calendar },
            { label: 'On Leave', value: '8', color: '#8B5CF6', icon: Clock },
            { label: 'At Risk', value: '3', color: '#EF4444', icon: AlertCircle },
            { label: 'Ready for Promotion', value: '12', color: '#FF6B35', icon: TrendingUp }
          ].map((stat, i) => (
            <div key={i} style={{
              background: 'white',
              borderRadius: '12px',
              padding: '14px',
              border: '1px solid #E2E8F0',
              transition: 'all 0.3s ease',
              boxShadow: highlightStats ? '0 4px 12px rgba(0,0,0,0.05)' : 'none'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <p style={{ color: '#64748B', fontSize: '12px', margin: 0 }}>{stat.label}</p>
                <stat.icon size={16} color={stat.color} />
              </div>
              <span style={{ fontSize: '26px', fontWeight: 700, color: '#0F172A' }}>{stat.value}</span>
            </div>
          ))}
        </div>
        
        {/* Filter Tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
          {['All Employees', 'Scheduled Today', 'At Risk', 'Ready for Promotion'].map((tab, i) => (
            <span key={i} style={{
              padding: '8px 14px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: 500,
              background: i === 0 ? '#0F172A' : 'white',
              color: i === 0 ? 'white' : '#64748B',
              border: i === 0 ? 'none' : '1px solid #E2E8F0',
              cursor: 'pointer'
            }}>{tab}</span>
          ))}
        </div>
        
        {/* Employee Table */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          border: '1px solid #E2E8F0',
          overflow: 'hidden',
          transition: 'all 0.5s ease',
          boxShadow: highlightTable ? '0 8px 24px rgba(0,0,0,0.08)' : 'none'
        }}>
          {/* Table Header */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr 1fr 0.8fr 1fr 80px', padding: '12px 16px', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#64748B', letterSpacing: '0.5px' }}>EMPLOYEE</span>
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#64748B', letterSpacing: '0.5px' }}>ROLE</span>
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#64748B', letterSpacing: '0.5px' }}>SKILLS</span>
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#64748B', letterSpacing: '0.5px' }}>TENURE</span>
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#64748B', letterSpacing: '0.5px' }}>STATUS</span>
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#64748B', letterSpacing: '0.5px' }}>ACTIONS</span>
          </div>
          
          {/* Employee Rows */}
          {[
            { name: 'Sarah Mitchell', avatar: 'SM', role: 'Shift Supervisor', skills: 95, tenure: '2y 3m', status: 'promotion', statusLabel: 'Ready', color: '#FF6B35' },
            { name: 'Emily Roberts', avatar: 'ER', role: 'Senior Associate', skills: 87, tenure: '1y 8m', status: 'active', statusLabel: 'Active', color: '#10B981' },
            { name: 'James Taylor', avatar: 'JT', role: 'Associate', skills: 72, tenure: '11m', status: 'active', statusLabel: 'Active', color: '#10B981' },
            { name: 'Alex Thompson', avatar: 'AT', role: 'Associate', skills: 65, tenure: '8m', status: 'training', statusLabel: 'Training', color: '#8B5CF6' },
            { name: 'Lisa Chen', avatar: 'LC', role: 'Associate', skills: 45, tenure: '3m', status: 'risk', statusLabel: 'At Risk', color: '#EF4444' },
            { name: 'David Park', avatar: 'DP', role: 'Team Lead', skills: 92, tenure: '3y 1m', status: 'active', statusLabel: 'Active', color: '#10B981' }
          ].map((emp, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr 1fr 0.8fr 1fr 80px', padding: '14px 16px', borderBottom: i < 5 ? '1px solid #F1F5F9' : 'none', alignItems: 'center' }}>
              {/* Employee */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: `linear-gradient(135deg, ${emp.color}, ${emp.color}99)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: 600 }}>{emp.avatar}</div>
                <span style={{ fontSize: '14px', fontWeight: 500, color: '#0F172A' }}>{emp.name}</span>
              </div>
              {/* Role */}
              <span style={{ fontSize: '13px', color: '#64748B' }}>{emp.role}</span>
              {/* Skills Progress */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '60px', height: '6px', background: '#E2E8F0', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: `${emp.skills}%`, height: '100%', background: emp.skills >= 90 ? '#10B981' : emp.skills >= 70 ? '#3B82F6' : emp.skills >= 50 ? '#F59E0B' : '#EF4444', borderRadius: '3px' }} />
                </div>
                <span style={{ fontSize: '12px', color: '#64748B', fontWeight: 500 }}>{emp.skills}%</span>
              </div>
              {/* Tenure */}
              <span style={{ fontSize: '13px', color: '#64748B' }}>{emp.tenure}</span>
              {/* Status */}
              <span style={{ fontSize: '11px', fontWeight: 600, color: emp.color, background: `${emp.color}15`, padding: '5px 10px', borderRadius: '6px', display: 'inline-block', width: 'fit-content' }}>{emp.statusLabel}</span>
              {/* Actions */}
              <div style={{ display: 'flex', gap: '6px' }}>
                <div style={{ width: '30px', height: '30px', borderRadius: '6px', background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <Eye size={14} color="#64748B" />
                </div>
                <div style={{ width: '30px', height: '30px', borderRadius: '6px', background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <MoreHorizontal size={14} color="#64748B" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </VideoBrowserFrame>
);

// ============================================================================
// SCREEN 6: PORTAL - AI SCHEDULER (with animation states)
// ============================================================================
const VideoPortalAIScheduler = ({ highlightRules, highlightButton, showFilled }) => (
  <VideoBrowserFrame url="portal.uplifthq.co.uk/schedule" scale={0.75}>
    <div style={{ display: 'flex', height: '520px' }}>
      {/* Sidebar */}
      <div style={{ width: '64px', background: '#0F172A', padding: '16px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <RisingULogo variant="mark" size={32} />
        <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[BarChart3, Users, Calendar, Award, Briefcase, Link2, Settings].map((Icon, i) => (
            <div key={i} style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: i === 2 ? 'rgba(255,107,53,0.2)' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Icon size={20} color={i === 2 ? '#FF6B35' : '#64748B'} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Main Content */}
      <div style={{ flex: 1, background: '#F8FAFC', padding: '20px', display: 'flex', gap: '20px' }}>
        {/* Schedule Grid */}
        <div style={{ flex: 1 }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <div>
              <h1 style={{ fontSize: '20px', fontWeight: 600, color: '#0F172A', margin: 0 }}>Schedule</h1>
              <p style={{ color: '#64748B', fontSize: '13px', marginTop: '2px' }}>Week of 6 Jan 2025</p>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{ background: 'white', color: '#0F172A', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '8px 12px', fontSize: '13px', display: 'flex', alignItems: 'center' }}>
                <ChevronLeft size={16} />
              </button>
              <button style={{ background: 'white', color: '#0F172A', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '8px 12px', fontSize: '13px', display: 'flex', alignItems: 'center' }}>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
          
          {/* Cost Summary */}
          <div style={{ display: 'flex', gap: '20px', marginBottom: '14px', background: 'white', borderRadius: '10px', padding: '12px 16px', border: '1px solid #E2E8F0' }}>
            {[
              { label: 'Total Hours', value: '312h', color: '#3B82F6' },
              { label: 'Labour Cost', value: '£4,680', color: '#10B981' },
              { label: 'Budget', value: '£5,000', color: '#64748B' },
              { label: 'Open Shifts', value: showFilled ? '0' : '3', color: showFilled ? '#10B981' : '#F59E0B' }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '12px', color: '#64748B' }}>{item.label}:</span>
                <span style={{ fontSize: '14px', fontWeight: 600, color: item.color, transition: 'all 0.3s ease' }}>{item.value}</span>
              </div>
            ))}
          </div>
          
          {/* Schedule Grid */}
          <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
            {/* Header Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '140px repeat(7, 1fr)', borderBottom: '1px solid #E2E8F0' }}>
              <div style={{ padding: '12px', background: '#F8FAFC', borderRight: '1px solid #E2E8F0' }}>
                <span style={{ fontSize: '11px', fontWeight: 600, color: '#64748B' }}>EMPLOYEE</span>
              </div>
              {['Mon 6', 'Tue 7', 'Wed 8', 'Thu 9', 'Fri 10', 'Sat 11', 'Sun 12'].map((day, i) => (
                <div key={i} style={{ padding: '12px', textAlign: 'center', background: i === 4 ? '#FFF7ED' : '#F8FAFC', borderRight: i < 6 ? '1px solid #E2E8F0' : 'none' }}>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: i === 4 ? '#FF6B35' : '#64748B' }}>{day}</span>
                </div>
              ))}
            </div>
            
            {/* Employee Rows */}
            {[
              { name: 'Sarah M.', role: 'Supervisor', rate: '£15/h', shifts: ['09-17', '09-17', 'OFF', '12-20', '12-20', '09-17', 'OFF'] },
              { name: 'Emily R.', role: 'Sr Associate', rate: '£13/h', shifts: ['12-20', '12-20', '12-20', 'OFF', 'OFF', '09-17', '09-17'] },
              { name: 'James T.', role: 'Associate', rate: '£12/h', shifts: ['09-17', 'OFF', '09-17', '09-17', '12-20', 'OFF', showFilled ? '09-17' : 'OPEN'] },
              { name: 'Alex T.', role: 'Associate', rate: '£12/h', shifts: ['OFF', '12-20', '12-20', '12-20', '12-20', '10-18', 'OFF'] },
              { name: 'Lisa C.', role: 'Associate', rate: '£12/h', shifts: [showFilled ? '12-20' : 'OPEN', '09-17', '09-17', 'OFF', '09-17', showFilled ? '09-17' : 'OPEN', '12-20'] }
            ].map((emp, rowIndex) => (
              <div key={rowIndex} style={{ display: 'grid', gridTemplateColumns: '140px repeat(7, 1fr)', borderBottom: rowIndex < 4 ? '1px solid #F1F5F9' : 'none' }}>
                <div style={{ padding: '12px', borderRight: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '13px', fontWeight: 500, color: '#0F172A' }}>{emp.name}</span>
                  <span style={{ fontSize: '11px', color: '#64748B' }}>{emp.role} • {emp.rate}</span>
                </div>
                {emp.shifts.map((shift, colIndex) => (
                  <div key={colIndex} style={{ 
                    padding: '10px 6px', 
                    textAlign: 'center', 
                    background: colIndex === 4 ? '#FFFBEB' : 'transparent',
                    borderRight: colIndex < 6 ? '1px solid #F1F5F9' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {shift === 'OFF' ? (
                      <span style={{ fontSize: '11px', color: '#94A3B8' }}>OFF</span>
                    ) : shift === 'OPEN' ? (
                      <div style={{ background: '#FEF3C7', border: '2px dashed #F59E0B', borderRadius: '6px', padding: '6px 10px', animation: 'pulse 1.5s infinite' }}>
                        <span style={{ fontSize: '10px', color: '#D97706', fontWeight: 600 }}>OPEN</span>
                      </div>
                    ) : (
                      <div style={{
                        background: showFilled && (emp.shifts[colIndex] !== emp.shifts[colIndex]) ? '#DCFCE7' : '#F0FDF4',
                        borderRadius: '6px',
                        padding: '6px 10px',
                        transition: 'all 0.5s ease',
                        boxShadow: showFilled ? '0 2px 8px rgba(16,185,129,0.2)' : 'none'
                      }}>
                        <span style={{ fontSize: '11px', color: '#16A34A', fontWeight: 500 }}>{shift}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        {/* AI Panel */}
        <div style={{
          width: '220px',
          background: 'white',
          borderRadius: '12px',
          border: '1px solid #E2E8F0',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.5s ease',
          boxShadow: highlightRules ? '0 0 0 3px rgba(139,92,246,0.3), 0 8px 24px rgba(139,92,246,0.15)' : 'none'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, #8B5CF6, #6366F1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Brain size={18} color="white" />
            </div>
            <div>
              <p style={{ fontWeight: 600, fontSize: '14px', color: '#0F172A', margin: 0 }}>AI Scheduler</p>
              <p style={{ fontSize: '11px', color: '#64748B', margin: 0 }}>8 rules active</p>
            </div>
          </div>
          
          {/* Rules */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
            {[
              { label: 'Min rest between shifts', value: '11h' },
              { label: 'Max hours per week', value: '48h' },
              { label: 'Required skills match', value: 'On' },
              { label: 'Supervisor ratio', value: '1:5' },
              { label: 'Max consecutive days', value: '6' },
              { label: 'Prefer availability', value: 'On' },
              { label: 'Fair distribution', value: '±10%' },
              { label: 'Skill-based matching', value: 'On' }
            ].map((rule, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: i < 7 ? '1px solid #F1F5F9' : 'none' }}>
                <span style={{ fontSize: '11px', color: '#64748B' }}>{rule.label}</span>
                <span style={{ fontSize: '11px', fontWeight: 600, color: '#8B5CF6' }}>{rule.value}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <button style={{
            background: showFilled ? '#10B981' : 'linear-gradient(135deg, #8B5CF6, #6366F1)',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            padding: '14px',
            fontSize: '13px',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            transition: 'all 0.5s ease',
            transform: highlightButton ? 'scale(1.05)' : 'scale(1)',
            boxShadow: highlightButton ? '0 8px 24px rgba(139,92,246,0.4)' : showFilled ? '0 4px 12px rgba(16,185,129,0.3)' : 'none'
          }}>
            {showFilled ? (
              <><CheckCircle2 size={16} /> All Shifts Filled</>
            ) : (
              <><Sparkles size={16} /> Fill 3 Open Shifts</>
            )}
          </button>
          
          <p style={{ fontSize: '10px', color: '#94A3B8', textAlign: 'center', marginTop: '10px' }}>
            {showFilled ? 'Filled just now' : 'Last generated: 2h ago'}
          </p>
        </div>
      </div>
      
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(0.98); }
        }
      `}</style>
    </div>
  </VideoBrowserFrame>
);

// ============================================================================
// SCREEN 7: PORTAL - SKILLS MATRIX
// ============================================================================
const VideoPortalSkillsMatrix = ({ highlightGrid }) => (
  <VideoBrowserFrame url="portal.uplifthq.co.uk/skills" scale={0.75}>
    <div style={{ display: 'flex', height: '480px' }}>
      {/* Sidebar */}
      <div style={{ width: '64px', background: '#0F172A', padding: '16px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <RisingULogo variant="mark" size={32} />
        <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[BarChart3, Users, Calendar, Award, Briefcase, Link2, Settings].map((Icon, i) => (
            <div key={i} style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: i === 3 ? 'rgba(255,107,53,0.2)' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Icon size={20} color={i === 3 ? '#FF6B35' : '#64748B'} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Main Content */}
      <div style={{ flex: 1, background: '#F8FAFC', padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h1 style={{ fontSize: '20px', fontWeight: 600, color: '#0F172A', margin: 0 }}>Skills Matrix</h1>
          <button style={{ background: '#0F172A', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 16px', fontWeight: 500, fontSize: '13px', cursor: 'pointer' }}>+ Add Skill</button>
        </div>
        
        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '16px' }}>
          {[
            { label: 'Total Skills', value: '12', icon: Award, color: '#3B82F6' },
            { label: 'Verified', value: '186', change: '+12%', icon: CheckCircle2, color: '#10B981' },
            { label: 'Pending', value: '23', icon: Clock, color: '#F59E0B' },
            { label: 'Expiring Soon', value: '11', warning: true, icon: AlertCircle, color: '#EF4444' }
          ].map((stat, i) => (
            <div key={i} style={{ background: 'white', borderRadius: '12px', padding: '14px', border: '1px solid #E2E8F0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div>
                  <p style={{ color: '#64748B', fontSize: '12px', margin: 0 }}>{stat.label}</p>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginTop: '6px' }}>
                    <span style={{ fontSize: '24px', fontWeight: 700, color: stat.warning ? '#EF4444' : '#0F172A' }}>{stat.value}</span>
                    {stat.change && <span style={{ color: '#10B981', fontSize: '12px', fontWeight: 500 }}>{stat.change}</span>}
                  </div>
                </div>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: `${stat.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <stat.icon size={16} color={stat.color} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
          transition: 'all 0.5s ease',
          transform: highlightGrid ? 'scale(1.01)' : 'scale(1)'
        }}>
          {[
            { name: 'Cash Handling', category: 'Core', verified: 45, total: 52, color: '#3B82F6', level: 'Basic' },
            { name: 'Customer Service', category: 'Core', verified: 52, total: 58, color: '#3B82F6', level: 'Advanced' },
            { name: 'First Aid', category: 'Safety', verified: 23, total: 35, color: '#EF4444', required: true, level: 'Certified' },
            { name: 'Food Safety L2', category: 'Compliance', verified: 18, total: 25, color: '#8B5CF6', level: 'Certified' },
            { name: 'Team Leadership', category: 'Management', verified: 15, total: 20, color: '#10B981', level: 'Intermediate' },
            { name: 'Forklift License', category: 'Specialist', verified: 8, total: 12, color: '#F59E0B', required: true, level: 'Licensed' }
          ].map((skill, i) => (
            <div key={i} style={{
              background: 'white',
              borderRadius: '12px',
              padding: '14px',
              border: '1px solid #E2E8F0',
              transition: 'all 0.3s ease',
              boxShadow: highlightGrid ? '0 4px 12px rgba(0,0,0,0.05)' : 'none'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '10px' }}>
                <div>
                  <p style={{ fontWeight: 600, fontSize: '14px', color: '#0F172A', margin: 0 }}>{skill.name}</p>
                  <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
                    <span style={{ fontSize: '10px', color: skill.color, background: `${skill.color}15`, padding: '3px 8px', borderRadius: '4px', fontWeight: 500 }}>{skill.category}</span>
                    <span style={{ fontSize: '10px', color: '#64748B', background: '#F1F5F9', padding: '3px 8px', borderRadius: '4px' }}>{skill.level}</span>
                  </div>
                </div>
                {skill.required && <span style={{ fontSize: '9px', color: '#EF4444', background: '#FEE2E2', padding: '3px 8px', borderRadius: '4px', fontWeight: 600 }}>Required</span>}
              </div>
              {/* Progress Ring + Stats */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '12px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: `conic-gradient(${skill.color} 0deg ${skill.verified/skill.total*360}deg, #E2E8F0 ${skill.verified/skill.total*360}deg 360deg)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#0F172A' }}>{Math.round(skill.verified/skill.total*100)}%</span>
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: '13px', color: '#0F172A', margin: 0 }}><strong>{skill.verified}</strong> / {skill.total} verified</p>
                  <p style={{ fontSize: '12px', color: '#64748B', margin: '2px 0 0' }}>{skill.total - skill.verified} pending</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </VideoBrowserFrame>
);

// ============================================================================
// VIDEO TIMELINE CONFIGURATION
// ============================================================================
const videoTimeline = [
  // INTRO - 5 sec
  {
    id: 'intro',
    duration: 5000,
    type: 'intro'
  },
  // MOMENT 1: Worker's Morning - 12 sec (highlight sequence)
  {
    id: 'home-1',
    duration: 3500,
    type: 'mobile',
    screen: 'home',
    overlay: {
      label: 'THE MORNING',
      headline: 'Sarah starts her shift.',
      position: 'left'
    },
    highlights: { earnings: true }
  },
  {
    id: 'home-2',
    duration: 2500,
    type: 'mobile',
    screen: 'home',
    overlay: {
      subtext: 'Her earnings this week',
      position: 'left'
    },
    highlights: { earnings: true }
  },
  {
    id: 'home-3',
    duration: 2500,
    type: 'mobile',
    screen: 'home',
    overlay: {
      subtext: 'Next shift in 2 hours',
      position: 'left'
    },
    highlights: { shift: true }
  },
  {
    id: 'home-4',
    duration: 3500,
    type: 'mobile',
    screen: 'home',
    overlay: {
      subtext: '"3 skills away from Shift Supervisor"',
      position: 'left'
    },
    highlights: { career: true }
  },
  {
    id: 'home-message',
    duration: 3000,
    type: 'mobile',
    screen: 'home',
    overlay: {
      message: "She's not just clocking in. She's building toward something.",
      position: 'left'
    },
    highlights: {}
  },
  // MOMENT 2: Career Path - 7 sec
  {
    id: 'career-1',
    duration: 3000,
    type: 'mobile',
    screen: 'career',
    overlay: {
      label: 'THE PATH',
      headline: 'She can see exactly where she\'s going.',
      position: 'left'
    },
    highlights: { ladder: true }
  },
  {
    id: 'career-2',
    duration: 2500,
    type: 'mobile',
    screen: 'career',
    overlay: {
      subtext: 'Skills needed. Timeline. Pay increase.',
      position: 'left'
    },
    highlights: { next: true }
  },
  {
    id: 'career-message',
    duration: 3000,
    type: 'mobile',
    screen: 'career',
    overlay: {
      message: 'Clarity creates retention.',
      position: 'left'
    },
    highlights: {}
  },
  // MOMENT 3: Rewards - 6 sec
  {
    id: 'rewards-1',
    duration: 3000,
    type: 'mobile',
    screen: 'rewards',
    overlay: {
      label: 'THE REWARD',
      headline: 'Every task earns points.',
      position: 'left'
    },
    highlights: { points: true }
  },
  {
    id: 'rewards-2',
    duration: 2500,
    type: 'mobile',
    screen: 'rewards',
    overlay: {
      subtext: 'Real rewards — gift cards, PTO, merch.',
      position: 'left'
    },
    highlights: { rewards: true }
  },
  {
    id: 'rewards-message',
    duration: 2500,
    type: 'mobile',
    screen: 'rewards',
    overlay: {
      message: 'Engagement that actually works.',
      position: 'left'
    },
    highlights: {}
  },
  // MOMENT 4: Feed - 4 sec
  {
    id: 'feed-1',
    duration: 2000,
    type: 'mobile',
    screen: 'feed',
    overlay: {
      label: 'THE TEAM',
      headline: 'A team that celebrates each other.',
      position: 'left'
    },
    highlights: { recognition: true }
  },
  {
    id: 'feed-message',
    duration: 2000,
    type: 'mobile',
    screen: 'feed',
    overlay: {
      message: 'Culture, visible.',
      position: 'left'
    },
    highlights: {}
  },
  // MOMENT 5: Manager Mobile - 11 sec (NEW)
  {
    id: 'manager-mobile-1',
    duration: 3000,
    type: 'manager-mobile',
    screen: 'manager',
    overlay: {
      label: 'THE MANAGER',
      headline: 'Your team at a glance.',
      position: 'left'
    },
    highlights: { stats: true },
    managerState: { showApproved: false }
  },
  {
    id: 'manager-mobile-2',
    duration: 3000,
    type: 'manager-mobile',
    screen: 'manager',
    overlay: {
      subtext: 'Requests that need you.',
      position: 'left'
    },
    highlights: { approvals: true },
    managerState: { showApproved: false }
  },
  {
    id: 'manager-mobile-3',
    duration: 2500,
    type: 'manager-mobile',
    screen: 'manager',
    overlay: {
      subtext: 'One tap. Done.',
      position: 'left'
    },
    highlights: {},
    managerState: { showApproved: true }
  },
  {
    id: 'manager-mobile-message',
    duration: 2500,
    type: 'manager-mobile',
    screen: 'manager',
    overlay: {
      message: 'Management from your pocket.',
      position: 'left'
    },
    highlights: {},
    managerState: { showApproved: true }
  },
  // TRANSITION - 4 sec
  {
    id: 'transition',
    duration: 4000,
    type: 'transition',
    headline: "Now let's see the desktop view.",
    subtext: 'Full visibility. Complete control.'
  },
  // MOMENT 6: People Hub - 7 sec
  {
    id: 'people-1',
    duration: 3000,
    type: 'portal',
    screen: 'people',
    overlay: {
      label: 'THE HUB',
      headline: 'Know your team. Really know them.',
      position: 'top'
    },
    highlights: { stats: true }
  },
  {
    id: 'people-2',
    duration: 2000,
    type: 'portal',
    screen: 'people',
    overlay: {
      subtext: 'Skills, tenure, retention risk.',
      position: 'top'
    },
    highlights: { table: true }
  },
  {
    id: 'people-message',
    duration: 2000,
    type: 'portal',
    screen: 'people',
    overlay: {
      message: 'Visibility you\'ve never had.',
      position: 'top'
    },
    highlights: {}
  },
  // MOMENT 7: AI Scheduler - 12 sec (the "holy shit" moment)
  {
    id: 'scheduler-1',
    duration: 3000,
    type: 'portal',
    screen: 'scheduler',
    overlay: {
      label: 'THE MAGIC',
      headline: '3 open shifts. 8 rules. One click.',
      position: 'top'
    },
    highlights: { rules: true },
    schedulerState: { showFilled: false }
  },
  {
    id: 'scheduler-2',
    duration: 3000,
    type: 'portal',
    screen: 'scheduler',
    overlay: {
      subtext: 'AI that follows YOUR rules.',
      position: 'top'
    },
    highlights: { button: true },
    schedulerState: { showFilled: false }
  },
  {
    id: 'scheduler-3',
    duration: 4000,
    type: 'portal',
    screen: 'scheduler',
    overlay: {
      subtext: '✓ All shifts filled',
      position: 'top'
    },
    highlights: {},
    schedulerState: { showFilled: true }
  },
  {
    id: 'scheduler-message',
    duration: 2000,
    type: 'portal',
    screen: 'scheduler',
    overlay: {
      message: 'The panic that wasn\'t.',
      position: 'top'
    },
    highlights: {},
    schedulerState: { showFilled: true }
  },
  // MOMENT 8: Skills Matrix - 6 sec
  {
    id: 'skills-1',
    duration: 3000,
    type: 'portal',
    screen: 'skills',
    overlay: {
      label: 'THE PROOF',
      headline: 'Every certification. Every gap.',
      position: 'top'
    },
    highlights: { grid: true }
  },
  {
    id: 'skills-message',
    duration: 3000,
    type: 'portal',
    screen: 'skills',
    overlay: {
      message: 'Audit-ready, always.',
      position: 'top'
    },
    highlights: {}
  },
  // CLOSING - 9 sec
  {
    id: 'closing',
    duration: 9000,
    type: 'closing'
  }
];

// Calculate total duration
const totalDuration = videoTimeline.reduce((acc, item) => acc + item.duration, 0);

// ============================================================================
// ROI CALCULATOR COMPONENT
// ============================================================================
const ROICalculator = () => {
  const [headcount, setHeadcount] = useState(250);
  const [turnoverRate, setTurnoverRate] = useState(60);
  const [costPerHire, setCostPerHire] = useState(3000);
  const [showResults, setShowResults] = useState(false);
  
  // Calculations
  const annualLeavers = Math.round(headcount * (turnoverRate / 100));
  const currentCost = annualLeavers * costPerHire;
  const projectedReduction = 0.30; // 30% reduction target
  const savedHires = Math.round(annualLeavers * projectedReduction);
  const annualSavings = savedHires * costPerHire;
  
  // Uplift cost estimate
  const getTier = () => {
    if (headcount < 50) return null;
    if (headcount <= 250) return { name: 'Growth', rate: 10, fullRate: 15 };
    if (headcount <= 750) return { name: 'Scale', rate: 8, fullRate: 12 };
    return { name: 'Enterprise', rate: null, fullRate: null };
  };
  
  const tier = getTier();
  const annualUpliftCost = tier && tier.rate ? headcount * tier.rate * 12 : null;
  const netSavings = annualUpliftCost ? annualSavings - annualUpliftCost : annualSavings;
  const roi = annualUpliftCost ? Math.round((netSavings / annualUpliftCost) * 100) : null;
  
  const handleCalculate = () => {
    setShowResults(true);
  };
  
  const generatePDF = () => {
    // Create printable content
    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Uplift ROI Analysis</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 40px; max-width: 800px; margin: 0 auto; }
          h1 { color: #FF6B35; }
          h2 { color: #0F172A; border-bottom: 2px solid #FF6B35; padding-bottom: 8px; }
          .metric { background: #F8FAFC; padding: 20px; margin: 10px 0; border-radius: 8px; }
          .metric-value { font-size: 32px; font-weight: bold; color: #0F172A; }
          .metric-label { color: #64748B; font-size: 14px; }
          .highlight { background: #FFF7ED; border-left: 4px solid #FF6B35; padding: 20px; margin: 20px 0; }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
          .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #E2E8F0; color: #64748B; font-size: 12px; }
        </style>
      </head>
      <body>
        <h1>Uplift ROI Analysis</h1>
        <p>Prepared for your organisation • ${new Date().toLocaleDateString()}</p>
        
        <h2>Your Current Situation</h2>
        <div class="grid">
          <div class="metric">
            <div class="metric-value">${headcount}</div>
            <div class="metric-label">Total headcount</div>
          </div>
          <div class="metric">
            <div class="metric-value">${turnoverRate}%</div>
            <div class="metric-label">Annual turnover rate</div>
          </div>
          <div class="metric">
            <div class="metric-value">£${costPerHire.toLocaleString()}</div>
            <div class="metric-label">Cost per hire</div>
          </div>
          <div class="metric">
            <div class="metric-value">${annualLeavers}</div>
            <div class="metric-label">Estimated annual leavers</div>
          </div>
        </div>
        
        <div class="highlight">
          <div class="metric-label">Current annual turnover cost</div>
          <div class="metric-value">£${currentCost.toLocaleString()}</div>
        </div>
        
        <h2>Projected Impact with Uplift</h2>
        <div class="grid">
          <div class="metric">
            <div class="metric-value">30%</div>
            <div class="metric-label">Target turnover reduction</div>
          </div>
          <div class="metric">
            <div class="metric-value">${savedHires}</div>
            <div class="metric-label">Fewer hires needed</div>
          </div>
        </div>
        
        <div class="highlight">
          <div class="metric-label">Projected annual savings</div>
          <div class="metric-value" style="color: #10B981;">£${annualSavings.toLocaleString()}</div>
        </div>
        
        ${tier ? `
        <h2>Investment & Return</h2>
        <div class="grid">
          <div class="metric">
            <div class="metric-value">${tier.name}</div>
            <div class="metric-label">Recommended tier</div>
          </div>
          ${annualUpliftCost ? `
          <div class="metric">
            <div class="metric-value">£${annualUpliftCost.toLocaleString()}/yr</div>
            <div class="metric-label">Uplift investment (design partner rate)</div>
          </div>
          ` : ''}
        </div>
        ${netSavings ? `
        <div class="highlight" style="background: #DCFCE7; border-color: #10B981;">
          <div class="metric-label">Net annual savings</div>
          <div class="metric-value" style="color: #10B981;">£${netSavings.toLocaleString()}</div>
          ${roi ? `<div class="metric-label" style="margin-top: 8px;">${roi}% ROI</div>` : ''}
        </div>
        ` : ''}
        ` : ''}
        
        <h2>Next Steps</h2>
        <ol>
          <li>Book a 30-minute discovery call</li>
          <li>Start your 30-day pilot (1 location, up to 50 users)</li>
          <li>See real results with your own team</li>
        </ol>
        
        <div class="footer">
          <p><strong>Uplift</strong> — Workforce intelligence for frontline teams</p>
          <p>Book a call: calendly.com/dazevedo-uplifthq/30min</p>
          <p>This analysis is based on industry benchmarks and your provided inputs. Actual results may vary.</p>
        </div>
      </body>
      </html>
    `;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
  };
  
  return (
    <div>
      {/* Input Section */}
      <div className="roi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '32px' }}>
        <div>
          <label style={{ display: 'block', color: '#94A3B8', fontSize: '13px', marginBottom: '8px' }}>
            Total headcount
          </label>
          <input
            type="number"
            value={headcount}
            onChange={(e) => { setHeadcount(Number(e.target.value)); setShowResults(false); }}
            style={{
              width: '100%',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '8px',
              padding: '14px 16px',
              color: 'white',
              fontSize: '18px',
              fontWeight: 600
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', color: '#94A3B8', fontSize: '13px', marginBottom: '8px' }}>
            Annual turnover rate (%)
          </label>
          <input
            type="number"
            value={turnoverRate}
            onChange={(e) => { setTurnoverRate(Number(e.target.value)); setShowResults(false); }}
            style={{
              width: '100%',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '8px',
              padding: '14px 16px',
              color: 'white',
              fontSize: '18px',
              fontWeight: 600
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', color: '#94A3B8', fontSize: '13px', marginBottom: '8px' }}>
            Cost per hire (£)
          </label>
          <input
            type="number"
            value={costPerHire}
            onChange={(e) => { setCostPerHire(Number(e.target.value)); setShowResults(false); }}
            style={{
              width: '100%',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '8px',
              padding: '14px 16px',
              color: 'white',
              fontSize: '18px',
              fontWeight: 600
            }}
          />
        </div>
      </div>
      
      {/* Calculate Button */}
      {!showResults && (
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={handleCalculate}
            disabled={headcount < 50}
            style={{
              background: headcount < 50 ? '#475569' : '#FF6B35',
              color: 'white',
              border: 'none',
              padding: '16px 48px',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: headcount < 50 ? 'not-allowed' : 'pointer'
            }}
          >
            {headcount < 50 ? 'Minimum 50 users required' : 'Calculate my ROI'}
          </button>
        </div>
      )}
      
      {/* Results Section */}
      {showResults && headcount >= 50 && (
        <div style={{ animation: 'fadeIn 0.5s ease' }}>
          {/* Results Grid */}
          <div className="roi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <p style={{ color: '#64748B', fontSize: '12px', margin: 0 }}>Annual leavers</p>
              <p style={{ color: 'white', fontSize: '28px', fontWeight: 700, margin: '4px 0' }}>{annualLeavers}</p>
              <p style={{ color: '#64748B', fontSize: '11px', margin: 0 }}>at {turnoverRate}% turnover</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <p style={{ color: '#64748B', fontSize: '12px', margin: 0 }}>Current cost</p>
              <p style={{ color: '#EF4444', fontSize: '28px', fontWeight: 700, margin: '4px 0' }}>£{currentCost.toLocaleString()}</p>
              <p style={{ color: '#64748B', fontSize: '11px', margin: 0 }}>per year</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <p style={{ color: '#64748B', fontSize: '12px', margin: 0 }}>Potential savings</p>
              <p style={{ color: '#10B981', fontSize: '28px', fontWeight: 700, margin: '4px 0' }}>£{annualSavings.toLocaleString()}</p>
              <p style={{ color: '#64748B', fontSize: '11px', margin: 0 }}>with 30% reduction</p>
            </div>
            <div style={{ background: 'rgba(16,185,129,0.1)', borderRadius: '12px', padding: '20px', border: '1px solid rgba(16,185,129,0.3)' }}>
              <p style={{ color: '#10B981', fontSize: '12px', margin: 0 }}>Net ROI</p>
              <p style={{ color: '#10B981', fontSize: '28px', fontWeight: 700, margin: '4px 0' }}>{roi ? `${roi}%` : 'POA'}</p>
              <p style={{ color: '#64748B', fontSize: '11px', margin: 0 }}>{tier?.name} tier</p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
            <button
              onClick={generatePDF}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255,255,255,0.1)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '14px 24px',
                borderRadius: '10px',
                fontSize: '15px',
                fontWeight: 500,
                cursor: 'pointer'
              }}
            >
              <FileCheck size={18} /> Download PDF
            </button>
            <button
              onClick={() => window.open('https://calendly.com/dazevedo-uplifthq/30min', '_blank')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: '#FF6B35',
                color: 'white',
                border: 'none',
                padding: '14px 24px',
                borderRadius: '10px',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              <Calendar size={18} /> Book a Call
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================================================
// EMBEDDED DEMO PREVIEW (Inline autoplay version)
// ============================================================================
const EmbeddedDemoPreview = () => {
  const [screenIndex, setScreenIndex] = useState(0);
  const [fade, setFade] = useState(true);
  
  // Simple screen rotation
  const screens = [
    { type: 'mobile', component: 'home', label: 'Worker Home' },
    { type: 'mobile', component: 'career', label: 'Career Path' },
    { type: 'mobile', component: 'rewards', label: 'Rewards' },
    { type: 'manager', component: 'dashboard', label: 'Manager View' },
    { type: 'portal', component: 'scheduler', label: 'AI Scheduler' },
    { type: 'portal', component: 'skills', label: 'Skills Matrix' }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setScreenIndex(prev => (prev + 1) % screens.length);
        setFade(true);
      }, 300);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);
  
  const current = screens[screenIndex];
  
  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      background: '#0A0F1A',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background gradient */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '20%',
        width: '300px',
        height: '300px',
        background: 'rgba(255,107,53,0.15)',
        borderRadius: '50%',
        filter: 'blur(80px)'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '20%',
        width: '250px',
        height: '250px',
        background: 'rgba(139,92,246,0.1)',
        borderRadius: '50%',
        filter: 'blur(80px)'
      }} />
      
      {/* Screen Container - scaled to show full phone */}
      <div className="demo-screen-container" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '60px',
        opacity: fade ? 1 : 0,
        transition: 'opacity 0.3s ease',
        transform: 'scale(0.72)'
      }}>
        {/* Label */}
        <div className="demo-label" style={{ width: '200px', textAlign: 'right' }}>
          <p style={{ 
            color: '#FF6B35', 
            fontSize: '12px', 
            fontWeight: 600, 
            textTransform: 'uppercase', 
            letterSpacing: '2px',
            marginBottom: '8px'
          }}>
            {current.type === 'mobile' ? 'WORKER APP' : current.type === 'manager' ? 'MANAGER APP' : 'ADMIN PORTAL'}
          </p>
          <h3 style={{ 
            color: 'white', 
            fontSize: '28px', 
            fontWeight: 700,
            margin: 0
          }}>
            {current.label}
          </h3>
        </div>
        
        {/* Screen */}
        <div style={{ animation: 'float 4s ease-in-out infinite' }}>
          {current.type === 'mobile' && current.component === 'home' && (
            <VideoMobileHomeScreen highlightEarnings={true} highlightShift={false} highlightCareer={false} />
          )}
          {current.type === 'mobile' && current.component === 'career' && (
            <VideoMobileCareerScreen highlightLadder={true} highlightNext={false} />
          )}
          {current.type === 'mobile' && current.component === 'rewards' && (
            <VideoMobileRewardsScreen highlightPoints={true} highlightRewards={false} />
          )}
          {current.type === 'manager' && (
            <ManagerMobileDashboard highlightStats={true} highlightApprovals={false} showApproved={false} />
          )}
          {current.type === 'portal' && current.component === 'scheduler' && (
            <VideoPortalAIScheduler highlightRules={false} highlightButton={true} showFilled={true} />
          )}
          {current.type === 'portal' && current.component === 'skills' && (
            <VideoPortalSkillsMatrix highlightGrid={true} />
          )}
        </div>
      </div>
      
      {/* Progress dots */}
      <div style={{
        position: 'absolute',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '8px'
      }}>
        {screens.map((_, i) => (
          <div key={i} style={{
            width: i === screenIndex ? '24px' : '8px',
            height: '8px',
            borderRadius: '4px',
            background: i === screenIndex ? '#FF6B35' : 'rgba(255,255,255,0.3)',
            transition: 'all 0.3s ease'
          }} />
        ))}
      </div>
      
      {/* Play icon hint */}
      <div style={{
        position: 'absolute',
        bottom: '24px',
        right: '24px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: 'rgba(255,255,255,0.5)',
        fontSize: '13px'
      }}>
        <Play size={16} /> Full tour
      </div>
    </div>
  );
};

// ============================================================================
// MAIN VIDEO DEMO COMPONENT
// ============================================================================
const VideoDemo = ({ isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [elapsedInSegment, setElapsedInSegment] = useState(0);
  const intervalRef = useRef(null);
  
  const currentSegment = videoTimeline[currentIndex];
  
  // Calculate total elapsed time
  const getTotalElapsed = () => {
    let elapsed = 0;
    for (let i = 0; i < currentIndex; i++) {
      elapsed += videoTimeline[i].duration;
    }
    return elapsed + elapsedInSegment;
  };
  
  // Timer logic
  useEffect(() => {
    if (!isOpen || !isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    
    intervalRef.current = setInterval(() => {
      setElapsedInSegment(prev => {
        const newElapsed = prev + 50;
        if (newElapsed >= currentSegment.duration) {
          // Move to next segment
          if (currentIndex < videoTimeline.length - 1) {
            setCurrentIndex(currentIndex + 1);
            return 0;
          } else {
            // End of video
            setIsPlaying(false);
            return prev;
          }
        }
        return newElapsed;
      });
    }, 50);
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isOpen, isPlaying, currentIndex, currentSegment]);
  
  // Update progress bar
  useEffect(() => {
    setProgress((getTotalElapsed() / totalDuration) * 100);
  }, [currentIndex, elapsedInSegment]);
  
  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying(p => !p);
      } else if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        skipForward();
      } else if (e.key === 'ArrowLeft') {
        skipBackward();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);
  
  const skipForward = () => {
    if (currentIndex < videoTimeline.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setElapsedInSegment(0);
    }
  };
  
  const skipBackward = () => {
    if (elapsedInSegment > 500) {
      setElapsedInSegment(0);
    } else if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setElapsedInSegment(0);
    }
  };
  
  const restart = () => {
    setCurrentIndex(0);
    setElapsedInSegment(0);
    setIsPlaying(true);
  };
  
  const seekTo = (percentage) => {
    const targetTime = (percentage / 100) * totalDuration;
    let accumulated = 0;
    for (let i = 0; i < videoTimeline.length; i++) {
      if (accumulated + videoTimeline[i].duration > targetTime) {
        setCurrentIndex(i);
        setElapsedInSegment(targetTime - accumulated);
        return;
      }
      accumulated += videoTimeline[i].duration;
    }
  };
  
  if (!isOpen) return null;
  
  // Format time
  const formatTime = (ms) => {
    const secs = Math.floor(ms / 1000);
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins}:${remainingSecs.toString().padStart(2, '0')}`;
  };
  
  return (
    <div className="video-demo-modal" style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      background: '#0A0F1A',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.6; } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(255,107,53,0.3); } 50% { box-shadow: 0 0 40px rgba(255,107,53,0.5); } }
        
        @media (max-width: 768px) {
          .video-demo-modal .demo-main-content {
            padding: 16px !important;
          }
          .video-demo-modal .demo-content-row {
            flex-direction: column !important;
            gap: 24px !important;
          }
          .video-demo-modal .demo-text-overlay {
            width: 100% !important;
            text-align: center !important;
            order: 1 !important;
          }
          .video-demo-modal .demo-text-overlay h2 {
            font-size: 24px !important;
          }
          .video-demo-modal .demo-text-overlay p {
            font-size: 14px !important;
          }
          .video-demo-modal .demo-screen-wrapper {
            transform: scale(0.6) !important;
            margin: -60px 0 !important;
          }
          .video-demo-modal .demo-intro h1 {
            font-size: 28px !important;
          }
          .video-demo-modal .demo-portal-wrapper {
            transform: scale(0.4) !important;
            margin: -120px 0 !important;
          }
        }
        
        @media (max-width: 480px) {
          .video-demo-modal .demo-screen-wrapper {
            transform: scale(0.5) !important;
            margin: -80px 0 !important;
          }
          .video-demo-modal .demo-portal-wrapper {
            transform: scale(0.32) !important;
            margin: -160px 0 !important;
          }
          .video-demo-modal .demo-text-overlay h2 {
            font-size: 20px !important;
          }
        }
      `}</style>
      
      {/* Top Bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 24px',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <RisingULogo color="light" size={32} />
        <button 
          onClick={onClose}
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: 'none',
            borderRadius: '8px',
            padding: '8px 16px',
            color: 'white',
            fontSize: '13px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <X size={16} /> Close
        </button>
      </div>
      
      {/* Main Content */}
      <div className="demo-main-content" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', overflow: 'hidden' }}>
        
        {/* INTRO */}
        {currentSegment.type === 'intro' && (
          <div className="demo-intro" style={{ textAlign: 'center', animation: 'fadeIn 0.5s ease' }}>
            <div style={{ marginBottom: '32px', animation: 'float 3s ease-in-out infinite' }}>
              <RisingULogo color="light" size={72} />
            </div>
            <h1 style={{
              fontSize: '52px',
              fontWeight: 700,
              color: 'white',
              marginBottom: '16px',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #FF6B35 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              See What Your People Could See
            </h1>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.5)' }}>
              A 90-second tour of the Uplift platform
            </p>
          </div>
        )}
        
        {/* MOBILE SCREENS */}
        {currentSegment.type === 'mobile' && (
          <div className="demo-content-row" style={{ display: 'flex', alignItems: 'center', gap: '80px', animation: 'fadeIn 0.3s ease' }}>
            {/* Text Overlay - Left */}
            <div className="demo-text-overlay" style={{ width: '400px', textAlign: 'right' }}>
              {currentSegment.overlay?.label && (
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255,107,53,0.2)',
                  color: '#FF6B35',
                  borderRadius: '9999px',
                  padding: '8px 16px',
                  marginBottom: '16px',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '1px',
                  animation: 'slideUp 0.4s ease'
                }}>
                  <Smartphone size={14} />
                  {currentSegment.overlay.label}
                </div>
              )}
              {currentSegment.overlay?.headline && (
                <h2 style={{
                  fontSize: '42px',
                  fontWeight: 700,
                  color: 'white',
                  lineHeight: 1.2,
                  margin: 0,
                  animation: 'slideUp 0.4s ease 0.1s both'
                }}>
                  {currentSegment.overlay.headline}
                </h2>
              )}
              {currentSegment.overlay?.subtext && (
                <p style={{
                  fontSize: '20px',
                  color: 'rgba(255,255,255,0.7)',
                  marginTop: '16px',
                  animation: 'slideUp 0.4s ease 0.1s both'
                }}>
                  {currentSegment.overlay.subtext}
                </p>
              )}
              {currentSegment.overlay?.message && (
                <p style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  fontStyle: 'italic',
                  color: '#FF6B35',
                  marginTop: '16px',
                  animation: 'slideUp 0.4s ease 0.1s both'
                }}>
                  "{currentSegment.overlay.message}"
                </p>
              )}
            </div>
            
            {/* Screen */}
            <div className="demo-screen-wrapper" style={{ animation: 'float 4s ease-in-out infinite' }}>
              {currentSegment.screen === 'home' && (
                <VideoMobileHomeScreen 
                  highlightEarnings={currentSegment.highlights?.earnings}
                  highlightShift={currentSegment.highlights?.shift}
                  highlightCareer={currentSegment.highlights?.career}
                />
              )}
              {currentSegment.screen === 'career' && (
                <VideoMobileCareerScreen 
                  highlightLadder={currentSegment.highlights?.ladder}
                  highlightNext={currentSegment.highlights?.next}
                />
              )}
              {currentSegment.screen === 'rewards' && (
                <VideoMobileRewardsScreen 
                  highlightPoints={currentSegment.highlights?.points}
                  highlightRewards={currentSegment.highlights?.rewards}
                />
              )}
              {currentSegment.screen === 'feed' && (
                <VideoMobileFeedScreen 
                  highlightRecognition={currentSegment.highlights?.recognition}
                />
              )}
            </div>
          </div>
        )}
        
        {/* MANAGER MOBILE SCREENS */}
        {currentSegment.type === 'manager-mobile' && (
          <div className="demo-content-row" style={{ display: 'flex', alignItems: 'center', gap: '80px', animation: 'fadeIn 0.3s ease' }}>
            {/* Text Overlay - Left */}
            <div className="demo-text-overlay" style={{ width: '400px', textAlign: 'right' }}>
              {currentSegment.overlay?.label && (
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(139,92,246,0.2)',
                  color: '#A78BFA',
                  borderRadius: '9999px',
                  padding: '8px 16px',
                  marginBottom: '16px',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '1px',
                  animation: 'slideUp 0.4s ease'
                }}>
                  <Smartphone size={14} />
                  {currentSegment.overlay.label}
                </div>
              )}
              {currentSegment.overlay?.headline && (
                <h2 style={{
                  fontSize: '42px',
                  fontWeight: 700,
                  color: 'white',
                  lineHeight: 1.2,
                  margin: 0,
                  animation: 'slideUp 0.4s ease 0.1s both'
                }}>
                  {currentSegment.overlay.headline}
                </h2>
              )}
              {currentSegment.overlay?.subtext && (
                <p style={{
                  fontSize: '20px',
                  color: 'rgba(255,255,255,0.7)',
                  marginTop: '16px',
                  animation: 'slideUp 0.4s ease 0.1s both'
                }}>
                  {currentSegment.overlay.subtext}
                </p>
              )}
              {currentSegment.overlay?.message && (
                <p style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  fontStyle: 'italic',
                  color: '#A78BFA',
                  marginTop: '16px',
                  animation: 'slideUp 0.4s ease 0.1s both'
                }}>
                  "{currentSegment.overlay.message}"
                </p>
              )}
            </div>
            
            {/* Screen */}
            <div className="demo-screen-wrapper" style={{ animation: 'float 4s ease-in-out infinite' }}>
              <ManagerMobileDashboard 
                highlightStats={currentSegment.highlights?.stats}
                highlightApprovals={currentSegment.highlights?.approvals}
                showApproved={currentSegment.managerState?.showApproved}
              />
            </div>
          </div>
        )}
        
        {/* TRANSITION */}
        {currentSegment.type === 'transition' && (
          <div style={{ textAlign: 'center', animation: 'fadeIn 0.5s ease' }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 32px',
              animation: 'glow 2s ease-in-out infinite'
            }}>
              <Monitor size={40} color="white" />
            </div>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 700,
              color: 'white',
              marginBottom: '16px'
            }}>
              {currentSegment.headline}
            </h2>
            <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.5)' }}>
              {currentSegment.subtext}
            </p>
          </div>
        )}
        
        {/* PORTAL SCREENS */}
        {currentSegment.type === 'portal' && (
          <div className="demo-content-row" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', animation: 'fadeIn 0.3s ease' }}>
            {/* Text Overlay - Top */}
            <div className="demo-text-overlay" style={{ textAlign: 'center', maxWidth: '700px' }}>
              {currentSegment.overlay?.label && (
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(139,92,246,0.2)',
                  color: '#A78BFA',
                  borderRadius: '9999px',
                  padding: '8px 16px',
                  marginBottom: '12px',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '1px',
                  animation: 'slideUp 0.4s ease'
                }}>
                  <Monitor size={14} />
                  {currentSegment.overlay.label}
                </div>
              )}
              {currentSegment.overlay?.headline && (
                <h2 style={{
                  fontSize: '36px',
                  fontWeight: 700,
                  color: 'white',
                  margin: 0,
                  animation: 'slideUp 0.4s ease 0.1s both'
                }}>
                  {currentSegment.overlay.headline}
                </h2>
              )}
              {currentSegment.overlay?.subtext && (
                <p style={{
                  fontSize: '18px',
                  color: 'rgba(255,255,255,0.7)',
                  marginTop: '12px',
                  animation: 'slideUp 0.4s ease 0.1s both'
                }}>
                  {currentSegment.overlay.subtext}
                </p>
              )}
              {currentSegment.overlay?.message && (
                <p style={{
                  fontSize: '22px',
                  fontWeight: 600,
                  fontStyle: 'italic',
                  color: '#8B5CF6',
                  marginTop: '12px',
                  animation: 'slideUp 0.4s ease 0.1s both'
                }}>
                  "{currentSegment.overlay.message}"
                </p>
              )}
            </div>
            
            {/* Screen */}
            <div className="demo-portal-wrapper">
              {currentSegment.screen === 'people' && (
                <VideoPortalPeopleHub 
                  highlightStats={currentSegment.highlights?.stats}
                  highlightTable={currentSegment.highlights?.table}
                />
              )}
              {currentSegment.screen === 'scheduler' && (
                <VideoPortalAIScheduler 
                  highlightRules={currentSegment.highlights?.rules}
                  highlightButton={currentSegment.highlights?.button}
                  showFilled={currentSegment.schedulerState?.showFilled}
                />
              )}
              {currentSegment.screen === 'skills' && (
                <VideoPortalSkillsMatrix 
                  highlightGrid={currentSegment.highlights?.grid}
                />
              )}
            </div>
          </div>
        )}
        
        {/* CLOSING */}
        {currentSegment.type === 'closing' && (
          <div style={{ textAlign: 'center', animation: 'fadeIn 0.5s ease' }}>
            {/* Stats */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '80px', marginBottom: '48px' }}>
              {[
                { value: '40%', label: 'reduction in turnover' },
                { value: '3x', label: 'faster shift coverage' },
                { value: '47%', label: 'higher task completion' }
              ].map((stat, i) => (
                <div key={i} style={{ animation: `slideUp 0.5s ease ${i * 0.15}s both` }}>
                  <p style={{
                    fontSize: '72px',
                    fontWeight: 700,
                    margin: 0,
                    background: 'linear-gradient(135deg, #FF6B35, #F59E0B)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {stat.value}
                  </p>
                  <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', margin: 0 }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            
            <h2 style={{
              fontSize: '42px',
              fontWeight: 700,
              color: 'white',
              marginBottom: '40px',
              animation: 'slideUp 0.5s ease 0.3s both'
            }}>
              Ready to show your people their future?
            </h2>
            
            <button style={{
              background: 'linear-gradient(135deg, #FF6B35, #F59E0B)',
              color: 'white',
              border: 'none',
              borderRadius: '16px',
              padding: '20px 48px',
              fontSize: '18px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              animation: 'slideUp 0.5s ease 0.4s both, glow 2s ease-in-out infinite'
            }}>
              Book a Demo <ArrowRight size={20} />
            </button>
          </div>
        )}
      </div>
      
      {/* Video Controls */}
      <div style={{
        padding: '16px 24px 24px',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}>
        {/* Progress Bar */}
        <div 
          style={{
            height: '4px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '2px',
            marginBottom: '16px',
            cursor: 'pointer',
            position: 'relative'
          }}
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const percentage = ((e.clientX - rect.left) / rect.width) * 100;
            seekTo(percentage);
          }}
        >
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #FF6B35, #F59E0B)',
            borderRadius: '2px',
            transition: 'width 0.05s linear'
          }} />
          <div style={{
            position: 'absolute',
            left: `${progress}%`,
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '12px',
            height: '12px',
            background: 'white',
            borderRadius: '50%',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
          }} />
        </div>
        
        {/* Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Left - Time */}
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', fontFamily: 'monospace' }}>
            {formatTime(getTotalElapsed())} / {formatTime(totalDuration)}
          </div>
          
          {/* Center - Play Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button 
              onClick={skipBackward}
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '8px',
                padding: '10px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ChevronLeft size={20} color="white" />
            </button>
            
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              style={{
                background: 'linear-gradient(135deg, #FF6B35, #F59E0B)',
                border: 'none',
                borderRadius: '50%',
                width: '56px',
                height: '56px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(255,107,53,0.4)'
              }}
            >
              {isPlaying ? <Pause size={24} color="white" /> : <Play size={24} color="white" style={{ marginLeft: '2px' }} />}
            </button>
            
            <button 
              onClick={skipForward}
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '8px',
                padding: '10px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ChevronRight size={20} color="white" />
            </button>
          </div>
          
          {/* Right - Restart */}
          <button 
            onClick={restart}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: '8px',
              padding: '8px 16px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'rgba(255,255,255,0.7)',
              fontSize: '13px'
            }}
          >
            <RotateCcw size={14} /> Restart
          </button>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// MAIN WEBSITE COMPONENT
// ============================================================================
export default function UpliftWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Outfit', 'Inter', sans-serif", overflowX: 'hidden', width: '100%' }}>
      {/* Fonts & Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
        
        * { box-sizing: border-box; }
        html, body { overflow-x: hidden; width: 100%; }
        
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        .float-animation { animation: float 6s ease-in-out infinite; }
        .float-delayed { animation: float 6s ease-in-out 2s infinite; }
        
        /* Demo Preview Hover */
        .demo-hover-overlay:hover {
          background: rgba(0,0,0,0.4) !important;
        }
        .demo-hover-overlay:hover .demo-hover-button {
          opacity: 1 !important;
          transform: scale(1) !important;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #FF6B35 0%, #FF8F6B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        
        /* Mobile Responsive */
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; gap: 40px !important; }
          .hero-grid > div:last-child { display: none; }
          .two-col-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        
        @media (max-width: 768px) {
          /* Hero */
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; padding: 120px 16px 40px !important; }
          .hero-grid > div:last-child { display: none; }
          .hero-h1 { font-size: 32px !important; }
          
          /* Navigation */
          .nav-links { display: none !important; }
          
          /* Two column sections - single column on mobile */
          .two-col-grid { 
            grid-template-columns: 1fr !important; 
            gap: 32px !important;
            width: 100% !important;
          }
          
          /* Phone mockups - show only first phone, center it */
          .phone-mockup-container { 
            justify-content: center !important;
            width: 100% !important;
          }
          .phone-mockup-container .float-delayed { 
            display: none !important; 
          }
          
          /* Portal mockups - hide on mobile (900px wide causes overflow) */
          .portal-mockup-container {
            display: none !important;
          }
          
          /* Demo preview - scale for mobile */
          .demo-container {
            height: 400px !important;
          }
          .demo-screen-container {
            flex-direction: column !important;
            gap: 16px !important;
            transform: scale(0.55) !important;
          }
          .demo-label {
            width: auto !important;
            text-align: center !important;
          }
          
          /* Grids */
          .section-grid { grid-template-columns: 1fr !important; }
          .pricing-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 24px !important; }
          .features-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; text-align: left; }
          .roi-grid { grid-template-columns: 1fr 1fr !important; }
          .four-col-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .feature-grid { grid-template-columns: 1fr 1fr !important; }
          
          /* Buttons */
          .cta-buttons { flex-direction: column !important; width: 100%; }
          .cta-buttons button, .cta-buttons a { width: 100% !important; justify-content: center !important; }
          .trust-badges { flex-wrap: wrap !important; justify-content: center !important; gap: 16px !important; }
          
          /* Demo section */
          #platform { padding: 24px 16px 40px !important; }
          
          /* Section padding */
          section { padding: 80px 0 !important; }
          
          /* Typography */
          h2 { font-size: 32px !important; }
          
          /* Trial banner flex */
          .trial-banner { flex-direction: column !important; text-align: center !important; }
          .trial-banner > div { text-align: center !important; }
          
          /* Flex banner */
          .flex-banner { flex-direction: column !important; text-align: center !important; }
          
          /* Prevent horizontal scroll */
          body, html { overflow-x: hidden !important; }
          section > div { max-width: 100% !important; }
        }
        
        @media (max-width: 480px) {
          .hero-h1 { font-size: 28px !important; }
          h2 { font-size: 26px !important; }
          .pricing-card { padding: 20px !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; text-align: center !important; }
          .roi-grid { grid-template-columns: 1fr !important; }
          .four-col-grid { grid-template-columns: 1fr 1fr !important; }
          .feature-grid { grid-template-columns: 1fr !important; }
          
          /* Demo - smaller on phones */
          .demo-container {
            height: 350px !important;
          }
          .demo-screen-container {
            transform: scale(0.45) !important;
          }
          
          /* Section padding */
          section { padding: 60px 0 !important; }
          
          /* Trust badges stack */
          .trust-badges { flex-direction: column !important; align-items: center !important; }
        }
      `}</style>
      
      {/* ================================================================== */}
      {/* NAVIGATION */}
      {/* ================================================================== */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s',
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid #E2E8F0' : 'none'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <RisingULogo color={scrolled ? 'dark' : 'light'} />
          
          <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {['Platform', 'For Workers', 'For Managers', 'Pricing'].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} style={{
                color: scrolled ? '#475569' : 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500
              }}>{item}</a>
            ))}
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button onClick={() => setShowWaitlist(true)} style={{ background: '#FF6B35', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '12px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>Try Demo</button>
          </div>
        </div>
      </nav>
      
      {/* ================================================================== */}
      {/* HERO SECTION */}
      {/* ================================================================== */}
      <section style={{ position: 'relative', background: '#0F172A', overflow: 'hidden' }}>
        <div className="hero-pattern" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'absolute', top: '25%', left: '-128px', width: '500px', height: '500px', background: 'rgba(255,107,53,0.15)', borderRadius: '50%', filter: 'blur(100px)' }} />
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '600px', height: '600px', background: 'rgba(139,92,246,0.1)', borderRadius: '50%', filter: 'blur(100px)' }} />
        
        <div className="hero-grid" style={{ position: 'relative', maxWidth: '1280px', margin: '0 auto', padding: '160px 24px 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          {/* Left Content */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '9999px', padding: '8px 16px', marginBottom: '32px' }}>
              <span style={{ width: '8px', height: '8px', background: '#10B981', borderRadius: '50%' }} />
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px' }}>For Retail • Hospitality • Healthcare • Manufacturing</span>
            </div>
            
            <h1 className="hero-h1" style={{ fontSize: '56px', fontWeight: 700, color: 'white', lineHeight: 1.1, marginBottom: '24px' }}>
              Reduce frontline<br/>turnover by <span className="gradient-text">up to 40%</span>
            </h1>
            
            <p style={{ fontSize: '20px', color: '#CBD5E1', marginBottom: '16px', lineHeight: 1.6 }}>
              Workforce intelligence for frontline teams. Show your people where they can go — and watch them stay.
            </p>
            
            <p style={{ fontSize: '16px', color: '#94A3B8', marginBottom: '32px' }}>
              Skills tracking. AI scheduling. Internal mobility. All in one app that workers actually love.
            </p>
            
            <div className="cta-buttons" style={{ display: 'flex', gap: '16px', marginBottom: '40px' }}>
              <button onClick={() => setShowWaitlist(true)} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#FF6B35', color: 'white', border: 'none', padding: '16px 32px', borderRadius: '12px', fontSize: '18px', fontWeight: 700, cursor: 'pointer' }}>
                Try Demo <ArrowRight size={20} />
              </button>
              <button onClick={() => window.open('https://calendly.com/dazevedo-uplifthq/30min', '_blank')} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', padding: '16px 32px', borderRadius: '12px', fontSize: '18px', fontWeight: 600, cursor: 'pointer' }}>
                <Calendar size={20} /> Book a Call
              </button>
            </div>
            
            <div className="trust-badges" style={{ display: 'flex', gap: '24px' }}>
              {[
                { icon: Shield, label: 'SOC 2 in progress' },
                { icon: Lock, label: 'GDPR compliant' },
                { icon: CheckCircle2, label: 'No credit card' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '14px' }}>
                  <item.icon size={16} color="#10B981" />
                  {item.label}
                </div>
              ))}
            </div>
            
            {/* Social Proof */}
            <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <p style={{ color: '#64748B', fontSize: '14px', margin: 0 }}>
                <span style={{ color: '#FF6B35', fontWeight: 600 }}>Now in pilot</span> with UK retail and hospitality teams
              </p>
            </div>
          </div>
          
          {/* Right - Product Preview */}
          <div style={{ position: 'relative' }}>
            <div className="float-animation">
              <MobileHomeScreen />
            </div>
            
            {/* Floating notification */}
            <div className="float-delayed" style={{
              position: 'absolute',
              right: '40px',
              top: '30%',
              background: 'white',
              borderRadius: '12px',
              padding: '12px 16px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#DCFCE7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TrendingUp size={20} color="#16A34A" />
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#64748B', margin: 0 }}>Sarah promoted to</p>
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#0F172A', margin: 0 }}>Shift Supervisor</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Inline Demo Preview */}
        <div id="platform" style={{ 
          maxWidth: '1100px', 
          margin: '0 auto', 
          padding: '32px 24px 80px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <p style={{ color: '#94A3B8', fontSize: '14px', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 500 }}>
            See it in action
          </p>
          
          <div 
            onClick={() => setShowDemo(true)}
            style={{ 
              position: 'relative',
              cursor: 'pointer',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 40px 80px -20px rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.1)',
              width: '100%',
              maxWidth: '1000px'
            }}
          >
            {/* Embedded Demo Preview */}
            <div className="demo-container" style={{ 
              width: '100%',
              height: '500px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <EmbeddedDemoPreview />
            </div>
            
            {/* Hover Overlay */}
            <div 
              className="demo-hover-overlay"
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0,0,0,0)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.3s ease'
              }}
            >
              <div 
                className="demo-hover-button"
                style={{
                  background: 'rgba(255,107,53,0.95)',
                  borderRadius: '16px',
                  padding: '16px 32px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '18px',
                  opacity: 0,
                  transform: 'scale(0.9)',
                  transition: 'all 0.3s ease'
                }}
              >
                <Play size={24} /> Watch Full Tour
              </div>
            </div>
          </div>
          
          <p style={{ color: '#64748B', fontSize: '14px', marginTop: '20px' }}>
            Click to watch the full tour
          </p>
        </div>
        
        {/* Stats Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)' }}>
          <div className="stats-grid" style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 24px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
            {[
              { value: 'Up to 40%', label: 'Lower turnover', desc: 'Target reduction' },
              { value: 'Up to 70%', label: 'Faster hiring', desc: 'Internal vs external' },
              { value: '4-6 weeks', label: 'To go live', desc: 'Typical implementation' },
              { value: '<3 sec', label: 'Schedule generated', desc: 'With AI scheduler' }
            ].map((stat, i) => (
              <div key={i}>
                <div style={{ fontSize: '36px', fontWeight: 700, color: 'white' }}>{stat.value}</div>
                <div style={{ color: '#FF6B35', fontWeight: 600, fontSize: '14px' }}>{stat.label}</div>
                <div style={{ color: '#64748B', fontSize: '12px' }}>{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ================================================================== */}
      {/* FOR WORKERS SECTION */}
      {/* ================================================================== */}
      <section id="for-workers" style={{ padding: '120px 0', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            {/* Left - Mockups */}
            <div className="phone-mockup-container" style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
              <div className="float-animation">
                <MobileScheduleScreen />
              </div>
              <div className="float-delayed" style={{ marginTop: '60px' }}>
                <MobileCareerScreen />
              </div>
            </div>
            
            {/* Right - Content */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#FFF7ED', color: '#C2410C', borderRadius: '9999px', padding: '8px 16px', marginBottom: '24px', fontSize: '14px', fontWeight: 500 }}>
                <Smartphone size={16} /> Mobile App for Workers
              </div>
              
              <h2 style={{ fontSize: '40px', fontWeight: 700, color: '#0F172A', lineHeight: 1.2, marginBottom: '24px' }}>
                Your skills. Your schedule.<br/>
                <span className="gradient-text">Your career.</span>
              </h2>
              
              <p style={{ fontSize: '18px', color: '#475569', marginBottom: '32px', lineHeight: 1.6 }}>
                A mobile app workers actually want to use. See earnings, pick up shifts, track skills, 
                and watch your career path unfold.
              </p>
              
              <div className="feature-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { icon: DollarSign, label: 'Earnings dashboard' },
                  { icon: Calendar, label: 'Shift marketplace' },
                  { icon: Award, label: 'Skills tracking' },
                  { icon: Target, label: 'Career paths' },
                  { icon: Briefcase, label: 'Internal jobs' },
                  { icon: Bell, label: 'Smart notifications' }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#FFF7ED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <item.icon size={18} color="#FF6B35" />
                    </div>
                    <span style={{ color: '#334155', fontSize: '15px' }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ================================================================== */}
      {/* GAMIFICATION SECTION */}
      {/* ================================================================== */}
      <section style={{ padding: '120px 0', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            {/* Left - Content */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#FEF3C7', color: '#D97706', borderRadius: '9999px', padding: '8px 16px', marginBottom: '24px', fontSize: '14px', fontWeight: 500 }}>
                <Award size={16} /> Gamification & Rewards
              </div>
              
              <h2 style={{ fontSize: '40px', fontWeight: 700, color: '#0F172A', lineHeight: 1.2, marginBottom: '24px' }}>
                Points. Badges. Streaks.<br/>
                <span className="gradient-text">Real rewards.</span>
              </h2>
              
              <p style={{ fontSize: '18px', color: '#475569', marginBottom: '32px', lineHeight: 1.6 }}>
                Engagement mechanics that actually work. Earn points for completing tasks, maintain streaks, 
                unlock badges, and redeem real rewards — from gift cards to extra PTO.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
                {[
                  { icon: Zap, label: 'Point system' },
                  { icon: Award, label: 'Badge collection' },
                  { icon: TrendingUp, label: 'Leaderboards' },
                  { icon: Star, label: 'Streak tracking' },
                  { icon: Users, label: 'Peer recognition' },
                  { icon: DollarSign, label: 'Reward catalog' }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <item.icon size={18} color="#D97706" />
                    </div>
                    <span style={{ color: '#334155', fontSize: '15px' }}>{item.label}</span>
                  </div>
                ))}
              </div>
              
              {/* Stats callout */}
              <div style={{ background: '#FFFBEB', borderRadius: '12px', padding: '20px', border: '1px solid #FEF3C7' }}>
                <p style={{ fontWeight: 600, color: '#92400E', marginBottom: '12px' }}>Research-backed engagement:</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                  <div>
                    <p style={{ fontSize: '24px', fontWeight: 700, color: '#D97706', margin: 0 }}>3x</p>
                    <p style={{ fontSize: '12px', color: '#78350F', margin: 0 }}>Higher adoption</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '24px', fontWeight: 700, color: '#D97706', margin: 0 }}>80%</p>
                    <p style={{ fontSize: '12px', color: '#78350F', margin: 0 }}>Motivated by recognition</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '24px', fontWeight: 700, color: '#D97706', margin: 0 }}>47%</p>
                    <p style={{ fontSize: '12px', color: '#78350F', margin: 0 }}>Task completion ↑</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right - Mockups */}
            <div className="phone-mockup-container" style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
              <div className="float-animation">
                <MobileRewardsScreen />
              </div>
              <div className="float-delayed" style={{ marginTop: '60px' }}>
                <MobileFeedScreen />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ================================================================== */}
      {/* FOR MANAGERS SECTION */}
      {/* ================================================================== */}
      <section id="for-managers" style={{ padding: '120px 0', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            {/* Left - Content */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#F3E8FF', color: '#7C3AED', borderRadius: '9999px', padding: '8px 16px', marginBottom: '24px', fontSize: '14px', fontWeight: 500 }}>
                <Monitor size={16} /> Admin Portal for Managers
              </div>
              
              <h2 style={{ fontSize: '40px', fontWeight: 700, color: '#0F172A', lineHeight: 1.2, marginBottom: '24px' }}>
                Show your people<br/>
                <span className="gradient-text">where they can go.</span>
              </h2>
              
              <p style={{ fontSize: '18px', color: '#475569', marginBottom: '32px', lineHeight: 1.6 }}>
                A command center for workforce intelligence. Real-time analytics, AI scheduling, 
                skills matrix, and career pathway visualization.
              </p>
              
              <div className="feature-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { icon: BarChart3, label: 'Workforce dashboard' },
                  { icon: Brain, label: 'AI scheduler' },
                  { icon: Award, label: 'Skills matrix' },
                  { icon: Target, label: 'Career pathways' },
                  { icon: Link2, label: '12 integrations' },
                  { icon: Shield, label: 'Enterprise security' }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#F3E8FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <item.icon size={18} color="#8B5CF6" />
                    </div>
                    <span style={{ color: '#334155', fontSize: '15px' }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right - Portal Mockups */}
            <div className="portal-mockup-container" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <PortalDashboard />
              <div className="mobile-hide-second">
                <PortalSkillsMatrix />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ================================================================== */}
      {/* AI SCHEDULER SECTION */}
      {/* ================================================================== */}
      <section style={{ padding: '120px 0', background: '#0F172A' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(139,92,246,0.2)', color: '#A78BFA', borderRadius: '9999px', padding: '8px 16px', marginBottom: '24px', fontSize: '14px', fontWeight: 500 }}>
              <Brain size={16} /> AI Scheduler
            </div>
            
            <h2 style={{ fontSize: '40px', fontWeight: 700, color: 'white', marginBottom: '16px' }}>
              AI scheduling that <span className="gradient-text">explains itself.</span>
            </h2>
            
            <p style={{ fontSize: '18px', color: '#94A3B8', maxWidth: '600px', margin: '0 auto' }}>
              Not a black box. Every scheduling decision is transparent and configurable. 
              8 rules you control. Results you trust.
            </p>
          </div>
          
          <div className="portal-mockup-container" style={{ display: 'flex', justifyContent: 'center', marginBottom: '48px' }}>
            <PortalSchedule />
          </div>
          
          {/* Rules Grid */}
          <div className="four-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {[
              { icon: Clock, name: 'Min Rest: 11h', desc: 'Compliance' },
              { icon: Shield, name: 'Max Hours: 48h', desc: 'Compliance' },
              { icon: Award, name: 'Required Skills', desc: 'Safety' },
              { icon: Users, name: 'Supervisor 1:5', desc: 'Operations' },
              { icon: Calendar, name: 'Max 6 Days', desc: 'Wellbeing' },
              { icon: Star, name: 'Availability', desc: 'Preference' },
              { icon: Target, name: 'Fair Hours ±10%', desc: 'Fairness' },
              { icon: CheckCircle2, name: 'Skill Match', desc: 'Operations' }
            ].map((rule, i) => (
              <div key={i} style={{ background: 'rgba(30,41,59,0.8)', borderRadius: '12px', padding: '16px', border: '1px solid rgba(71,85,105,0.5)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(139,92,246,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <rule.icon size={18} color="#A78BFA" />
                  </div>
                  <div>
                    <p style={{ color: 'white', fontWeight: 600, fontSize: '14px', margin: 0 }}>{rule.name}</p>
                    <p style={{ color: '#64748B', fontSize: '12px', margin: 0 }}>{rule.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ================================================================== */}
      {/* INTEGRATIONS SECTION */}
      {/* ================================================================== */}
      <section style={{ padding: '120px 0', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#EFF6FF', color: '#2563EB', borderRadius: '9999px', padding: '8px 16px', marginBottom: '24px', fontSize: '14px', fontWeight: 500 }}>
                <Link2 size={16} /> Integration Hub
              </div>
              
              <h2 style={{ fontSize: '40px', fontWeight: 700, color: '#0F172A', lineHeight: 1.2, marginBottom: '24px' }}>
                Connects to your<br/>
                <span className="gradient-text">HR stack.</span>
              </h2>
              
              <p style={{ fontSize: '18px', color: '#475569', marginBottom: '32px', lineHeight: 1.6 }}>
                12 integrations live and ready. Plus REST API for custom connections.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                {[
                  { category: 'COMMS', items: [
                    { name: 'Slack' },
                    { name: 'Microsoft Teams' }
                  ]},
                  { category: 'IDENTITY', items: [
                    { name: 'Google SSO' },
                    { name: 'Okta' }
                  ]},
                  { category: 'HRIS', items: [
                    { name: 'BambooHR' },
                    { name: 'HiBob' },
                    { name: 'Personio' },
                    { name: 'Sage HR' }
                  ]},
                  { category: 'PAYROLL & POS', items: [
                    { name: 'Gusto' },
                    { name: 'Xero' },
                    { name: 'Square' },
                    { name: 'REST API' }
                  ]}
                ].map((cat, i) => (
                  <div key={i} style={{ background: '#F8FAFC', borderRadius: '12px', padding: '16px', border: '1px solid #E2E8F0' }}>
                    <p style={{ fontWeight: 600, fontSize: '12px', color: '#10B981', marginBottom: '8px' }}>{cat.category}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {cat.items.map((item, j) => (
                        <span key={j} style={{ 
                          background: '#DCFCE7', 
                          padding: '4px 10px', 
                          borderRadius: '6px', 
                          fontSize: '12px', 
                          color: '#166534', 
                          border: '1px solid #BBF7D0' 
                        }}>{item.name}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="portal-mockup-container">
              <PortalIntegrations />
            </div>
          </div>
        </div>
      </section>
      
      {/* ================================================================== */}
      {/* ROI SECTION */}
      {/* ================================================================== */}
      <section style={{ padding: '80px 0', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', borderRadius: '24px', padding: '48px' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h3 style={{ fontSize: '32px', fontWeight: 700, color: 'white', marginBottom: '12px' }}>
                Calculate your ROI
              </h3>
              <p style={{ fontSize: '16px', color: '#94A3B8' }}>
                See how much you could save with Uplift
              </p>
            </div>
            
            <ROICalculator />
          </div>
        </div>
      </section>
      
      {/* ================================================================== */}
      {/* FOUNDERS OFFER SECTION */}
      {/* ================================================================== */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #FF6B35 0%, #E55A2B 100%)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.2)', color: 'white', borderRadius: '9999px', padding: '8px 16px', marginBottom: '24px', fontSize: '14px', fontWeight: 600 }}>
            <Clock size={16} /> Limited Time — Founding Partners Only
          </div>
          <h2 style={{ fontSize: '40px', fontWeight: 700, color: 'white', marginBottom: '16px' }}>
            Lock in 33% off. Forever.
          </h2>
          <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.9)', marginBottom: '16px', maxWidth: '600px', margin: '0 auto 24px' }}>
            We're looking for 10 founding partners to shape the future of Uplift. In return, you get our lowest prices — guaranteed for life.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap', marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white' }}>
              <CheckCircle2 size={20} />
              <span>33% discount locked forever</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white' }}>
              <CheckCircle2 size={20} />
              <span>Direct access to founder</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white' }}>
              <CheckCircle2 size={20} />
              <span>Shape the product roadmap</span>
            </div>
          </div>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
            Only 7 spots remaining
          </p>
        </div>
      </section>

      {/* ================================================================== */}
      {/* PRICING SECTION */}
      {/* ================================================================== */}
      <section id="pricing" style={{ padding: '120px 0', background: '#0F172A' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
          
          {/* Trial Banner */}
          {/* Trial Banner */}
          <div className="trial-banner" style={{ 
            background: 'linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(16,185,129,0.05) 100%)', 
            border: '1px solid rgba(16,185,129,0.3)', 
            borderRadius: '16px', 
            padding: '24px 32px', 
            marginBottom: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <CheckCircle2 size={20} color="#10B981" />
                <span style={{ color: '#10B981', fontWeight: 700, fontSize: '16px' }}>30-Day Pilot</span>
              </div>
              <p style={{ color: '#94A3B8', fontSize: '14px', margin: 0 }}>
                Full platform • 1 location • Up to 50 users
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ color: 'white', fontWeight: 600, fontSize: '14px', margin: 0 }}>Pilot setup from £2,500</p>
              <p style={{ color: '#64748B', fontSize: '12px', margin: '4px 0 0' }}>Credited to annual contract</p>
            </div>
          </div>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,107,53,0.2)', color: '#FF6B35', borderRadius: '9999px', padding: '8px 16px', marginBottom: '24px', fontSize: '14px', fontWeight: 600 }}>
              <Zap size={16} /> Founding Partner Pricing — Lock In 33% Off Forever
            </div>
            <h2 style={{ fontSize: '40px', fontWeight: 700, color: 'white', marginBottom: '16px' }}>
              Full platform. Pick your team size.
            </h2>
            <p style={{ fontSize: '18px', color: '#94A3B8' }}>
              Every plan includes all features. No add-ons. No surprises.
            </p>
          </div>
          
          {/* Pricing Cards */}
          <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { 
                name: 'Growth', 
                headcount: '50-250 users',
                originalPrice: '£15',
                price: '£10', 
                period: '/user/month',
                flexPrice: '£12/user',
                savings: 'Save 33%',
                pilotFee: '£2,500',
                primary: false 
              },
              { 
                name: 'Scale', 
                headcount: '251-750 users',
                originalPrice: '£12',
                price: '£8', 
                period: '/user/month',
                flexPrice: '£10/user',
                savings: 'Save 33%',
                pilotFee: '£5,000',
                primary: true 
              },
              { 
                name: 'Enterprise', 
                headcount: '750+ users',
                originalPrice: null,
                price: 'POA', 
                period: '',
                flexPrice: 'Custom',
                savings: 'Custom pricing',
                pilotFee: 'From £10,000',
                primary: false 
              }
            ].map((tier, i) => (
              <div key={i} style={{
                background: tier.primary ? 'linear-gradient(180deg, rgba(255,107,53,0.1) 0%, transparent 100%)' : 'rgba(30,41,59,0.5)',
                borderRadius: '16px',
                padding: '32px',
                border: tier.primary ? '2px solid #FF6B35' : '1px solid rgba(71,85,105,0.5)',
                position: 'relative'
              }}>
                {tier.primary && (
                  <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#FF6B35', color: 'white', fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: '9999px' }}>Most Popular</div>
                )}
                <h3 style={{ color: 'white', fontSize: '24px', fontWeight: 700, marginBottom: '4px' }}>{tier.name}</h3>
                <p style={{ color: '#FF6B35', fontSize: '14px', fontWeight: 600, marginBottom: '20px' }}>{tier.headcount}</p>
                
                <div style={{ marginBottom: '8px' }}>
                  {tier.originalPrice && (
                    <span style={{ color: '#64748B', fontSize: '18px', textDecoration: 'line-through', marginRight: '8px' }}>{tier.originalPrice}</span>
                  )}
                  <span style={{ color: 'white', fontSize: '44px', fontWeight: 700 }}>{tier.price}</span>
                  <span style={{ color: '#94A3B8', fontSize: '16px' }}>{tier.period}</span>
                </div>
                
                {tier.originalPrice && (
                  <div style={{ display: 'inline-block', background: 'rgba(16,185,129,0.2)', color: '#10B981', fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: '6px', marginBottom: '20px' }}>{tier.savings} forever</div>
                )}
                {!tier.originalPrice && (
                  <div style={{ display: 'inline-block', background: 'rgba(255,107,53,0.2)', color: '#FF6B35', fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: '6px', marginBottom: '20px' }}>{tier.savings}</div>
                )}
                
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', marginBottom: '24px' }}>
                  <p style={{ color: '#94A3B8', fontSize: '13px', margin: '0 0 12px' }}>Includes:</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {['Full platform access', 'AI scheduling', 'Career pathing', 'Skills matrix', 'Mobile app', 'All integrations', 'Analytics & reporting'].map((f, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#CBD5E1', fontSize: '13px', marginBottom: '8px' }}>
                        <Check size={14} color="#10B981" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '12px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
                    <span style={{ color: '#64748B' }}>Flex users</span>
                    <span style={{ color: '#94A3B8', fontWeight: 500 }}>{tier.flexPrice}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                    <span style={{ color: '#64748B' }}>Pilot setup</span>
                    <span style={{ color: '#94A3B8', fontWeight: 500 }}>{tier.pilotFee}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => window.open('https://calendly.com/dazevedo-uplifthq/30min', '_blank')}
                  style={{
                  width: '100%',
                  background: tier.primary ? '#FF6B35' : 'white',
                  color: tier.primary ? 'white' : '#0F172A',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '14px',
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}>
                  <Calendar size={16} /> Book a Call
                </button>
              </div>
            ))}
          </div>
          
          {/* Flex Pricing Explanation */}
          {/* Flex Pricing Explanation */}
          <div className="flex-banner" style={{ 
            marginTop: '32px', 
            padding: '20px 24px', 
            background: 'rgba(255,255,255,0.05)', 
            borderRadius: '12px', 
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              <p style={{ color: 'white', fontWeight: 600, fontSize: '15px', margin: '0 0 4px' }}>
                <Users size={16} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
                Seasonal staff? Base + Flex pricing available.
              </p>
              <p style={{ color: '#64748B', fontSize: '13px', margin: 0 }}>
                Add temporary users at £2/user premium. No commitment. Billed monthly.
              </p>
            </div>
          </div>
          
          {/* Design Partner Note */}
          <div style={{ textAlign: 'center', marginTop: '32px', padding: '24px', background: 'rgba(255,107,53,0.1)', borderRadius: '12px', border: '1px solid rgba(255,107,53,0.2)' }}>
            <p style={{ color: 'white', fontWeight: 600, marginBottom: '8px', fontSize: '16px' }}>Design Partner Program</p>
            <p style={{ color: '#CBD5E1', fontSize: '14px', margin: 0 }}>First 10 customers lock in discounted rates <strong style={{ color: 'white' }}>forever</strong>. Currently <strong style={{ color: '#FF6B35' }}>7 spots remaining</strong>.</p>
          </div>
          
          {/* Minimum Users Note */}
          <p style={{ textAlign: 'center', marginTop: '24px', color: '#64748B', fontSize: '13px' }}>
            Team under 50? <span style={{ color: '#94A3B8', cursor: 'pointer' }} onClick={() => setShowWaitlist(true)}>Get in touch</span> — we'll notify you when we have something for smaller teams.
          </p>
        </div>
      </section>
      
      {/* ================================================================== */}
      {/* FINAL CTA */}
      {/* ================================================================== */}
      <section style={{ padding: '120px 0', background: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '44px', fontWeight: 700, color: '#0F172A', marginBottom: '24px' }}>
            Ready to reduce turnover<br/>
            <span className="gradient-text">and grow your people?</span>
          </h2>
          <p style={{ fontSize: '18px', color: '#64748B', marginBottom: '40px' }}>
            See Uplift in action. Try the demo or book a call with our team.
          </p>
          <div className="cta-buttons" style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button onClick={() => setShowWaitlist(true)} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#FF6B35', color: 'white', border: 'none', padding: '18px 36px', borderRadius: '12px', fontSize: '18px', fontWeight: 700, cursor: 'pointer' }}>
              Try Demo <ArrowRight size={20} />
            </button>
            <button onClick={() => window.open('https://calendly.com/dazevedo-uplifthq/30min', '_blank')} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#F1F5F9', color: '#0F172A', border: 'none', padding: '18px 36px', borderRadius: '12px', fontSize: '18px', fontWeight: 600, cursor: 'pointer' }}>
              <Calendar size={20} /> Book a Call
            </button>
          </div>
        </div>
      </section>
      
      {/* ================================================================== */}
      {/* FOOTER */}
      {/* ================================================================== */}
      <footer style={{ background: '#0F172A', padding: '64px 0 32px', borderTop: '1px solid #1E293B' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '48px', marginBottom: '48px' }}>
            <div>
              <RisingULogo color="light" />
              <p style={{ color: '#64748B', fontSize: '14px', marginTop: '16px', maxWidth: '300px' }}>
                The workforce intelligence platform for frontline teams. Show your people where they can go.
              </p>
            </div>
            
            {[
              { title: 'Platform', links: [
                { name: 'For Workers', href: '#for-workers' },
                { name: 'For Managers', href: '#for-managers' },
                { name: 'AI Scheduler', href: '#platform' },
                { name: 'Integrations', href: '#platform' }
              ]},
              { title: 'Company', links: [
                { name: 'Pricing', href: '#pricing' },
                { name: 'Contact', href: 'mailto:hello@uplifthq.co.uk' }
              ]}
            ].map((col, i) => (
              <div key={i}>
                <h4 style={{ color: 'white', fontWeight: 600, marginBottom: '16px', fontSize: '14px' }}>{col.title}</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {col.links.map((link, j) => (
                    <li key={j} style={{ marginBottom: '10px' }}>
                      <a href={link.href} style={{ color: '#64748B', textDecoration: 'none', fontSize: '14px' }}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div style={{ borderTop: '1px solid #1E293B', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ color: '#64748B', fontSize: '13px' }}>© 2026 Uplift. All rights reserved.</p>
            <p style={{ color: '#64748B', fontSize: '13px' }}>Made with ♥ for frontline workers everywhere</p>
          </div>
        </div>
      </footer>
      
      {/* Video Demo Modal */}
      <VideoDemo isOpen={showDemo} onClose={() => setShowDemo(false)} />
      
      {/* Waitlist Modal */}
      {showWaitlist && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px'
        }}>
          {/* Backdrop */}
          <div 
            onClick={() => setShowWaitlist(false)}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(15, 23, 42, 0.8)',
              backdropFilter: 'blur(8px)'
            }} 
          />
          
          {/* Modal */}
          <div style={{
            position: 'relative',
            background: 'white',
            borderRadius: '24px',
            padding: '48px',
            maxWidth: '480px',
            width: '100%',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}>
            {/* Close button */}
            <button 
              onClick={() => setShowWaitlist(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: '#F1F5F9',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={18} color="#64748B" />
            </button>
            
            {!waitlistSubmitted ? (
              <>
                {/* Emoji/Icon */}
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <Zap size={32} color="#FF6B35" />
                </div>
                
                <h3 style={{ fontSize: '28px', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>
                  Self-Serve Demo Coming Soon
                </h3>
                
                <p style={{ fontSize: '16px', color: '#64748B', marginBottom: '32px', lineHeight: 1.6 }}>
                  We're putting the finishing touches on the hands-on demo. Join the waitlist for early access.
                </p>
                
                {/* Email Form */}
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#334155', marginBottom: '8px' }}>
                    Work Email
                  </label>
                  <input
                    type="email"
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    placeholder="you@company.com"
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      fontSize: '16px',
                      border: '2px solid #E2E8F0',
                      borderRadius: '12px',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#FF6B35'}
                    onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                  />
                </div>
                
                <button
                  onClick={() => {
                    if (waitlistEmail) {
                      setWaitlistSubmitted(true);
                      // Here you'd normally send to your backend
                      console.log('Waitlist signup:', waitlistEmail);
                    }
                  }}
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: '#FF6B35',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  Get Early Access <ArrowRight size={18} />
                </button>
                
                {/* Divider */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '32px 0' }}>
                  <div style={{ flex: 1, height: '1px', background: '#E2E8F0' }} />
                  <span style={{ color: '#94A3B8', fontSize: '14px' }}>or</span>
                  <div style={{ flex: 1, height: '1px', background: '#E2E8F0' }} />
                </div>
                
                {/* Alternative Actions */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    onClick={() => {
                      setShowWaitlist(false);
                      setShowDemo(true);
                    }}
                    style={{
                      flex: 1,
                      padding: '14px',
                      background: '#F1F5F9',
                      color: '#334155',
                      border: 'none',
                      borderRadius: '10px',
                      fontSize: '14px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px'
                    }}
                  >
                    <Play size={16} /> Watch Tour
                  </button>
                  <button
                    onClick={() => {
                      setShowWaitlist(false);
                      // Open Calendly or contact form
                      window.open('https://calendly.com/dazevedo-uplifthq/30min', '_blank');
                    }}
                    style={{
                      flex: 1,
                      padding: '14px',
                      background: '#F1F5F9',
                      color: '#334155',
                      border: 'none',
                      borderRadius: '10px',
                      fontSize: '14px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px'
                    }}
                  >
                    <Calendar size={16} /> Book a Call
                  </button>
                </div>
              </>
            ) : (
              /* Success State */
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: '#DCFCE7',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px'
                }}>
                  <Check size={32} color="#16A34A" />
                </div>
                
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>
                  You're on the list!
                </h3>
                
                <p style={{ fontSize: '16px', color: '#64748B', marginBottom: '32px', lineHeight: 1.6 }}>
                  We'll email you the moment the self-serve demo is ready. In the meantime...
                </p>
                
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    onClick={() => {
                      setShowWaitlist(false);
                      setShowDemo(true);
                    }}
                    style={{
                      flex: 1,
                      padding: '14px',
                      background: '#FF6B35',
                      color: 'white',
                      border: 'none',
                      borderRadius: '10px',
                      fontSize: '14px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px'
                    }}
                  >
                    <Play size={16} /> Watch the Tour
                  </button>
                  <button
                    onClick={() => setShowWaitlist(false)}
                    style={{
                      flex: 1,
                      padding: '14px',
                      background: '#F1F5F9',
                      color: '#334155',
                      border: 'none',
                      borderRadius: '10px',
                      fontSize: '14px',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
