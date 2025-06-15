// WIP: React form component aligned with Django models

"use client";

import React, { useState } from "react";
import {
  Paper,
  Stack,
  TextInput,
  Select,
  NumberInput,
  Textarea,
  Switch,
  SimpleGrid,
  Group,
  Divider,
  ActionIcon,
  Center,
  Button,
  Grid,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { FormHandler } from "@vframework/core";
import { FormElement, ImageUpload } from "@vframework/ui";
import { PlusIcon as Plus, TrashIcon as Trash } from "@phosphor-icons/react";
import { YearPickerInput } from "@mantine/dates";

export function _Form() {
  const form = FormHandler.useForm();
  const { current } = FormHandler.usePropContext();

  switch (current) {
    case 0:
      return (
        <Paper px="lg" py="md" withBorder>
          <Grid>
            <Grid.Col span={{ base: 12, lg: 4 }}>
              <FormElement.SectionTitle
                isTopElement
                title="General Details"
                description="Comprehensive personal information"
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, lg: 8 }}>
              <ImageUpload
                {...form.getInputProps("image")}
                label="Profile Picture"
                description="Upload a recent passport-size photo"
                onChange={(image: any) => form.setFieldValue("image", image)}
                value={form.getValues()?.image}
              />
            </Grid.Col>
          </Grid>

          <Stack gap="xs">
            <SimpleGrid cols={2} spacing="xs">
              <TextInput
                label="Furigana"
                placeholder="e.g. タナカ タロウ"
                description="Name pronunciation in Katakana"
                {...form.getInputProps("furigana")}
              />
              <TextInput
                label="Full Name"
                placeholder="e.g. Taro Tanaka"
                description="Enter your full legal name as in passport"
                {...form.getInputProps("full_name")}
              />
              <DateInput
                label="Date of Birth"
                placeholder="Select your birth date"
                description="Your date of birth in YYYY-MM-DD format"
                {...form.getInputProps("date_of_birth")}
              />
              <Select
                label="Gender"
                placeholder="Select your gender"
                description="Choose your gender identity"
                data={[
                  { value: "Male", label: "Male" },
                  { value: "Female", label: "Female" },
                  { value: "Other", label: "Other" },
                ]}
                {...form.getInputProps("gender")}
              />
              <TextInput
                label="Nationality"
                placeholder="e.g. Nepalese"
                description="Enter your country of citizenship"
                {...form.getInputProps("nationality")}
              />
              <TextInput
                label="Nationality (JP)"
                placeholder="e.g. ネパール"
                description="Enter nationality in Japanese"
                {...form.getInputProps("jp_nationality")}
              />
              <Select
                label="Blood Type"
                placeholder="Select your blood group"
                description="Your known blood group"
                data={["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(
                  (b) => ({
                    value: b,
                    label: b,
                  })
                )}
                {...form.getInputProps("blood_type")}
              />
              <TextInput
                label="Religion"
                placeholder="e.g. Hinduism"
                description="Enter your religion"
                {...form.getInputProps("religion")}
              />
              <TextInput
                label="Religion (JP)"
                placeholder="e.g. ヒンドゥー教"
                description="Religion written in Japanese"
                {...form.getInputProps("jp_religion")}
              />
              <Select
                label="Marital Status"
                placeholder="Select your status"
                description="Current marital status"
                data={[
                  { value: "Single", label: "Single" },
                  { value: "Married", label: "Married" },
                  { value: "Divorced", label: "Divorced" },
                  { value: "Widowed", label: "Widowed" },
                  { value: "Separated", label: "Separated" },
                  { value: "Partnered", label: "Partnered" },
                ]}
                {...form.getInputProps("martial_status")}
              />
            </SimpleGrid>

            <FormElement.SectionTitle
              title="Residence Details"
              description="Legal and residential information"
            />

            <SimpleGrid cols={2} spacing="xs">
              <TextInput
                label="Residence Status"
                placeholder="e.g. Permanent Resident"
                description="Your current legal residence status in Japan"
                {...form.getInputProps("residence_status")}
              />
              <TextInput
                label="Residence Status (JP)"
                placeholder="例：永住者"
                description="Residence status in Japanese"
                {...form.getInputProps("jp_residence_status")}
              />
              <TextInput
                label="Residence Expiry"
                placeholder="e.g. 2026-04-01"
                description="Date when your current residence status expires"
                {...form.getInputProps("residence_expiry")}
              />
              <TextInput
                label="Residence Expiry (JP)"
                placeholder="例：2026年4月1日"
                description="Residence expiry date in Japanese"
                {...form.getInputProps("jp_residence_expiry")}
              />
              <Textarea
                label="Current Address"
                placeholder="e.g. 123 Tokyo St, Minato-ku, Tokyo"
                description="Your current physical address in English"
                {...form.getInputProps("current_address")}
              />
              <Textarea
                label="Current Address (JP)"
                placeholder="例：東京都港区東京通り123番地"
                description="Your current address written in Japanese"
                {...form.getInputProps("jp_current_address")}
              />
            </SimpleGrid>

            <FormElement.SectionTitle
              title="Emergency Contact"
              description="Guardian or parent contact details"
            />

            <SimpleGrid cols={2} spacing="xs">
              <TextInput
                label="Email"
                placeholder="e.g. parent@example.com"
                description="A valid email for emergency contact"
                {...form.getInputProps("email")}
              />
              <TextInput
                label="Parent Relation"
                placeholder="e.g. Father"
                description="Your relationship to the contact person"
                {...form.getInputProps("parent_relation")}
              />
              <TextInput
                label="Parent Relation (JP)"
                placeholder="例：父"
                description="Parent or guardian relationship in Japanese"
                {...form.getInputProps("jp_parent_relation")}
              />
              <TextInput
                label="Parent Contact"
                placeholder="e.g. +81 90 1234 5678"
                description="Phone number of parent or guardian"
                {...form.getInputProps("parent_contact")}
              />
            </SimpleGrid>
          </Stack>
        </Paper>
      );

    case 1:
      return (
        <Paper px="lg" py="md" withBorder>
          <Stack gap="xs">
            <FormElement.SectionTitle
              title="Physical Attributes"
              description="Physical condition and measurements"
            />

            <SimpleGrid cols={2} spacing="xs">
              <Select
                label="Dominant Hand"
                placeholder="Select your dominant hand"
                description="Specify your preferred writing or working hand"
                data={[
                  { value: "Right", label: "Right" },
                  { value: "Left", label: "Left" },
                  { value: "Ambidextrous", label: "Ambidextrous" },
                ]}
                {...form.getInputProps("dominant_hand")}
              />
              <NumberInput
                label="Eyesight Left"
                placeholder="e.g. 1.0"
                description="Visual acuity of your left eye"
                {...form.getInputProps("eyesight_left")}
              />
              <NumberInput
                label="Eyesight Right"
                placeholder="e.g. 1.2"
                description="Visual acuity of your right eye"
                {...form.getInputProps("eyesight_right")}
              />
              <NumberInput
                label="Height (cm)"
                placeholder="e.g. 170"
                description="Your height in centimeters"
                {...form.getInputProps("height_cm")}
              />
              <NumberInput
                label="Weight (kg)"
                placeholder="e.g. 65"
                description="Your body weight in kilograms"
                {...form.getInputProps("weight_kg")}
              />
              <Select
                label="Clothing Size"
                placeholder="Select clothing size"
                description="Your general clothing size"
                data={["S", "M", "L", "XL", "XXL", "XXXL"].map((s) => ({
                  value: s,
                  label: s,
                }))}
                {...form.getInputProps("clothing_size")}
              />
              <NumberInput
                label="Shoe Size"
                placeholder="e.g. 26.5"
                description="Your shoe size in centimeters"
                {...form.getInputProps("shoe_size")}
              />
            </SimpleGrid>

            <FormElement.SectionTitle
              title="Preferences & Language"
              description="Lifestyle and language skills"
            />

            <SimpleGrid cols={2} spacing="xs">
              <Switch
                label="Drinks Alcohol"
                description="Indicate if you consume alcoholic beverages"
                {...form.getInputProps("drinks_alcohol", { type: "checkbox" })}
              />
              <Switch
                label="Smokes"
                description="Indicate if you smoke tobacco products"
                {...form.getInputProps("smokes", { type: "checkbox" })}
              />
            </SimpleGrid>

            <FormElement.SectionTitle
              title="Remarks and Motivation"
              description="Final comments and applicant goals"
            />

            <SimpleGrid cols={2} spacing="xs">
              <Textarea
                rows={5}
                label="Remarks"
                placeholder="Any additional notes or context"
                description="Optional personal comments or important notes"
                {...form.getInputProps("remark")}
              />
              <Textarea
                rows={5}
                label="Remarks (JP)"
                placeholder="補足事項など"
                description="Remarks translated into Japanese"
                {...form.getInputProps("jp_remark")}
              />
              <Textarea
                rows={5}
                label="Personal Traits"
                placeholder="e.g. Responsible, punctual, team player"
                description="Positive qualities that describe you"
                {...form.getInputProps("personal_traits")}
              />
              <Textarea
                rows={5}
                label="Personal Traits (JP)"
                placeholder="例：責任感が強い、時間を守る、協調性がある"
                description="Translated version of your personal traits"
                {...form.getInputProps("jp_personal_traits")}
              />
              <Textarea
                rows={5}
                label="Motivation Statement"
                placeholder="Explain why you are applying and what motivates you"
                description="A short personal statement describing your motivation"
                {...form.getInputProps("motivation_statement")}
              />
              <Textarea
                rows={5}
                label="Motivation Statement (JP)"
                placeholder="応募理由や意欲を説明してください"
                description="Japanese version of your motivation statement"
                {...form.getInputProps("jp_motivation_statement")}
              />
              <Textarea
                rows={5}
                label="Future Goals"
                placeholder="Share your future career or personal goals"
                description="Describe what you aim to achieve in the coming years"
                {...form.getInputProps("future_goals")}
              />
              <Textarea
                rows={5}
                label="Future Goals (JP)"
                placeholder="将来の目標を共有してください"
                description="Translated version of your future goals"
                {...form.getInputProps("jp_future_goals")}
              />
            </SimpleGrid>
          </Stack>
        </Paper>
      );

    case 2:
      return (
        <Paper px="lg" py="md" withBorder>
          <Stack gap="xs">
            <TextInput
              label="Japanese Level"
              placeholder="e.g. JLPT N4"
              description="Proficiency level in Japanese language"
              {...form.getInputProps("japanese_level")}
            />

            <FormElement.SectionTitle
              title="Education History"
              description="Add your academic background"
              actionButton={
                <Button
                  size="xs"
                  variant="light"
                  leftSection={<Plus />}
                  onClick={() => form.insertListItem("education", {})}
                >
                  Add Education
                </Button>
              }
            />

            {form.values.education?.map((_: any, index: any) => (
              <div key={index} style={{ position: "relative" }}>
                <ActionIcon
                  onClick={() => form.removeListItem("education", index)}
                  size="md"
                  variant="light"
                  color="red"
                  style={{
                    position: "absolute",
                    zIndex: 1,
                    right: -30,
                    top: 4,
                  }}
                >
                  <Trash />
                </ActionIcon>
                <SimpleGrid cols={2} spacing="xs">
                  <TextInput
                    label="Institution (EN)"
                    placeholder="e.g. Tribhuvan University"
                    description="Name of the institution in English"
                    {...form.getInputProps(`education.${index}.institution`)}
                  />
                  <TextInput
                    label="Institution (JP)"
                    placeholder="例：トリブバン大学"
                    description="Institution name in Japanese"
                    {...form.getInputProps(`education.${index}.jp_institution`)}
                  />
                  <TextInput
                    label="Major / Notes (EN)"
                    placeholder="e.g. BSc Computer Science"
                    description="Your major subject or any notes (English)"
                    {...form.getInputProps(`education.${index}.major_or_notes`)}
                  />
                  <TextInput
                    label="Major / Notes (JP)"
                    placeholder="例：コンピューターサイエンス学科"
                    description="Major subject or remarks in Japanese"
                    {...form.getInputProps(
                      `education.${index}.jp_major_or_notes`
                    )}
                  />
                  <DateInput
                    label="Start Date"
                    placeholder="Select start date"
                    description="Date when you started this program"
                    {...form.getInputProps(`education.${index}.start_date`)}
                  />
                  <DateInput
                    label="End Date"
                    placeholder="Select end date"
                    description="Date of completion or expected graduation"
                    {...form.getInputProps(`education.${index}.end_date`)}
                  />
                </SimpleGrid>
                <Divider my="sm" />
              </div>
            ))}
          </Stack>
        </Paper>
      );

    case 3:
      return (
        <Paper px="lg" py="md" withBorder>
          <Stack gap="xs">
            <FormElement.SectionTitle
              isTopElement
              title="Work Experience"
              description="Add your job background"
              actionButton={
                <Button
                  size="xs"
                  variant="light"
                  leftSection={<Plus />}
                  onClick={() => form.insertListItem("work_experience", {})}
                >
                  Add Work
                </Button>
              }
            />

            {form.values.work_experience?.map((_: any, index: any) => (
              <div key={index} style={{ position: "relative" }}>
                <ActionIcon
                  onClick={() => form.removeListItem("work_experience", index)}
                  size="md"
                  variant="light"
                  color="red"
                  style={{
                    position: "absolute",
                    zIndex: 1,
                    right: -30,
                    top: 4,
                  }}
                >
                  <Trash />
                </ActionIcon>
                <SimpleGrid cols={2} spacing="xs">
                  <TextInput
                    label="Company (EN)"
                    {...form.getInputProps(`work_experience.${index}.company`)}
                  />
                  <TextInput
                    label="Company (JP)"
                    {...form.getInputProps(
                      `work_experience.${index}.jp_company`
                    )}
                  />
                  <TextInput
                    label="Role (EN)"
                    {...form.getInputProps(`work_experience.${index}.role`)}
                  />
                  <TextInput
                    label="Role (JP)"
                    {...form.getInputProps(`work_experience.${index}.jp_role`)}
                  />
                  <TextInput
                    label="Notes (EN)"
                    {...form.getInputProps(`work_experience.${index}.notes`)}
                  />
                  <TextInput
                    label="Notes (JP)"
                    {...form.getInputProps(`work_experience.${index}.jp_notes`)}
                  />
                  <DateInput
                    label="Start Date"
                    {...form.getInputProps(
                      `work_experience.${index}.start_date`
                    )}
                  />
                  <DateInput
                    label="End Date"
                    {...form.getInputProps(`work_experience.${index}.end_date`)}
                  />
                </SimpleGrid>
                <Divider my="sm" />
              </div>
            ))}
          </Stack>
        </Paper>
      );

    case 4:
      return (
        <Paper px="lg" py="md" withBorder>
          <Stack gap="xs">
            <FormElement.SectionTitle
              isTopElement
              title="Licenses & Qualifications"
              description="List of certificates or licenses held"
              actionButton={
                <Button
                  size="xs"
                  variant="light"
                  leftSection={<Plus />}
                  onClick={() => form.insertListItem("licenses", {})}
                >
                  Add License
                </Button>
              }
            />
            {form.values.licenses?.map((_: any, index: any) => (
              <div key={index} style={{ position: "relative" }}>
                <ActionIcon
                  onClick={() => form.removeListItem("licenses", index)}
                  size="md"
                  variant="light"
                  color="red"
                  style={{
                    position: "absolute",
                    zIndex: 1,
                    right: -30,
                    top: 4,
                  }}
                >
                  <Trash />
                </ActionIcon>
                <SimpleGrid cols={2} spacing="xs">
                  <TextInput
                    label="License Name (EN)"
                    {...form.getInputProps(`licenses.${index}.name`)}
                  />
                  <TextInput
                    label="License Name (JP)"
                    {...form.getInputProps(`licenses.${index}.jp_name`)}
                  />
                  <DateInput
                    label="Date Received"
                    {...form.getInputProps(`licenses.${index}.date_received`)}
                  />
                  <Switch
                    label="Active Status"
                    {...form.getInputProps(`licenses.${index}.status`, {
                      type: "checkbox",
                    })}
                  />
                </SimpleGrid>
                <Divider my="sm" />
              </div>
            ))}
          </Stack>
        </Paper>
      );

    default:
      return <>X</>;
  }
}
