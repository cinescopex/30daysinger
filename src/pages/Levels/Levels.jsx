import MainLayout from "../../components/MainLayout/MainLayout";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import data from "../Course/courses.json";

const Levels = () => {
  const { level } = useParams();

  return (
    <MainLayout>
      <div className="theme-content">
        <h1 className="theme-title">{level}</h1>

        <div className="theme-card-container">
          <div className="theme-card relative">
            {data.map((course) => {
              return (
                <Link
                  to={`/learn/${course.level}/${course.route}`}
                  className="block hover:underline hover:text-sky-500 hover:cursor-pointer"
                >
                  {course.course}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Levels;
