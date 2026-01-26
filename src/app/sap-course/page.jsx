import { Suspense } from "react";
import { CoursesContent } from "@/app/courses/page";

export const metadata = {
  title: "SAP Training Institute | SAP Certification Course",
  description:
    "Professional SAP training with certification, real projects and placement support. Learn SAP FICO, MM, SD and HANA with expert trainers.",
};

export default function SapCoursePage() {
  return (
    <Suspense fallback={<div style={{ padding: 40 }}>Loading courses...</div>}>
      <CoursesContent defaultCategory="SAP" />
    </Suspense>
  );
}
