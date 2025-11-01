import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - NextKit',
  description: 'Privacy policy for NextKit starter.',
}

export default function PrivacyPolicy() {
  return (
    <div className="container max-w-3xl py-12 mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: 3/31/2025</p>
      </div>
      
      <div className="prose prose-slate dark:prose-invert max-w-none mt-12">
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Welcome to NextKit. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <h3 className="text-xl font-medium mt-4 mb-2">2.1 Personal Information</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Account information (email address, name, profile details)</li>
            <li>Authentication data</li>
          </ul>

          <h3 className="text-xl font-medium mt-4 mb-2">2.2 Technical Data</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Usage statistics and analytics</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6">
            <li>To provide and enhance our services</li>
            <li>To maintain and optimize our platform</li>
            <li>To communicate with you about your account and updates</li>
            <li>To ensure platform security and prevent abuse</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">4. Data Storage and Security</h2>
          <p>
            We implement industry-standard security measures to protect your data. Your personal information is stored securely.
            We use encryption for data transmission and storage to protect your personal information.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">5. Data Sharing and Third Parties</h2>
          <p>
            We do not sell your personal information. We may share data with:
          </p>
          <ul className="list-disc pl-6">
            <li>Service providers who assist in platform operation</li>
            <li>Analytics services to improve our platform</li>
            <li>Legal authorities when required by law</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">6. Your Rights and Choices</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6">
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of certain data collection</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">7. Children&apos;s Privacy</h2>
          <p>
            Our service is not intended for children under 13. We do not knowingly collect personal information from children
            under 13. If you believe we have collected such information, please contact us immediately.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. We will notify you of any material changes through our platform
            or via email. Your continued use of our service after such modifications constitutes acceptance of the updated policy.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
            <br />
            Email: privacy@example.com
          </p>
        </section>
      </div>
    </div>
  )
}