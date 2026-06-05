import SEO from '../components/SEO';
import PageLayout from '../components/PageLayout';
import SectionHeader from '../components/SectionHeader';

const sections = [
  { title: 'Acceptance of Terms', content: 'By accessing or using GlobalGuard, you agree to these Terms of Service. If you disagree, please do not use the service. We may update these terms and will notify you of significant changes.' },
  { title: 'Use of Service', content: 'GlobalGuard is provided for personal safety purposes only. You may not use the service to harass others, transmit false emergency alerts, circumvent safety features, or violate applicable laws. Violations may result in immediate account termination.' },
  { title: 'Emergency Features', content: 'SOS and emergency features are intended for genuine emergencies. False emergency alerts may be reported to local authorities. GlobalGuard is not a replacement for official emergency services. Always call 911 or local emergency services in life-threatening situations.' },
  { title: 'Subscription and Billing', content: 'Paid subscriptions are billed monthly or annually. You may cancel at any time. Refunds are available within 30 days of purchase. Prices may change with 30 days notice. Free tier features remain available after cancellation of paid plans.' },
  { title: 'Limitation of Liability', content: 'GlobalGuard provides safety tools to assist users but cannot guarantee prevention of all incidents. We are not liable for damages arising from service interruptions, inaccurate safety information, or emergency response delays beyond our control.' },
  { title: 'Intellectual Property', content: 'All GlobalGuard software, content, and trademarks are owned by GlobalGuard Inc. You receive a limited, non-exclusive license to use the app for personal safety purposes only.' },
  { title: 'Governing Law', content: 'These terms are governed by applicable law in the jurisdiction of operation. Disputes shall be resolved through binding arbitration, except where prohibited by local law.' },
];

export default function Terms() {
  return (
    <PageLayout>
      <SEO title="Terms of Service — GlobalGuard" description="GlobalGuard Terms of Service and user agreement. Read our terms for using the GlobalGuard AI safety platform." canonical="/terms" noIndex={false} />
      <section className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader as="h1" badge="Legal" title="Terms of Service" subtitle="Last updated: June 5, 2026" />
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