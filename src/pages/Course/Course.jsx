import { useState } from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import { useParams } from "react-router-dom";
import data from "../../components/VideoPlayer/data.json";
import BitmovinVideoPlayer from "../../components/VideoPlayer/BitmovinVideoPlayer";

const Course = () => {
  const initialCourse = {
    id: "1",
    videoTitle: "Welcome",
    videoUrl:
      "https://30daysinger-usea.streaming.media.azure.net/f64e3c97-e139-4af7-adfd-aa92920e3698/Welcome.ism/manifest(format=m3u8-cmaf)",
    description:
      "Many beginning singers have at least heard the terms “chest voice” and “head voice”. But if those terms are new to you, fear not!<br/> <br/>When we talk about registers, we’re referring to a section of the voice (or a collection of pitches) in which sound is produced a certain way and results in a specific tone quality. <br/> <br/>Although there’s some disagreement over exactly how many registers we have, most of our time is spent developing chest voice (which we generally use for lower pitches), head voice (for higher pitches), and mix/middle voice to bridge the two. <br/> <br/>Other registers that we use less often would be falsetto and whistle (for extremely high pitches), and vocal fry (used as an exercise or stylistically). <br/> <br/>Our goal today is to access chest voice and head voice; down the road we’ll dive a bit deeper into mix voice!",
    author: "Abram Poliakoff",
    level: "Beginner",
    levelId: "beginner",
    course: "Intro to Vocal Registers",
    courseId: "intro-to-vocal-registers",
  };

  const [currentCourse, setCurrentCourse] = useState(initialCourse);

  const { level, course } = useParams();
  const content = data.content;
  console.log(content);
  return (
    <MainLayout>
      <div className="theme-content">
        <h1 className="theme-title">{currentCourse.course}</h1>

        <div className="theme-card-container">
          <div className="theme-card relative">
            <BitmovinVideoPlayer
              content={content}
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
