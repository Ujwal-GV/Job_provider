import React, { useEffect } from "react";
import logo from "./assets/EmploezLogo.png";
import { CiLogin } from "react-icons/ci";
import img1 from "./assets/svg1.webp";
import { BiSolidBadgeCheck } from "react-icons/bi";
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
  ];

  return (
    <div className="min-h-[100vh] w-full bg-slate-50">
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
          Job Seeker <CiLogin className="" />
        </button>
      </div>

      <section className="w-full h-[60vh] relative">
        <img src={""} alt="" className="h-full w-full" />
        <h1 className="text-3xl sm:text-3xl w-fit md:text-5xl absolute top-[10%] left-[50%] -translate-x-[50%] font-lilita text-nowrap">
          Idea's Into Innovation
        </h1>

        <div className="w-[150px] absolute bottom-[10px] right-[5%] rounded-xl">
          <h1 className="text-xl font-semibold font-outfit bg-blue-600 flex justify-center items-center text-white rounded-xl">
            Job Provider
            <span className="ms-1 text-[0.5rem] w-fit h-fit">Free</span>
          </h1>
          <div>

          </div>
        </div>
      </section>

      <section className="w-full p-5  flex-wrap lg:px-[100px]">
        <h1 className="text-3xl font-outfit font-semibold">Features</h1>

        <div className="flex justify-around items-center w-full">
          {data?.map((d) => (
            <Card key={d.title} title={d.title} desc={d.desc} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainproviderPage;

const Card = ({ title = "", desc = "" }) => {
  return (
    <div className="w-[350px] relative md:w-[300px] h-[150px] p-4 rounded-xl bg-white flex justify-center flex-col items-start font-outfit shadow-md shadow-slate-600 m-4">
      <h1 className="text-[0.9rem] text-nowrap mb-1 font-semibold  flex justify-center items-center gap-1 ">
        <BiSolidBadgeCheck className="text-[0.9rem] text-green-600" /> {title}
      </h1>
      <div className="text-[0.8rem]">{desc}</div>
      <div className="absolute bottom-0 left-0 h-2 w-full bg-orange-500 rounded-br-xl rounded-bl-xl flex justify-center items-center"></div>
    </div>
  );
};
