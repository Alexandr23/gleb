import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Plan } from "../core";

type Model<T> = Record<string, T>;

export type PlanState = {
  model: Model<Plan.Plan>;
};

export const defaultPlanState: PlanState = {
  model: {
    asdfasdfsd: {
      id: "asdfasdfsd",
      day: "Monday",
      name: "Mock",
      description: "Mock",
    },
  },
};

export const usePlanStore = create<PlanState>()(
  persist(() => defaultPlanState, {
    name: "plan-store",
    storage: createJSONStorage(() => sessionStorage),
  })
);
