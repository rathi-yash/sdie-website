export type Course = {
  slug: string;
  name: string;
  shortDescription: string;
  duration: string;
  description: string;
  eligibility: string;
  whatYouWillLearn: string[];
  careerOutcomes: string;
  note?: string;
};

export const courses: Course[] = [
  {
    slug: "ntt",
    name: "Nursery Teacher Training (NTT)",
    shortDescription:
      "Preschool pedagogy and classroom management for early childhood educators. 6 to 12 months.",
    duration: "[confirm, placeholder: 6 to 12 months]",
    description:
      "A diploma program that prepares you to teach and care for children in the preschool years, combining early childhood development theory with hands-on classroom practice.",
    eligibility: "[confirm, typically 10+2 pass]",
    whatYouWillLearn: [
      "Early childhood development and psychology",
      "Preschool curriculum planning and activity design",
      "Classroom management for young children",
      "Communication with parents and caregivers",
      "Practical teaching experience through supervised placements",
    ],
    careerOutcomes:
      "Graduates go on to teach in preschools, daycare centers, and nursery sections of schools, or start their own preschool.",
  },
  {
    slug: "ptt",
    name: "Primary Teacher Training (PTT)",
    shortDescription:
      "NCERT-guided practical and theoretical training for primary school teaching. 6 to 12 months.",
    duration: "[confirm, placeholder: 6 to 12 months]",
    description:
      "A vocational training program guided by NCERT standards, preparing you to teach at the primary school level through a mix of practical and theoretical training.",
    eligibility: "[confirm, typically 10+2 pass]",
    whatYouWillLearn: [
      "Primary-level curriculum and lesson planning",
      "Child psychology and learning styles",
      "Classroom management techniques",
      "Assessment and evaluation methods",
      "Supervised teaching practice",
    ],
    careerOutcomes:
      "Graduates are prepared for teaching roles in primary schools, both government and private.",
  },
  {
    slug: "english-speaking",
    name: "English Speaking Course",
    shortDescription: "Spoken fluency and classroom communication skills. 3 months.",
    duration: "[confirm, placeholder: 3 months]",
    description:
      "A focused program to build spoken English fluency and classroom communication skills, useful for both aspiring teachers and working professionals.",
    eligibility: "Open to all, no prior qualification required.",
    whatYouWillLearn: [
      "Conversational fluency and pronunciation",
      "Grammar fundamentals for everyday and professional use",
      "Public speaking and presentation skills",
      "Classroom communication techniques (for those pursuing teaching)",
    ],
    careerOutcomes:
      "Improved communication skills for teaching roles, interviews, and professional settings.",
  },
  {
    slug: "personality-development",
    name: "Personality Development Course",
    shortDescription:
      "Confidence, presentation, and soft skills for the classroom and beyond. 3 months.",
    duration: "[confirm, placeholder: 3 months]",
    description:
      "A program focused on building confidence, presentation skills, and professional soft skills, useful as a standalone course or alongside a teaching qualification.",
    eligibility: "Open to all, no prior qualification required.",
    whatYouWillLearn: [
      "Confidence building and public speaking",
      "Body language and professional presentation",
      "Interview preparation",
      "Time management and workplace etiquette",
    ],
    careerOutcomes:
      "Stronger interview performance and classroom presence, useful across teaching and non-teaching careers alike.",
  },
  {
    slug: "bed",
    name: "B.Ed Course",
    shortDescription:
      "Bachelor of Education with full curriculum support and practical training. 2 years.",
    duration: "[confirm, placeholder: 2 years]",
    description:
      "A Bachelor of Education program covering teaching methodology, curriculum design, and supervised classroom practice, preparing graduates for a full-time teaching career.",
    eligibility:
      "[confirm, typically a bachelor's degree with minimum required marks]",
    whatYouWillLearn: [
      "Educational psychology and pedagogy",
      "Curriculum and lesson design across subjects",
      "Classroom management and assessment",
      "Supervised teaching practice in real classrooms",
      "Educational technology and modern teaching tools",
    ],
    careerOutcomes:
      "Eligibility to teach at the secondary level, a foundational qualification for a long-term teaching career.",
    note: "[confirm the university affiliation this B.Ed is awarded through]",
  },
  {
    slug: "med",
    name: "M.Ed Course",
    shortDescription:
      "Advanced study for academic leadership and specialized teaching roles. 2 years.",
    duration: "[confirm, placeholder: 2 years]",
    description:
      "A Master of Education program for those looking to move into academic leadership, curriculum development, or specialized teaching roles.",
    eligibility: "[confirm, typically a B.Ed degree]",
    whatYouWillLearn: [
      "Advanced educational theory and research methods",
      "Curriculum development and educational leadership",
      "Specialized teaching strategies",
      "Educational policy and administration",
    ],
    careerOutcomes:
      "Pathways into senior teaching roles, academic coordination, school administration, or further research.",
    note: "[confirm the university affiliation]",
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
