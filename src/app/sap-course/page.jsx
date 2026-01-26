import { CoursesContent } from "@/app/courses/page"; 
// ⚠️ adjust import path based on where your file actually lives

export const metadata = {
  title: "SAP Training Institute | SAP Certification Course",
  description:
    "Professional SAP training with certification, real projects and placement support. Learn SAP FICO, MM, SD and HANA with expert trainers.",
};

export default function SapCoursePage() {
  return <CoursesContent defaultCategory="SAP" />;
}
