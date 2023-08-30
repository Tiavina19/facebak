import React from "react";
import Storycard from "../storycard/Storycard";
import { Users } from "../../data";
import "./stories.scss";
import upload from "../pictures/Others/download-1873539_1920.png";

const Stories = () => {
  return (
    <div className="stories">
      <div className="storyCard">
        <div className="overlay"></div>
        <img src="/assets/person/user.jpg" alt="" className="storyProfile" />
        <img src="/assets/person/user.jpg" alt="" className="storybackground" />
        <img src={upload} alt="" className="storyadd" />
        <span className="text">Tiavina</span>
      </div>

      {Users.map((u) => (
        <Storycard key={u.id} user={u} />
      ))}
    </div>
  );
};

export default Stories;
