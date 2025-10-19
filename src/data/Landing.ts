import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';

import type { FeatureItem, FormSection, Metric, Plan, StatItem, Step, UserReview } from "../models/Landing";

export const PLANS: Plan[] = [
  {
    title: "Starter",
    price: "$99/mo",
    subtitle: "Up to 25 employees",
    features: [{
        feature: "Unlimited form templates",
        included: true
      }, {
        feature: "E-signatures included",
        included: true
      }, {
        feature: "Advanced analytics & reporting",
        included: false
      }, {
        feature: "Priority email + chat support",
        included: false
      }, {
        feature: "Dedicated account manager",
        included: false
    }],
  },
  {
    title: "Growth",
    price: "$249/mo",
    subtitle: "Up to 100 employees",
    features: [{
        feature: "Unlimited form templates",
        included: true
      }, {
        feature: "E-signatures included",
        included: true
      }, {
        feature: "Advanced analytics & reporting",
        included: true
      }, {
        feature: "Priority email + chat support",
        included: false
      }, {
        feature: "Dedicated account manager",
        included: false
    }]
  },
  {
    title: "Enterprise",
    price: "Custom",
    subtitle: "100+ employees",
    features: [{
        feature: "Unlimited form templates",
        included: true
      }, {
        feature: "E-signatures included",
        included: true
      }, {
        feature: "Advanced analytics & reporting",
        included: true
      }, {
        feature: "Priority email + chat support",
        included: true
      }, {
        feature: "Dedicated account manager",
        included: true
    }],
  },
];

export const FORM_SECTIONS: FormSection[] = [
  {
    title: "Employee Application",
    items: [
      { name: "Personal Info", status: "Pending" },
      { name: "I-9", status: "Pending" },
      { name: "Direct Deposit", status: "Pending" },
      { name: "Background Consent", status: "Pending" },
    ],
    buttonText: "Send Invite",
    isPrimaryAction: true,
  },
  {
    title: "Client Onboarding",
    items: [
      { name: "Intake", status: "Ready" },
      { name: "Care Needs", status: "Ready" },
      { name: "State Waivers", status: "Ready" },
    ],
    buttonText: "Create Packet",
    isPrimaryAction: false,
  },
];

export const STATS: StatItem[] = [
  { value: "40%", label: "Faster Turnaround" },
  { value: "70%", label: "Fewer Errors" },
  { value: "100%", label: "CO Coverage" },
];

export const USER_REVIEWS: UserReview[] = [
  {
    review: "Doxa Forms has transformed our onboarding process. The customizable templates and e-signature capabilities have saved us countless hours.",
    user: "Jane Smith",
    company: "CarePlus Agency"
  },
  {
    review: "The compliance features give us peace of mind. Knowing that our forms meet state regulations is invaluable.",
    user: "John Doe",
    company: "HomeCare Solutions"
  },
  {
    review: "Our staff loves the ease of use. The intuitive interface makes form management a breeze.",
    user: "Emily Johnson",
    company: "Senior Helpers"
  }
];

// Data for the top metrics section
export const METRICS_DATA: Metric[] = [
  {
    percentage: '40%',
    description: 'Faster Onboarding',
  },
  {
    percentage: '70%',
    description: 'Fewer Errors',
  },
  {
    percentage: '100%',
    description: 'Colorado Compliance Coverage',
  },
];

// Data for the three-step process
export const STEPS_DATA: Step[] = [
  {
    stepNumber: 1,
    title: 'Send Invitations',
    description: 'HR sends secure email invites to employees and clients.',
  },
  {
    stepNumber: 2,
    title: 'Complete & E-Sign',
    description: 'Recipients fill out forms online and sign digitally.',
  },
  {
    stepNumber: 3,
    title: 'Download Records',
    description: 'HR instantly downloads audit-ready PDFs and data.',
  },
];

export const CORE_FEATURES: FeatureItem[] = [
  {
    icon: GroupAddOutlinedIcon,
    title: 'Employee Application Module',
    description: 'Digital I-9, direct deposit, background consent, and more.',
  },
  {
    icon: CorporateFareIcon,
    title: 'Client Onboarding Module',
    description: 'Intake forms, care needs, and state-required waivers.',
  },
  {
    icon: DriveFileRenameOutlineIcon,
    title: 'E-Signatures',
    description: 'Secure, legally binding signatures via mouse or touchscreen.',
  },
  {
    icon: MailOutlineIcon,
    title: 'Proxy Submission',
    description: 'HR can complete forms on behalf of clients without email.',
  },
  {
    icon: LockOutlinedIcon,
    title: 'Controlled Edit Access',
    description: 'Enable/disable editing to allow corrections when needed.',
  },
  {
    icon: ShieldOutlinedIcon,
    title: 'Automated IDs',
    description: 'Unique IDs for every employee and client to track securely.',
  },
];


