import React from "react";
import "./NavbarTest.css";
import $ from "jquery";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavbarTest() {
  // ---------Responsive-navbar-active-animation-----------
  function test() {
    var tabsNewAnim = $("#navbarSupportedContent");
    var selectorNewAnim = $("#navbarSupportedContent").find("li").length;
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
    });
  }
  $(document).ready(function () {
    setTimeout(function () {
      test();
    });
  });
  $(window).on("resize", function () {
    setTimeout(function () {
      test();
    }, 500);
  });
  $(".navbar-toggler").click(function () {
    $(".navbar-collapse").slideToggle(300);
    setTimeout(function () {
      test();
    });
  });

  // --------------add active class-on another-page move----------
  $(document).ready(function ($) {
    // Get current path and find target link
    var path = window.location.pathname.split("/").pop();

    // Account for home page with empty path
    if (path == "") {
      path = "index.html";
    }

    var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
    // Add active class to target link
    target.parent().addClass("active");
  });

  return (
    <nav className=" navbar navbar-expand-custom navbar-mainbg" >
      {/* <div><a className="navbar-brand navbar-logo" href="#">
        Navbar
      </a></div> */}
      <button
        className="navbar-toggler"
        type="button"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>
      <div className="flex justify-between items-center">
	  <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              <i className="far fa-clone"></i>Home
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/contactus">
              <i className="far fa-calendar-alt"></i>Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/aboutus">
              <i className="far fa-chart-bar"></i>About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ourprojects">
              OurProjects
            </Link>
          </li>
        </ul>
      </div>
	  <div><Link className="navbar-brand text-2xl mr-8 navbar-logo" to="/">
        IOT Scet
      </Link></div>
	  </div>
    </nav>
  );
}

export default NavbarTest;
