import beginnerCoursesImg from "../../assets/beginner-courses.png";
import advancedCoursesImg from "../../assets/advanced-courses.png";
import tricksTechniquesImg from "../../assets/tricks-techniques.png";
import dailyWarmupsImg from "../../assets/daily-warmups.png";
import { useNavigate } from "react-router-dom";

import "./level.css";

const Level = ({ level, text1, text2 }) => {
  const navigate = useNavigate();

  function handleClick(level) {
    navigate(`/learn/${level}`);
  }
  function getImageForLevel(level) {
    if (level === "beginner") return beginnerCoursesImg;
    if (level === "advanced") return advancedCoursesImg;
    if (level === "tricks") return tricksTechniquesImg;
    if (level === "daily") return dailyWarmupsImg;
  }
  return (
    <div
      onClick={() => handleClick(level)}
      style={{ backgroundImage: `url(${getImageForLevel(level)})` }}
      className={`${level}-shadow w-full lg:w-[calc(50%-1rem)] bg-cover bg-no-repeat h-44 relative hover:cursor-pointer group`}
    >
      <div
        className={`absolute bottom-0 mb-5 ml-5 flex flex-col text-white border-solid group-hover:${level}-border-color border-l-4 pl-4 select-none cursor-default`}
      >
        <span
          className={`text-shadow-custom text-3xl font-bold text-white tracking-tighter select-none hover:cursor-pointer group-hover:text-slate-200`}
        >
          {text1}
        </span>
        <span
          className={`text-shadow-custom text-3xl font-bold text-white tracking-tighter select-none hover:cursor-pointer group-hover:text-slate-200`}
        >
          {text2}
        </span>
      </div>
    </div>
  );
};

export default Level;
