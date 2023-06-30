import React from "react";
import dashboard from "../assets/dashboard_icon.png";
import schedule from "../assets/schedule_icon.png";
import setting from "../assets/setting_icon.png";
import transaction from "../assets/transaction_icon.png";
import user from "../assets/user_icon.png";
import Dashboard from "./Dashboard";

function Home() {
    
  return (
    <div className="home">
      <div className="leftside-home">
        <h1 className="left-head">Board.</h1>
        <div className="leftside-button">
          <div className="btn">
            <img className="style-btn" src={dashboard} alt="dashboard" />
            <a className="style-btn" href="#">
              Dashboard
            </a>
          </div>
          <div className="btn">
            <img className="style-btn" src={transaction} alt="transaction" />
            <a className="style-btn" href="#">
              Transactions
            </a>
          </div>
          <div className="btn">
            <img className="style-btn" src={schedule} alt="schedule" />
            <a className="style-btn" href="#">
              Schedules
            </a>
          </div>
          <div className="btn">
            <img className="style-btn" src={user} alt="user" />
            <a className="style-btn" href="#">
              Users
            </a>
          </div>
          <div className="btn">
            <img className="style-btn" src={setting} alt="setting" />
            <a className="style-btn" href="#">
              Settings
            </a>
          </div>
        </div>
        <div className="leftside-bottum">
          <a className="bottum-btn" href="#">
            Help
          </a>
          <br />
          <a className="bottum-btn" href="#">
            Contact Us
          </a>
        </div>
      </div>
      <div className="main-home">
        <Dashboard />
      </div>
    </div>
  );
}

export default Home;
