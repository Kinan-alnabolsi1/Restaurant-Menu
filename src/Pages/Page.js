import Swipe from "../Components/Swipe";
import FoodFilter from "../Components/FoodFilter";
import logo from "../assets/anteka_logo.png";
const Page = () => {
  return (
    <div>
      <div className="flex justify-center items-center font-bold py-5 ">
        <img src={logo} alt="LOGO" className="w-32 h-auto" loading="lazy" />
      </div>
      <div>
        <Swipe />
      </div>
      <div>
        <FoodFilter />
      </div>
      <div className="text-center py-6 mt-10 text-yellow-400 text-sm">
        <p className="font-semibold">Powered by Prime IT</p>
        <p className="tracking-wide">0939501451</p>
      </div>
    </div>
  );
};

export default Page;
