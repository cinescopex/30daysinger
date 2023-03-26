import MainLayout from "../../components/MainLayout/MainLayout";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import data from "../Course/courses.json";
import toCamelCase from "../../helpers/strings";

const Levels = () => {
  const { level } = useParams();

  return (
    <MainLayout>
      <div className="theme-content">
        <h1 className="theme-title">{toCamelCase(level)}</h1>

        <div className="theme-card-container">
          <div className="theme-card relative">
            {data.map((course) => {
              return (
                <div className="flex flex-col mb-8">
                  <Link
                    to={`/learn/${course.level}/${course.route}`}
                    className="block hover:underline hover:text-sky-500 hover:cursor-pointer"
                  >
                    <img
                      src={course.thumbnail}
                      alt={`${course.course} by ${course.author}`}
                    />
                  </Link>
                  <Link
                    to={`/learn/${course.level}/${course.route}`}
                    className="mt-2 text-lg font-bold hover:underline hover:text-sky-500 hover:cursor-pointer"
                  >
                    {course.course}
                  </Link>
                  <span className="flex flex-row gap-2">
                    <strong>by</strong>
                    <span>{course.author}</span>
                  </span>
                  <span className="mt-2">{course.description}</span>
                  <hr className="theme-separator" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Levels;
