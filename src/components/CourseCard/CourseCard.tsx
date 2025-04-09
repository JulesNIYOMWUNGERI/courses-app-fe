import { CourseTypes } from "../../utils/types"

const CourseCard = ({ Course }: { Course: CourseTypes}) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${Course.image})` }}>
        <div className="overlay">
            <p>{Course.title}</p>
        </div>
    </div>
  )
}

export default CourseCard