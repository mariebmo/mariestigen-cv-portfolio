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
  console.log(title);

  return (
    <div className={"topbar"}>
      <h1>{title.title}</h1>
      <Links />
    </div>
  );
}

export function CvCard(cvObject) {
    const { id, type, title, from, to } = cvObject;

    return (
        <div key={id} className={"card cv"}>
            <h2>{title}</h2>
            <p>{type}</p>
            <p>from: {from}</p>
            <p>to: {to}</p>
        </div>
    );
}