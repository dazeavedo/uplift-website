import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Smartphone, Check, Calendar, ArrowLeft } from 'lucide-react';

// ============================================================
// CONFIGURATION - Update these values
// ============================================================

// HubSpot Configuration
const HUBSPOT_CONFIG = {
  portalId: '147593675',
  formGuid: 'ffc77268-2efe-4af4-84b9-03f61b8f5672'
};

// Demo URLs - update when ready
const DEMO_CONFIG = {
  portalUrl: 'https://upliftportaldemo.netlify.app/',
  appStoreUrl: '#', // Coming soon
  playStoreUrl: '#', // Coming soon
  calendlyUrl: 'https://calendly.com/dazevedo-uplifthq/30min'
};

// Demo credentials
const DEMO_CREDENTIALS = {
  worker: { email: 'demo-worker@uplifthq.co.uk', password: 'demo123' },
  manager: { email: 'demo-manager@uplifthq.co.uk', password: 'demo123' },
  admin: { email: 'demo-admin@uplifthq.co.uk', password: 'demo123' }
};

// Logo component
const RisingULogo = ({ size = 40, color = "light" }) => {
  const textColor = color === "light" ? "#FFFFFF" : "#0F172A";
  return (
    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" rx="20" fill="#FF6B35"/>
        <path d="M22 20 L22 65 Q22 80 37 80 L63 80 Q78 80 78 65 L78 42 L66 28 L66 65 Q66 70 63 70 L37 70 Q34 70 34 65 L34 20 Z" fill="white"/>
        <path d="M66 28 L78 42 L90 28 L78 14 Z" fill="white"/>
      </svg>
      <span style={{ fontSize: '24px', fontWeight: 600, color: textColor, fontFamily: "'Outfit', sans-serif" }}>Uplift</span>
    </Link>
  );
};

export default function DemoPage() {
  const [email, setEmail] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    // Submit to HubSpot Forms API
    // This creates a contact in HubSpot and triggers the workflow to send the welcome email
    fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_CONFIG.portalId}/${HUBSPOT_CONFIG.formGuid}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: [{ name: 'email', value: email }],
        context: {
          pageUri: window.location.href,
          pageName: 'Demo Access Request'
        }
      })
    }).catch(err => console.error('HubSpot submission error:', err));

    setSubmittedEmail(email);
    setAccessGranted(true);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0F172A',
      fontFamily: "'Outfit', sans-serif"
    }}>
      {/* Navigation */}
      <nav style={{
        padding: '16px 24px',
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <RisingULogo color="light" />
        <Link
          to="/"
          style={{
            color: 'rgba(255,255,255,0.7)',
            textDecoration: 'none',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </nav>

      {/* Main Content */}
      <main style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '60px 24px 120px'
      }}>
        {!accessGranted ? (
          /* Email Capture Form */
          <div style={{ maxWidth: '520px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{
              fontSize: '48px',
              fontWeight: 700,
              color: 'white',
              marginBottom: '16px',
              lineHeight: 1.1
            }}>
              See Uplift for yourself.
            </h1>

            <p style={{
              fontSize: '20px',
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '48px'
            }}>
              Try the demo. We'll be in touch.
            </p>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '16px' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  required
                  style={{
                    width: '100%',
                    padding: '18px 20px',
                    fontSize: '16px',
                    border: '2px solid #334155',
                    borderRadius: '12px',
                    background: '#1E293B',
                    color: 'white',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '18px',
                  fontSize: '16px',
                  fontWeight: 600,
                  background: '#FF6B35',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                Get Access <ArrowRight size={20} />
              </button>
            </form>

            <p style={{
              fontSize: '13px',
              color: 'rgba(255,255,255,0.5)',
              marginTop: '16px'
            }}>
              By continuing, you agree to our Privacy Policy
            </p>

            <p style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.6)',
              marginTop: '48px',
              paddingTop: '32px',
              borderTop: '1px solid #334155'
            }}>
              Trusted by retail, hospitality, healthcare & manufacturing teams
            </p>
          </div>
        ) : (
          /* Access Granted View */
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Success Header */}
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: '#10B981',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px'
              }}>
                <Check size={32} color="white" />
              </div>

              <h1 style={{
                fontSize: '40px',
                fontWeight: 700,
                color: 'white',
                marginBottom: '12px'
              }}>
                You're in.
              </h1>

              <p style={{
                fontSize: '18px',
                color: 'rgba(255,255,255,0.7)'
              }}>
                We've sent a copy to {submittedEmail}
              </p>
            </div>

            {/* Product Cards - 3 cards: Head Office Portal, Manager App, Worker App */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
              marginBottom: '32px'
            }}>
              {/* Head Office Portal Card */}
              <div style={{
                background: '#1E293B',
                borderRadius: '20px',
                padding: '28px',
                border: '1px solid #334155'
              }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  background: 'rgba(139, 92, 246, 0.15)',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <Monitor size={26} color="#8B5CF6" />
                </div>

                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: 'white',
                  marginBottom: '8px'
                }}>
                  Head Office Portal
                </h3>

                <p style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.6)',
                  marginBottom: '20px',
                  lineHeight: 1.5
                }}>
                  AI scheduling, demand forecasting, analytics
                </p>

                <a
                  href={DEMO_CONFIG.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 20px',
                    background: '#8B5CF6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '14px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    cursor: 'pointer',
                    marginBottom: '16px'
                  }}
                >
                  Launch Portal <ArrowRight size={16} />
                </a>

                <div style={{
                  background: 'rgba(139, 92, 246, 0.1)',
                  borderRadius: '8px',
                  padding: '12px',
                  fontSize: '13px'
                }}>
                  <p style={{ color: '#A78BFA', margin: '0 0 4px', fontWeight: 500 }}>Demo credentials:</p>
                  <p style={{ color: 'rgba(255,255,255,0.7)', margin: 0 }}>{DEMO_CREDENTIALS.admin.email}</p>
                  <p style={{ color: 'rgba(255,255,255,0.5)', margin: 0 }}>{DEMO_CREDENTIALS.admin.password}</p>
                </div>
              </div>

              {/* Manager App Card */}
              <div style={{
                background: '#1E293B',
                borderRadius: '20px',
                padding: '28px',
                border: '1px solid #334155'
              }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  background: 'rgba(59, 130, 246, 0.15)',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <Smartphone size={26} color="#3B82F6" />
                </div>

                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: 'white',
                  marginBottom: '8px'
                }}>
                  Manager App
                </h3>

                <p style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.6)',
                  marginBottom: '20px',
                  lineHeight: 1.5
                }}>
                  Approvals, team view, floor management
                </p>

                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '16px' }}>
                  <span style={{
                    padding: '12px 16px',
                    background: '#334155',
                    color: 'rgba(255,255,255,0.5)',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '13px',
                    fontWeight: 500
                  }}>
                    Coming Soon
                  </span>
                </div>

                <div style={{
                  background: 'rgba(59, 130, 246, 0.1)',
                  borderRadius: '8px',
                  padding: '12px',
                  fontSize: '13px'
                }}>
                  <p style={{ color: '#60A5FA', margin: '0 0 4px', fontWeight: 500 }}>Demo credentials:</p>
                  <p style={{ color: 'rgba(255,255,255,0.7)', margin: 0 }}>{DEMO_CREDENTIALS.manager.email}</p>
                  <p style={{ color: 'rgba(255,255,255,0.5)', margin: 0 }}>{DEMO_CREDENTIALS.manager.password}</p>
                </div>
              </div>

              {/* Worker App Card */}
              <div style={{
                background: '#1E293B',
                borderRadius: '20px',
                padding: '28px',
                border: '1px solid #334155'
              }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  background: 'rgba(255, 107, 53, 0.15)',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <Smartphone size={26} color="#FF6B35" />
                </div>

                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: 'white',
                  marginBottom: '8px'
                }}>
                  Worker App
                </h3>

                <p style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.6)',
                  marginBottom: '20px',
                  lineHeight: 1.5
                }}>
                  Schedules, skills, career paths
                </p>

                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '16px' }}>
                  <span style={{
                    padding: '12px 16px',
                    background: '#334155',
                    color: 'rgba(255,255,255,0.5)',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '13px',
                    fontWeight: 500
                  }}>
                    Coming Soon
                  </span>
                </div>

                <div style={{
                  background: 'rgba(255, 107, 53, 0.1)',
                  borderRadius: '8px',
                  padding: '12px',
                  fontSize: '13px'
                }}>
                  <p style={{ color: '#FF6B35', margin: '0 0 4px', fontWeight: 500 }}>Demo credentials:</p>
                  <p style={{ color: 'rgba(255,255,255,0.7)', margin: 0 }}>{DEMO_CREDENTIALS.worker.email}</p>
                  <p style={{ color: 'rgba(255,255,255,0.5)', margin: 0 }}>{DEMO_CREDENTIALS.worker.password}</p>
                </div>
              </div>
            </div>

            {/* Book a Call CTA */}
            <div style={{
              textAlign: 'center',
              padding: '40px',
              background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
              borderRadius: '20px',
              border: '1px solid #334155'
            }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 600,
                color: 'white',
                marginBottom: '12px'
              }}>
                Want a guided walkthrough?
              </h3>

              <p style={{
                fontSize: '16px',
                color: 'rgba(255,255,255,0.6)',
                marginBottom: '24px'
              }}>
                See how Uplift can work for your specific team
              </p>

              <a
                href={DEMO_CONFIG.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 28px',
                  background: '#FF6B35',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                <Calendar size={20} /> Book a 15-min Call
              </a>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
