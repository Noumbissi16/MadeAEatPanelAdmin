import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();
  return (
    <div className="goback" onClick={() => navigate(-1)}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.7912 7.00502H3.62124L8.50124 2.12502C8.89124 1.73502 8.89124 1.09502 8.50124 0.705022C8.31441 0.51777 8.06076 0.412537 7.79624 0.412537C7.53172 0.412537 7.27807 0.51777 7.09124 0.705022L0.50124 7.29502C0.11124 7.68502 0.11124 8.31502 0.50124 8.70502L7.09124 15.295C7.48124 15.685 8.11124 15.685 8.50124 15.295C8.89124 14.905 8.89124 14.275 8.50124 13.885L3.62124 9.00502H14.7912C15.3412 9.00502 15.7912 8.55502 15.7912 8.00502C15.7912 7.45502 15.3412 7.00502 14.7912 7.00502Z"
          fill="#BBC8D4"
        />
      </svg>
      <span>Retour</span>
    </div>
  );
};

export default GoBack;
