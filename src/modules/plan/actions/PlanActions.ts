import { Plan, usePlanStore } from "..";

export const createPlan = (plan: Plan.Plan) => {
  usePlanStore.setState((prev) => {
    return {
      ...prev,
      model: {
        ...prev.model,
        [plan.id]: plan,
      },
    };
  });
};

export const updatePlan = () => {};

export const deletePlan = () => {};

export const getPlanList = () => {};
