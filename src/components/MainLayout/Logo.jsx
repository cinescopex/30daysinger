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
      className="flex flex-col -space-y-2.5 items-left cursor-default select-none hover:cursor-pointer"
    >
      <div className="flex flex-row items-center">
        <span className="font-bold text-3xl tracking-tight">3</span>
        <SiSinglestore className="h-6 w-7" />
      </div>
      <span className="font-bold text-2xl tracking-tight">DAY</span>
      <span className="font-semibold text-sm tracking-tight">SINGER</span>
    </div>
  );
};

export default Logo;
