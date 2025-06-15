import {
  Calendar,
  ChartDonut,
  Cricket,
  Invoice,
  Package,
  User,
  GearSix,
  Eye,
  Brain,
  Note,
  Bag,
  SpeakerHifi,
  SpeakerHifiIcon,
  ChartDonutIcon,
  BagIcon,
  CalendarIcon,
  EyeIcon,
  UserIcon,
  PaperPlaneTiltIcon,
} from "@phosphor-icons/react";
import { PropAdminNavItems } from "@vframework/ui";

export const navItems: PropAdminNavItems[] = [
  {
    label: "Dashboard",
    icon: ChartDonutIcon,
    value: "/admin",
  },
  {
    label: "Job Category",
    icon: BagIcon,
    value: "/admin/configure",
  },
  {
    label: "Applicants",
    icon: CalendarIcon,
    value: "/admin/applicants",
    children: [
      {
        label: "All Applicants",
        value: "/admin/applicants",
      },
      {
        label: "Applicant Reqeuests",
        value: "/admin/applicants",
      },
      {
        label: "Applicant Bookings",
        value: "/admin/applicants",
      },
      {
        label: "Active Applicants",
        value: "/admin/applicants",
      },

    ],
  },

  {
    label: "CV",
    icon: PaperPlaneTiltIcon,
    value: "/admin/cv",
  },

  {
    label: "Seekers",
    icon: EyeIcon,
    value: "/admin/seekers",
  },
  {
    label: "Accounts",
    icon: UserIcon,
    value: "/admin/accounts",
  },
  {
    label: "Vacancy",
    icon: SpeakerHifiIcon,
    value: "/admin/vacancy",
  },
];
