export type FacultyMember = {
  name: string;
  role: string;
  credentials: string;
};

export const faculty: FacultyMember[] = [
  {
    name: "[faculty name]",
    role: "[role, e.g. NTT lead]",
    credentials: "[one or two lines, e.g. degree, years of experience, prior schools/institutions]",
  },
  {
    name: "[faculty name]",
    role: "[role, e.g. B.Ed coordinator]",
    credentials: "[one or two lines, e.g. degree, years of experience, prior schools/institutions]",
  },
  {
    name: "[faculty name]",
    role: "[role, e.g. centre director]",
    credentials: "[one or two lines, e.g. degree, years of experience, prior schools/institutions]",
  },
];
