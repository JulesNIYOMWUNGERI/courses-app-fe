import CourseCard from "../../components/CourseCard/CourseCard";
import { CourseTypes } from "../../utils/types";
import "./Home.css";

const Courses: CourseTypes[] = [
  {
    id: "1",
    title: "Course management",
    image:
      "https://media.istockphoto.com/id/1011792694/photo/elevated-view-of-a-busy-open-plan-office.jpg?s=612x612&w=0&k=20&c=f-bXShoO_CyU0f1uSIDMk1CXj2IgCRqkG3KKOgBua9o=",
  },
  {
    id: "2",
    title: "Course overview",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    id: "3",
    title: "Administration",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxPDfLiVh__Rhp4b1j9FTiKur67pK7ECEyzA&s",
  },
];

const Home = () => {
  return (
    <main className="card-grid">
      {Courses.map((Course: CourseTypes) => (
        <CourseCard key={Course.id} Course={Course} />
      ))}
    </main>
  )
}

export default Home