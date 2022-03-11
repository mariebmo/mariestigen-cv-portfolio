import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CvCard, Links, TopBar } from "./modules";
import { fetchJSON } from "./http";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cv" element={<CvPage />} />
        <Route path="/misc" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export function MainPage() {
  return (
    <div>
      <Links />
      <h1>MAIN PAGE!</h1>
    </div>
  );
}

function handleCv(url) {

  const [currentCv, setCurrentCv] = useState([]);


  useEffect(async () => {
    try {
      await fetchJSON(url).then((json) =>
          setCurrentCv(json.experience)
      );
    } catch (err) {
      console.log(err);
    }
  }, [url]);

  return currentCv
}

export function CvPage() {
  const [url, setUrl] = useState("/api/cv")
  const cv = handleCv(url)
  return(
      <div>
        <TopBar title="CV"/>
        <button onClick={() => setUrl("/api/cv")}>all</button>
        <button onClick={() => setUrl("/api/cv/work")}>work</button>
        <button onClick={() => setUrl("/api/cv/education")}>edu</button>
        {cv.map((e) => (
            <CvCard key={e.id} {...e} />
        ))}
      </div>
  )
}

export function WorkPage() {
  const [workCv, setWorkCv] = useState([]);

  useEffect(async () => {
    try {
      await fetchJSON("/api/cv/work").then((json) =>
        setWorkCv(json.WorkExperience)
      );
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
        <TopBar title="Work"/>
        {workCv.map((e) => (
        <CvCard key={e.id} {...e} />
      ))}
    </div>
  );
}

export function EducationPage() {
  const [educationCv, setEducationCv] = useState([]);

  useEffect(async () => {
    try {
      await fetchJSON("/api/cv/education").then((json) =>
        setEducationCv(json.EducationalExperience)
      );
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      <TopBar title="Education"/>
      {educationCv.map((e) => (
        <CvCard key={e.id} {...e} />
      ))}
    </div>
  );
}

