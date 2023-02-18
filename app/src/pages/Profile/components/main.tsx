import { Notifications, Star, Timer } from "../assets";
import Skeleton from "./LoadingSkeleton";

const Main = () => {
  return (
    <div className="profile_main">
      <div className="left_profile_section">
        <div className="content">
          <div className="profile_name">
            <div className="initials">CN</div>
            <div className="company_name">COMPANY NAME</div>
          </div>
          <div className="offices">
            <div className="offices_items">
              <p>CEO</p>
              <h6>CEO NAME</h6>
            </div>
            <div className="offices_items">
              <p>CTO</p>
              <h6>CTO NAME</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="right_profile_section">
        <div className="info">
          <img src={Timer} alt="" />
          <p>Coming soon</p>
        </div>
        <div className="content">
          <div className="items">
            <div className="item">
              <div className="icon">🎉</div>
              <Skeleton />
            </div>

            <div className="item">
              <div className="icon">✨</div>
              <Skeleton />
            </div>

            <div className="item">
              <div className="icon">
                <img src={Star} alt="" />
              </div>

              <Skeleton />
            </div>
          </div>

          <div className="notification">
            <img src={Notifications} alt="" />
            <p>
              Receive notifcations about your rider performance, efficiency
              reviews and a lot more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
