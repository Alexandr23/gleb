import { PlanState } from "..";

export const selectModel = (state: PlanState) => state.model;

export const selectList = (state: PlanState) => Object.values(state.model);

export const selectListByDay = (state: PlanState, day: string) => {
  const list = selectList(state);
  return list.filter((plan) => plan.day === day);
};
