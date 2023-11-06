import "./day.css";
import { DayType } from "./dayType";
import { Plan } from "../Types";

import { PlanList, PlanSelectors, usePlanStore } from "../plan";

type DayProps = {
  day: DayType;
  onEdit: (plan: Plan) => void;
  onDelete: (plan: Plan) => void;
};

export const Day = ({ day, onEdit, onDelete }: DayProps) => {
  const planList = usePlanStore((state) =>
    PlanSelectors.selectListByDay(state, day.name)
  );

  return (
    <div className="day">
      <h2>{day.name}</h2>
      <div className="day__planList">
        <PlanList plan={planList} onEdit={onEdit} onDelete={onDelete} />
      </div>
    </div>
  );
};
