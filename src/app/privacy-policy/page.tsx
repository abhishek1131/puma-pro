// pages/terms-and-policies.js (or app/terms-and-policies/page.js for App Router)
import { Navigation } from "@/components/Navbar";
import Head from "next/head";

export default function TermsAndPolicies() {
  return (
    <>
      <Navigation/>
      <Head>
        <title>Puma Pro - Terms & Policies</title>
        <meta
          name="description"
          content="Read Puma Pro's Terms of Service, Privacy Policy, Cookie Policy, Booking Policy, Corporate Social Responsibility, Data Security & Compliance, Subscription Terms & Conditions, and Limitation of Liability."
        />
      </Head>
      <div className="bg-gray-100 flex flex-col items-center p-4">
        <div className="shadow-xl border-0 bg-white/80 backdrop-blur-sm rounded-lg w-full p-6 space-y-8">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
            Puma Pro – Terms & Policies
          </h1>
          <p className="text-sm text-gray-600 mb-4 text-center">
            These Terms & Policies were last updated on 20 August 2025.
          </p>

          {/* Terms of Service */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Terms of Service
            </h2>
            <p className="text-gray-700 mb-4">
              These Terms of Service govern your use of the website located at
              https://pumapro.com.au and any related services provided by Puma
              Pro PTY LTD (“Puma Pro”). By accessing or using our website or
              services, you agree to abide by these Terms of Service and to
              comply with all applicable laws and regulations. If you do not
              agree with these Terms, you are prohibited from using or accessing
              this website or any services provided by Puma Pro.
            </p>
            <p className="text-gray-700">
              Puma Pro reserves the right to review and amend these Terms of
              Service at its sole discretion. Any changes will take effect
              immediately upon publication on this page. These Terms of Service
              were last updated on 20 August 2025.
            </p>
          </section>

          {/* Privacy Policy */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Privacy Policy
            </h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                1. We respect your privacy
              </h3>
              <p className="text-gray-700">
                Puma Pro respects your right to privacy and is committed to
                safeguarding the privacy of our customers and website visitors.
                We adhere to the Australian Privacy Principles contained in the
                Privacy Act 1988 (Cth). This policy sets out how we collect and
                treat your personal information.
              </p>

              <h3 className="text-xl font-semibold text-gray-800">
                2. Collection of personal information
              </h3>
              <p className="text-gray-700">
                We may collect and store personal information you provide to us
                directly, including your name, phone number, address, and email
                address, to enable us to send information, provide updates, and
                process your orders or service requests. We may also collect
                information you provide while interacting with us.
              </p>

              <h3 className="text-xl font-semibold text-gray-800">
                3. How we collect your personal information
              </h3>
              <p className="text-gray-700">
                We collect personal information in various ways, including when
                you interact with us electronically or in person, when you
                access our website, and when we provide our services to you. We
                may also receive personal information from third parties, which
                we will protect in accordance with this policy.
              </p>

              <h3 className="text-xl font-semibold text-gray-800">
                4. Use of your personal information
              </h3>
              <p className="text-gray-700">
                We may use your personal information to provide you with
                information, updates, and our services, to improve our products
                and services, and to better understand your needs. We may
                contact you via telephone, email, SMS, or mail.
              </p>
            </div>
          </section>

          {/* Cookie Policy */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Cookie Policy
            </h2>
            <p className="text-gray-700 mb-4">
              We use “cookies” to collect information about you and your
              activity across our site. Cookies help us understand how you use
              our site and serve you content based on your preferences. This may
              include your device’s IP address, browser type, pages visited, and
              technical details about your visit. While this information may not
              be personally identifying by itself, it may be possible to combine
              it with other data to personally identify individuals.
            </p>
            <p className="text-gray-700">
              If you use our website, you consent to the use of cookies as
              described. We may use third-party analytics and marketing tools,
              such as Google Analytics or Facebook Pixel, for site performance
              and advertising.
            </p>
          </section>

          {/* Booking Policy */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Booking Policy
            </h2>
            <p className="text-gray-700 mb-4">
              Puma Pro is a software platform that enables property managers to
              manage accommodation bookings, payments, and daily operations.
              Puma Pro does not act as a booking agent or enter into contracts
              with guests. All booking arrangements, confirmations, and guest
              communications are the responsibility of the property manager
              using our platform.
            </p>
            <ul className="list-disc pl-6 space-y-4 text-gray-700">
              <li>
                <strong>Booking Facilitation:</strong> Puma Pro provides tools
                for property managers to facilitate and manage bookings for
                their properties. Bookings made through the platform are
                contracts between the property manager and their guests, not
                with Puma Pro.
              </li>
              <li>
                <strong>Platform Role:</strong> Puma Pro is not a party to any
                accommodation agreement between property managers and guests.
                The platform acts solely as a software provider.
              </li>
              <li>
                <strong>Booking Modifications & Cancellations:</strong> Property
                managers are responsible for managing cancellations,
                modifications, refunds, and guest communications in accordance
                with their own policies and applicable laws. Puma Pro provides
                features to assist with these processes but does not set or
                enforce cancellation or refund policies.
              </li>
              <li>
                <strong>Booking Errors:</strong> While Puma Pro strives to
                provide accurate and reliable booking management tools, errors
                may occur. If an error in the system affects a booking, property
                managers are responsible for communicating with the affected
                parties and resolving the issue. Puma Pro will provide
                reasonable assistance to correct any technical errors within the
                platform.
              </li>
              <li>
                <strong>Group Bookings:</strong> Property managers may set their
                own policies regarding group bookings. Puma Pro does not
                restrict or manage group bookings beyond the technical
                capability provided by the platform.
              </li>
            </ul>
          </section>

          {/* Corporate Social Responsibility */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Corporate Social Responsibility (CSR)
            </h2>
            <p className="text-gray-700 mb-4">
              At Puma Pro, our success is measured not only by business
              achievements but also by our positive impact on society, the
              environment, and the communities we serve. Our commitment to
              Corporate Social Responsibility guides our decisions and actions:
            </p>
            <ul className="list-disc pl-6 space-y-4 text-gray-700">
              <li>
                <strong>Environmental Sustainability:</strong>
                <ul className="list-circle pl-6 space-y-2">
                  <li>
                    Implementing energy-saving technologies within our offices.
                  </li>
                  <li>
                    Encouraging clients to adopt eco-friendly practices through
                    software solutions.
                  </li>
                  <li>
                    Promoting paperless operations and digital documentation.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Ethical Business Practices:</strong>
                <ul className="list-circle pl-6 space-y-2">
                  <li>
                    Conducting all business operations with the highest ethical
                    standards.
                  </li>
                  <li>
                    Protecting client and guest data with robust security
                    measures and compliance with all relevant data protection
                    regulations.
                  </li>
                  <li>
                    Adhering to all legal and regulatory requirements in every
                    market we operate.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Social Responsibility:</strong>
                <ul className="list-circle pl-6 space-y-2">
                  <li>
                    Supporting local communities through sponsorships,
                    partnerships, and volunteerism.
                  </li>
                  <li>
                    Fostering a healthy, inclusive, and supportive work
                    environment for our team.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          {/* Data Security & Compliance */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Data Security & Compliance
            </h2>
            <ul className="list-disc pl-6 space-y-4 text-gray-700">
              <li>
                <strong>PCI-DSS Compliance:</strong> Puma Pro partners with
                PCI-DSS compliant payment providers and implements
                industry-standard security measures to protect all payment data
                processed through our platform.
              </li>
              <li>
                <strong>Data Privacy:</strong> We are committed to safeguarding
                the privacy and security of all client and guest information in
                accordance with Australian law and industry best practices.
              </li>
            </ul>
          </section>

          {/* Subscription Terms & Conditions */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Subscription Terms & Conditions
            </h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                1. Term and Renewal
              </h3>
              <ul className="list-circle pl-6 space-y-2 text-gray-700">
                <li>
                  Agreements commence on the start date and continue for one (1)
                  year.
                </li>
                <li>
                  The agreement will automatically renew for successive one-year
                  terms unless the customer notifies Puma Pro in writing at
                  least ninety (90) days prior to the expiry date that they do
                  not wish to renew.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800">
                2. Fees and Billing
              </h3>
              <ul className="list-circle pl-6 space-y-2 text-gray-700">
                <li>
                  Puma Pro offers two pricing models:
                  <ul className="list-square pl-6 space-y-1">
                    <li>
                      a) Transaction-based (Pay Per Transaction): A transaction
                      fee is charged for all bookings and other transactions
                      processed through the platform.
                    </li>
                    <li>
                      b) Subscription: Customers may opt for a flat monthly fee
                      per property as an alternative to transaction-based
                      billing.
                    </li>
                  </ul>
                </li>
                <li>
                  Fees are invoiced monthly on the first day of each month and
                  are non-refundable, including if the customer discontinues use
                  of the services before the end of the term.
                </li>
                <li>
                  Fees may be subject to annual review and increase on each
                  anniversary of the commencement date, unless otherwise agreed.
                </li>
                <li>
                  Puma Pro may introduce an onboarding fee in the future;
                  customers will be notified in advance if this applies.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800">
                3. Notifications of Changes
              </h3>
              <ul className="list-circle pl-6 space-y-2 text-gray-700">
                <li>
                  Puma Pro may update these Terms or the Services during the
                  term.
                </li>
                <li>
                  We will not introduce additional charges or remove core
                  benefits during the current term.
                </li>
                <li>
                  Customers will be notified of such changes via email. Updates
                  will take effect thirty (30) days from the date the email is
                  sent, unless a later effective date is specified.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800">
                4. Termination & Effect of Termination
              </h3>
              <ul className="list-circle pl-6 space-y-2 text-gray-700">
                <li>
                  By Puma Pro: Puma Pro may terminate this agreement at any time
                  for convenience by giving thirty (30) days’ written notice, or
                  immediately if the customer commits a breach that cannot be
                  remedied, or fails to remedy a breach within seven (7) days of
                  notice.
                </li>
                <li>
                  By the Customer: The customer may terminate this agreement at
                  any time by giving ninety (90) days’ written notice. If
                  termination occurs prior to the end of the term, the customer
                  remains liable to pay Puma Pro the balance of fees for the
                  remainder of the term.
                </li>
                <li>
                  Post-Termination Data Access: Upon termination, the customer
                  will have fourteen (14) calendar days to export their property
                  data. After that time, access to the services will be removed.
                  Puma Pro may permanently delete the customer’s account and all
                  associated data thirty (30) days after the expiry date.
                </li>
              </ul>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Limitation of Liability
            </h2>
            <p className="text-gray-700">
              To the extent permitted by law, Puma Pro PTY LTD and its
              affiliates, directors, employees, and agents are not liable for
              any indirect, incidental, special, consequential, or punitive
              damages, or any loss of profits or revenues, whether incurred
              directly or indirectly, or any loss of data, use, goodwill, or
              other intangible losses, resulting from (a) your use or inability
              to use the platform; (b) any unauthorized access to or use of our
              servers and/or any personal information stored therein; or (c) any
              other matter relating to the platform or services.
            </p>
          </section>

          {/* Subscription Summary Table */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Subscription Summary Table
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left text-gray-800">
                      Aspect
                    </th>
                    <th className="py-2 px-4 border-b text-left text-gray-800">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b text-gray-700">Term</td>
                    <td className="py-2 px-4 border-b text-gray-700">
                      1 year, auto-renews unless cancelled 90 days before expiry
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-gray-700">
                      Onboarding Fee
                    </td>
                    <td className="py-2 px-4 border-b text-gray-700">
                      None by default; may be introduced in future with advance
                      notice
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-gray-700">
                      Pricing Models
                    </td>
                    <td className="py-2 px-4 border-b text-gray-700">
                      Pay Per Transaction (charged for all transactions) or
                      Subscription (monthly per property)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-gray-700">
                      Billing
                    </td>
                    <td className="py-2 px-4 border-b text-gray-700">
                      Invoiced monthly on the 1st, non-refundable
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-gray-700">
                      Annual Fee Increase
                    </td>
                    <td className="py-2 px-4 border-b text-gray-700">
                      May be reviewed annually on each anniversary of
                      Commencement Date
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-gray-700">
                      Changes to Terms
                    </td>
                    <td className="py-2 px-4 border-b text-gray-700">
                      Email notice, effective after 30 days
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-gray-700">
                      Termination – Puma Pro
                    </td>
                    <td className="py-2 px-4 border-b text-gray-700">
                      30 days’ notice or immediate for unrectifiable breach
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-gray-700">
                      Termination – Customer
                    </td>
                    <td className="py-2 px-4 border-b text-gray-700">
                      90 days’ written notice, full term fees remain payable
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-gray-700">
                      Post-Termination Data
                    </td>
                    <td className="py-2 px-4 border-b text-gray-700">
                      14 days to export data; deletion possible after 30 days
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
