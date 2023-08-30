import React from "react";
import Online from "../online/Online";
import { Usersonline } from "../../data";
import "./rightbarhome.scss";

const Rightbarhome = () => {
  return (
    <div className="rightbarhome">
      <div className="birthdayContainer">
        <img
          src="../pictures/Others/gift-1420830_1920.jpg"
          alt=""
          className="birthdayImg"
        />
        <span className="birthdayText">
          <b>Andy Nirina</b> and <b>other friends</b> have a birthday today
        </span>
      </div>
      <img src="/assets/ads/adv.jpg" alt="" className="rightbarAdvert" />

      <span className="rightbarTitle">Online Friends</span>

      <ul className="rightbarFriendList">
        {Usersonline.map((u) => (
          <Online key={u.id} onlineuser={u} />
        ))}
      </ul>
    </div>
  );
};

export default Rightbarhome;
