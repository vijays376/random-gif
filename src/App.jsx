import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative items-center overflow-x-hidden">
      <h1 className="bg-white rounded-lg uppercase w-11/12 text-center mt-6 md:mt-[40px] md:ml-[15px] py-2 px-10 text-4xl font-bold ">
        Random GIFs
      </h1>
      <div className="flex flex-col md:flex-row w-full justify-items-stretch mt-[20px] md:space-x-36 md:px-32">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
