import React, { useState } from "react";
import { getName } from "./utils";

const Home = () => {
  const name = getName()

  return (
    <div>
    <h4 className="welcomeText">Welcome {name}! welcome to the FAA app.</h4>
      <p className="para">Home Page for FAA Application</p>
    </div>
  );
};

export default Home;

