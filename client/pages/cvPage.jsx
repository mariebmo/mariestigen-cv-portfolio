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
      <div className={"content"}>
        <div className={"button-bar"}>
          <button
            className={"filter-btn"}
            onClick={() => setUrl("/api/experience")}
          >
            all
          </button>
          {types.map((t) => (
            <button
              className={"filter-btn"}
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
              <h2 className={"text-2xl font-bold"}>{type.type_name}</h2>
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

  return currentTypes;
}

function handleCvLayout(cv, types) {
  const cvLayout = [];

  for (i = 0; i < types.length; i++) {
    cvLayout[i] = {
      type_id: types[i].type_id,
      type_name: types[i].type_name,
      cvObjects: cv.filter((c) => c.type_id === types[i].type_id),
    };
  }

  return cvLayout;
}
