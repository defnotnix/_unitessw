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
  UsersIcon,
  ScrollIcon,
} from "@phosphor-icons/react";
import { PropAdminNavItems } from "@vframework/ui";

export const navItems: PropAdminNavItems[] = [
  {
    label: "Dashboard",
    icon: ChartDonutIcon,
    value: "/admin",
    roles: ["admin", "staff1", "staff2", "staff3"],
  },
  {
    label: "Accounts",
    icon: UserIcon,
    value: "/admin/accounts",
    roles: ["admin"],
    children: [
      {
        label: "Staff Account Management",
      },
      {
        label: "Admin Accounts",
        value: "/admin/accounts/admin",
      },
      {
        label: "Staff Accounts",
        value: "/admin/accounts/staff",
      },
      {
        label: "Disabled Accounts",
        value: "/admin/accounts/disabled",
      },
      { divider: true },
      {
        label: "Seeker Management",
      },
      {
        label: "Seeker Accounts",
        value: "/admin/accounts/seeker",
      },
      {
        label: "Disabled Seekers",
        value: "/admin/accounts/disabled-seeker",
      },
      {
        label: "Seeker Notice",
        value: "/admin/accounts/seeker-notice",
      },
    ],
  },

  {
    label: "Job Category",
    icon: BagIcon,
    value: "/admin/configure",
    roles: ["admin"],
  },
  {
    label: "Applicants",
    icon: CalendarIcon,
    value: "/admin/applicants",
    roles: ["admin", "staff2", "staff3"],
    children: [
      {
        icon: UsersIcon,
        label: "Applicants",
        value: "/admin/applicants/all",
      },
      {
        icon: ScrollIcon,
        label: "Applicant Requests",
        value: "/admin/applicants",
      },
      {
        icon: CalendarIcon,
        label: "Applicant Bookings",
        value: "/admin/applicants",
      },
    ],
  },

  {
    label: "CV",
    icon: PaperPlaneTiltIcon,
    value: "/admin/cv",
    roles: ["admin", "staff1", "staff3"],
    children: [
      {
        label: "Active CV",
        value: "/admin/cv/active",
      },
      {
        label: "Deleted CV",
        value: "/admin/cv/deleted",
      },
    ],
  },

  {
    label: "Vacancy",
    icon: BagIcon,
    value: "/admin/post",
    roles: ["admin"],
    children: [
      {
        label: "Vacancy Category",
        value: "/admin/post/vacancy-category",
      },
      {
        label: "Vacancy",
        value: "/admin/post/vacancy",
      },
    ],
  },
  {
    label: "Misc",
    icon: BagIcon,
    value: "/admin/misc/",
    roles: ["admin"],
    children: [
      {
        label: "Activity Logs",
        value: "/admin/misc/vacancy-category",
      },
    ],
  },
];
