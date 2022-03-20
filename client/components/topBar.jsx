import {Link} from "react-router-dom";
import React from "react";

export function TopBarLinks() {
    return (
        <div className={"links button-bar"}>
            <Link to="/" className={"link tertiary-color secondary-text-color"} style={{textDecoration: "none"}}>
                about me
            </Link>
            <Link to="/cv" className={"link tertiary-color secondary-text-color"} style={{textDecoration: "none"}}>
                cv
            </Link>
            <Link to="/contact" className={"link tertiary-color secondary-text-color"} style={{textDecoration: "none"}}>
                contact
            </Link>
        </div>
    );
}

export function TopBar(title) {
    return (
        <div className={"topbar secondary-color drop-shadow"}>
            <div className={"topbar-content"}>
                <h1 className={"text-2xl secondary-text-color"}>{title.title}</h1>
                <TopBarLinks/>
            </div>
        </div>
    );
}