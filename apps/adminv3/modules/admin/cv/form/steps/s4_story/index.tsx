"use client";

//next

//mantine
import { Stack, Text, TextInput } from "@mantine/core";
import { FormHandler } from "@vframework/core";
//mantine

//icons

//styles

//components

const styles = {
  top: {
    input: {
      borderBottom: "none",
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      fontSize: "var(--mantine-font-size-xs)",
    },
    label: {
      fontSize: "var(--mantine-font-size-xs)",
    },
  },
  bot: {
    input: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      fontSize: "var(--mantine-font-size-xs)",
    },
    label: {
      fontSize: "var(--mantine-font-size-xs)",
    },
  },
};

export function StepStory() {
  // * DEFINITIONS

  const form = FormHandler.useForm();

  // * CONTEXT

  // * STATE

  // * FUNCTIONS

  // * COMPONENTS

  // * ANIMATIONS

  return (
    <>
      <Stack gap="md">
        <div>
          <Text size="2rem" lh="2.3rem">
            <b>Story</b>
            <br />
          </Text>
          <Text size="xs">
            Next lets add some personal story inforation of the person.
          </Text>
        </div>

        <Stack gap={0}>
          <TextInput
            rows={3}
            label="Personal Traits"
            placeholder="e.g. Responsible, punctual, team player"
            description="Positive qualities that describe the person"
            {...form.getInputProps("personal_traits")}
            styles={styles.top}
            leftSection={
              <Text size="xs" fw={800}>
                EN
              </Text>
            }
          />
          <TextInput
            rows={3}
            placeholder="例：責任感が強い、時間を守る、協調性がある"
            {...form.getInputProps("jp_personal_traits")}
            styles={styles.bot}
            leftSection={
              <Text size="xs" fw={800}>
                JP
              </Text>
            }
          />
        </Stack>

        <Stack gap={0}>
          <TextInput
            label="Motivation Statement"
            placeholder="Explain why you are applying and what motivates you"
            description="A short personal statement describing your motivation"
            {...form.getInputProps("motivation_statement")}
            styles={styles.top}
            leftSection={
              <Text size="xs" fw={800}>
                EN
              </Text>
            }
          />
          <TextInput
            placeholder="応募理由や意欲を説明してください"
            {...form.getInputProps("jp_motivation_statement")}
            styles={styles.bot}
            leftSection={
              <Text size="xs" fw={800}>
                JP
              </Text>
            }
          />
        </Stack>

        <Stack gap={0}>
          <TextInput
            label="Future Goals"
            placeholder="Share your future career or personal goals"
            description="Describe what you aim to achieve in the coming years"
            {...form.getInputProps("future_goals")}
            styles={styles.top}
            leftSection={
              <Text size="xs" fw={800}>
                EN
              </Text>
            }
          />
          <TextInput
            placeholder="将来の目標を共有してください"
            {...form.getInputProps("jp_future_goals")}
            styles={styles.bot}
            leftSection={
              <Text size="xs" fw={800}>
                JP
              </Text>
            }
          />
        </Stack>
      </Stack>
    </>
  );
}
