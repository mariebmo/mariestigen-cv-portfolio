import {Link} from "react-router-dom";
import React from "react";

export function TopBarLinks() {
    return (
        <div className={"links"}>
            <Link to="/" className={"link"}>
                about me
            </Link>
            <Link to="/cv" className={"link"}>
                cv
            </Link>
            <Link to="/contact" className={"link"}>
                contact
            </Link>
        </div>
    );
}

export function TopBar(title) {
    return (
        <div className={"topbar"}>
            <div className={"topbar-content"}>
                <h1 className={"text-2xl"}>{title.title}</h1>
                <TopBarLinks/>
            </div>
        </div>
    );
}