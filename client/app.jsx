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

export function HandleCv(endpoint) {
  const [cv, setCv] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`api/cv/${endpoint}`);
        console.log("res: " + res)
        const data = await res.json();
        console.log("data: " + data.Cv);
        setCv(data);
      } catch (err) {
        console.log("error: " + err);
      }
    }

    fetchData();
  }, []);
  return <ShowCv cv={cv} />;
}

export function ShowCv(cv) {
  console.log("showCv: " + cv.Cv);
  return cv.Cv.map((c) => CvCard(c));
}

export function WorkPage() {
  const [workCv, setWorkCv] = useState();

  const res = fetch("api/cv/work");
  console.log(res);

  return (
    <div>
      <Links />
      <h1>WORK PAGE!</h1>
      <HandleCv endpoint={"work"} />
    </div>
  );
}

export function EducationPage() {

  return (
    <div>
      <Links />
      <h1>WORK PAGE!</h1>
      <HandleCv endpoint={"education"} />
    </div>
  );
}

export function CvCard(cvObject) {
  const { type, title, from, to } = cvObject;

  return (
    <div>
      <h2>{title}</h2>
      <p>{type}</p>
      <p>from: {from}</p>
      <p>to: {to}</p>
    </div>
  );
}
