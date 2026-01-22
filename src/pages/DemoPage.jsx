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
  portalUrl: 'https://portal.uplifthq.co.uk',
  appStoreUrl: '#', // TODO: Update with App Store URL
  playStoreUrl: '#', // TODO: Update with Play Store URL
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
              No sales call. No slides. Just the product.
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

            {/* Product Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
              marginBottom: '32px'
            }}>
              {/* Manager Portal Card */}
              <div style={{
                background: '#1E293B',
                borderRadius: '20px',
                padding: '32px',
                border: '1px solid #334155'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  background: 'rgba(255, 107, 53, 0.15)',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <Monitor size={28} color="#FF6B35" />
                </div>

                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 600,
                  color: 'white',
                  marginBottom: '8px'
                }}>
                  Manager Portal
                </h3>

                <p style={{
                  fontSize: '15px',
                  color: 'rgba(255,255,255,0.6)',
                  marginBottom: '24px',
                  lineHeight: 1.6
                }}>
                  Scheduling, analytics, and team insights
                </p>

                <a
                  href={DEMO_CONFIG.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '14px 24px',
                    background: '#FF6B35',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '15px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Launch Portal <ArrowRight size={18} />
                </a>
              </div>

              {/* Worker App Card */}
              <div style={{
                background: '#1E293B',
                borderRadius: '20px',
                padding: '32px',
                border: '1px solid #334155'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  background: 'rgba(255, 107, 53, 0.15)',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <Smartphone size={28} color="#FF6B35" />
                </div>

                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 600,
                  color: 'white',
                  marginBottom: '8px'
                }}>
                  Worker App
                </h3>

                <p style={{
                  fontSize: '15px',
                  color: 'rgba(255,255,255,0.6)',
                  marginBottom: '24px',
                  lineHeight: 1.6
                }}>
                  See what your workers see — shifts, skills, career paths
                </p>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <a
                    href={DEMO_CONFIG.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '14px 20px',
                      background: '#334155',
                      color: 'white',
                      border: 'none',
                      borderRadius: '10px',
                      fontSize: '14px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    App Store
                  </a>
                  <a
                    href={DEMO_CONFIG.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '14px 20px',
                      background: '#334155',
                      color: 'white',
                      border: 'none',
                      borderRadius: '10px',
                      fontSize: '14px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    Google Play
                  </a>
                </div>
              </div>
            </div>

            {/* Credentials Box */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '28px 32px',
              marginBottom: '48px'
            }}>
              <h4 style={{
                fontSize: '16px',
                fontWeight: 600,
                color: '#0F172A',
                marginBottom: '20px'
              }}>
                Demo Login Credentials
              </h4>

              <div style={{ display: 'grid', gap: '16px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 24px' }}>
                  <span style={{ color: '#64748B', fontSize: '14px', minWidth: '120px' }}>Worker App:</span>
                  <code style={{
                    background: '#E2E8F0',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '14px',
                    color: '#0F172A'
                  }}>
                    {DEMO_CREDENTIALS.worker.email}
                  </code>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 24px' }}>
                  <span style={{ color: '#64748B', fontSize: '14px', minWidth: '120px' }}>Manager App:</span>
                  <code style={{
                    background: '#E2E8F0',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '14px',
                    color: '#0F172A'
                  }}>
                    {DEMO_CREDENTIALS.manager.email}
                  </code>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 24px' }}>
                  <span style={{ color: '#64748B', fontSize: '14px', minWidth: '120px' }}>Portal:</span>
                  <code style={{
                    background: '#E2E8F0',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '14px',
                    color: '#0F172A'
                  }}>
                    {DEMO_CREDENTIALS.admin.email}
                  </code>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 24px' }}>
                  <span style={{ color: '#64748B', fontSize: '14px', minWidth: '120px' }}>Password (all):</span>
                  <code style={{
                    background: '#E2E8F0',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '14px',
                    color: '#0F172A',
                    fontWeight: 600
                  }}>
                    {DEMO_CREDENTIALS.worker.password}
                  </code>
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
