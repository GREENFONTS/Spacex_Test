import { useContext, useState, useEffect } from "react";
import "./css/index.css";
import { Logo, Item1, Item2, Item3 } from "./assets/";
import ServiceComponent from "./components/services";
import { AuthContext, LoginData } from "../../context";
import { useNavigate } from "react-router-dom";

function Login() {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (email !== "" && password !== "") {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [email, password]);

  const SubmitHandler = () => {
    const formBody: LoginData = {
      email,
      password,
    };

    const res = loginUser(formBody);
    if (res) {
      navigate("/profile");
    } else {
      alert("Password or Email Incorrect");
    }
  };

  return (
    <div className="main">
      <div className="left_section">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div className="welcome">
          <h3>Hi there, see what’s new</h3>
          <p>
            Here’s how Foodcourt helps you manage your daily operations and
            ensure your riders are efficient
          </p>
        </div>

        <div className="stacks">
          <ServiceComponent
            title="Monitor your Earnings"
            desc="Easily see how much your busineses are earning on each transaction and
            watch your earnings rise."
            image={Item1}
          />
          <ServiceComponent
            title="Manage your Businesses"
            desc="Easily see how much your businesses are earning  on each transaction and watch your earnings rise. "
            image={Item2}
          />
          <ServiceComponent
            title="Delegate to Staff"
            desc="Easily see how much your busineses are earning on each transaction and
            watch your earnings rise."
            image={Item3}
          />
        </div>
      </div>
      <div className="right_section">
        <div className="login_card">
          <div>
            <div className="card_content">
              <div className="card_header">
                <h5>Login to your dashboard</h5>
                <p>Provide details to login to your account </p>
              </div>
              <div className="form">
                <div className="formcontrol">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Cokitchen222@gmail.co"
                    required
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="formcontrol">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="......"
                    required
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button
              className="submitbtn"
              disabled={btnDisabled}
              onClick={() => SubmitHandler()}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
