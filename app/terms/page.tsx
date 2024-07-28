import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import HeaderTerms from "@/components/header/headerforterms";
import React from "react";

export default function page() {
  return (
    <div>
      <HeaderTerms />
      <div className=" max-w-4xl mx-auto px-4 py-12 space-y-4">
        <h1 className=" text-3xl font-bold">
          TheKitchenTable Terms & Conditions
        </h1>
        <p>
          <strong>Effective Date:</strong> September 1, 2024
        </p>
        <p>
          Welcome to TheKitchenTable! These Terms & Conditions (Terms&ldquo;)
          govern your use of our website (the &ldquo;Website&ldquo;) and mobile
          application (the &ldquo;App&ldquo;) (collectively, the
          &ldquo;Platform&ldquo;) and the services offered by TheKitchenTable
          (the &ldquo;Services&ldquo;). By accessing or using the Platform or
          Services, you agree to be bound by these Terms. If you do not agree to
          these Terms, please do not use our Platform or Services.
        </p>

        <h2>1. Definitions</h2>
        <ul>
          <li>
            <strong>Chef:</strong> A person who offers their culinary services
            through TheKitchenTable platform.
          </li>
          <li>
            <strong>Client:</strong> A person who books a Chef through
            TheKitchenTable platform.
          </li>
          <li>
            <strong>Booking:</strong> A confirmed reservation for a Chef&lsquo;s
            services made by a Client through the Platform.
          </li>
          <li>
            <strong>Service Fee:</strong> A fee charged by TheKitchenTable to
            Clients for facilitating Bookings.
          </li>
        </ul>

        <h2>2. User Roles and Responsibilities</h2>
        <h3>2.1 Chefs</h3>
        <ul>
          <li>
            <strong>Qualifications:</strong> Chefs must be at least 18 years
            old, possess any necessary licenses or permits required in their
            jurisdiction, and meet TheKitchenTable&lsquo;s quality and safety
            standards.
          </li>
          <li>
            <strong>Profile and Availability:</strong> Chefs are responsible for
            creating and maintaining an accurate profile on the Platform,
            including their qualifications, experience, menus, pricing, and
            availability.
          </li>
          <li>
            <strong>Communication and Performance:</strong> Chefs are
            responsible for communicating effectively with Clients, arriving on
            time for Bookings, and providing professional and high-quality
            services.
          </li>
          <li>
            <strong>Hygiene and Safety:</strong> Chefs must comply with all
            applicable health and safety regulations and maintain a clean and
            hygienic workspace.
          </li>
          <li>
            <strong>Payment:</strong> Chefs will receive payment for Bookings,
            minus the Service Fee, through TheKitchenTable&lsquo;s payment
            system.
          </li>
        </ul>

        <h3>2.2 Clients</h3>
        <ul>
          <li>
            <strong>Booking and Payment:</strong> Clients are responsible for
            accurately describing their needs and expectations when making a
            Booking. Clients must pay for Bookings through
            TheKitchenTable&lsquo;s secure payment system.
          </li>
          <li>
            <strong>Communication and Conduct:</strong> Clients are responsible
            for communicating respectfully with Chefs and providing a safe and
            appropriate workspace for the Chef to perform their services.
          </li>
          <li>
            <strong>Cancellations:</strong> Clients can cancel Bookings with
            appropriate notice as outlined in TheKitchenTable&lsquo;s
            cancellation policy. Cancellation fees may apply.
          </li>
          <li>
            <strong>Reviews and Feedback:</strong> Clients are encouraged to
            leave honest reviews and feedback about their experience with Chefs.
          </li>
        </ul>

        <h2>3. TheKitchenTable&lsquo;s Role</h2>
        <ul>
          <li>
            <strong>Platform and Services:</strong> TheKitchenTable provides a
            platform to connect Chefs with Clients and facilitate Bookings.
          </li>
          <li>
            <strong>Screening and Verification:</strong> TheKitchenTable may
            screen Chefs based on qualifications and conduct background checks.
            However, we cannot guarantee the suitability of any Chef.
          </li>
          <li>
            <strong>Payment Processing:</strong> TheKitchenTable securely
            processes payments between Clients and Chefs and deducts a Service
            Fee from each Booking.
          </li>
          <li>
            <strong>Dispute Resolution:</strong> TheKitchenTable will attempt to
            mediate any disputes between Clients and Chefs. However, we are not
            responsible for the outcome of such disputes.
          </li>
          <li>
            <strong>Content and Reviews:</strong> TheKitchenTable reserves the
            right to remove any content or reviews that violate these Terms or
            are deemed inappropriate.
          </li>
        </ul>

        <h2>4. Disclaimers and Limitations of Liability</h2>
        <ul>
          <li>
            <strong>Service Provision:</strong> TheKitchenTable does not provide
            culinary services itself. We are a platform that connects Clients
            with Chefs.
          </li>
          <li>
            <strong>No Guarantees:</strong> TheKitchenTable does not guarantee
            the quality, safety, or outcome of the services provided by Chefs.
            Clients are responsible for conducting their own due diligence when
            choosing a Chef.
          </li>
          <li>
            <strong>Liability:</strong> To the fullest extent permitted by law,
            TheKitchenTable is not liable for any damages arising from the
            interaction between Clients and Chefs, including property damage,
            personal injury, or foodborne illness.
          </li>
        </ul>

        <h2>5. User Content</h2>
        <ul>
          <li>
            <strong>License Grant:</strong> By submitting content (including
            profiles, menus, photos, and reviews) to the Platform, you grant
            TheKitchenTable a non-exclusive, worldwide, royalty-free license to
            use, reproduce, modify, publish, and distribute your content in
            connection with the Platform and Services.
          </li>
          <li>
            <strong>Responsibility:</strong> You are responsible for the
            accuracy and completeness of your content. You represent and warrant
            that you have all necessary rights and permissions to submit your
            content to the Platform.
          </li>
          <li>
            <strong>Prohibited Content:</strong> You agree not to submit content
            that is unlawful, infringing, defamatory, obscene, or otherwise
            objectionable.
          </li>
        </ul>

        <h2>6. Termination</h2>
        <ul>
          <li>
            <strong>TheKitchenTable&lsquo;s Right:</strong> TheKitchenTable may
            terminate your access to the Platform and Services at any time, for
            any reason, with or without notice.
          </li>
          <li>
            <strong>User&lsquo;s Right:</strong> You may terminate your access
            to the Platform and Services at any time.
          </li>
        </ul>

        <h2>7. Governing Law</h2>
        <p>
          These Terms will be governed by and construed in accordance with the
          laws of the State of [Your State], without regard to its conflict of
          laws provisions.
        </p>

        <h2>8. Dispute Resolution</h2>
        <p>
          Any dispute arising out of or relating to these Terms will be resolved
          by binding arbitration in accordance with the rules of the American
          Arbitration Association. The arbitration will be held in [Your City,
          State].
        </p>

        <h2>9. Changes to the Terms</h2>
        <p>
          TheKitchenTable may revise these Terms at any time by posting the
          revised Terms on the Platform. You are responsible for checking the
          Terms periodically for any changes.
        </p>

        <h2>10. Intellectual Property</h2>
        <p>
          All content and materials on TheKitchenTable, including text,
          graphics, logos, and software, are the property of TheKitchenTable or
          its licensors and are protected by intellectual property laws. You may
          not use any content without our prior written permission.
        </p>

        <h2>11. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless TheKitchenTable, its
          affiliates, and their respective officers, directors, employees, and
          agents from and against any claims, liabilities, damages, losses, and
          expenses, including reasonable attorneys’ fees, arising out of or in
          any way connected with:
        </p>
        <ul>
          <li>Your access to or use of the Services.</li>
          <li>Your violation of these Terms.</li>
          <li>Your violation of any third-party rights.</li>
        </ul>

        <h2>12. User Conduct</h2>
        <p>
          Users agree to use the Services responsibly and in compliance with all
          applicable laws. You agree not to:
        </p>
        <ul>
          <li>Use the Services for any unlawful purpose.</li>
          <li>Harass, threaten, or abuse others.</li>
          <li>Interfere with or disrupt the Services or servers.</li>
          <li>Post or transmit any harmful or offensive content.</li>
        </ul>

        <h2>13. Chef Responsibilities</h2>
        <ul>
          <li>
            <strong>Quality Service:</strong> Chefs using TheKitchenTable agree
            to provide high-quality service and adhere to health and safety
            standards. Chefs must comply with all local regulations and obtain
            necessary licenses and insurance.
          </li>
          <li>
            <strong>Professional Conduct:</strong> Chefs agree to treat Clients
            with respect and professionalism and comply with all TheKitchenTable
            policies and procedures.
          </li>
        </ul>

        <h2>14. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, TheKitchenTable shall not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages, or any loss of profits or revenues, whether incurred
          directly or indirectly, or any loss of data, use, goodwill, or other
          intangible losses resulting from:
        </p>
        <ul>
          <li>
            Your access to or use of or inability to access or use the Services.
          </li>
          <li>Any conduct or content of any third party on the Services.</li>
          <li>
            Unauthorized access, use, or alteration of your transmissions or
            content.
          </li>
        </ul>

        <h2>15. Miscellaneous</h2>
        <p>
          These Terms constitute the entire agreement between you and
          TheKitchenTable regarding the use of the Services, superseding any
          prior agreements between you and TheKitchenTable. If any provision of
          these Terms is found to be invalid or unenforceable, the remaining
          provisions will remain in full force and effect.
        </p>

        <h2>16. Contact Information</h2>
        <p>
          If you have any questions about these Terms, please contact us at
          [Your Contact Information].
        </p>

        <h1>TheKitchenTable Privacy Policy</h1>
        <p>
          <strong>Effective Date:</strong> September 1, 2024
        </p>
        <p>
          This Privacy Policy (&ldquo;Policy&ldquo;) describes how
          TheKitchenTable collects, uses, and shares personal information when
          you use our platform. By accessing or using our platform, you agree to
          the terms of this Policy.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We collect personal information from users of our platform, including:
        </p>
        <ul>
          <li>
            <strong>Contact Information:</strong> Name, email address, phone
            number, and physical address.
          </li>
          <li>
            <strong>Profile Information:</strong> For chefs, this includes
            information about your qualifications, experience, and services
            offered.
          </li>
          <li>
            <strong>Transaction Information:</strong> Details of bookings and
            payments made through our platform.
          </li>
          <li>
            <strong>Usage Information:</strong> Information about how you use
            our platform, including IP address, browser type, and operating
            system.
          </li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use your personal information for the following purposes:</p>
        <ul>
          <li>
            <strong>Providing Services:</strong> To facilitate bookings and
            payments, and to communicate with you about your bookings.
          </li>
          <li>
            <strong>Improving Our Platform:</strong> To analyze usage and
            improve the functionality and user experience of our platform.
          </li>
          <li>
            <strong>Marketing:</strong> To send you promotional materials and
            updates about our services, with your consent.
          </li>
          <li>
            <strong>Legal Compliance:</strong> To comply with legal obligations
            and respond to legal requests.
          </li>
        </ul>

        <h2>3. How We Share Your Information</h2>
        <p>
          We may share your personal information with third parties in the
          following circumstances:
        </p>
        <ul>
          <li>
            <strong>Service Providers:</strong> We may share your information
            with third-party service providers who assist us in providing our
            services.
          </li>
          <li>
            <strong>Legal Requirements:</strong> We may disclose your
            information to comply with applicable laws or respond to valid legal
            requests.
          </li>
          <li>
            <strong>Business Transfers:</strong> In the event of a merger,
            acquisition, or sale of our assets, we may transfer your information
            to the new owner.
          </li>
        </ul>

        <h2>4. Security</h2>
        <p>
          We take reasonable measures to protect your personal information from
          unauthorized access, use, or disclosure. However, no method of
          transmission over the internet or method of electronic storage is 100%
          secure, and we cannot guarantee absolute security.
        </p>

        <h2>5. Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal
          information. You may also have the right to object to or restrict
          certain processing of your personal information, and to withdraw your
          consent at any time.
        </p>

        <h2>6. Third-Party Links</h2>
        <p>
          Our platform may contain links to third-party websites or services
          that are not operated by us. We are not responsible for the privacy
          practices of these third parties, and we encourage you to review their
          privacy policies.
        </p>

        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or legal obligations. We will notify you of any
          material changes by posting the new policy on our platform and
          updating the effective date.
        </p>

        <h2>8. Children&lsquo;s Privacy</h2>
        <p>
          Our platform is not intended for use by children under the age of 13.
          We do not knowingly collect personal information from children under
          13, and if we become aware that we have inadvertently collected such
          information, we will take steps to delete it as soon as possible.
        </p>

        <h2>9. International Data Transfers</h2>
        <p>
          If you are accessing our platform from outside the United States,
          please be aware that your information may be transferred to, stored,
          and processed in the United States, where our servers are located and
          our central database is operated. By using our platform, you consent
          to the transfer of your information to the United States.
        </p>

        <h2>10. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or our
          privacy practices, please contact us at [Your Contact Information].
        </p>
      </div>
      <Footer />
    </div>
  );
}
