import React, { useEffect, useState } from "react";
import { fetchJSON } from "../http";
import { TopBar } from "../components/topBar";
import { CvCard } from "../components/cvCard";

export function CvPage() {
  const [url, setUrl] = useState("/api/experience");
  const cv = handleCv(url);
  const types = handleTypes("/api/type");

  const cvLayout = handleCvLayout(cv, types);

  return (
    <div>
      <TopBar title="CV" />
      <div id={"cv-container"} className={"content"}>
        <div className={"button-bar"}>
          <button
            className={"filter-btn secondary-color secondary-text-color drop-shadow"}
            onClick={() => setUrl("/api/experience")}
          >
            all
          </button>
          {types.map((t) => (
            <button
              className={"filter-btn secondary-color secondary-text-color drop-shadow"}
              key={t.type_id}
              onClick={() => setUrl("/api/experience/type/" + t.type_id)}
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

              <div className={"container white-background drop-shadow"}>
                <h2 className={"centered text-2xl font-bold"}>
                  {type.type_name.toUpperCase()}
                </h2>
              </div>

              <br />
              {type.cvObjects.map((cv) => (
                <CvCard key={cv.experience_id} {...cv} />
              ))}
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

  return currentTypes;
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
