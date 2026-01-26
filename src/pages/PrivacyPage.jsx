import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Logo component
const RisingULogo = ({ size = 40, color = "dark" }) => {
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

const Section = ({ id, title, children }) => (
  <section id={id} style={{ marginBottom: '48px' }}>
    <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#0F172A', marginBottom: '16px' }}>{title}</h2>
    <div style={{ color: '#334155', lineHeight: 1.8 }}>{children}</div>
  </section>
);

const BulletList = ({ items }) => (
  <ul style={{ paddingLeft: '24px', marginTop: '12px', marginBottom: '12px' }}>
    {items.map((item, i) => (
      <li key={i} style={{ marginBottom: '8px' }}>{item}</li>
    ))}
  </ul>
);

export default function PrivacyPage() {
  const sections = [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'data-we-collect', title: '2. Data We Collect' },
    { id: 'how-we-use', title: '3. How We Use Your Data' },
    { id: 'data-sharing', title: '4. Data Sharing' },
    { id: 'data-storage', title: '5. Data Storage & Security' },
    { id: 'your-rights', title: '6. Your Rights' },
    { id: 'cookies', title: '7. Cookies & Tracking' },
    { id: 'children', title: '8. Children\'s Privacy' },
    { id: 'changes', title: '9. Changes to This Policy' },
    { id: 'contact', title: '10. Contact Us' },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: '#F8FAFC',
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
        <RisingULogo color="dark" />
        <Link
          to="/"
          style={{
            color: '#64748B',
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
        maxWidth: '800px',
        margin: '0 auto',
        padding: '60px 24px 120px'
      }}>
        <h1 style={{
          fontSize: '44px',
          fontWeight: 700,
          color: '#0F172A',
          marginBottom: '16px',
          lineHeight: 1.2
        }}>
          Privacy Policy
        </h1>

        <p style={{ color: '#64748B', marginBottom: '48px', fontSize: '16px' }}>
          Last updated: January 2026
        </p>

        {/* Table of Contents */}
        <div style={{
          background: '#F1F5F9',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '48px'
        }}>
          <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#0F172A', marginBottom: '16px' }}>Contents</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {sections.map((section) => (
              <li key={section.id} style={{ marginBottom: '8px' }}>
                <a
                  href={`#${section.id}`}
                  style={{ color: '#3B82F6', textDecoration: 'none', fontSize: '14px' }}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div style={{ fontSize: '16px' }}>
          <Section id="introduction" title="1. Introduction">
            <p>
              Uplift ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our workforce management platform, including our mobile application and web services (collectively, the "Service").
            </p>
            <p style={{ marginTop: '16px' }}>
              Please read this Privacy Policy carefully. By using the Service, you agree to the collection and use of information in accordance with this policy.
            </p>
          </Section>

          <Section id="data-we-collect" title="2. Data We Collect">
            <p><strong>Personal Information</strong></p>
            <p>We may collect the following types of personal information:</p>
            <BulletList items={[
              'Name, email address, and phone number',
              'Employment information (job title, department, location, employee ID)',
              'Profile photo (optional)',
              'Work schedule and shift information',
              'Skills, certifications, and training records',
              'Performance and attendance data',
              'Device information and identifiers'
            ]} />

            <p style={{ marginTop: '24px' }}><strong>Location Data</strong></p>
            <p>
              With your consent, we may collect precise location data when you use the mobile app for features such as clock-in/clock-out verification. You can disable location services at any time through your device settings.
            </p>

            <p style={{ marginTop: '24px' }}><strong>Camera and Photos</strong></p>
            <p>
              With your consent, we may access your device's camera for features such as profile photos, document scanning, or training verification. Photos are only captured when you explicitly use these features.
            </p>

            <p style={{ marginTop: '24px' }}><strong>Usage Data</strong></p>
            <p>
              We automatically collect information about how you interact with the Service, including pages visited, features used, and time spent in the app.
            </p>
          </Section>

          <Section id="how-we-use" title="3. How We Use Your Data">
            <p>We use the information we collect to:</p>
            <BulletList items={[
              'Provide and maintain the Service',
              'Create and manage your account',
              'Display work schedules and shift information',
              'Track skills, certifications, and career progression',
              'Send notifications about shifts, tasks, and important updates',
              'Enable communication between team members and managers',
              'Generate workforce analytics and reports for employers',
              'Improve and optimize the Service',
              'Respond to your requests and support inquiries',
              'Comply with legal obligations'
            ]} />
          </Section>

          <Section id="data-sharing" title="4. Data Sharing">
            <p><strong>With Your Employer</strong></p>
            <p>
              As a workforce management platform, your employer has access to work-related data including schedules, attendance, skills, and performance information. Your employer determines how this data is used within their organization.
            </p>

            <p style={{ marginTop: '24px' }}><strong>Service Providers</strong></p>
            <p>
              We may share data with third-party service providers who assist us in operating the Service, such as cloud hosting, analytics, and customer support. These providers are contractually obligated to protect your data.
            </p>

            <p style={{ marginTop: '24px' }}><strong>Legal Requirements</strong></p>
            <p>
              We may disclose your information if required by law, court order, or government request, or to protect our rights, safety, or the rights and safety of others.
            </p>

            <p style={{ marginTop: '24px' }}><strong>Business Transfers</strong></p>
            <p>
              In the event of a merger, acquisition, or sale of assets, your data may be transferred as part of that transaction.
            </p>
          </Section>

          <Section id="data-storage" title="5. Data Storage & Security">
            <p>
              Your data is stored securely on servers located in the United Kingdom and the European Economic Area. We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p style={{ marginTop: '16px' }}>
              These measures include encryption of data in transit and at rest, access controls, regular security assessments, and employee training on data protection.
            </p>
            <p style={{ marginTop: '16px' }}>
              We retain your personal data for as long as your account is active or as needed to provide services. After account deletion, we may retain certain data for legal compliance purposes.
            </p>
          </Section>

          <Section id="your-rights" title="6. Your Rights">
            <p>Under applicable data protection laws (including GDPR), you have the right to:</p>
            <BulletList items={[
              'Access: Request a copy of your personal data',
              'Rectification: Request correction of inaccurate data',
              'Erasure: Request deletion of your personal data',
              'Restriction: Request limitation of processing',
              'Portability: Request transfer of your data in a structured format',
              'Objection: Object to certain types of processing',
              'Withdraw Consent: Withdraw consent where processing is based on consent'
            ]} />
            <p style={{ marginTop: '16px' }}>
              To exercise these rights, please contact us at <a href="mailto:privacy@uplifthq.co.uk" style={{ color: '#3B82F6' }}>privacy@uplifthq.co.uk</a>. Note that some rights may be limited where we have a legal obligation or legitimate interest.
            </p>
          </Section>

          <Section id="cookies" title="7. Cookies & Tracking">
            <p>
              Our website uses cookies and similar tracking technologies to improve your experience, analyze usage, and deliver personalized content.
            </p>
            <p style={{ marginTop: '16px' }}>
              <strong>Essential Cookies:</strong> Required for the Service to function properly.
            </p>
            <p style={{ marginTop: '8px' }}>
              <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.
            </p>
            <p style={{ marginTop: '8px' }}>
              <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements.
            </p>
            <p style={{ marginTop: '16px' }}>
              You can manage cookie preferences through your browser settings.
            </p>
          </Section>

          <Section id="children" title="8. Children's Privacy">
            <p>
              The Service is not intended for individuals under the age of 16. We do not knowingly collect personal data from children. If you believe we have collected data from a child, please contact us immediately.
            </p>
          </Section>

          <Section id="changes" title="9. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
            </p>
          </Section>

          <Section id="contact" title="10. Contact Us">
            <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
            <div style={{ marginTop: '16px', padding: '20px', background: '#F1F5F9', borderRadius: '8px' }}>
              <p style={{ margin: 0 }}><strong>Uplift</strong></p>
              <p style={{ margin: '8px 0 0' }}>Email: <a href="mailto:privacy@uplifthq.co.uk" style={{ color: '#3B82F6' }}>privacy@uplifthq.co.uk</a></p>
              <p style={{ margin: '8px 0 0' }}>Website: <a href="https://www.uplifthq.co.uk" style={{ color: '#3B82F6' }}>www.uplifthq.co.uk</a></p>
            </div>
          </Section>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid #E2E8F0',
        padding: '32px 24px',
        textAlign: 'center'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '16px' }}>
          <Link to="/privacy" style={{ color: '#64748B', textDecoration: 'none', fontSize: '14px' }}>Privacy Policy</Link>
          <span style={{ color: '#CBD5E1' }}>|</span>
          <Link to="/terms" style={{ color: '#64748B', textDecoration: 'none', fontSize: '14px' }}>Terms of Service</Link>
        </div>
        <p style={{ color: '#94A3B8', fontSize: '14px' }}>
          &copy; 2026 Uplift. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
