export type FAQItem = {
  question: string;
  answer: string;
};

export const faqs: FAQItem[] = [
  {
    question: "Is this course NCTE recognized?",
    answer:
      "[Answer once accreditation status is confirmed. Do not guess or leave vague, this is the single most-asked question for teacher training.]",
  },
  {
    question: "What are the fees and payment options?",
    answer:
      "[Answer once fee structure is confirmed. Note whether installment plans are offered.]",
  },
  {
    question: "Do you help with job placement after the course?",
    answer:
      "We provide interview preparation and connect graduates with hiring schools in [region].",
  },
  {
    question: "What are the class timings and mode of learning?",
    answer: "[Confirm: in-person, online, or hybrid, and typical batch timing.]",
  },
  {
    question: "What is the admission process and what documents do I need?",
    answer:
      "[List required documents, e.g. ID proof, previous mark sheets, passport photos, and the steps to enroll.]",
  },
  {
    question: "Can I switch courses after enrolling?",
    answer: "[Confirm centre policy.]",
  },
];
