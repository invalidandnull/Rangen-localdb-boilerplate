import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Flowote',
  description: 'Privacy policy and data handling practices for Flowote.',
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
            Welcome to Flowote. We are committed to protecting your privacy and ensuring the security of your personal information.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered content connection and creation platform.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <h3 className="text-xl font-medium mt-4 mb-2">2.1 Personal Information</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Account information (email address, name, profile details)</li>
            <li>Authentication data</li>
            <li>Payment information (processed securely through our payment providers)</li>
          </ul>

          <h3 className="text-xl font-medium mt-4 mb-2">2.2 Content Data</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Uploaded materials (videos, websites, PDFs, documents, etc.)</li>
            <li>Chatbot interactions and context</li>
            <li>Generated content and drafts</li>
            <li>Project settings and preferences</li>
          </ul>

          <h3 className="text-xl font-medium mt-4 mb-2">2.3 Technical Data</h3>
          <ul className="list-disc pl-6 mb-4">
            {/* <li>Device and browser information</li>
            <li>IP address and location data</li> */}
            <li>Usage statistics and analytics</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6">
            <li>To provide and enhance our content creation services</li>
            <li>To maintain and optimize our platform</li>
            <li>To communicate with you about your account and updates</li>
            <li>To ensure platform security and prevent abuse</li>
            <li>
              To improve our AI algorithms for better content generation and recommendations (note: we do not use your personal data or uploaded content to train AI models; any improvements are based on aggregated, anonymized data or publicly available information)
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">4. Data Storage and Security</h2>
          <p>
            We implement industry-standard security measures to protect your data. Your personal information is stored securely in the cloud.
            We use encryption for data transmission and storage to protect your personal information. Your uploaded content and generated materials are kept private, locally and are not accessed by unauthorized personnel.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">5. Data Sharing and Third Parties</h2>
          <p>
            We do not sell your personal information. We may share data with:
          </p>
          <ul className="list-disc pl-6">
            <li>Service providers who assist in platform operation</li>
            <li>
              Third-party AI service providers to process your requests and generate content (we ensure that these providers handle your data in accordance with our privacy standards and that no human has access to your content)
            </li>
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
            <li>Request deletion of your data, including uploaded content and generated materials</li>
            <li>Export your project data</li>
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
            Email: privacy@flowote.com
          </p>
        </section>
      </div>
    </div>
  )
}