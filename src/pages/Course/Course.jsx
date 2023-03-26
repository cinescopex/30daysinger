import { useState, useMemo, useCallback } from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import { useParams } from "react-router-dom";
import data from "../../components/VideoPlayer/data.json";
import BitmovinVideoPlayer from "../../components/VideoPlayer/BitmovinVideoPlayer";

const Course = () => {
  const { level, course } = useParams();

  const findCourseByLevelAndCourse = useCallback((data, level, course) => {
    return data.content.find(
      (c) =>
        c.courseId.toLowerCase() === course.toLowerCase() &&
        c.levelId.toLowerCase() === level.toLowerCase()
    );
  }, []);

  const foundItem = useMemo(() => {
    return findCourseByLevelAndCourse(data, level, course);
  }, [findCourseByLevelAndCourse, level, course]);

  const [currentCourse, setCurrentCourse] = useState(foundItem);

  return (
    <MainLayout>
      <div className="theme-content">
        <h1 className="theme-title">{currentCourse.course}</h1>

        <div className="theme-card-container">
          <div className="theme-card relative">
            <BitmovinVideoPlayer
              video={foundItem}
              onVideoSelected={setCurrentCourse}
            />
            <div className="theme-sub-card">
              <span>
                <strong>From: </strong> {currentCourse.course}
              </span>
              <span>
                <strong>by: </strong> {currentCourse.author}
              </span>
              <br />
              <div className="lesson-typograph">
                <h2>{currentCourse.videoTitle}</h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: currentCourse.description,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Course;
