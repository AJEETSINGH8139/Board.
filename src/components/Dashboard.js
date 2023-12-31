import React from "react";
import vector from "../assets/Vector.png";
import profile_img from "../assets/image 1.png";
import search_icon from "../assets/Search icon.png";
import vector1 from "../assets/Vector (1).png";
import vector2 from "../assets/Vector (2).png";
import vector3 from "../assets/Vector (3).png";
import vector4 from "../assets/total_transactions_icon.png";
import MultiLineChart from "./MultiLineChart";
import vector5 from "../assets/Vector (4).png";
import vector6 from "../assets/Vector (5).png";
import PieCharts from "./PieCharts";
import ellipse1 from "../assets/Ellipse 3.png";
import ellipse2 from "../assets/Ellipse 4.png";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

function Dashboard() {
  const navigate = useNavigate();

  const auth = getAuth();

  const logout = () => {
    // localStorage.clear();
    // navigate("/");
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="dashboard">
      <div className="nav margin">
        <p className="nav-dash">Dashboard</p>
        <div className="nav-profile">
          <div className="search-nav">
            <input className="search" type="search" placeholder="Search..." />
            <img className="search-icon" src={search_icon} />
          </div>

          <img className="vector-nav" src={vector} />
          <img className="profile" src={profile_img} />
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
      <div className="card margin">
        <div className="revenue card-style">
          <img className="card-icon" src={vector1} />
          <p className="card-name">Total Revenues</p>
          <p className="card-value">$2,129,430</p>
        </div>
        <div className="transaction card-style">
          <img className="card-icon" src={vector4} />
          <p className="card-name">Total Transactions</p>
          <p className="card-value">1,520</p>
        </div>
        <div className="likes card-style">
          <img className="card-icon" src={vector2} />
          <p className="card-name">Total Likes</p>
          <p className="card-value">9,721</p>
        </div>
        <div className="users card-style">
          <img className="card-icon" src={vector3} />
          <p className="card-name">Total Users</p>
          <p className="card-value">892</p>
        </div>
      </div>
      <div className="activity margin">
        <div className="linechart">
          <div>
            <h2 className="line-chart-head">Top products</h2>
            <p className="line-chart-date">
              May-June2021 <img src={vector5} />
            </p>
          </div>
          <div>
            <img className="ellipse-img" src={ellipse1} />
            <spam className="line-data">Guest</spam>
            <img className="ellipse-img" src={ellipse2} />
            <spam className="line-data">User</spam>
          </div>
        </div>
        <MultiLineChart />
      </div>
      <div className="card-bottom margin">
        <div className="product">
          <div className="paichart">
            <h2 className="line-chart-head">Top products</h2>
            <p className="line-chart-date">
              May-June2021 <img src={vector5} />
            </p>
          </div>
          <PieCharts />
        </div>
        <div className="schedule">
          <div className="paichart">
            <h2 className="line-chart-head">Today's schedule</h2>
            <p className="line-chart-date">
              See All <img src={vector6} />
            </p>
          </div>
          <div>
            <div className="schedule-data">
              <h4 className="margin-data head-schedule">
                Meeting with suppliers from Kuta Bali
              </h4>
              <p className="margin-data data-schedule">14.00-15.00</p>
              <p className="margin-data data-schedule">
                at Sunset Road, Kuta, Bali
              </p>
            </div>
            <div className="schedule-data left-color">
              <h4 className="margin-data head-schedule">
                Check operation at Giga Factory 1
              </h4>
              <p className="margin-data data-schedule">18.00-20.00</p>
              <p className="margin-data data-schedule">at Centeral Jakarta</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
