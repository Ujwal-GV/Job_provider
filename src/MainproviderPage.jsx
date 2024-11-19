import React from "react";
import logo from "./assets/EmploezLogo.png";
import { CiLogin } from "react-icons/ci";
const MainproviderPage = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="flex justify-between items-center p-3">
        <div className="w-fit flex justify-center items-center gap-2">
          <img src={logo} alt="" className="w-10 h-10 md:h-14 md:w-14" />
          <span className="text-orange-600 font-semibold text-2xl md:text-4xl font-outfit">
            Emploez.in
          </span>
        </div>

        <button
          type="button"
          className="px-2 py-1 rounded-lg bg-blue-800  text-white font-outfit flex  justify-center items-center gap-1"
          onClick={() => {
            window.open("https://jobs-frontend-gold.vercel.app/user/login");
          }}
        >
          Job Seeker <CiLogin className=""/>
        </button>
      </div>
    </div>
  );
};

export default MainproviderPage;
