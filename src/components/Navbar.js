import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

function Navbar() {
  return (
    <nav>
      <div className="bg-gray-600 border-b-2 border-opacity-40 text-white h-20 items-center grid grid-cols-6 gap-4">
        <div className="items-center col-start-1 col-end-4 justify-evenly">
          <div className="flex flex-row items-center justify-evenly ">
            <h1 className="font-bold text-3xl text-gray-900">SCET IOT Club</h1>
            <div>
              {" "}
              <Link className="text-xl text-white" to="/">
                <div>Home</div>
              </Link>
            </div>

            <div>
              <Link className="text-xl text-white" to="/ourprojects">
                <div>Our Projects</div>
              </Link>
            </div>
            <div>
              <Link className="text-xl text-white" to="/add-project">
                <div>Add </div>
              </Link>
            </div>
            <div>
              <Link className="text-xl text-white" to="/aboutus">
                About Us
              </Link>
            </div>
            <div>
              <Link className="text-xl text-white" to="/contactus">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        {/* Yet to be completed as links are not working of social media */}
        <div className="col-end-7 col-span-2">
          <div className="flex flex-row justify-evenly">
            <div href="https://www.linkedin.com/feed/">
              <AiFillLinkedin size={30} />
            </div>
            <Link to="https://www.linkedin.com/feed/">
              <IoLogoWhatsapp size={30} />
            </Link>
            <Link to="https://www.linkedin.com/feed/">
              <AiFillInstagram size={30} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
