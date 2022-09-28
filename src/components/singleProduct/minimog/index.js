import React, { useState } from "react";
import PropTypes from "prop-types";
import "./minimog.scss";
import styles from "./minimog.module.scss";
import { HiOutlineMinus } from "react-icons/hi";
import { BsPlus } from "react-icons/bs";
import { TbArrowsLeftRight, TbTruckDelivery } from "react-icons/tb";
import { AiOutlineQuestionCircle, AiOutlineShareAlt } from "react-icons/ai";
import { MdCardMembership } from "react-icons/md";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faStar } from "@fortawesome/free-regular-svg-icons";
import { FaRegEye } from "react-icons/fa";
import { ImEye } from "react-icons/im";
export default function Minimog() {
  const [thumbsclick, setThumbs] = useState(0);
  return (
    <div className="container font-minimog-theme-font p-3 md:p-12">
      <div className="container-child md:flex md:space-x-10">
        <div className="row md:w-[50%] ">
          <div className="productzoom flex space-x-2">
            <div className="item thmbs w-[25%] space-y-2">
              <img
                onClick={() => setThumbs(0)}
                className={
                  thumbsclick == 0 ? "w-[68%] border border-black" : "w-[68%]"
                }
                src="https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/product_fashion_15_a_4-570x760.jpg"
                alt=""
              />
              <img
                onClick={() => setThumbs(1)}
                className={
                  thumbsclick == 1 ? "w-[68%] border border-black" : "w-[68%]"
                }
                src="https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/product_fashion_15_a_6-570x760.jpg"
                alt=""
              />
            </div>
            <div className="bg-thumbs">
              {thumbsclick == 0 ? (
                <img
                  className="w-[85%]"
                  src="https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/product_fashion_15_a_4-570x760.jpg"
                  alt=""
                />
              ) : thumbsclick == 1 ? (
                <img
                  className="w-[85%]"
                  src="https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/product_fashion_15_a_6-570x760.jpg"
                  alt=""
                />
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>

        <div className="row md:w-[50%] md:space-y-6 md:mt-5">
          <div className="title flex justify-between">
            <div className="item  text-2xl text-minimog-theme-title-color">
              <h3>Android 9.0 Tablet MT8163 Quad Core</h3>
            </div>
            <div className="item">
              <div className="wish border grid place-items-center  rounded-full w-[40px] h-[40px]">
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
          </div>
          <div className="pr-re flex justify-between">
            <div className="item  flex space-x-2">
              <h3 className="text-[18px] text-minimog-theme-mrp-color">
                {" "}
                <s>$39.00</s>
              </h3>
              <h3 className="text-2xl text-minimog-theme-price-color">
                $138.29
              </h3>
            </div>
            <div className="item flex space-x-3">
              <div className="r text-[14px] text-[#666]">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <h3>(0 review)</h3>
            </div>
          </div>
          <div className="view mt-5 flex  space-x-2">
            <div className="grid place-items-center">
              <ImEye className="text-[1rem]" />
            </div>
            <h3 className="">
              {" "}
              <span className="text-text-minimog-theme-title-color font-semibold ">
                30
              </span>{" "}
              people are viewing this right now
            </h3>
          </div>
          <div className="qty mt-3 space-y-4">
            <h3 className="text-[16px] text-minimog-theme-title-color">
              Quantity
            </h3>
            <div className="flex space-x-5">
              <div
                className="   border-minimog-theme-border-color
                   rounded-md  bottom-2 w-[30%] 
                      px-3 h-[42px]    bg-minimog-theme-default-bg-color  
                       text-minimog-theme-title-color   flex text-xl  
                        leading-9    justify-between text-center   "
                // onClick={ClickButton}
              >
                <div
                  className="  cursor-pointer
                      
                      text-sm grid place-items-center "
                  // style={{ marginTop: "-8px" }}
                >
                  <HiOutlineMinus />
                </div>
                <div className="shrink block  w-16 text-minimog-theme-title-color ">
                  <div className="grid place-items-center text-[1rem] mt-[0.3rem] font-medium ">
                    1
                  </div>
                </div>{" "}
                <div
                  // onClick={incrymentQty}
                  className=" grid place-items-center
                     cursor-pointer text-minimog-theme-title-color"
                >
                  <BsPlus />
                </div>
              </div>
              <input
                type="button"
                value="Add to cart"
                className="w-full font-[500] rounded-md border border-minimog-theme-border-color text-center text-minimog-theme-button-bg-title-color text-sm p-3"
              />
            </div>
          </div>

          <div className="b-n mt-3">
            <input
              type="button"
              value="BUY NOW"
              className="w-full rounded-md bg-minimog-theme-buynow-bg-color text-center text-minimog-theme-button-bg-title-color text-sm p-3"
            />
          </div>

          <div className="com-as flex  text-lg space-x-12 mt-3">
            <div className="item flex space-x-2">
              <div className="grid place-items-center">
                {" "}
                <TbArrowsLeftRight />
              </div>
              <h3 className="text-font-[400] text-minimog-theme-title-color font-[400]">
                Compare
              </h3>
            </div>
            <div className="item flex space-x-2">
              <div className="grid place-items-center">
                <AiOutlineQuestionCircle />
              </div>
              <h3 className="text-font-[400] text-minimog-theme-title-color font-[400]">
                Ask a Question
              </h3>
            </div>
            <div className="item flex space-x-2">
              <div className="grid place-items-center">
                <AiOutlineShareAlt />
              </div>
              <h3 className="text-font-[400] text-minimog-theme-title-color font-[400]">
                Share
              </h3>
            </div>
          </div>
          <hr className="mt-5" />
          <div className="del mt-3">
            <div className="item flex space-x-10">
              <h3 className="text-lg flex space-x-2 font-[400] text-minimog-theme-title-color">
                <div className="grid place-items-center">
                  {" "}
                  <TbTruckDelivery />
                </div>{" "}
                <h3>Estimated Delivery:</h3>
              </h3>
              <h3 className="ml-[75px]">01 - 08 Sep, 2022</h3>
            </div>
            <div className="item space-x-10 flex">
              <h3 className="text-lg flex space-x-2 font-[400] text-minimog-theme-title-color ">
                <div className="grid place-items-center">
                  <MdCardMembership />
                </div>{" "}
                <h3> Free Shipping & Returns:</h3>
              </h3>
              <h3>On all orders over $200.00</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul
            class="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li class="mr-2" role="presentation">
              <button
                class="inline-block p-4 
                 rounded-t-lg border-b-2 text-black
                  hover:text-blue-600 dark:text-blue-500
                   dark:hover:text-blue-500
                 border-minimog-theme-bottomline-color dark:border-yellow-500"
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="true"
              >
                DESCRIPTION
              </button>
            </li>
            <li class="mr-2" role="presentation">
              <button
                className="  inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-black dark:text-gray-400 border-gray-100 dark:border-gray-700"
                id="dashboard-tab"
                data-tabs-target="#dashboard"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected="false"
              >
                REVIEW
              </button>
            </li>
          </ul>
        </div>
        <div id="myTabContent">
          <div
            class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <p class="text-base text-minimog-theme-default-title-color dark:text-gray-400">
              Finding the right short can be hard—we made it easy. Super
              lightweight with a comfortable elastic waist, the Easy Chino Short
              was designed in a casual, relaxed fit that’s not too short and not
              too long. Just pull on and go
            </p>
          </div>
          <div
            class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
            id="dashboard"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
            <p class="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the{" "}
              <strong class="font-medium text-gray-800 dark:text-white">
                Dashboard tab's associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
