import React from 'react'



export default function ({genre,path,selectedMovies,setSelectedMovies}) {
   


  const handleSelections=()=>{
   if(selectedMovies.includes(genre)){
      setSelectedMovies((prev)=>(prev.filter((item)=> item!==genre)));
   }else{
      setSelectedMovies((prev)=>([...prev,genre]));
   }


  }


  return (
    <div className={`w-full bg${genre} ${selectedMovies.includes(genre)? "border-4 border-[#11B800]":""} rounded-2xl flex flex-col justify-evenly `} onClick={handleSelections}>
     <h1 className='text-white ml-4 mt-4 text-2xl font-Dmsans font-[500] 2xl:text-3xl'>{genre}</h1>
     <img src={path} className="w-5/6 m-auto" alt="genre poster"/>
    </div>
  )
}
