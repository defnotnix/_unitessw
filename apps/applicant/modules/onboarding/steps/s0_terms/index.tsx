"use client";

import {
  Stack,
  Group,
  ThemeIcon,
  Text,
  Divider,
  Box,
  Title,
  Paper,
  Checkbox,
} from "@mantine/core";
import { ExclamationMarkIcon } from "@phosphor-icons/react";

export function InitialStep() {
  function Section({ title, children }: { title: string; children: any }) {
    return (
      <Box>
        <Title order={5} mb="xs">
          {title}
        </Title>
        <div
          style={{
            fontSize: "var(--mantine-font-size-xs)",
          }}
        >
          {children}
        </div>
      </Box>
    );
  }

  return (
    <Stack py={100}>
      <Text size="2rem" lh="2.3rem" fw={800}>
        We're glad you've decided to join us.
        <br /> Welcome aboard!
      </Text>

      <Group>
        <ThemeIcon variant="light">
          <ExclamationMarkIcon />
        </ThemeIcon>
        <Text size="md" fw={600} c="brand.6">
          Please Read before you proceed. Scroll down and agree to the terms to
          continue further.
        </Text>
      </Group>

      <Text size="sm" fw={600} mb="xl" maw={700}>
        You’ll go through a few steps to complete your onboarding process. This
        may take a little time, so make sure you’re in a comfortable place
        before you begin.
        <br />
        <br />
        Before you begin, You will need to be prepared with :{" "}
        <b>
          General Details, Medical Details like your Eye Examination,
          Orthodontic Appliances, Academics, Work History, and Official
          Documents (e.g. Citizenship/Passport/License).
        </b>
      </Text>

      <Paper p="xl" withBorder bg="gray.1">
        <Text size="xl" mb="sm" fw={800}>
          Privacy Policy
        </Text>

        <Stack gap="lg">
          <Text size="sm" c="dimmed">
            <strong>Governing Law:</strong> This Privacy Policy is governed by
            the <em>Privacy Act, 2075 (2018), Nepal</em>.
          </Text>

          <Divider />

          <Section title="1. Definitions">
            "Personal Data" refers to any information that directly or
            indirectly identifies an individual. This includes, but is not
            limited to, full name, address, contact information, national
            ID/passport details, educational records, medical and biometric
            data, digital communication records, and any data revealing
            religious, political, health, or sexual orientation.
          </Section>

          <Section title="2. Legal Basis for Collection">
            We collect and process your personal data under one or more of the
            following legal grounds:
            <ul>
              <li>Your informed and explicit consent</li>
              <li>Requirements established by applicable law</li>
              <li>Protection of vital interests during emergencies</li>
              <li>Performance of contractual obligations</li>
              <li>Fulfillment of tasks in the public interest</li>
            </ul>
          </Section>

          <Section title="3. Information We Collect">
            We may collect the following categories of data:
            <ul>
              <li>
                Personal identification information (name, contact details,
                address)
              </li>
              <li>
                Official documents or uploaded identification (citizenship card,
                passport, licenses)
              </li>
              <li>
                Technical and usage data (IP address, browser metadata, device
                type, browsing history)
              </li>
              <li>Payment or financial information, when applicable</li>
            </ul>
          </Section>

          <Section title="4. Use of Your Data">
            We use personal data strictly for the following purposes:
            <ul>
              <li>Provision of our services and customer support</li>
              <li>Personalization of services and user experience</li>
              <li>Compliance with legal and regulatory obligations</li>
              <li>Ensuring safety, fraud prevention, and risk management</li>
            </ul>
            We <strong>do not sell, lease, or exploit</strong> your data for any
            unauthorized commercial purpose.
          </Section>

          <Section title="5. Data Sharing">
            We only share your personal data under the following circumstances:
            <ul>
              <li>With your explicit consent</li>
              <li>
                When required by law, court orders, or government agencies
              </li>
              <li>
                In emergency situations involving threats to life or health
              </li>
            </ul>
            All data shared is subject to confidentiality agreements and is
            limited to the minimum required for the purpose.
          </Section>

          <Section title="6. Digital & Communication Privacy">
            All communications, including email and messages, are treated with
            strict confidentiality. We do not monitor, forward, or intercept
            communications without:
            <ul>
              <li>Your express consent, or</li>
              <li>A valid legal warrant from a competent authority</li>
            </ul>
          </Section>

          <Section title="7. Data Storage & Security">
            We implement appropriate technical and organizational measures to
            safeguard your data, including:
            <ul>
              <li>Encryption of data in transit and at rest</li>
              <li>Secure physical and digital storage systems</li>
              <li>Role-based access control and employee confidentiality</li>
              <li>Periodic audits and security assessments</li>
            </ul>
          </Section>

          <Section title="8. Video Surveillance (CCTV)">
            CCTV surveillance is used solely for safety and operational
            purposes. It is limited to public or semi-public areas. We do not:
            <ul>
              <li>
                Record in bathrooms, changing rooms, or similar private spaces
              </li>
              <li>
                Use drones or mobile surveillance without appropriate regulation
              </li>
            </ul>
          </Section>

          <Section title="9. Your Rights">
            As a data subject, you are entitled to the following rights:
            <ul>
              <li>
                Access your personal data and request correction or update
              </li>
              <li>Withdraw your consent at any time</li>
              <li>
                Request erasure of your data in accordance with applicable law
              </li>
              <li>
                File a complaint or seek compensation for violations of your
                rights
              </li>
            </ul>
          </Section>

          <Section title="10. Data of Minors and Incapacitated Persons">
            If you are under the age of 18 or legally incapacitated, we require
            that consent to collect or process your data be provided by your
            parent, guardian, or legal representative.
          </Section>

          <Section title="11. Sensitive Information">
            Data considered sensitive—such as information related to health,
            ethnicity, religion, political views, and sexual orientation—will be
            processed only under strict conditions:
            <ul>
              <li>With your written and informed consent, or</li>
              <li>
                Where necessary for essential health, safety, or legal services
              </li>
            </ul>
          </Section>

          <Section title="12. Third-Party Services">
            We may engage third-party service providers (such as payment
            gateways or analytics platforms) to perform specific functions on
            our behalf. All such parties are:
            <ul>
              <li>
                Contractually obligated to comply with this privacy policy
              </li>
              <li>Required to adhere to Nepalese data protection laws</li>
            </ul>
          </Section>

          <Section title="13. Limitation of Liability">
            We are not liable for disclosures made under legal obligations,
            including:
            <ul>
              <li>Judicial or governmental orders</li>
              <li>Public interest disclosures (e.g., journalism)</li>
              <li>
                Situations covered under Section 34 of the Privacy Act, 2075
              </li>
            </ul>
          </Section>

          <Section title="14. Complaints and Legal Action">
            In case of any violation of your privacy rights, you may file a
            formal complaint with the relevant District Court within a period of
            three (3) months from the date of occurrence. You also retain the
            right to seek financial compensation for substantiated breaches.
          </Section>

          <Section title="Contact Information">
            <strong>Manabiya HR Unity - Data Protection Officer</strong>
            <br />
            Email: [Insert Official Email]
            <br />
            Phone: [Insert Contact Number]
            <br />
            Address: [Insert Official Office Address]
          </Section>

          <Section title="Legal Compliance">
            This Privacy Policy has been drafted in accordance with all relevant
            sections of the <em>Privacy Act, 2075 (2018)</em>, including
            protections relating to personal data, biometric data, communication
            content, digital records, and institutional information.
          </Section>
          <Text size="sm" c="dimmed">
            <strong>Governing Law:</strong> This Privacy Policy is governed by
            the <em>Privacy Act, 2075 (2018), Nepal</em>.
          </Text>

          <Divider />

          <Section title="1. Definitions">
            <p>
              For the purpose of this Privacy Policy, the following definitions
              apply:
            </p>
            <ul>
              <li>
                <strong>Personal Data:</strong> Any information that identifies
                or can be used to identify an individual. This includes name,
                contact information, government ID numbers, biometrics, and
                digital identifiers.
              </li>
              <li>
                <strong>Sensitive Personal Data:</strong> Information revealing
                racial or ethnic origin, political opinions, religious or
                philosophical beliefs, health status, sexual orientation, and
                biometric/genetic data.
              </li>
              <li>
                <strong>Data Subject:</strong> The natural person whose personal
                data is collected and processed.
              </li>
              <li>
                <strong>Processing:</strong> Any operation performed on data
                including collection, storage, use, disclosure, or destruction.
              </li>
              <li>
                <strong>Data Controller:</strong> The person or organization
                that determines the purpose and means of data processing.
              </li>
            </ul>
          </Section>

          <Section title="2. Legal Basis for Collection and Processing">
            We collect personal data based on the following legal grounds as
            permitted by the Privacy Act, 2075:
            <ul>
              <li>With your explicit and informed consent</li>
              <li>
                As required to perform a contract or service you have requested
              </li>
              <li>Where required by applicable law or legal order</li>
              <li>
                To protect your or another individual’s vital interests in
                emergencies
              </li>
              <li>
                For tasks carried out in the public interest or by government
                mandate
              </li>
            </ul>
          </Section>

          <Section title="3. Categories of Information Collected">
            We collect and process the following categories of data:
            <ul>
              <li>
                <strong>Identity & Contact Data:</strong> Full name, address,
                citizenship/passport number, email, and phone number
              </li>
              <li>
                <strong>Uploaded Documents:</strong> Scanned IDs, certificates,
                applications, and signed forms
              </li>
              <li>
                <strong>Digital Metadata:</strong> Browser fingerprints, device
                identifiers, IP addresses, session data, and cookies
              </li>
              <li>
                <strong>Financial & Transaction Data:</strong> Payment receipts,
                transaction IDs (if applicable)
              </li>
              <li>
                <strong>Biometric Data:</strong> Fingerprints, facial scans
                (only where explicitly required)
              </li>
            </ul>
          </Section>

          <Section title="4. Purpose of Data Use">
            Your data is used for:
            <ul>
              <li>Service delivery and user verification</li>
              <li>Improving user experience and product performance</li>
              <li>Legal and regulatory compliance</li>
              <li>
                Fraud detection, security enforcement, and dispute resolution
              </li>
            </ul>
            We do <strong>not</strong> sell, lease, or trade your personal data
            under any circumstances.
          </Section>

          <Section title="5. Data Sharing & Disclosure">
            We only disclose your data:
            <ul>
              <li>With your informed and written consent</li>
              <li>As required by law, judicial order, or regulatory inquiry</li>
              <li>To respond to emergencies or threats to life/safety</li>
              <li>
                To third-party service providers who are contractually bound to
                data confidentiality and compliance
              </li>
            </ul>
          </Section>

          <Section title="6. Communication Privacy">
            All user communications (emails, messages, uploads) are
            confidential. We do not intercept, monitor, or forward content
            unless:
            <ul>
              <li>
                Mandated by a court or statutory authority under a legal warrant
              </li>
              <li>Explicitly authorized by the user for a specific purpose</li>
            </ul>
          </Section>

          <Section title="7. Data Security Measures">
            We implement robust security controls including:
            <ul>
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Secure, access-controlled storage environments</li>
              <li>Regular vulnerability assessments and system audits</li>
              <li>Staff confidentiality training and access logging</li>
            </ul>
          </Section>

          <Section title="8. CCTV and Surveillance">
            <p>
              CCTV is deployed in public or semi-public zones strictly for
              security monitoring. We do not use surveillance in:
            </p>
            <ul>
              <li>Bathrooms or changing rooms</li>
              <li>Residential areas or sensitive personal spaces</li>
            </ul>
            <p>
              Drone-based recording is restricted and subject to flight permits
              and privacy protocols.
            </p>
          </Section>

          <Section title="9. Your Data Rights">
            You have the right to:
            <ul>
              <li>Access your personal data held by us</li>
              <li>
                Request correction or update of inaccurate or outdated
                information
              </li>
              <li>Withdraw consent for future processing</li>
              <li>
                Request erasure, subject to legal and operational constraints
              </li>
              <li>
                File a complaint or claim damages if your rights are violated
              </li>
            </ul>
          </Section>

          <Section title="10. Minors and Incapacitated Persons">
            For individuals under 18 years or those deemed legally
            incapacitated, data collection and processing will only occur with
            valid consent from a parent, legal guardian, or court-appointed
            representative.
          </Section>

          <Section title="11. Processing of Sensitive Personal Data">
            Sensitive data will only be processed if:
            <ul>
              <li>
                Explicit, written consent is obtained from the data subject
              </li>
              <li>
                It is essential for a lawful service such as healthcare,
                emergency support, or legal claims
              </li>
            </ul>
            We ensure strict confidentiality and higher safeguards for such
            data.
          </Section>

          <Section title="12. Third-Party Tools and Integration">
            We may use services such as:
            <ul>
              <li>Payment gateways (e.g., Khalti, eSewa)</li>
              <li>Analytics tools (e.g., Google Analytics)</li>
            </ul>
            These third parties are required to comply with this policy and the
            Privacy Act, 2075. We do not permit them to use your data for their
            own purposes.
          </Section>

          <Section title="13. Limitation of Liability">
            We are not liable for:
            <ul>
              <li>
                Disclosures made under valid court orders or government mandates
              </li>
              <li>
                Information shared in the public interest by accredited
                journalists
              </li>
              <li>
                System failures or breaches resulting from force majeure or
                third-party negligence
              </li>
            </ul>
          </Section>

          <Section title="14. Complaint and Legal Recourse">
            <p>
              If you believe your privacy rights have been violated, you may:
            </p>
            <ul>
              <li>File a formal complaint with our Data Protection Officer</li>
              <li>
                Approach the relevant District Court within 3 months of the
                violation
              </li>
              <li>
                Claim compensation as per Section 30–36 of the Privacy Act
              </li>
            </ul>
          </Section>
        </Stack>
      </Paper>

      <Text size="sm" fw={600} mb="xl" maw={700}>
        By pressing next, you are agreeing to the above terms and conditions.
      </Text>
    </Stack>
  );
}
