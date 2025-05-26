"use client";

import React, { useEffect } from "react";
//next

//mantine
import {
  Checkbox,
  Group,
  NumberInput,
  Paper,
  Select,
  SimpleGrid,
  Stack,
  Switch,
  Text,
  TextInput,
  ThemeIcon,
} from "@mantine/core";
import { apiDispatch, FormHandler } from "@vframework/core";
import { FormElement, ImageUpload } from "@vframework/ui";
import { ExclamationMark } from "@phosphor-icons/react";
import { DateInput } from "@mantine/dates";
//mantine

//icons

//styles

//components

import { jwtDecode } from "jwt-decode";
import { useQuery } from "@tanstack/react-query";
import { apiCategory } from "../../module.api";

export function StepMedical() {
  // * DEFINITIONS

  const form = FormHandler.useForm();

  // * CONTEXT

  const queryCategory = useQuery({
    queryKey: ["category", "categoryData"],
    queryFn: async () => {
      const res: any = await apiCategory();
      return res?.data;
    },
    initialData: [],
  });

  // * STATE

  useEffect(() => {
    const decoded: any = jwtDecode(sessionStorage.getItem("sswtoken") || "");
    apiDispatch
      .get({
        endpoint: "/applicant/get/id/",
        params: {
          user_id: decoded?.user_id,
        },
      })
      .then((res: any) => {
        console.log(res);
        if (!res.err) {
          form.setFieldValue("id", res.data?.id);
        }
      });
  }, []);

  // * FUNCTIONS

  // * COMPONENTS

  // * ANIMATIONS

  return (
    <>
      <Stack gap="md">
        <Text size="2rem" lh="2.3rem">
          <b style={{ opacity: 0.5 }}>Personal details saved.</b>
          <br />
          <b>
            Now, let’s add your medical 💊, Personality 🧑‍🦱 & Additionl Details.
          </b>
        </Text>

        <Stack gap="xs">
          <FormElement.SectionTitle
            isTopElement
            title="Optical Characteristics (Natural Eye)"
            description="Basic details and physical attributes"
          />
          <Group grow gap="xs">
            <NumberInput
              hideControls
              label="Left Power"
              placeholder="e.g. -1.25"
              {...form.getInputProps("naked_eye_left_power")}
            />
            <NumberInput
              hideControls
              label="Right Power"
              placeholder="e.g. -1.00"
              {...form.getInputProps("naked_eye_right_power")}
            />
            <NumberInput
              hideControls
              label="Both Power"
              placeholder="e.g. -1.12"
              {...form.getInputProps("naked_eye_both_power")}
            />
          </Group>
          <FormElement.SectionTitle
            title="Optical Characteristics (Corrected Eye)"
            description="Basic details and physical attributes"
          />
          <Group grow gap="xs">
            <NumberInput
              hideControls
              label="Left Power"
              placeholder="e.g. 0.00"
              {...form.getInputProps("corrective_eye_left_power")}
            />
            <NumberInput
              hideControls
              label="Right Power"
              placeholder="e.g. 0.00"
              {...form.getInputProps("corrective_eye_right_power")}
            />
            <NumberInput
              hideControls
              label="Both Power"
              placeholder="e.g. 0.00"
              {...form.getInputProps("corrective_eye_both_power")}
            />
          </Group>

          <FormElement.SectionTitle
            title="Dominant Hand"
            description="Details about the applicant's dominant hand."
          />

          <Select
            label="Dominant Hand"
            placeholder="e.g. Right"
            required
            data={[
              { value: "R", label: "Right" },
              { value: "L", label: "Left" },
              { value: "A", label: "Ambidextrous" },
            ]}
            {...form.getInputProps("dominant_hand")}
          />

          <FormElement.SectionTitle
            title="Food Characteristics"
            description="Preferences & Restrictions on food."
          />

          <SimpleGrid cols={2} security="xs">
            <Switch
              label="I have Food Allergy"
              description="Does the applicant have food allergies?"
              {...form.getInputProps("has_food_allergy", {
                type: "checkbox",
              })}
            />

            <Switch
              label="I have Food Prohibition"
              description="Is the applicant restricted from eating certain foods?"
              {...form.getInputProps("has_food_prohibition", {
                type: "checkbox",
              })}
            />
          </SimpleGrid>

          <FormElement.SectionTitle
            title="Job Category"
            description="Category of job he/she is applying for"
          />

          <Select
            label="Job Category"
            placeholder="Select Job Category"
            data={queryCategory?.data?.map((_: any, index: number) => {
              return {
                value: String(_.id || index),
                label: _.name,
              };
            })}
            {...form.getInputProps("category")}
          />

          <FormElement.SectionTitle
            title="Personality & Certifications"
            description="Self-evaluation, skill certification, and basic identification"
          />

          <TextInput
            label="Strong Point"
            placeholder="e.g. Hardworking, Punctual"
            {...form.getInputProps("strong_point")}
          />
          <TextInput
            label="Strong Point (JP)"
            placeholder="e.g. 真面目、時間を守る"
            {...form.getInputProps("jp_strong_point")}
          />

          <TextInput
            label="Negative Point"
            placeholder="e.g. Impatient under pressure"
            {...form.getInputProps("negative_point")}
          />
          <TextInput
            label="Negative Point (JP)"
            placeholder="e.g. プレッシャーに弱い"
            {...form.getInputProps("jp_negative_point")}
          />

          <SimpleGrid cols={2} spacing="xs" mt="md">
            <Checkbox
              size="xs"
              label="I have a driving license"
              {...form.getInputProps("has_driving_license", {
                type: "checkbox",
              })}
            />

            <Checkbox
              size="xs"
              label="I have a passport"
              {...form.getInputProps("has_passport", { type: "checkbox" })}
            />

            <DateInput
              label="Passport Available From"
              placeholder="Select date"
              {...form.getInputProps("date_of_passport_availability")}
            />

            <TextInput
              label="Language Training Year"
              placeholder="e.g. 2023"
              {...form.getInputProps("language_training_year")}
            />
          </SimpleGrid>

          <FormElement.SectionTitle
            title="Skills & Certifications"
            description="Provide certified skills and language qualifications"
          />

          <TextInput
            label="Certified Skill"
            placeholder="e.g. Welding, Electric Work"
            {...form.getInputProps("certified_skill")}
          />
          <TextInput
            label="Certified Skill (JP)"
            placeholder="e.g. 溶接、電気工事"
            {...form.getInputProps("jp_certified_skill")}
          />

          <TextInput
            label="Language Certification"
            placeholder="e.g. JLPT N4, TOP-J Intermediate"
            {...form.getInputProps("language_certification")}
          />
          <TextInput
            label="Language Certification (JP)"
            placeholder="e.g. 日本語能力試験 N4、TOP-J 中級"
            {...form.getInputProps("jp_language_certification")}
          />

          <TextInput
            label="Self Introduction Video (YouTube Link)"
            placeholder="https://youtube.com/..."
            {...form.getInputProps("youtube_link")}
          />
        </Stack>
      </Stack>
    </>
  );
}
