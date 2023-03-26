import { SiSinglestore } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <div
      onClick={handleClick}
      className="flex flex-row items-left cursor-default select-none gap-x-1 hover:cursor-pointer"
    >
      <div className="flex flex-col items-start -space-y-2 m-1">
        <div className="flex flex-row items-center">
          <span className="font-bold text-3xl tracking-tight">3</span>
          <SiSinglestore className="h-6 w-7" />
        </div>
        <span className="font-bold text-lg tracking-normal">DAY</span>
      </div>
      <span className="font-semibold text-6xl tracking-tight">SINGER</span>
    </div>
  );
};

export default Logo;
