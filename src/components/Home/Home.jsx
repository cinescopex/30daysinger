import MainLayout from "../MainLayout/MainLayout";
import Level from "../Levels/Level";
const Home = () => {
  return (
    <MainLayout>
      <div className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white shadow-md rounded-md p-6 mb-6 flex flex-wrap gap-4">
            <Level level="beginner" text1="BEGINNER" text2="COURSES" />
            <Level level="advanced" text1="ADVANCED" text2="COURSES" />
            <Level level="tricks" text1="TRICKS" text2="TECHNIQUES" />
            <Level
              level="daily"
              text1="DAILY WARM-UPS"
              text2="& VOCAL HEALTH"
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
