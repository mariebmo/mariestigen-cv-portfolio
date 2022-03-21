import { Link } from "react-router-dom";
import React from "react";

export function TopBarLinks() {
  let loggedIn = false;
  return (
    <div className={"links button-bar app-width"}>
      <Link
        to="/"
        className={"link tertiary-background black-text"}
        style={{ textDecoration: "none" }}
      >
        about me
      </Link>
      <Link
        to="/cv"
        className={"link tertiary-background black-text"}
        style={{ textDecoration: "none" }}
      >
        cv
      </Link>
      <Link
        to="/contact"
        className={"link tertiary-background black-text"}
        style={{ textDecoration: "none" }}
      >
        contact
      </Link>
      {loggedIn && (
        <Link
          to={"/addNew"}
          className={"link tertiary-background black-text"}
          style={{ textDecoration: "none" }}
        >
          add new
        </Link>
      )}
    </div>
  );
}

export function TopBar(title) {
  return (
    <div className={"topbar secondary-background drop-shadow"}>
      <div className={"topbar-content"}>
        <h1 className={"text-2xl white-text"}>{title.title}</h1>
        <TopBarLinks />
      </div>
    </div>
  );
}
