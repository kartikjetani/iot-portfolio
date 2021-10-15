import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";


function Footer() {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  return (
    <div className="flex flex-row justify-evenly pb-10">
      <div className="flex flex-col justify-evenly">
        <h1 className="text-2xl py-8">Faculty Details</h1>
        <p className="text-gray-500 text-base pb-2">Prof. Vandana Joshi</p>
        <p className="text-gray-500 text-base pb-2">Assistant Professor</p>
        <p className="text-gray-500 text-base pb-2">Computer Department, SCET</p>
        <p className="text-gray-500 text-base pb-2">Email: vandana.joshi@scet.ac.in</p>
        <p className="text-gray-500 text-base pb-2">0261-2240146-302</p>
      </div>
      <div className="flex flex-col justify-evenly">
        <h1 className="text-2xl py-8">Section</h1>
        <Link className="text-gray-500 text-lg pb-2" to="/">
          Home
        </Link>
        <Link className="text-gray-500	text-lg pb-2" to="/ourprojects">
          OUR Projects
        </Link>
        <Link className="text-gray-500	text-lg pb-2" to="/aboutus">
          About Us
        </Link>
        <Link className="text-gray-500	text-lg pb-2" to="/contactus">
          Contact Us
        </Link>
      </div>
      <div className="flex flex-col ">
        <h1 className="text-2xl py-8">Subscribe to our newsletter</h1>
        <h1 className="text-lg pb-3"> To get latest news from us.</h1>
        <Space direction="vertical">
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
        </Space>
      </div>
    </div>
  );
}

export default Footer;
