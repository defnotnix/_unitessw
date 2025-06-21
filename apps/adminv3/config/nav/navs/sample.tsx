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
    label: "Accounts",
    icon: UserIcon,
    value: "/admin/accounts",
    children: [
      {
        label: "Admin Accounts",
        value: "/admin/accounts/admin",
      },
      {
        label: "Staff Accounts",
        value: "/admin/accounts/staff",
      },
      {
        label: "Seeker Accounts",
        value: "/admin/accounts/seeker",
      },
      {
        label: "Account Roles & Permissions",
        value: "/admin/accounts/role",
      },
    ],
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
        label: "Applicants",
        value: "/admin/applicants/all",
      },
      {
        label: "Applicant Requests",
        value: "/admin/applicants",
      },
      {
        label: "Applicant Bookings",
        value: "/admin/applicants",
      },
    ],
  },

  {
    label: "CV",
    icon: PaperPlaneTiltIcon,
    value: "/admin/cv",
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
];
