import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is the react app to leave a feedback for product or services</p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to="/">Back Home</Link>
        </p>
      </div>
    </Card>
  );
};

export default About;
