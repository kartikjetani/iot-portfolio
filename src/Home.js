import React from "react";
import { Carousel } from "antd";
import VerticalCard from "./components/VerticalCard";




function Home() {
  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  const contentStyle = {
    height: "400px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <div>
      <Carousel className="mb-7" afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>Image From server</h3>
          {/* image from server */}
        </div>
        <div>
          <h3 style={contentStyle}>Image From server</h3>
          {/* image from server */}
        </div>
        <div>
          <h3 style={contentStyle}>Image From server</h3>
          {/* image from server */}
        </div>
        <div>
          <h3 style={contentStyle}>Image From server</h3>
          {/* image from server */}
        </div>
      </Carousel>
      <VerticalCard
        image="https://images.ctfassets.net/k0lk9kiuza3o/6yqxo5oZyfcKFqn25VNniI/9cba7530e7edd0d422f18347c90b941f/Homepage_Gif02_BG_A.svg"
        heading="Meet the way you want"
        para="discription of the project here Lorem Ipsum is simply dummy text of the .It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s"
      />
      <VerticalCard
        image="https://images.ctfassets.net/k0lk9kiuza3o/6yqxo5oZyfcKFqn25VNniI/9cba7530e7edd0d422f18347c90b941f/Homepage_Gif02_BG_A.svg"
        heading="Meet the way you want"
        para="Discription of the project here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the, remaining essentially unchanged. It was popularised in the 1960s"
      />
    </div>
  );
}

export default Home;
