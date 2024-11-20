import { useState } from "react";
import intro from "./assets/introVid.mp4";
import MainproviderPage from "./MainproviderPage";

function App() {
  const [openPage, setPageOpen] = useState(sessionStorage.getItem("showed") || false);

  const handlePageChange = () => {
    setPageOpen(true);
    sessionStorage.setItem("showed", true);
  };

  if (!openPage) {
    return <VideoPage onVideoEnd={handlePageChange} />;
  } else {
    return <MainPage />;
  }
}

export default App;

const VideoPage = ({ onVideoEnd }) => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-white">
      <div className="lg:w-[50%] lg:h-[50%] md:w-[50%] md:h-[50%] w-[100%] h-[100%] relative">
        <video
          className="w-full h-full object-contain"
          src={intro}
          autoPlay
          muted
          onEnded={onVideoEnd}
          onError={() => console.error("Video failed to load. Check the path.")}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

const MainPage = () => {
  return <MainproviderPage />;
};