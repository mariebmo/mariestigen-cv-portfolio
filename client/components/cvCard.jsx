import React, { useState } from "react";

export function CvCard(cvObject) {
  const [checked, setChecked] = new useState(false);

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
    new Date(experience_to) < new Date("1996-06-10") ||
    new Date(experience_to) > new Date()
  ) {
    experience_to_formatted = "currently working here";
  }

  const handleChecked = () => {
    setChecked(!checked);
  };

  const handleCvInfo = () => {
    return (
      <div>
        {experience_info !== null && (
          <div>
            <p className={"tertiary-text-color"}>{experience_info}</p>
            <br />
          </div>
        )}

        <div className={"flex-container"}>
          {experience_tags !== null &&
            experience_tags.map((e) => (
              <span className={"tag tertiary-border-color tertiary-text-color"}>
                {e}
              </span>
            ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            {experience_title}{" "}
            <span
              className={
                "right circle " +
                (experience_to_formatted === "currently working here"
                  ? "circle-active"
                  : "")
              }
            />
          </h2>
          <p>{experience_place}</p>

          <div className={"flex-container flex-container-space-around"}>
            <div className="">
              <span>
                <p className={"italic text-slate-300"}>
                  from: {experience_from_formatted}
                </p>
              </span>

              <span>
                <p className={"italic text-slate-300"}>
                  to: {experience_to_formatted}
                </p>
              </span>
            </div>

            <div className={""}>
              <span
                onClick={handleChecked}
                className={"arrow " + (checked ? "arrow-up" : "arrow-down")}
              />
            </div>
          </div>
          {checked && handleCvInfo()}
        </div>
      </div>
      <br />
    </div>
  );
}
