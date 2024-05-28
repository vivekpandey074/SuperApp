import React, { useState } from "react";
import img from "../../public/img1.png";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate=useNavigate();
 const [formData,setFormData]=useState({
   name:"",
   username:"",
   email:"",
   mobile:"",
   checkbox:false,
 })
  const [errors,setErrors]=useState({
    name:"",
    username:"",
    email:"",
    mobile:"",
    checkbox:false,
  })

 const {name,username,email,mobile,checkbox}=formData;

 const handleChange=(e)=>{
  setFormData((prev)=>({...prev,[e.target.name]:e.target.value}));
 }

  const handleCheckBox=(e)=>{
    setFormData((prev)=>({...prev,[e.target.name]:e.target.checked}));
  }


  const handleSubmit=(e)=>{
      e.preventDefault();
      
      let newError={...errors};
      //Name
      if(name.trim().length==0 || name===undefined || name===null)
      {
        newError.name="Name is required";
      }else{
        newError.name="";
      }
      //username
      if(username.trim().length==0 || username===undefined || username===null)
      {
        newError.username="Username is required";
      }else{
        newError.username="";
      }

      //email
      if(email.trim().length==0 || email===undefined || email===null)
      {
        newError.email="Email is required";
      }else{
        newError.email="";
      }

      //mobile
      if(mobile.trim().length==0 || mobile===undefined || mobile===null)
      {
        newError.mobile="Mobile No. is required";
      }else{
        newError.mobile="";
      }
      
      if(!checkbox){
        newError.checkbox="Please accept the terms and conditions."
      }else{
        newError.checkbox="";
      }
      
      setErrors({...newError});

      if (
        newError.name === "" &&
        newError.username === "" &&
        newError.email === "" &&
        newError.mobile === "" &&
        newError.checkbox === ""
      ) {
        localStorage.setItem("userData", JSON.stringify(formData));
        navigate("/genre");
      }
  }


  return (
    <div className="flex flex-row  justify-center items-center bg-black overflow-auto ">
      <div className="h-screen w-full flex flex-row max-w-[2000px]">
        <div className="relative w-1/2 h-full">
          <img
            className="h-full w-full absolute "
            src={img}
            alt="Welcome Image"
          />
          <p className="font-roboto  absolute bottom-8 inset-x-12 font-[900] z-[100] sm:text-2xl md:text-4xl xl:text-5xl 2xl:text-7xl text-white">
            Discover new things on Superapp
          </p>
        </div>
        <div className="bg-black w-1/2 flex justify-center items-center max-w-[1500] ">
          <form className="text-white  flex flex-col w-7/12 lg:h-4/5" onSubmit={handleSubmit}>
            <h1 className="font-singleDay text-center text-[#72DB73] md:text-4xl  xl:text-5xl 2xl:text-6xl font-[400]">
              Super app
            </h1>
            <p className="font-Dmsans text-center my-2 font-[400]">
              Create your new account
            </p>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              value={name}
              className="font-Dmsans p-5 bg-[#292929] h-10 mt-3  2xl:text-lg rounded-sm outline-none placeholder:text-[#7C7C7C] font-[400] 2xl:h-14"
            />
            <p className="font-[400] font-Dmsans  text-sm   text-[#FF0000]">{errors.name}</p>
            <input
              type="text"
              placeholder="UserName"
              name="username"
              onChange={handleChange}
              value={username}
              className="font-Dmsans p-5  bg-[#292929] h-10 mt-3 outline-none 2xl:text-lg  rounded-sm placeholder:text-[#7C7C7C] font-[400] 2xl:h-14"
            />
             <p className="font-[400] font-Dmsans text-sm text-[#FF0000]">{errors.username}</p>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={email}
              className="font-Dmsans p-5 bg-[#292929] h-10 mt-3  outline-none 2xl:text-lg  rounded-sm placeholder:text-[#7C7C7C] font-[400] 2xl:h-14"
            />
             <p className="font-[400] font-Dmsans text-sm text-[#FF0000]">{errors.email}</p>
            <input
              type="tel"
              placeholder="Mobile"
              name="mobile"
              onChange={handleChange}
              value={mobile}
              className="font-Dmsans p-5  bg-[#292929] h-10 mt-3  2xl:text-lg  outline-none rounded-sm placeholder:text-[#7C7C7C] font-[400] 2xl:h-14"
            />
             <p className="font-[400] font-Dmsans text-sm text-[#FF0000]">{errors.mobile}</p>
            <label className="text-[#7C7C7C] font-[400] sm:text-sm mt-3  2xl:text-lg ">
              <input type="checkbox" name="checkbox" onChange={handleCheckBox} checked={checkbox} className="inline-block" /> Share my
              registration data with Superapp
            </label>
            <p className="font-[400] text:sm font-Dmsans text-[#FF0000]">{errors.checkbox}</p>
            <button type="submit"  className=" cursor-pointer font-roboto bg-[#72DB73] h-12 rounded-3xl my-2 2xl:my-5 2xl:h-14">
              SIGN UP
            </button>
            <p className="font-roboto  text-[#7C7C7C] font-[500] sm:text-xs mb-2 2xl:text-lg">
              By clicking on Sign up. you agree to Superapp{" "}
              <span className="text-[#72DB73]">Terms and Conditions of Use</span>
            </p>
            <p className="font-roboto text-[#7C7C7C] font-[500] sm:text-xs 2xl:text-lg">
              To learn more about how Superapp collects, uses, shares and
              protects your personal data please head Superapp{" "}
              <span className="text-[#72DB73]">Privacy Policy</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
