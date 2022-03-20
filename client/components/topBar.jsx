import {Link} from "react-router-dom";
import React from "react";

export function TopBarLinks() {
    return (
        <div className={"links button-bar"}>
            <Link to="/" className={"link tertiary-color secondary-text-color"}>
                about me
            </Link>
            <Link to="/cv" className={"link tertiary-color secondary-text-color"}>
                cv
            </Link>
            <Link to="/contact" className={"link tertiary-color secondary-text-color"}>
                contact
            </Link>
        </div>
    );
}

export function TopBar(title) {
    return (
        <div className={"topbar secondary-color"}>
            <div className={"topbar-content"}>
                <h1 className={"text-2xl secondary-text-color"}>{title.title}</h1>
                <TopBarLinks/>
            </div>
        </div>
    );
}