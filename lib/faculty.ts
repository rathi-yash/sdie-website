export type FacultyMember = {
  name: string;
  role: string;
  credentials: string;
};

export const faculty: FacultyMember[] = [
  {
    name: "Neetu Singh",
    role: "[role, e.g. NTT lead]",
    credentials: "[one or two lines, e.g. degree, years of experience, prior schools/institutions]",
  },
  {
    name: "Shalini Singh",
    role: "[role, e.g. B.Ed coordinator]",
    credentials: "[one or two lines, e.g. degree, years of experience, prior schools/institutions]",
  },
  {
    name: "Avni Ahlawat",
    role: "[role, e.g. centre director]",
    credentials: "[one or two lines, e.g. degree, years of experience, prior schools/institutions]",
  },
];
