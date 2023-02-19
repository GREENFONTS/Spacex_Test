import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";
import Header from "./components/header";
import Main from "./components/main";
import "./css/index.css";

const Profile = () => {
  const navigate = useNavigate();
  const { user, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      if (user.loggedIn) {
        setTimeout(() => {
          logoutUser();
          navigate("/");
        }, 1000 * 60 * 2);
      }
    } else {
      navigate("/");
    }
  }, [user, logoutUser, navigate]);

  return (
    <div className="header">
      <Header />
      <Main />
    </div>
  );
};

export default Profile;
