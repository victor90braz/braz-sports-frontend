import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AccessControl = ({ children }) => {
  const navigate = useNavigate();
  const { logged } = useSelector((state) => state.user);

  useEffect(() => {
    if (!logged) {
      navigate("/login");
      return;
    }
  }, [logged, navigate]);

  return children;
};

export default AccessControl;
