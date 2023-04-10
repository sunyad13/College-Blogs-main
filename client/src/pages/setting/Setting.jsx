import "./setting.css"
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function setting() {
   const { user } = useContext(Context);
  return (
      <div className="settings">
          <div className="settingsWrapper">
             <div className="settingsTitle">
                <span className="settingsTitleUpdate">Update Your Account</span>
                <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Rakesh" name="name" />
          <label>Email</label>
          <input type="email" placeholder="rakesh@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
          </form>
        </div>
       {/* <Sidebar /> */}
    </div>
  )
}
