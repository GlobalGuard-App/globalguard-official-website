import SEO from '../components/SEO';
import PageLayout from '../components/PageLayout';
import SectionHeader from '../components/SectionHeader';

const sections = [
  { title: 'Information We Collect', content: 'GlobalGuard collects only the minimum data required to provide safety services: account credentials (email/password), location data (when actively using safety features), and usage analytics (anonymized). We never collect data without explicit consent.' },
  { title: 'How We Use Your Data', content: 'Your data is used exclusively to power GlobalGuard safety features: providing emergency alerts, finding nearby help, AI threat analysis, and improving service reliability. Your data is never sold or shared with third parties for commercial purposes.' },
  { title: 'Zero-Knowledge Architecture', content: 'All sensitive data is encrypted end-to-end before leaving your device. This means GlobalGuard cannot access the content of your data even if legally compelled. Only you hold the decryption keys.' },
  { title: 'Data Retention', content: 'Account data is retained for the duration of your subscription plus 30 days after cancellation, then permanently deleted. Emergency incident reports are retained for 90 days. You may request immediate deletion at any time.' },
  { title: 'Your Rights', content: 'You have the right to access, correct, export, and delete your personal data at any time. Submit requests via the app or email privacy@globalguard.app. We respond within 48 hours.' },
  { title: 'Third-Party Services', content: 'GlobalGuard uses minimal third-party services: cloud infrastructure (encrypted), payment processing (PCI-DSS compliant), and analytics (anonymized). All partners are contractually bound to our privacy standards.' },
  { title: 'Contact', content: 'Privacy questions? Contact our Data Protection Officer at privacy@globalguard.app or write to GlobalGuard Inc., 123 Safety Ave, San Francisco, CA 94105.' },
];

export default function Privacy() {
  return (
    <PageLayout>
      <SEO title="Privacy Policy — GlobalGuard" description="GlobalGuard's commitment to your privacy and data protection." />
      <section className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Legal" title="Privacy Policy" subtitle="Last updated: June 5, 2026" />
          <div className="space-y-8">
            {sections.map((s) => (
              <div key={s.title} className="p-6 rounded-xl" style={{ background: 'rgba(10,14,23,0.5)', border: '1px solid rgba(0,212,255,0.07)' }}>
                <h3 className="text-base font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
