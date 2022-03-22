import React, { useEffect, useState } from "react";
import { fetchJSON } from "../http";
import { TopBar } from "../components/topBar";
import { CvCard } from "../components/cvCard";

export function CvPage() {
  const [url, setUrl] = useState("/api/experience");
  const cv = handleCv(url);
  const types = handleTypes("/api/type");

  const cvLayout = handleCvLayout(cv, types);

  const [activeFilter, setActiveFilter] = useState("filter-all");

  return (
    <div>
      <TopBar title="CV" />
      <div id={"cv-container"} className={"content app-width"}>
        <div className={"button-bar"}>
          <button
            id={"filter-all"}
            className={
              activeFilter === "filter-all"
                ? "filter-btn secondary-background white-text"
                : "filter-btn secondary-background-ghost white-text"
            }
            onClick={() => {
              setUrl("/api/experience");
              setActiveFilter("filter-all");
            }}
          >
            all
          </button>
          {types.map((t) => (
            <button
              className={
                activeFilter === "filter-" + t.type_name
                  ? "filter-btn secondary-background white-text"
                  : "filter-btn secondary-background-ghost white-text"
              }
              key={t.type_id}
              onClick={() => {
                setUrl("/api/experience/type/" + t.type_id);
                setActiveFilter("filter-" + t.type_name);
              }}
              {...t}
            >
              {t.type_name}
            </button>
          ))}
        </div>
        {cvLayout
          .filter((type) => type.cvObjects.length > 0)
          .map((type) => (
            <div>
              <br />

              <div className={""}>
                <h2 className={"centered text-2xl black-text font-bold"}>
                  {type.type_name.toUpperCase()}
                </h2>
              </div>

              <br />
              <div className={"flex-container flex-column cards-container"}>
                {type.cvObjects.map((cv) => (
                  <CvCard key={cv.experience_id} {...cv} />
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export function TypeBtn(type) {
  const { type_id, type_name } = type;
  return <button id={type_id + "-btn"}>{type_name}</button>;
}

function handleCv(url) {
  const [currentCv, setCurrentCv] = useState([]);

  useEffect(async () => {
    try {
      await fetchJSON(url).then((json) => setCurrentCv(json.experience.rows));
    } catch (err) {
      console.log(err);
    }
  }, [url]);

  console.log(url);

  return currentCv;
}

function handleTypes(url) {
  const [currentTypes, setCurrentTypes] = useState([]);

  useEffect(async () => {
    try {
      await fetchJSON(url).then((json) => setCurrentTypes(json.type.rows));
    } catch (err) {
      console.log(err);
    }
  }, [url]);

  return currentTypes.sort(function (a, b){return a.type_id - b.type_id});
}

function handleCvLayout(cv, types) {
  const cvLayout = [];

  for (let i = 0; i < types.length; i++) {
    cvLayout[i] = {
      type_id: types[i].type_id,
      type_name: types[i].type_name,
      cvObjects: cv
        .filter((c) => c.type_id === types[i].type_id)
        .sort(sortyByDate),
    };
  }

  return cvLayout;
}

function sortyByDate(a, b) {
  return new Date(b.experience_from) - new Date(a.experience_from);
}
