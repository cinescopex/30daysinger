import MainLayout from "../MainLayout/MainLayout";
import Level from "../Levels/Level";
const Home = () => {
  return (
    <MainLayout>
      <div className="flex flex-col lg:flex-row flex-wrap gap-2 lg:gap-0 m-2 lg:m-0">
        <Level level="beginner" text1="BEGINNER" text2="COURSES" />
        <Level level="advanced" text1="ADVANCED" text2="COURSES" />
        <Level level="tricks" text1="TRICKS" text2="TECHNIQUES" />
        <Level level="daily" text1="DAILY WARM-UPS" text2="& VOCAL HEALTH" />
      </div>
    </MainLayout>
  );
};

export default Home;
