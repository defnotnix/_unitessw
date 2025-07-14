/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Box,
  Button,
  Container,
  Divider,
  Group,
  Image,
  Paper,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { MapPinIcon, PhoneIcon } from "@phosphor-icons/react";

import imgLogo from "@/assets/img/logo.png";
import { LayoutSiteFooter } from "@/components/footer";

export default function PageTerms() {
  function Section({ title, children }: { title: string; children: any }) {
    return (
      <Box>
        <Title order={4} mb="xs">
          {title}
        </Title>
        <Text size="sm" lh={1.6}>
          {children}
        </Text>
      </Box>
    );
  }

  return (
    <>
      <header>
        <Container py="xl">
          <Group justify="space-between">
            <Group>
              <Group gap={"xs"}>
                <Image h={24} w={24} fit="contain" src={imgLogo.src} />
                <Text size="sm" fw={800}>
                  Manabiya HR Unity
                </Text>
              </Group>

              <Space w="xl" />

              {/* <Anchor c="dark" size="sm" fw={600} href="/">
                Back to Home
              </Anchor> */}
            </Group>

            <Group gap="xs">
              <Group gap="xs">
                <MapPinIcon weight="duotone" />
                <Text size="xs" fw={600}>
                  New plaza,Putalisadak,Kathmandu,Nepal
                </Text>
              </Group>

              <Group gap="xs">
                <PhoneIcon weight="duotone" />
                <Text size="xs" fw={600}>
                  +977 9768896744
                </Text>
              </Group>

              <Space w="xs" />
              <Button size="xs">Sign In / Register</Button>
            </Group>
          </Group>
        </Container>
      </header>

      <Paper
        pos={"absolute"}
        style={{
          zIndex: -1,
          background: "var(--mantine-color-brand-2)",
          height: 500,
          top: 0,
          width: "100%",
        }}
      />

      <Container size="md" py={100}>
        <Paper withBorder p="xl" shadow="lg" radius="md">
          <Text size="3rem" mb="sm" fw={800}>
            Privacy Policy
          </Text>

          <Stack gap="lg">
            <Text size="sm" c="dimmed">
              <strong>Governing Law:</strong> Privacy Act, 2075 (2018), Nepal
            </Text>

            <Divider />

            <Section title="1. Definitions">
              Personal Data includes any identifying information such as: name,
              contact, ID/passport details, education, medical and biometric
              data, communication records, and sensitive data (e.g., religion,
              politics, health, sexuality).
            </Section>

            <Section title="2. Legal Basis for Collection">
              We collect your data only: with consent, by law, for public
              interest, during emergencies, or to provide contractual services.
            </Section>

            <Section title="3. Information We Collect">
              - Identity and contact info
              <br />
              - Uploaded documents or IDs
              <br />
              - Website usage and device/browser metadata
              <br />- Financial/payment data (if applicable)
            </Section>

            <Section title="4. Use of Your Data">
              Your data is used for service delivery, personalization, legal
              compliance, and safety. We do <strong>not</strong> sell or misuse
              your data.
            </Section>

            <Section title="5. Data Sharing">
              We only share data with your consent or when required by law,
              investigation, or emergency. We ensure confidentiality and
              minimization.
            </Section>

            <Section title="6. Digital & Communication Privacy">
              Your messages and emails are private. No monitoring, forwarding,
              or interception without consent or legal warrant.
            </Section>

            <Section title="7. Data Storage & Security">
              We use encryption, secure storage, access controls, and audit
              systems to protect your data.
            </Section>

            <Section title="8. Video Surveillance (CCTV)">
              CCTV is limited to public areas. No recording in bathrooms,
              changing rooms, or private spaces. Drone use is restricted.
            </Section>

            <Section title="9. Your Rights">
              - Request access or correction
              <br />
              - Withdraw consent
              <br />
              - Ask for deletion
              <br />- File complaints or claim damages
            </Section>

            <Section title="10. Data of Minors and Incapacitated Persons">
              Consent must come from guardians if you&apos;re under 18 or
              mentally incapable.
            </Section>

            <Section title="11. Sensitive Information">
              Includes health, religion, ethnicity, and sexuality. Only
              processed with your written consent or for essential services.
            </Section>

            <Section title="12. Third-Party Services">
              Third-party tools (e.g., payments, analytics) must follow this
              policy and Nepal&apos;s laws.
            </Section>

            <Section title="13. Limitation of Liability">
              We are not liable for lawful disclosures via court, public
              interest journalism, or government authorities under section 34 of
              the Act.
            </Section>

            <Section title="14. Complaints and Legal Action">
              You can file a complaint with the District Court within 3 months
              of violation. You may also claim compensation for privacy
              breaches.
            </Section>

            <Section title="📬 Contact Information">
              <strong>Manabiya HR Unity Data Protection Officer</strong>
              <br />
              Email: [Insert Email]
              <br />
              Phone: [Insert Phone]
              <br />
              Address: [Insert Address]
            </Section>

            <Section title="⚖️ Legal Compliance">
              This policy complies with all sections of the Privacy Act, 2075
              including protections for personal, biometric, communication,
              digital, and institutional data.
            </Section>
          </Stack>
        </Paper>
      </Container>

      <LayoutSiteFooter />
    </>
  );
}
