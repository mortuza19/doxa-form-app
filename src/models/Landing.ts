import type { SvgIconTypeMap } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';

export interface PlanFeature {
  feature: string;
  included: boolean;
}

export interface Plan {
  title: string;
  price: string;
  subtitle: string;
  features: PlanFeature[];
};

export interface FAQ {
  question: string;
  answer: string;
}

export type Status = 'Pending' | 'Ready';

export interface FormItem {
  name: string;
  status: Status;
}

export interface FormSection {
  title: string;
  items: FormItem[];
  buttonText: string;
  isPrimaryAction: boolean;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface UserReview {
  review: string;
  user: string;
  company: string;
}

export interface Metric {
  percentage: string;
  description: string;
}

export interface Step {
  stepNumber: number;
  title: string;
  description: string;
}

type FeatureIcon = OverridableComponent<SvgIconTypeMap<object, "svg">> & {
  muiName: string;
};

export interface FeatureItem {
  icon: FeatureIcon;
  title: string;
  description: string;
}