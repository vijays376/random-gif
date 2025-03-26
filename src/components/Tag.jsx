import React, { useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";


const Tag = () => {

  const [tag, setTag] = useState("Dog");
  const { gif, loading, fetchData } = useGif(tag);


  return (
    <div className="flex flex-col bg-blue-500 rounded-lg border border-black items-center p-5 gap-y-5 mt-[15px] mb-[20px] mx-5 md:w-1/2">
      <h1 className="mt-[15px] text-xl md:text-3xl uppercase underline font-bold">Random {tag} Gif</h1>
      {
        loading ? (<Spinner />) : (<img src= {gif} width="450" alt="gif" />)
      }

      <input type="text" className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center" 
      onChange={(event) => setTag(event.target.value)} value={tag} />

      <button
        onClick={() => fetchData(tag)}
        className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
