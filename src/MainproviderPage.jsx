import React, { useEffect } from "react";
import logo from "./assets/EmploezLogo.png";
import { CiLogin } from "react-icons/ci";
import img1 from "./assets/svg1.png";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { GiCheckMark } from "react-icons/gi";
import { MdAdminPanelSettings } from "react-icons/md";
const MainproviderPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });

  const data = [
    {
      title: "Effortless Job Posting",
      desc: "Share your opportunities with just a few clicks and reach thousands of potential candidates.",
    },
    {
      title: "Top Talent at Your Fingertips",
      desc: "Our platform is designed to connect you with highly skilled and qualified professionals tailored to your requirements.",
    },
    {
      title: "Real-Time Insights",
      desc: "Track applications and manage your postings with ease, all from one intuitive dashboard.",
    },
    {
      title: "Admin Panel"
    }
  ];



  const handleSignInClick=()=>{
    window.open("https://jobs-frontend-gold.vercel.app/login")
  }

  const handleSignUpClick=()=>{
    window.open("https://jobs-frontend-gold.vercel.app/signup")
  }

  return (
    <>
    <div className="min-h-[100vh] w-full bg-slate-50">
      <div className="flex justify-between items-center p-3 bg-white">
        <div className="w-fit flex justify-center items-center gap-2 p-2">
          <img src={logo} alt="Logo" className="text-sm -ml-2 lg:w-[3rem] w-[2.5rem]" />
          <span className="mt-2 lg:mt-1 md:mt-1 font-bold text-2xl md:text-3xl">
          <span className="font-emploez text-orange-600">Emploez</span>
          <span>.in</span>
          </span>
        </div>

        <button
          type="button"
          className="px-2 py-1 rounded-lg bg-blue-800  text-white font-outfit flex  justify-center items-center gap-1"
          onClick={() => {
            window.open("https://jobs-frontend-gold.vercel.app/user/login");
          }}
        >
          Job Seeker <CiLogin className="" />
        </button>
      </div>

      <section className="w-full h-[60vh] relative">
        <img
          src={img1}
          alt="Welcome"
          className="h-full w-full md:w-[70%] lg:w-[40%] relative lg:translate-x-10"
        />
        <h1 className="text-3xl sm:text-3xl w-fit md:text-5xl absolute top-[5%] lg:top-[10%] left-[50%] -translate-x-[50%] font-lilita text-nowrap">
          Idea's Into Innovation
        </h1>

        <div className="w-[220px] md:w-[250px] absolute bottom-[10px] right-3 md:right-[5%]  bg-white rounded-xl border border-gray-200 p-2 shadow-sm shadow-gray-500">
          <h1 className="text-xl font-semibold font-outfit bg-blue-600 flex justify-center items-center text-white rounded-xl">
            Job Provider
            <span className="ms-1 text-[0.5rem] w-fit h-fit">Free</span>
          </h1>
          <div className="flex flex-col justify-start items-start text-[0.7rem] font-outfit p-4">
            <span className="flex justify-center items-start gap-[2px]">
              <GiCheckMark className="text-green-500 " /> Unlimited Job Postings
            </span>
            <span className="flex justify-center items-center gap-[2px]">
              <GiCheckMark className="text-green-500 " /> Application Tracking
            </span>
            <span className="flex justify-center items-center gap-[2px]">
              <GiCheckMark className="text-green-500 " /> Seamless Notifications
            </span>
            <span className="flex justify-center items-center gap-[2px]">
              <GiCheckMark className="text-green-500 " /> Advanced Filters
            </span>
            <span className="flex justify-center items-center gap-[2px]">
              <GiCheckMark className="text-green-500 " /> User-Friendly
              Dashboard
            </span>
          </div>

          <div className="mt-2 w-full flex flex-col justify-between items-center font-outfit ">
            <button className="text-[0.8rem] p-2 rounded-xl bg-orange-500 text-white w-full" onClick={handleSignUpClick}>Register</button>
             <div className="w-full flex justify-center items-center"><hr className="flex flex-1" /> <span className="text-[0.5rem]">OR</span> <hr className="flex flex-1 "/></div>
            <button className="text-[0.8rem] p-2 rounded-xl bg-white text-orange-500 border border-orange-500 w-full" onClick={handleSignInClick}>Login</button>
          </div>
        </div>
      </section>

      <section className="w-full p-5  flex-wrap lg:px-[100px]">
        <h1 className="text-3xl font-outfit font-semibold">Features</h1>

        <div className="flex flex-wrap justify-around items-center w-full">
          {data?.map((d) => (
            <Card key={d.title} title={d.title} desc={d.desc} />
          ))}
        </div>
      </section>
    </div>
    <footer className="bg-orange-500 text-sm">
      <div className="text-white text-center py-1">
        <p className="p-4">&copy; {new Date().getFullYear()} Emploez.in. All rights reserved.</p>
      </div>
    </footer>
    </>
  );
};

export default MainproviderPage;

const Card = ({ title = "", desc = "" }) => {
  return (
    <div className={`w-[90%] relative md:w-[300px] h-[150px] p-4 rounded-xl bg-white flex justify-center flex-col items-start font-outfit shadow-md shadow-slate-600 m-4 ${title === "Admin Panel" ? "hover:bg-gray-200" : ""}`}>
      <h1 className="text-[0.9rem] text-nowrap mb-1 font-semibold  flex justify-center items-center gap-1 ">
        {
          title === "Admin Panel" ? 
            <button
              onClick={() => {window.open("https://jobs-frontend-gold.vercel.app/admin/login")}}
              className="absolute left-[0rem] flex flex-col items-center center w-full text-center"
            >
              <MdAdminPanelSettings className="text-[5rem]" />
              {title}
            </button>
          :
          <><BiSolidBadgeCheck className="text-[0.9rem] text-green-600" /> {title}</>
        }
      </h1>
      <div className="text-[0.8rem]">{desc}</div>
      <div className="absolute bottom-0 left-0 h-2 w-full bg-orange-500 rounded-br-xl rounded-bl-xl flex justify-center items-center"></div>
    </div>
  );
};
