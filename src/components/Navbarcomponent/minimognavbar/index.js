import {
  faBars,
  faCartFlatbed,
  faSearch,
  faStar,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FaRegUser, FaRegStar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../Font/globalfont.scss";
import React, { useState } from "react";
import "./menu.scss";

export default function Minimognavbar() {
  const [menubar, setMenubar] = useState(false);
  const Hndle = () => {
    setMenubar(!menubar);
  };
  return (
    <div className="menybar font-Jost">
      <div className="flex justify-center text-[14px] text-[#445b55] p-2 bg-[#cfe9e1]">
        <h3 className="uppercase font-[500]">
          cool new color: sterling so worth it
        </h3>
      </div>
      <div className=" md:flex hidden minimog-nav  bg-white p-3 space-x-6 w-full">
        <div className="item">
          <img
            className="w-[50%] ml-10"
            src="https://minimog-4437.kxcdn.com/wp-content/themes/minimog/assets/images/logo/dark-logo.png"
            alt=""
          />
        </div>
        <div className="item text-center   w-[50%] ">
          <div className="nav ">
            <ul
              className="flex space-x-8 
            justify-center mt-3 text-[16px] font-[500]"
            >
              <li className="dropdown">
                <p>
                  Home <IoIosArrowDown className="mt-1 text-[13px]" />
                </p>
                <div className="dropdown-menu text-[#666] space-x-80  p-10 w-full left-0 shadow-xl hidden  right-0 bg-white absolute">
                  <div className="item space-y-2 text-center ">
                    <h3>menu1</h3>
                    <ul className="space-y-5">
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                    </ul>
                  </div>
                  <div className="item space-y-2 ">
                    <h3>menu1</h3>
                    <ul className="space-y-5">
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                    </ul>
                  </div>
                  <div className="item space-y-2 ">
                    <h3>menu1</h3>
                    <ul className="space-y-5">
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                    </ul>
                  </div>
                  <div className="item space-y-2 ">
                    <h3>menu1</h3>
                    <ul className="space-y-5">
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a href="" className="flex space-x-1">
                  <h3>Shop</h3>
                  <IoIosArrowDown className="mt-1 text-[13px]" />
                </a>
              </li>
              <li>
                <a href="" className="space-x-1 flex">
                  <h3>Blogs</h3>
                  <IoIosArrowDown className="mt-1 text-[13px]" />
                </a>
              </li>
              <li>
                <a href="" className="space-x-1 flex">
                  <h3>Products</h3>
                  <IoIosArrowDown className="mt-1 text-[13px]" />
                </a>
              </li>
              <li>
                <a href="" className="space-x-1 flex">
                  <h3>Pages</h3>
                  <IoIosArrowDown className="mt-1 text-[13px]" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="item  w-[25%] text-[25px] ">
          <div className="mt-3 flex  justify-center space-x-8">
            <div className="">
              <FaRegUser className="text-[23px]" />
            </div>
            <div className="  ">
              <BsSearch className="text-[23px] " />
            </div>
            <div className="bdg relative">
              <FaRegStar />
              <div
                className="bg-[#DA3F3F] -top-2 right-0
               left-4 bottom-2 absolute text-[13px] font-[800]  rounded-full text-white w-[20px] text-center h-[20px] "
              >
                <h3 className="text-center "> 0</h3>
              </div>
            </div>
            <div className=" relative">
              {" "}
              <MdOutlineShoppingBag />
              <div
                className="bg-[#DA3F3F] -top-2 right-0
               left-4 bottom-2 absolute text-[13px] font-[800]  rounded-full text-white w-[20px] text-center h-[20px] "
              >
                <h3 className="text-center "> 0</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden block mobilemenu p-3 pl-5 pr-8 justify-center bg-white">
        <div className="row flex justify-between ">
          <div className="item  space-x-4 flex">
            <div className="humbar " onClick={Hndle}>
              <FontAwesomeIcon icon={faBars} className="text-[18px]" />
            </div>
            <div className="image">
              <img
                className="w-[35%]"
                src="https://minimog-4437.kxcdn.com/wp-content/themes/minimog/assets/images/logo/dark-logo.png"
                alt=""
              />
            </div>
          </div>
          <div className="item ">
            <div className="mt-1 flex justify-center space-x-5">
              {" "}
              <BsSearch className="text-[20px]" />
              <div className=" relative">
                {" "}
                <MdOutlineShoppingBag className="text-[25px]" />
                <div
                  className="bg-[#DA3F3F] -top-2 right-0
               left-4 bottom-2 absolute text-[13px] font-[800]  rounded-full text-white w-[20px] text-center h-[20px] "
                >
                  <h3 className="text-center "> 0</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            menubar
              ? "nav-menu space-y-5 absolute top-0 transition-all bottom-0 p-4 duration-1000 left-0 right-0 bg-opacity-75 bg-black"
              : "hidden -left-[80px]"
          }
        >
          <div
            className={
              menubar
                ? "nav-menu space-y-9 absolute top-0 transition-all bottom-0 p-4 duration-1000 left-0 right-28 bg-white"
                : "hidden -left-[80px]"
            }
          >
            <ul className="space-y-8 justify-center mt-5 ">
              <li className=" dropdown">
                <a href="">Home</a>
                <ul className="dropdown-menu">
                  <li>menu</li>
                  <li>menu</li>
                  <li>menu</li>
                  <li>menu</li>
                </ul>
              </li>
              <li>
                <a href=""></a>Shop
              </li>
              <li>
                <a href=""></a>Blog
              </li>
              <li>
                <a href=""></a>Products
              </li>
              <li>
                <a href=""></a>Pages
              </li>
            </ul>
            <div className="log space-y-4">
              <input
                type="button"
                value="Login"
                className="w-full rounded-md bg-black text-white p-2"
              />
              <input
                type="button"
                value="Register"
                className="w-full rounded-md border text-black border-black  p-2"
              />
            </div>
          </div>
          <div
            className="absolute top-0 right-9 text-[23px] text-white"
            onClick={Hndle}
          >
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
      </div>
    </div>
  );
}
