import React from "react";

interface Icard {
  title: string;
  paragraph: string;
  details: string | number;
}

export const Card: React.FC<Icard> = ({ title, paragraph, details }) => {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{paragraph}</p>
      <h1>{details}</h1>
    </div>
  );
};
