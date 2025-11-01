import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use - NextKit',
  description: 'Terms of use for NextKit starter.',
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
            By accessing or using NextKit, you agree to be bound by these Terms of Use. If you disagree with any part of these terms,
            you may not access our service.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
          <p>
            NextKit is a Next.js starter kit that provides:
          </p>
          <ul className="list-disc pl-6">
            <li>Pre-configured authentication and database setup.</li>
            <li>A set of UI components to build interfaces.</li>
            <li>A foundation for building web applications.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
          <h3 className="text-xl font-medium mt-4 mb-2">3.1 Account Creation</h3>
          <p>
            You must provide accurate information when creating an account. You are responsible for maintaining the security of your account
            credentials and for all activities under your account.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
          <ul className="list-disc pl-6">
            <li>Maintain accurate account information</li>
            <li>Respect intellectual property rights of others</li>
            <li>Not use the service for unauthorized or harmful activities</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
          <p>
            All content, features, and functionality of NextKit are provided as part of this starter kit.
            You retain ownership of the content you create using this starter.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">6. Subscription and Payments</h2>
          <p>
            This starter kit may include examples of subscription and payment integrations. You are responsible for configuring and managing your own payment providers.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">7. Data Usage and Storage</h2>
          <p>
            Your use of our service is also governed by our Privacy Policy. All data is stored as per your configuration.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
          <p>
            We reserve the right to terminate or suspend access to our service immediately, without prior notice, for any
            violation of these Terms.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
          <p>
            NextKit is provided “as is” without any warranties. We are not liable for any indirect, incidental, special,
            consequential, or punitive damages resulting from your use of the service.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
          <p>
            We may modify these terms at any time. Your continued use of
            NextKit after such modifications constitutes acceptance of the updated terms.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
          <p>
            For any questions about these Terms of Use, please contact us at:
            <br />
            Email: support@example.com
          </p>
        </section>
      </div>
    </div>
  )
}