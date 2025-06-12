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
        label: "Manage Applicants",
        value: "/admin/applicants",
      },
      {
        label: "New Applicant Requests",
        value: "/admin/applicants/request",
      },
      // {
      //   label: "Published Applicants",
      //   value: "/admin/applicants/published",
      // },
      // {
      //   label: "Booked Applicants",
      //   value: "/admin/applicants/booked",
      // },
      // {
      //   label: "Deleted Applicants",
      //   value: "/admin/applicants/deleted",
      // },
    ],
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

  {
    label: "About",
    icon: Note,
    value: "/admin/about",
  },
];
