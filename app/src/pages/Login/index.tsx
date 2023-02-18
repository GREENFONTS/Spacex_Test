import "./css/index.css";
import {Logo, Item1, Item2, Item3} from "./assets/"
import ServiceComponent from "./components/services";

function Login() {
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
                  />
                </div>

                <div className="formcontrol">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="......"
                    required
                    name="password"
                  />
                </div>
              </div>
            </div>
            <button className="submitbtn">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
