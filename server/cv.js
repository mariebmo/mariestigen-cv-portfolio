class Type {
  static Work = new Type("work");
  static Education = new Type("education");

  constructor(name) {
    this.name = name;
  }
}

export const Cv = [
  {
    id: 1,
    type: "work",
    title: "3D-artist",
    from: "sept 2018",
    to: "current",
  },
  {
    id: 2,
    type: "work",
    title: ".NET dev",
    from: "nov 2021",
    to: "current",
  },
  {
    id: 3,
    type: "education",
    title: "Programming bachelors",
    from: "aug 2020",
    to: "current",
  },
  {
    id: 4,
    type: "education",
    title: "3D-generalist bachelors",
    from: "aug 2015",
    to: "jun 2018",
  },
];

export const WorkExperience = Cv.filter((e) => e.type === "work");

export const EducationalExperience = Cv.filter((e) => e.type === "education");