"use client";

import { UserCard } from "@/components/UserCard/page";
import { useLanguage } from "@/layouts/app/app.context";
import {
  ActionIcon,
  Anchor,
  Avatar,
  Badge,
  Box,
  Breadcrumbs,
  Burger,
  Button,
  ButtonGroupSection,
  CheckIcon,
  Container,
  Divider,
  Drawer,
  Grid,
  Group,
  Image,
  Menu,
  NumberInput,
  Pagination,
  Paper,
  Select,
  SimpleGrid,
  Stack,
  Switch,
  Text,
  TextInput,
  ThemeIcon,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  ArrowClockwiseIcon,
  CaretDownIcon,
  CheckCircleIcon,
  MagnifyingGlassIcon,
} from "@phosphor-icons/react";

const data = [
  {
    name: "Alexander Hill",
    jp_name: "D・Noah・Rhodes",
    gender: "M",
    is_married: true,
    dob: "2003-09-09",
    address: "Kathmandu, Nepal",
    jp_address: "ネパール・カトマンズ",
    height: "180",
    weight: "58",
    dominant_hand: "L",
    naked_eye_left_power: -1.1,
    naked_eye_right_power: -0.39,
    naked_eye_both_power: -0.75,
    corrective_eye_left_power: -1.56,
    corrective_eye_right_power: -0.75,
    corrective_eye_both_power: -1.16,
    has_food_allergy: false,
    has_food_prohibition: true,
    strong_point: "Team player with discipline",
    jp_strong_point: "チーム意識があり、規律正しい",
    negative_point: "Sometimes overthinks",
    jp_negative_point: "考えすぎることがある",
    has_driving_license: true,
    has_passport: true,
    date_of_passport_availability: "2024-08-05",
    language_training_year: "2010",
    certified_skill: "Caregiver",
    jp_certified_skill: "介護福祉士",
    language_certification: "JLPT N4",
    jp_language_certification: "JLPT N4",
    youtube_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://avatar.iran.liara.run/public/14",
  },
  {
    name: "Allen Robinson",
    jp_name: "J・Alexander・Gonzalez",
    gender: "M",
    is_married: false,
    dob: "2003-09-07",
    address: "Kathmandu, Nepal",
    jp_address: "ネパール・カトマンズ",
    height: "162",
    weight: "61",
    dominant_hand: "R",
    naked_eye_left_power: -0.91,
    naked_eye_right_power: -1.34,
    naked_eye_both_power: -1.12,
    corrective_eye_left_power: -1.7,
    corrective_eye_right_power: -1.89,
    corrective_eye_both_power: -1.8,
    has_food_allergy: false,
    has_food_prohibition: true,
    strong_point: "Team player with discipline",
    jp_strong_point: "チーム意識があり、規律正しい",
    negative_point: "Sometimes overthinks",
    jp_negative_point: "考えすぎることがある",
    has_driving_license: true,
    has_passport: true,
    date_of_passport_availability: "2025-04-20",
    language_training_year: "1985",
    certified_skill: "Caregiver",
    jp_certified_skill: "介護福祉士",
    language_certification: "JLPT N4",
    jp_language_certification: "JLPT N4",
    youtube_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://avatar.iran.liara.run/public/15",
  },
  {
    name: "Donald Booth",
    jp_name: "P・Christopher・Henderson",
    gender: "M",
    is_married: false,
    dob: "1999-02-20",
    address: "Kathmandu, Nepal",
    jp_address: "ネパール・カトマンズ",
    height: "160",
    weight: "60",
    dominant_hand: "R",
    naked_eye_left_power: -1.69,
    naked_eye_right_power: -0.67,
    naked_eye_both_power: -1.18,
    corrective_eye_left_power: -2.41,
    corrective_eye_right_power: -1.29,
    corrective_eye_both_power: -1.85,
    has_food_allergy: true,
    has_food_prohibition: true,
    strong_point: "Team player with discipline",
    jp_strong_point: "チーム意識があり、規律正しい",
    negative_point: "Sometimes overthinks",
    jp_negative_point: "考えすぎることがある",
    has_driving_license: true,
    has_passport: true,
    date_of_passport_availability: "2024-09-27",
    language_training_year: "1984",
    certified_skill: "Caregiver",
    jp_certified_skill: "介護福祉士",
    language_certification: "JLPT N4",
    jp_language_certification: "JLPT N4",
    youtube_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://avatar.iran.liara.run/public/16",
  },
  {
    name: "Alexander Hill",
    jp_name: "D・Noah・Rhodes",
    gender: "M",
    is_married: true,
    dob: "2003-09-09",
    address: "Kathmandu, Nepal",
    jp_address: "ネパール・カトマンズ",
    height: "180",
    weight: "58",
    dominant_hand: "L",
    naked_eye_left_power: -1.1,
    naked_eye_right_power: -0.39,
    naked_eye_both_power: -0.75,
    corrective_eye_left_power: -1.56,
    corrective_eye_right_power: -0.75,
    corrective_eye_both_power: -1.16,
    has_food_allergy: false,
    has_food_prohibition: true,
    strong_point: "Team player with discipline",
    jp_strong_point: "チーム意識があり、規律正しい",
    negative_point: "Sometimes overthinks",
    jp_negative_point: "考えすぎることがある",
    has_driving_license: true,
    has_passport: true,
    date_of_passport_availability: "2024-08-05",
    language_training_year: "2010",
    certified_skill: "Caregiver",
    jp_certified_skill: "介護福祉士",
    language_certification: "JLPT N4",
    jp_language_certification: "JLPT N4",
    youtube_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://avatar.iran.liara.run/public/14",
  },
  {
    name: "Allen Robinson",
    jp_name: "J・Alexander・Gonzalez",
    gender: "M",
    is_married: false,
    dob: "2003-09-07",
    address: "Kathmandu, Nepal",
    jp_address: "ネパール・カトマンズ",
    height: "162",
    weight: "61",
    dominant_hand: "R",
    naked_eye_left_power: -0.91,
    naked_eye_right_power: -1.34,
    naked_eye_both_power: -1.12,
    corrective_eye_left_power: -1.7,
    corrective_eye_right_power: -1.89,
    corrective_eye_both_power: -1.8,
    has_food_allergy: false,
    has_food_prohibition: true,
    strong_point: "Team player with discipline",
    jp_strong_point: "チーム意識があり、規律正しい",
    negative_point: "Sometimes overthinks",
    jp_negative_point: "考えすぎることがある",
    has_driving_license: true,
    has_passport: true,
    date_of_passport_availability: "2025-04-20",
    language_training_year: "1985",
    certified_skill: "Caregiver",
    jp_certified_skill: "介護福祉士",
    language_certification: "JLPT N4",
    jp_language_certification: "JLPT N4",
    youtube_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://avatar.iran.liara.run/public/15",
  },
  {
    name: "Donald Booth",
    jp_name: "P・Christopher・Henderson",
    gender: "M",
    is_married: false,
    dob: "1999-02-20",
    address: "Kathmandu, Nepal",
    jp_address: "ネパール・カトマンズ",
    height: "160",
    weight: "60",
    dominant_hand: "R",
    naked_eye_left_power: -1.69,
    naked_eye_right_power: -0.67,
    naked_eye_both_power: -1.18,
    corrective_eye_left_power: -2.41,
    corrective_eye_right_power: -1.29,
    corrective_eye_both_power: -1.85,
    has_food_allergy: true,
    has_food_prohibition: true,
    strong_point: "Team player with discipline",
    jp_strong_point: "チーム意識があり、規律正しい",
    negative_point: "Sometimes overthinks",
    jp_negative_point: "考えすぎることがある",
    has_driving_license: true,
    has_passport: true,
    date_of_passport_availability: "2024-09-27",
    language_training_year: "1984",
    certified_skill: "Caregiver",
    jp_certified_skill: "介護福祉士",
    language_certification: "JLPT N4",
    jp_language_certification: "JLPT N4",
    youtube_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://avatar.iran.liara.run/public/16",
  },
  {
    name: "Alexander Hill",
    jp_name: "D・Noah・Rhodes",
    gender: "M",
    is_married: true,
    dob: "2003-09-09",
    address: "Kathmandu, Nepal",
    jp_address: "ネパール・カトマンズ",
    height: "180",
    weight: "58",
    dominant_hand: "L",
    naked_eye_left_power: -1.1,
    naked_eye_right_power: -0.39,
    naked_eye_both_power: -0.75,
    corrective_eye_left_power: -1.56,
    corrective_eye_right_power: -0.75,
    corrective_eye_both_power: -1.16,
    has_food_allergy: false,
    has_food_prohibition: true,
    strong_point: "Team player with discipline",
    jp_strong_point: "チーム意識があり、規律正しい",
    negative_point: "Sometimes overthinks",
    jp_negative_point: "考えすぎることがある",
    has_driving_license: true,
    has_passport: true,
    date_of_passport_availability: "2024-08-05",
    language_training_year: "2010",
    certified_skill: "Caregiver",
    jp_certified_skill: "介護福祉士",
    language_certification: "JLPT N4",
    jp_language_certification: "JLPT N4",
    youtube_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://avatar.iran.liara.run/public/14",
  },
  {
    name: "Allen Robinson",
    jp_name: "J・Alexander・Gonzalez",
    gender: "M",
    is_married: false,
    dob: "2003-09-07",
    address: "Kathmandu, Nepal",
    jp_address: "ネパール・カトマンズ",
    height: "162",
    weight: "61",
    dominant_hand: "R",
    naked_eye_left_power: -0.91,
    naked_eye_right_power: -1.34,
    naked_eye_both_power: -1.12,
    corrective_eye_left_power: -1.7,
    corrective_eye_right_power: -1.89,
    corrective_eye_both_power: -1.8,
    has_food_allergy: false,
    has_food_prohibition: true,
    strong_point: "Team player with discipline",
    jp_strong_point: "チーム意識があり、規律正しい",
    negative_point: "Sometimes overthinks",
    jp_negative_point: "考えすぎることがある",
    has_driving_license: true,
    has_passport: true,
    date_of_passport_availability: "2025-04-20",
    language_training_year: "1985",
    certified_skill: "Caregiver",
    jp_certified_skill: "介護福祉士",
    language_certification: "JLPT N4",
    jp_language_certification: "JLPT N4",
    youtube_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://avatar.iran.liara.run/public/15",
  },
  {
    name: "Donald Booth",
    jp_name: "P・Christopher・Henderson",
    gender: "M",
    is_married: false,
    dob: "1999-02-20",
    address: "Kathmandu, Nepal",
    jp_address: "ネパール・カトマンズ",
    height: "160",
    weight: "60",
    dominant_hand: "R",
    naked_eye_left_power: -1.69,
    naked_eye_right_power: -0.67,
    naked_eye_both_power: -1.18,
    corrective_eye_left_power: -2.41,
    corrective_eye_right_power: -1.29,
    corrective_eye_both_power: -1.85,
    has_food_allergy: true,
    has_food_prohibition: true,
    strong_point: "Team player with discipline",
    jp_strong_point: "チーム意識があり、規律正しい",
    negative_point: "Sometimes overthinks",
    jp_negative_point: "考えすぎることがある",
    has_driving_license: true,
    has_passport: true,
    date_of_passport_availability: "2024-09-27",
    language_training_year: "1984",
    certified_skill: "Caregiver",
    jp_certified_skill: "介護福祉士",
    language_certification: "JLPT N4",
    jp_language_certification: "JLPT N4",
    youtube_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://avatar.iran.liara.run/public/16",
  },
  {
    name: "Alexander Hill",
    jp_name: "D・Noah・Rhodes",
    gender: "M",
    is_married: true,
    dob: "2003-09-09",
    address: "Kathmandu, Nepal",
    jp_address: "ネパール・カトマンズ",
    height: "180",
    weight: "58",
    dominant_hand: "L",
    naked_eye_left_power: -1.1,
    naked_eye_right_power: -0.39,
    naked_eye_both_power: -0.75,
    corrective_eye_left_power: -1.56,
    corrective_eye_right_power: -0.75,
    corrective_eye_both_power: -1.16,
    has_food_allergy: false,
    has_food_prohibition: true,
    strong_point: "Team player with discipline",
    jp_strong_point: "チーム意識があり、規律正しい",
    negative_point: "Sometimes overthinks",
    jp_negative_point: "考えすぎることがある",
    has_driving_license: true,
    has_passport: true,
    date_of_passport_availability: "2024-08-05",
    language_training_year: "2010",
    certified_skill: "Caregiver",
    jp_certified_skill: "介護福祉士",
    language_certification: "JLPT N4",
    jp_language_certification: "JLPT N4",
    youtube_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://avatar.iran.liara.run/public/14",
  },
  {
    name: "Allen Robinson",
    jp_name: "J・Alexander・Gonzalez",
    gender: "M",
    is_married: false,
    dob: "2003-09-07",
    address: "Kathmandu, Nepal",
    jp_address: "ネパール・カトマンズ",
    height: "162",
    weight: "61",
    dominant_hand: "R",
    naked_eye_left_power: -0.91,
    naked_eye_right_power: -1.34,
    naked_eye_both_power: -1.12,
    corrective_eye_left_power: -1.7,
    corrective_eye_right_power: -1.89,
    corrective_eye_both_power: -1.8,
    has_food_allergy: false,
    has_food_prohibition: true,
    strong_point: "Team player with discipline",
    jp_strong_point: "チーム意識があり、規律正しい",
    negative_point: "Sometimes overthinks",
    jp_negative_point: "考えすぎることがある",
    has_driving_license: true,
    has_passport: true,
    date_of_passport_availability: "2025-04-20",
    language_training_year: "1985",
    certified_skill: "Caregiver",
    jp_certified_skill: "介護福祉士",
    language_certification: "JLPT N4",
    jp_language_certification: "JLPT N4",
    youtube_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://avatar.iran.liara.run/public/15",
  },
  {
    name: "Donald Booth",
    jp_name: "P・Christopher・Henderson",
    gender: "M",
    is_married: false,
    dob: "1999-02-20",
    address: "Kathmandu, Nepal",
    jp_address: "ネパール・カトマンズ",
    height: "160",
    weight: "60",
    dominant_hand: "R",
    naked_eye_left_power: -1.69,
    naked_eye_right_power: -0.67,
    naked_eye_both_power: -1.18,
    corrective_eye_left_power: -2.41,
    corrective_eye_right_power: -1.29,
    corrective_eye_both_power: -1.85,
    has_food_allergy: true,
    has_food_prohibition: true,
    strong_point: "Team player with discipline",
    jp_strong_point: "チーム意識があり、規律正しい",
    negative_point: "Sometimes overthinks",
    jp_negative_point: "考えすぎることがある",
    has_driving_license: true,
    has_passport: true,
    date_of_passport_availability: "2024-09-27",
    language_training_year: "1984",
    certified_skill: "Caregiver",
    jp_certified_skill: "介護福祉士",
    language_certification: "JLPT N4",
    jp_language_certification: "JLPT N4",
    youtube_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://avatar.iran.liara.run/public/16",
  },
  {
    name: "Alexander Hill",
    jp_name: "D・Noah・Rhodes",
    gender: "M",
    is_married: true,
    dob: "2003-09-09",
    address: "Kathmandu, Nepal",
    jp_address: "ネパール・カトマンズ",
    height: "180",
    weight: "58",
    dominant_hand: "L",
    naked_eye_left_power: -1.1,
    naked_eye_right_power: -0.39,
    naked_eye_both_power: -0.75,
    corrective_eye_left_power: -1.56,
    corrective_eye_right_power: -0.75,
    corrective_eye_both_power: -1.16,
    has_food_allergy: false,
    has_food_prohibition: true,
    strong_point: "Team player with discipline",
    jp_strong_point: "チーム意識があり、規律正しい",
    negative_point: "Sometimes overthinks",
    jp_negative_point: "考えすぎることがある",
    has_driving_license: true,
    has_passport: true,
    date_of_passport_availability: "2024-08-05",
    language_training_year: "2010",
    certified_skill: "Caregiver",
    jp_certified_skill: "介護福祉士",
    language_certification: "JLPT N4",
    jp_language_certification: "JLPT N4",
    youtube_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://avatar.iran.liara.run/public/14",
  },
  {
    name: "Allen Robinson",
    jp_name: "J・Alexander・Gonzalez",
    gender: "M",
    is_married: false,
    dob: "2003-09-07",
    address: "Kathmandu, Nepal",
    jp_address: "ネパール・カトマンズ",
    height: "162",
    weight: "61",
    dominant_hand: "R",
    naked_eye_left_power: -0.91,
    naked_eye_right_power: -1.34,
    naked_eye_both_power: -1.12,
    corrective_eye_left_power: -1.7,
    corrective_eye_right_power: -1.89,
    corrective_eye_both_power: -1.8,
    has_food_allergy: false,
    has_food_prohibition: true,
    strong_point: "Team player with discipline",
    jp_strong_point: "チーム意識があり、規律正しい",
    negative_point: "Sometimes overthinks",
    jp_negative_point: "考えすぎることがある",
    has_driving_license: true,
    has_passport: true,
    date_of_passport_availability: "2025-04-20",
    language_training_year: "1985",
    certified_skill: "Caregiver",
    jp_certified_skill: "介護福祉士",
    language_certification: "JLPT N4",
    jp_language_certification: "JLPT N4",
    youtube_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://avatar.iran.liara.run/public/15",
  },
  {
    name: "Donald Booth",
    jp_name: "P・Christopher・Henderson",
    gender: "M",
    is_married: false,
    dob: "1999-02-20",
    address: "Kathmandu, Nepal",
    jp_address: "ネパール・カトマンズ",
    height: "160",
    weight: "60",
    dominant_hand: "R",
    naked_eye_left_power: -1.69,
    naked_eye_right_power: -0.67,
    naked_eye_both_power: -1.18,
    corrective_eye_left_power: -2.41,
    corrective_eye_right_power: -1.29,
    corrective_eye_both_power: -1.85,
    has_food_allergy: true,
    has_food_prohibition: true,
    strong_point: "Team player with discipline",
    jp_strong_point: "チーム意識があり、規律正しい",
    negative_point: "Sometimes overthinks",
    jp_negative_point: "考えすぎることがある",
    has_driving_license: true,
    has_passport: true,
    date_of_passport_availability: "2024-09-27",
    language_training_year: "1984",
    certified_skill: "Caregiver",
    jp_certified_skill: "介護福祉士",
    language_certification: "JLPT N4",
    jp_language_certification: "JLPT N4",
    youtube_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://avatar.iran.liara.run/public/16",
  },
  {
    name: "Alexander Hill",
    jp_name: "D・Noah・Rhodes",
    gender: "M",
    is_married: true,
    dob: "2003-09-09",
    address: "Kathmandu, Nepal",
    jp_address: "ネパール・カトマンズ",
    height: "180",
    weight: "58",
    dominant_hand: "L",
    naked_eye_left_power: -1.1,
    naked_eye_right_power: -0.39,
    naked_eye_both_power: -0.75,
    corrective_eye_left_power: -1.56,
    corrective_eye_right_power: -0.75,
    corrective_eye_both_power: -1.16,
    has_food_allergy: false,
    has_food_prohibition: true,
    strong_point: "Team player with discipline",
    jp_strong_point: "チーム意識があり、規律正しい",
    negative_point: "Sometimes overthinks",
    jp_negative_point: "考えすぎることがある",
    has_driving_license: true,
    has_passport: true,
    date_of_passport_availability: "2024-08-05",
    language_training_year: "2010",
    certified_skill: "Caregiver",
    jp_certified_skill: "介護福祉士",
    language_certification: "JLPT N4",
    jp_language_certification: "JLPT N4",
    youtube_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://avatar.iran.liara.run/public/14",
  },
  {
    name: "Allen Robinson",
    jp_name: "J・Alexander・Gonzalez",
    gender: "M",
    is_married: false,
    dob: "2003-09-07",
    address: "Kathmandu, Nepal",
    jp_address: "ネパール・カトマンズ",
    height: "162",
    weight: "61",
    dominant_hand: "R",
    naked_eye_left_power: -0.91,
    naked_eye_right_power: -1.34,
    naked_eye_both_power: -1.12,
    corrective_eye_left_power: -1.7,
    corrective_eye_right_power: -1.89,
    corrective_eye_both_power: -1.8,
    has_food_allergy: false,
    has_food_prohibition: true,
    strong_point: "Team player with discipline",
    jp_strong_point: "チーム意識があり、規律正しい",
    negative_point: "Sometimes overthinks",
    jp_negative_point: "考えすぎることがある",
    has_driving_license: true,
    has_passport: true,
    date_of_passport_availability: "2025-04-20",
    language_training_year: "1985",
    certified_skill: "Caregiver",
    jp_certified_skill: "介護福祉士",
    language_certification: "JLPT N4",
    jp_language_certification: "JLPT N4",
    youtube_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://avatar.iran.liara.run/public/15",
  },
  {
    name: "Donald Booth",
    jp_name: "P・Christopher・Henderson",
    gender: "M",
    is_married: false,
    dob: "1999-02-20",
    address: "Kathmandu, Nepal",
    jp_address: "ネパール・カトマンズ",
    height: "160",
    weight: "60",
    dominant_hand: "R",
    naked_eye_left_power: -1.69,
    naked_eye_right_power: -0.67,
    naked_eye_both_power: -1.18,
    corrective_eye_left_power: -2.41,
    corrective_eye_right_power: -1.29,
    corrective_eye_both_power: -1.85,
    has_food_allergy: true,
    has_food_prohibition: true,
    strong_point: "Team player with discipline",
    jp_strong_point: "チーム意識があり、規律正しい",
    negative_point: "Sometimes overthinks",
    jp_negative_point: "考えすぎることがある",
    has_driving_license: true,
    has_passport: true,
    date_of_passport_availability: "2024-09-27",
    language_training_year: "1984",
    certified_skill: "Caregiver",
    jp_certified_skill: "介護福祉士",
    language_certification: "JLPT N4",
    jp_language_certification: "JLPT N4",
    youtube_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://avatar.iran.liara.run/public/16",
  },
  {
    name: "Alexander Hill",
    jp_name: "D・Noah・Rhodes",
    gender: "M",
    is_married: true,
    dob: "2003-09-09",
    address: "Kathmandu, Nepal",
    jp_address: "ネパール・カトマンズ",
    height: "180",
    weight: "58",
    dominant_hand: "L",
    naked_eye_left_power: -1.1,
    naked_eye_right_power: -0.39,
    naked_eye_both_power: -0.75,
    corrective_eye_left_power: -1.56,
    corrective_eye_right_power: -0.75,
    corrective_eye_both_power: -1.16,
    has_food_allergy: false,
    has_food_prohibition: true,
    strong_point: "Team player with discipline",
    jp_strong_point: "チーム意識があり、規律正しい",
    negative_point: "Sometimes overthinks",
    jp_negative_point: "考えすぎることがある",
    has_driving_license: true,
    has_passport: true,
    date_of_passport_availability: "2024-08-05",
    language_training_year: "2010",
    certified_skill: "Caregiver",
    jp_certified_skill: "介護福祉士",
    language_certification: "JLPT N4",
    jp_language_certification: "JLPT N4",
    youtube_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://avatar.iran.liara.run/public/14",
  },
  {
    name: "Allen Robinson",
    jp_name: "J・Alexander・Gonzalez",
    gender: "M",
    is_married: false,
    dob: "2003-09-07",
    address: "Kathmandu, Nepal",
    jp_address: "ネパール・カトマンズ",
    height: "162",
    weight: "61",
    dominant_hand: "R",
    naked_eye_left_power: -0.91,
    naked_eye_right_power: -1.34,
    naked_eye_both_power: -1.12,
    corrective_eye_left_power: -1.7,
    corrective_eye_right_power: -1.89,
    corrective_eye_both_power: -1.8,
    has_food_allergy: false,
    has_food_prohibition: true,
    strong_point: "Team player with discipline",
    jp_strong_point: "チーム意識があり、規律正しい",
    negative_point: "Sometimes overthinks",
    jp_negative_point: "考えすぎることがある",
    has_driving_license: true,
    has_passport: true,
    date_of_passport_availability: "2025-04-20",
    language_training_year: "1985",
    certified_skill: "Caregiver",
    jp_certified_skill: "介護福祉士",
    language_certification: "JLPT N4",
    jp_language_certification: "JLPT N4",
    youtube_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://avatar.iran.liara.run/public/15",
  },
  {
    name: "Donald Booth",
    jp_name: "P・Christopher・Henderson",
    gender: "M",
    is_married: false,
    dob: "1999-02-20",
    address: "Kathmandu, Nepal",
    jp_address: "ネパール・カトマンズ",
    height: "160",
    weight: "60",
    dominant_hand: "R",
    naked_eye_left_power: -1.69,
    naked_eye_right_power: -0.67,
    naked_eye_both_power: -1.18,
    corrective_eye_left_power: -2.41,
    corrective_eye_right_power: -1.29,
    corrective_eye_both_power: -1.85,
    has_food_allergy: true,
    has_food_prohibition: true,
    strong_point: "Team player with discipline",
    jp_strong_point: "チーム意識があり、規律正しい",
    negative_point: "Sometimes overthinks",
    jp_negative_point: "考えすぎることがある",
    has_driving_license: true,
    has_passport: true,
    date_of_passport_availability: "2024-09-27",
    language_training_year: "1984",
    certified_skill: "Caregiver",
    jp_certified_skill: "介護福祉士",
    language_certification: "JLPT N4",
    jp_language_certification: "JLPT N4",
    youtube_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://avatar.iran.liara.run/public/16",
  },
  {
    name: "Alexander Hill",
    jp_name: "D・Noah・Rhodes",
    gender: "M",
    is_married: true,
    dob: "2003-09-09",
    address: "Kathmandu, Nepal",
    jp_address: "ネパール・カトマンズ",
    height: "180",
    weight: "58",
    dominant_hand: "L",
    naked_eye_left_power: -1.1,
    naked_eye_right_power: -0.39,
    naked_eye_both_power: -0.75,
    corrective_eye_left_power: -1.56,
    corrective_eye_right_power: -0.75,
    corrective_eye_both_power: -1.16,
    has_food_allergy: false,
    has_food_prohibition: true,
    strong_point: "Team player with discipline",
    jp_strong_point: "チーム意識があり、規律正しい",
    negative_point: "Sometimes overthinks",
    jp_negative_point: "考えすぎることがある",
    has_driving_license: true,
    has_passport: true,
    date_of_passport_availability: "2024-08-05",
    language_training_year: "2010",
    certified_skill: "Caregiver",
    jp_certified_skill: "介護福祉士",
    language_certification: "JLPT N4",
    jp_language_certification: "JLPT N4",
    youtube_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://avatar.iran.liara.run/public/14",
  },
  {
    name: "Allen Robinson",
    jp_name: "J・Alexander・Gonzalez",
    gender: "M",
    is_married: false,
    dob: "2003-09-07",
    address: "Kathmandu, Nepal",
    jp_address: "ネパール・カトマンズ",
    height: "162",
    weight: "61",
    dominant_hand: "R",
    naked_eye_left_power: -0.91,
    naked_eye_right_power: -1.34,
    naked_eye_both_power: -1.12,
    corrective_eye_left_power: -1.7,
    corrective_eye_right_power: -1.89,
    corrective_eye_both_power: -1.8,
    has_food_allergy: false,
    has_food_prohibition: true,
    strong_point: "Team player with discipline",
    jp_strong_point: "チーム意識があり、規律正しい",
    negative_point: "Sometimes overthinks",
    jp_negative_point: "考えすぎることがある",
    has_driving_license: true,
    has_passport: true,
    date_of_passport_availability: "2025-04-20",
    language_training_year: "1985",
    certified_skill: "Caregiver",
    jp_certified_skill: "介護福祉士",
    language_certification: "JLPT N4",
    jp_language_certification: "JLPT N4",
    youtube_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://avatar.iran.liara.run/public/15",
  },
  {
    name: "Donald Booth",
    jp_name: "P・Christopher・Henderson",
    gender: "M",
    is_married: false,
    dob: "1999-02-20",
    address: "Kathmandu, Nepal",
    jp_address: "ネパール・カトマンズ",
    height: "160",
    weight: "60",
    dominant_hand: "R",
    naked_eye_left_power: -1.69,
    naked_eye_right_power: -0.67,
    naked_eye_both_power: -1.18,
    corrective_eye_left_power: -2.41,
    corrective_eye_right_power: -1.29,
    corrective_eye_both_power: -1.85,
    has_food_allergy: true,
    has_food_prohibition: true,
    strong_point: "Team player with discipline",
    jp_strong_point: "チーム意識があり、規律正しい",
    negative_point: "Sometimes overthinks",
    jp_negative_point: "考えすぎることがある",
    has_driving_license: true,
    has_passport: true,
    date_of_passport_availability: "2024-09-27",
    language_training_year: "1984",
    certified_skill: "Caregiver",
    jp_certified_skill: "介護福祉士",
    language_certification: "JLPT N4",
    jp_language_certification: "JLPT N4",
    youtube_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://avatar.iran.liara.run/public/16",
  },
  {
    name: "Alexander Hill",
    jp_name: "D・Noah・Rhodes",
    gender: "M",
    is_married: true,
    dob: "2003-09-09",
    address: "Kathmandu, Nepal",
    jp_address: "ネパール・カトマンズ",
    height: "180",
    weight: "58",
    dominant_hand: "L",
    naked_eye_left_power: -1.1,
    naked_eye_right_power: -0.39,
    naked_eye_both_power: -0.75,
    corrective_eye_left_power: -1.56,
    corrective_eye_right_power: -0.75,
    corrective_eye_both_power: -1.16,
    has_food_allergy: false,
    has_food_prohibition: true,
    strong_point: "Team player with discipline",
    jp_strong_point: "チーム意識があり、規律正しい",
    negative_point: "Sometimes overthinks",
    jp_negative_point: "考えすぎることがある",
    has_driving_license: true,
    has_passport: true,
    date_of_passport_availability: "2024-08-05",
    language_training_year: "2010",
    certified_skill: "Caregiver",
    jp_certified_skill: "介護福祉士",
    language_certification: "JLPT N4",
    jp_language_certification: "JLPT N4",
    youtube_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://avatar.iran.liara.run/public/14",
  },
  {
    name: "Allen Robinson",
    jp_name: "J・Alexander・Gonzalez",
    gender: "M",
    is_married: false,
    dob: "2003-09-07",
    address: "Kathmandu, Nepal",
    jp_address: "ネパール・カトマンズ",
    height: "162",
    weight: "61",
    dominant_hand: "R",
    naked_eye_left_power: -0.91,
    naked_eye_right_power: -1.34,
    naked_eye_both_power: -1.12,
    corrective_eye_left_power: -1.7,
    corrective_eye_right_power: -1.89,
    corrective_eye_both_power: -1.8,
    has_food_allergy: false,
    has_food_prohibition: true,
    strong_point: "Team player with discipline",
    jp_strong_point: "チーム意識があり、規律正しい",
    negative_point: "Sometimes overthinks",
    jp_negative_point: "考えすぎることがある",
    has_driving_license: true,
    has_passport: true,
    date_of_passport_availability: "2025-04-20",
    language_training_year: "1985",
    certified_skill: "Caregiver",
    jp_certified_skill: "介護福祉士",
    language_certification: "JLPT N4",
    jp_language_certification: "JLPT N4",
    youtube_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://avatar.iran.liara.run/public/15",
  },
  {
    name: "Donald Booth",
    jp_name: "P・Christopher・Henderson",
    gender: "M",
    is_married: false,
    dob: "1999-02-20",
    address: "Kathmandu, Nepal",
    jp_address: "ネパール・カトマンズ",
    height: "160",
    weight: "60",
    dominant_hand: "R",
    naked_eye_left_power: -1.69,
    naked_eye_right_power: -0.67,
    naked_eye_both_power: -1.18,
    corrective_eye_left_power: -2.41,
    corrective_eye_right_power: -1.29,
    corrective_eye_both_power: -1.85,
    has_food_allergy: true,
    has_food_prohibition: true,
    strong_point: "Team player with discipline",
    jp_strong_point: "チーム意識があり、規律正しい",
    negative_point: "Sometimes overthinks",
    jp_negative_point: "考えすぎることがある",
    has_driving_license: true,
    has_passport: true,
    date_of_passport_availability: "2024-09-27",
    language_training_year: "1984",
    certified_skill: "Caregiver",
    jp_certified_skill: "介護福祉士",
    language_certification: "JLPT N4",
    jp_language_certification: "JLPT N4",
    youtube_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://avatar.iran.liara.run/public/16",
  },
  // ... 27 more entries like this up to "image": "https://avatar.iran.liara.run/public/43"
];

const inputStyle = {
  label: {
    fontSize: "var(--mantine-font-size-xs)",
    fontWeight: 700,
  },
  input: {
    background: "white",
    padding: "16px 0",
    border: "none",
  },
};

export function ModuleSeekerApplicants() {
  const { language } = useLanguage();

  const [opened, handleOpen] = useDisclosure();

  function RenderFilter() {
    return (
      <>
        <Stack>
          <Text size="xs" opacity={0.5} fw={700}>
            {language === "en" ? "Search Filters" : "フィルターパラメーター"}
          </Text>
          <Stack gap="xs">
            <TextInput
              placeholder="Search by anything"
              rightSection={<MagnifyingGlassIcon />}
            />
            <Select
              data={[]}
              styles={inputStyle}
              variant="filled"
              label={language === "en" ? "Job Category" : "職種"}
              placeholder={
                language === "en"
                  ? "Select Job Category"
                  : "職種を選択してください"
              }
            />
            <Select
              data={[]}
              styles={inputStyle}
              variant="filled"
              label={language === "en" ? "Gender" : "性別"}
              placeholder={
                language === "en" ? "Select Gender" : "性別を選択してください"
              }
            />

            <SimpleGrid spacing="xs" cols={2}>
              <NumberInput
                hideControls
                styles={inputStyle}
                variant="filled"
                label={language === "en" ? "Min Age" : "最低年齢"}
                placeholder={
                  language === "en" ? "Minimum Age" : "最低年齢を入力"
                }
              />
              <NumberInput
                hideControls
                styles={inputStyle}
                variant="filled"
                label={language === "en" ? "Max Age" : "最高年齢"}
                placeholder={
                  language === "en" ? "Maximum Age" : "最高年齢を入力"
                }
              />
            </SimpleGrid>

            <Divider my="xs" />

            <Group justify="space-between" wrap="nowrap">
              <Text size="xs">
                {language === "en"
                  ? "Has Language Certificate"
                  : "言語証明書を持っている"}
              </Text>
              <Switch />
            </Group>

            <Group justify="space-between" wrap="nowrap">
              <Text size="xs" fw={700}>
                {language === "en"
                  ? "Has Driving License"
                  : "運転免許証を持っている"}
              </Text>
              <Switch />
            </Group>

            <Group justify="space-between" wrap="nowrap">
              <Text size="xs" fw={700}>
                {language === "en" ? "Has Passport" : "パスポートを持っている"}
              </Text>
              <Switch />
            </Group>

            <Group justify="space-between" wrap="nowrap">
              <Text size="xs" fw={700}>
                {language === "en" ? "Married" : "Married"}
              </Text>
              <Switch />
            </Group>

            <Divider my="xs" />

            <Button variant="light">
              {language === "en" ? "Apply Filter" : "フィルターを適用"}
            </Button>
          </Stack>
        </Stack>
      </>
    );
  }

  return (
    <Container size="xl" py="md">
      <Grid gutter="4px">
        <Grid.Col span={{ base: 12, lg: 3.5 }} visibleFrom="lg">
          <Group justify="space-between" visibleFrom="lg">
            <Text size="xs" fw={800}>
              Candidate Finder
            </Text>
            <ActionIcon variant="light">
              <ArrowClockwiseIcon />
            </ActionIcon>
          </Group>

          <Paper
            withBorder
            p="lg"
            mt="lg"
            radius="md"
            style={{
              position: "sticky",
              top: "1rem",
            }}
          >
            <RenderFilter />{" "}
          </Paper>
        </Grid.Col>

        <Grid.Col span={{ base: 12, lg: 8.5 }}>
          <Group justify="space-between">
            <Text size="xs" pl={{ base: 0, lg: "xl" }}>
              {language === "en" ? "Showing 50 of 3345" : "応募者 50 名中 3345"}
            </Text>
            <Group gap={2}>
              <Menu withArrow>
                <Menu.Target>
                  <Button
                    variant="white"
                    rightSection={<CaretDownIcon size={12} />}
                    size="xs"
                  >
                    {language === "en"
                      ? "Sort By : Registered Date"
                      : "並び替え：登録日"}
                  </Button>
                </Menu.Target>
                <Menu.Dropdown w={200}>
                  <Menu.Item leftSection={<CheckIcon size={10} />}>
                    Sort by Registered Date
                  </Menu.Item>
                  <Menu.Item>Sort by Name</Menu.Item>
                  <Menu.Item>Sort by Age</Menu.Item>
                </Menu.Dropdown>
              </Menu>
              <ThemeIcon>
                <Burger
                  size="xs"
                  color="white"
                  onClick={() => handleOpen.open()}
                />
              </ThemeIcon>
            </Group>
          </Group>

          <Stack mt="lg" gap="4px">
            {data.map((item, index) => (
              <UserCard applicant={item} key={index} />
            ))}
          </Stack>

          <Group justify="center" my="xl">
            <Pagination total={10} />
          </Group>
        </Grid.Col>
      </Grid>

      <Drawer
        opened={opened}
        onClose={() => handleOpen.close()}
        title={
          <Text tt="uppercase" size="xs" fw={700}>
            {" "}
            Candidate Finder
          </Text>
        }
      >
        <RenderFilter />
      </Drawer>
    </Container>
  );
}
