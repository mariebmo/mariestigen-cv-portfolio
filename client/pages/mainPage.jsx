import {TopBar} from "../components/topBar";
import React from "react";

export function MainPage() {
    return (
        <div>
            <TopBar title={"About Me"}/>
            <div className={"content"}></div>
        </div>
    );
}

