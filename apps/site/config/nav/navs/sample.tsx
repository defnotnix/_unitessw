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
} from "@phosphor-icons/react";
import { PropAdminNavItems } from "@vframework/ui";

export const navItems: PropAdminNavItems[] = [
  {
    label: "Dashboard",
    icon: ChartDonut,
    value: "/admin/dashboard",
  },
  {
    label: "Job Category",
    icon: Bag,
    value: "/admin/configure",
  },
  {
    label: "Applicants",
    icon: Calendar,
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
      {
        label: "Published Applicants",
        value: "/admin/applicants/published",
      },
      {
        label: "Booked Applicants",
        value: "/admin/applicants/booked",
      },
      {
        label: "Deleted Applicants",
        value: "/admin/applicants/deleted",
      },
    ],
  },

  {
    label: "Seekers",
    icon: Eye,
    value: "/admin/seekers",
  },
  {
    label: "Vacancy",
    icon: SpeakerHifi,
    value: "/admin/vacancy",
  },

  {
    label: "About",
    icon: Note,
    value: "/admin/about",
  },
];
