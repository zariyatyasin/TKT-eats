import React from "react";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Acceptable Use Policy</h1>
      <p className="text-sm text-gray-600">Last updated: Oct 22, 2024</p>
      <p className="mt-4">
        By using TheKitchenTable (TKT) website and its services, you agree to
        comply with this Acceptable Use Policy (AUP). This policy outlines
        prohibited activities when using our services, ensuring compliance with
        applicable laws and maintaining the integrity of our platform.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Prohibited Activities
      </h2>
      <p>You may not use TKT&apos;s services to engage in activities that:</p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Illegal Activity</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>
          Violate any local, state, national, or international laws, statutes,
          ordinances, or regulations.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">
        Fraud and Misrepresentation
      </h3>
      <ul className="list-disc ml-6 mb-4">
        <li>
          Engage in deceptive, false, or misleading activities, including fraud,
          phishing, or impersonation.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">
        Harmful or Malicious Activities
      </h3>
      <ul className="list-disc ml-6 mb-4">
        <li>
          Engage in activities that promote or distribute malware, viruses,
          spyware, or other harmful software.
        </li>
        <li>
          Use TKT&apos;s services to disrupt or cause harm to other users,
          third-party services, or networks.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">
        Prohibited Transactions and Products
      </h3>
      <ul className="list-disc ml-6 mb-4">
        <li>
          Narcotics, steroids, and other controlled substances or paraphernalia.
        </li>
        <li>
          Weapons, firearms, ammunition, or knives regulated by applicable law.
        </li>
        <li>
          Adult-oriented products or services, including pornography, escort
          services, or any other content or services for mature audiences.
        </li>
        <li>
          Gambling, gaming, or lotteries, unless explicitly permitted by law and
          approved by TKT.
        </li>
        <li>
          Prescription medications or medical services without appropriate
          licensing or authorization.
        </li>
        <li>
          Tobacco products, e-cigarettes, and alcohol, where sale is not
          compliant with applicable laws.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">
        Intellectual Property Infringement
      </h3>
      <ul className="list-disc ml-6 mb-4">
        <li>
          Engage in activities that infringe or violate intellectual property
          rights, including unauthorized distribution of copyrighted works,
          trademarks, or patents.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">
        Unlawful Financial Practices
      </h3>
      <ul className="list-disc ml-6 mb-4">
        <li>
          Ponzi schemes, pyramid schemes, get-rich-quick schemes, or other forms
          of fraudulent financial activities.
        </li>
        <li>
          Use TKT&apos;s services to facilitate or support money laundering,
          bribery, or corrupt practices.
        </li>
        <li>
          Participate in unapproved financial services, such as currency
          exchanges, check cashing, or unregulated cryptocurrencies.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Content Restrictions</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>
          Share or promote hate speech, violence, racial or religious
          intolerance, or discriminatory practices.
        </li>
        <li>Publish or distribute obscene or offensive materials.</li>
        <li>
          Display or share private information about others without consent,
          including personally identifiable information (PII) or financial data.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Service Integrity</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>
          Interfere with or disrupt TKT&apos;s systems, servers, or networks, or
          breach security measures intended to protect the platform.
        </li>
        <li>
          Attempt to gain unauthorized access to TKT&apos;s services, user
          accounts, or sensitive data.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Reporting Violations</h2>
      <p>
        If you believe someone is violating this AUP, please contact us at
        [Insert Contact Information]. Violations may result in suspension or
        termination of your account, and legal action may be taken if necessary.
      </p>
    </div>
  );
}
