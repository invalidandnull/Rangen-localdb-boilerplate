import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use - Flowote',
  description: 'Terms of use and service conditions for Flowote.',
}

export default function TermsOfUse() {
  return (
    <div className="container max-w-3xl py-12 mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-8">Terms of Use</h1>
        <p className="text-muted-foreground">Last updated: 3/31/2025</p>
      </div>
      
      <div className="prose prose-slate dark:prose-invert max-w-none mt-12">
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using Flowote, you agree to be bound by these Terms of Use. If you disagree with any part of these terms,
            you may not access our service. These terms apply to all users, including free and paid subscribers.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
          <p>
            Flowote is an AI-powered content connection and creation platform that provides:
          </p>
          <ul className="list-disc pl-6">
            <li>Tools to upload and connect various content types (audios, websites, PDFs, documents, etc.)</li>
            <li>Integration with AI chatbot nodes (e.g., ChatGPT, Claude, Gemini) to generate or rewrite content</li>
            <li>Contextual content generation based on uploaded materials</li>
            <li>Project management and organization features for content creation workflows</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
          <h3 className="text-xl font-medium mt-4 mb-2">3.1 Account Creation</h3>
          <p>
            You must provide accurate information when creating an account. You are responsible for maintaining the security of your account
            credentials and for all activities under your account.
          </p>

          <h3 className="text-xl font-medium mt-4 mb-2">3.2 Account Tiers</h3>
          <p>
            We offer different account tiers, including a free plan, Pro plan and the Advanced plan, with varying features and capabilities. 
            Feature availability depends on your subscription level.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
          <ul className="list-disc pl-6">
            <li>Maintain accurate account information</li>
            <li>Ensure you have the legal right to upload and use any content you provide to the platform</li>
            <li>Respect intellectual property rights of others</li>
            <li>Not attempt to circumvent any service limitations or restrictions</li>
            <li>Not use the service for unauthorized automated access or harmful activities</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
          <p>
            All content, features, and functionality of Flowote, including but not limited to text, graphics, logos, and underlying technology,
            are owned by Flowote and are protected by intellectual property laws. You retain ownership of the content you upload and generate using Flowote.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">6. Subscription and Payments</h2>
          <ul className="list-disc pl-6">
            <li>Subscription fees are charged according to the selected plan (e.g., Pro plan includes 2000 credits)</li>
            <li>Payments are processed securely through our payment providers</li>
            <li>Subscriptions auto-renew unless cancelled</li>
            <li>Refunds are provided according to our refund policy</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">7. Data Usage and Storage</h2>
          <p>
            Your use of our service is also governed by our Privacy Policy. All data, including uploaded content and generated materials, 
            is stored securely in the cloud. You are responsible for managing your data and ensuring compliance with applicable laws.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">8. AI Usage Guidelines</h2>
          <ul className="list-disc pl-6">
            <li>AI responses are generated based on your inputs and may not always be accurate or appropriate</li>
            <li>Users are responsible for reviewing and verifying AI-generated content</li>
            <li>The AI system should not be used for harmful, illegal, or malicious purposes</li>
            <li>We reserve the right to monitor AI usage to prevent abuse and ensure compliance with these terms</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
          <p>
            We reserve the right to terminate or suspend access to our service immediately, without prior notice, for any
            violation of these Terms or for any other reason we deem appropriate.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
          <p>
            Flowote is provided “as is” without any warranties. We are not liable for any indirect, incidental, special,
            consequential, or punitive damages resulting from your use of the service, including but not limited to issues arising from AI-generated content.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
          <p>
            We may modify these terms at any time. We will notify users of any material changes. Your continued use of
            Flowote after such modifications constitutes acceptance of the updated terms.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
          <p>
            For any questions about these Terms of Use, please contact us at:
            <br />
            Email: support@flowote.com
          </p>
        </section>
      </div>
    </div>
  )
}