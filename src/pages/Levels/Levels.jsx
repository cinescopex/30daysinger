import MainLayout from "../../components/MainLayout/MainLayout";
import { useParams } from "react-router-dom";

const Levels = () => {
  const { level } = useParams();

  return (
    <MainLayout>
      <div className="text-slate-800">{level}</div>
    </MainLayout>
  );
};

export default Levels;
