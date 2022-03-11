class Type {
  static Work = new Type("work");
  static Education = new Type("education");

  constructor(name) {
    this.name = name;
  }
}

export function workExperience() {
  return Cv.filter((e) => e.type === Type.Work.name);
}

export function educationExperience() {
  return Cv.filter((e) => e.type === Type.Education.name);
}

export const Cv = [
  {
    id: 1,
    type: Type.Work,
    title: "3D-artist",
    from: "sept 2018",
    to: "current",
  },
  {
    id: 2,
    type: Type.Work,
    title: ".NET dev",
    from: "nov 2021",
    to: "current",
  },
  {
    id: 3,
    type: Type.Education,
    title: "Programming bachelors",
    from: "aug 2020",
    to: "current",
  },
  {
    id: 4,
    type: Type.Education,
    title: "3D-generalist bachelors",
    from: "aug 2015",
    to: "jun 2018",
  },
];
