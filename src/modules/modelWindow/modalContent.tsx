import "./modalContent.css";

import { PlanCreateForm } from "../plan";

type ModalContentProps = {
  onClose: () => void;
};

export const ModalContent = ({ onClose }: ModalContentProps) => {
  return (
    <div className="modal">
      <div className="modal-form">
        <h3>Plan create form</h3>
        <PlanCreateForm />
      </div>
      <button onClick={onClose} className="closeButton">
        Close
      </button>
    </div>
  );
};
