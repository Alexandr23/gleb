import { Day } from "../../Types";

export type Plan = {
  id: string;
  name: string;
  description: string;
  day: Day;
};

export type Example = {
  id: string;
  name: string;
};

export const getNextPlan = (plan: Plan): Plan => {
  return plan;
};
