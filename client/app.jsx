import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/education" element={<EducationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export function Links() {
  return (
    <div>
      <Link to="/">Main</Link>
      <Link to="/work">work</Link>
      <Link to="/education">Education</Link>
    </div>
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

async function fetchJSON(url){

    const res = await fetch(url)

    if(!res.ok){
        throw new Error(`Failed ${res.status}`)
    }

    return await res.json()
}

export function WorkPage() {
  const [workCv, setWorkCv] = useState([]);

  useEffect(async () => {
      try {
          await fetchJSON("/api/cv/work")
              .then((json) => setWorkCv(json.WorkExperience));
      } catch (err) {
          console.log(err);
      }
    }, {})


  return (
    <div>
      <Links />
      <h1>WORK PAGE!</h1>
        {workCv.map(e => <CvCard {...e} />)}
    </div>
  );
}

export function EducationPage() {
    const [educationCv, setEducationCv] = useState([]);

    useEffect(async () => {
        try {
            await fetchJSON("/api/cv/education")
                .then((json) => setEducationCv(json.EducationalExperience));
        } catch (err) {
            console.log(err);
        }
    }, {})

  return (
    <div>
      <Links />
      <h1>EDUCATION PAGE!</h1>
      {educationCv.map(e => <CvCard {...e} />)}
    </div>
  );
}

export function CvCard(cvObject) {
  const { id, type, title, from, to } = cvObject;

  return (
    <div key={id}>
      <h2>{title}</h2>
      <p>{type}</p>
      <p>from: {from}</p>
      <p>to: {to}</p>
    </div>
  );
}
