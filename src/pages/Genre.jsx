import React, { useState } from "react";
import GenreBox from "../components/GenreBox";
import {useNavigate} from "react-router-dom";
import img0 from "../../public/img0.png";
import danger from "../assets/danger.svg";
import img2 from "../../public/img2.png";
import img3 from "../../public/img3.png";
import img4 from "../../public/img4.png";
import img5 from "../../public/img5.png";
import img6 from "../../public/img6.png";
import img7 from "../../public/img7.png";
import img8 from "../../public/img8.png";
import img9 from "../../public/img9.png";

const genre = [
  { id: 0, Category: "Action", color: "#FF5209", path: img0 },
  { id: 1, Category: "Drama", color: "#D7A4FF", path: img2 },
  { id: 2, Category: "Romance", color: "#11B800", path: img3 },
  { id: 3, Category: "Thriller", color: "#84C2FF", path: img4 },
  { id: 4, Category: "Western", color: "#902500", path: img5 },
  { id: 5, Category: "Horror", color: "#7358FF", path: img6 },
  { id: 6, Category: "Fantasy", color: "#FF4ADE", path: img7 },
  { id: 7, Category: "Music", color: "#E61E32", path: img8 },
  { id: 8, Category: "Fiction", color: "#6CD061", path: img9 },
];

export default function Genre() {
  const navigate=useNavigate();
 const [selectedMovies,setSelectedMovies]=useState([])
 
 const handleRemoveSelection=(movie)=>{
    
     setSelectedMovies((prev)=> (prev.filter((item)=>item!==movie)));
 }

 const handleNavigate=()=>{
  if (selectedMovies.length < 3) return;

  localStorage.setItem("selectedMovie", JSON.stringify(selectedMovies));
  navigate("/info");
 }


  return (
    <div className="w-full h-screen  bg-black flex flex-row justify-center ">
      <div className="bg-black h-screen w-screen flex flex-row max-w-[2000px] ">
        <div className="flex flex-col items-center justify-center text-white w-5/12 ">
          <div className=" flex flex-col  justify-between w-4/6  h-4/5 ">
            <h1 className="font-singleDay  text-[#72DB73] md:text-4xl  xl:text-5xl 2xl:text-6xl font-[400]">
              Super app
            </h1>
            <h1 className="font-[700] font-roboto my-10 md:text-5xl 2xl:text-7xl ">
              Choose your entertainment category
            </h1>
            <div className="flex flex-row w-4/5 flex-wrap gap-4">
             {selectedMovies.map((movie)=>(
               <div className="flex justify-around bg-[#148A08] font-roboto font-[400] rounded-2xl text-xl w-36">
                {movie}{" "}
                <span className="font-roboto font-[400] text-[#085C00] cursor-pointer" onClick={()=> handleRemoveSelection(movie)}>X</span>
              </div>))}
              
            </div>
           
          { selectedMovies.length<3?  <div className="my-5">
              <img className="inline-block size-4" src={danger} alt="" />
              <span className="font-roboto font-[400] text-[#FF0000]">
                {" "}
                Minimum 3 category required
              </span>
            </div>:<div ></div>}
          </div>
        </div>
        <div className="relative w-7/12 flex flex-col justify-center ">
          <div className=" h-4/5 flex flex-row justify-center ">
            <div className="w-3/5 grid grid-flow-row grid-cols-3 h-full gap-4  grid-rows-3 ">
              {genre.map((item, index) => {
                return (
                  <GenreBox
                    key={item.id}
                    path={item.path}
                    genre={item.Category}
                    selectedMovies={selectedMovies}
                    setSelectedMovies={setSelectedMovies}
                  />
                );
              })}
            </div>
          </div>
          <button   onClick={handleNavigate} className="absolute bottom-4 text-white bg-[#148A08] font-Dmsans font-[500] rounded-2xl h-8 text-xl w-36" style={{right:"calc(20%)"}}>
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
}
