import React from "react";

export function CvCard(cvObject) {
  const {
    experience_id,
    experience_title,
    experience_place,
    experience_from,
    experience_to,
    experience_info,
    experience_tags,
  } = cvObject;

  const experience_from_formatted = new Date(
    experience_from
  ).toLocaleDateString();
  let experience_to_formatted = new Date(experience_to).toLocaleDateString();

  if (
    experience_from_formatted > experience_to_formatted ||
    new Date(experience_to) > new Date()
  ) {
    experience_to_formatted = "CURRENT";
  }

  return (
    <div>
      <div className="card bg-base-100 shadow-xl w-96">
        <div className="card-body">
          <h2 className="card-title">{experience_title}</h2>
          <p>{experience_place}</p>
          {experience_info !== null && <p>{experience_info}</p>}
          <div className="card-actions justify-end">
            <p className={"italic text-slate-300"}>
              from: {experience_from_formatted}
            </p>
            <p className={"italic text-slate-300"}>
              to: {experience_to_formatted}
            </p>
            <div>
              {experience_tags !== null &&
                experience_tags.map((e) => (
                  <span className={"badge"}>{e}</span>
                ))}
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}