import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home">
        <video className="video-background" muted autoPlay loop>
          <source
            src="https://res.cloudinary.com/dfwcnoezy/video/upload/v1704453230/ZARA/zara_lxc997.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
}

export default Home;
