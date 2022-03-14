import { Link } from "react-router-dom";
import React from "react";

export function Links() {
  return (
    <div className={"links"}>
      <Link to="/" className={"link"}>about me</Link>
      <Link to="/cv" className={"link"}>cv</Link>
      <Link to="/misc" className={"link"}>misc</Link>
    </div>
  );
}

export function TopBar(title) {
  return (
    <div className={"topbar"}>
      <h1>{title.title}</h1>
      <Links />
    </div>
  );
}

export function CvCard(cvObject, type) {
    const { experience_id, experience_title, experience_place, experience_from, experience_to } = cvObject;
    const {type_name} = type;

    const experience_from_formatted = new Date(experience_from).toLocaleDateString();
    let experience_to_formatted = new Date(experience_to).toLocaleDateString();

    if(experience_from_formatted > experience_to_formatted || new Date(experience_to) < new Date()){
        experience_to_formatted = "CURRENT"
    }

    return (
        <div key={experience_id} className={"card cv"}>
            <h2>{experience_title}</h2>
            <p>{experience_place}</p>
            <p>{type_name}</p>
            <p>from: {experience_from_formatted}</p>
            <p>to: {experience_to_formatted}</p>
        </div>
    );
}