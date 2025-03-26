import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

const Random = () => {

  const { gif, loading, fetchData } = useGif();

  return (
    <div className="flex flex-col bg-green-500 rounded-lg border border-black items-center p-5 gap-y-5 mt-[15px] mb-[20px] mx-5 md:w-1/2 ">
      <h1 className="mt-[15px] text-xl md:text-3xl uppercase underline font-bold">
        Random Gif
      </h1>

      {loading ? <Spinner /> : <img src={gif} width="450" alt="gif" />}

      <button
        onClick={() => fetchData()}
        className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
