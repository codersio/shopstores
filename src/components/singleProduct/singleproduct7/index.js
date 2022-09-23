import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fa0,
  faGreaterThan,
  faChevronRight,
  faChevronLeft,
  faAngleRight,
  faAngleLeft,
  faLessThan,
  faStar,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

export default function Singleproduct7() {
  return (
    <div className="container p-6 ">
      <div className="container-child md:flex md:space-x-10 ">
        <div className="row md:w-[50%]">
          <div className="image p-2">
            <img
              src="https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/03/new-pizza5-680x680.jpg"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className="row md:w-[50%]">
          <div className="title-clas p-2 space-y-4">
            <h3 className=" font-mono text-xl space-x-2 font-bold">
              Tuscan Pizza
            </h3>
            <p>
              Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with
              lettuce, tomato, house BBQ & ranch.
            </p>
          </div>
          <div className="price-class mt-3 bg-[#f8f8f8] border  w-[80%] p-3  rounded-3xl">
            <h3 className="  text-sm text-slate-500">
              <span className="text-black">Serving size:</span> 11" - 300 g /
              14" - 480 g / 18" - 820 g
            </h3>
          </div>
          <div className="qty-class mt-10  flex">
            <div className="item w-[6rem] bg-[#f8f8f8] border text-center h-[3.5rem] p-2 text-sm text-slate-600">
              <h3>
                ENERGY <br /> <span className="text-black">490 Cal</span>
              </h3>
            </div>
            <div className="item w-[6rem] bg-[#f8f8f8] border text-center h-[3.5rem] p-2 text-sm text-slate-600">
              <h3>
                PROTEIN <br /> <span className="text-black">490 Cal</span>
              </h3>
            </div>
            <div className="item w-[6rem] bg-[#f8f8f8] border text-center h-[3.5rem] p-2 text-sm text-slate-600">
              <h3>
                FAT <br /> <span className="text-black">490 Cal</span>
              </h3>
            </div>
          </div>
          <div className="qty-class   flex">
            <div className="item w-[6rem] bg-[#f8f8f8] border text-center h-[3.5rem] p-2 text-sm text-slate-600">
              <h3>
                ENERGY <br /> <span className="text-black">490 Cal</span>
              </h3>
            </div>
            <div className="item w-[6rem] bg-[#f8f8f8] border text-center h-[3.5rem] p-2 text-sm text-slate-600">
              <h3>
                PROTEIN <br /> <span className="text-black">490 Cal</span>
              </h3>
            </div>
            <div className="item w-[6rem] bg-[#f8f8f8] border text-center h-[3.5rem] p-2 text-sm text-slate-600">
              <h3>
                FAT <br /> <span className="text-black">490 Cal</span>
              </h3>
            </div>
          </div>

          <div className="div mt-5">
            <p className="text-sm text-slate-400">
              *DI: Recommended Daily Intake based on 2000 calories diet
            </p>
            <div className="star  flex space-x-3 ">
              <div className="text-[0.8rem] space-x-2 text-black">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="rive text-slate-300">(32 reviews)</div>
            </div>
          </div>
          <div className=" flex text-sm  space-x-5 mt-3 text-black">
            <bdi className=" font-serif font-[900] text-3xl ">
              $14. <span>99</span> – $29.99
            </bdi>
          </div>

          <div className=" flex space-x-10 mt-6">
            <div className="item text-black font-semibold">
              <h3 className="mt-5">SIZE :</h3>
            </div>
            <div className="item">
              <div className="size flex space-x-2">
                <div className="s hover:bg-pink-700 hover:text-white border grid text-lg rounded-md place-items-center bg-[#f8f8f8] w-[50px] h-[50px] ">
                  xl
                </div>
                <div className="s hover:bg-pink-700 hover:text-white border grid text-lg rounded-md place-items-center bg-[#f8f8f8] w-[50px] h-[50px] ">
                  xl
                </div>
                <div className="s hover:bg-pink-700 hover:text-white border grid text-lg rounded-md place-items-center bg-[#f8f8f8] w-[50px] h-[50px] ">
                  xl
                </div>
                <div className="s hover:bg-pink-700 hover:text-white border grid text-lg rounded-md place-items-center bg-[#f8f8f8] w-[50px] h-[50px] ">
                  xl
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-serif font-[900] text-3xl mt-7">$14.99</h3>
          </div>

          <div className=" relative border md:w-[80%] p-5 mt-5  space-y-3">
            Please, choose your preferred crust type.
            <div className="absolute top-[-12px] bg-white  font-semibold">
              CRUST *
            </div>
            <div className="ra bg-[#f1f1f1] p-2 font-medium  text-sm space-x-3">
              <input type="radio" name="" id="" />{" "}
              <label htmlFor=""> THIN CRUST</label>
            </div>
            <div className="ra bg-[#f1f1f1] p-2 font-medium  text-sm space-x-3">
              <input type="radio" name="" id="" />{" "}
              <label htmlFor=""> THIN CRUST</label>
            </div>
          </div>
          <div className=" relative md:w-[80%] border p-5 mt-5  space-y-3">
            {/* Please, choose your preferred crust type. */}
            <div className="absolute top-[-12px] bg-white  font-semibold">
              EXTRA TOPPINGS
            </div>
            <div className="ra bg-[#f1f1f1] p-2 font-medium  text-sm space-x-3">
              <input type="radio" name="" id="" />{" "}
              <label htmlFor=""> THIN CRUST</label>
            </div>
            <div className="ra bg-[#f1f1f1] p-2 font-medium  text-sm space-x-3">
              <input type="radio" name="" id="" />{" "}
              <label htmlFor=""> THIN CRUST</label>
            </div>
          </div>
          <div className="md:w-[80%]  border p-5 mt-5  space-y-3">
            {/* Please, choose your preferred crust type. */}
            <div className=" bg-white  font-semibold flex space-x-6">
              <div className="item">Options total:</div>
              <div className="item font-bold">$1.00</div>
            </div>
            <div className=" bg-white  font-semibold flex space-x-6">
              <div className="item">Options total:</div>
              <div className="item font-bold">$1.00</div>
            </div>
          </div>

          <div className="cart flex w-full space-x-2 mt-5">
            <div className=" rounded-3xl font-semibold item flex space-x-6 bg-[#f5f5f5] p-2 md:w-[15%] w-[25%]">
              <div className="m">-</div>
              <div className="m">2</div>
              <div className="m">+</div>
            </div>
            <input
              type="button"
              value="ORDER"
              className="rounded-3xl w-[40%] font-semibold p-3 text-white bg-pink-700"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <div class="mb-4 border-b md:grid md:place-items-center text-center border-gray-200 dark:border-gray-700">
          <ul
            class="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li class="mr-2" role="presentation">
              <button
                class="inline-block p-4 font-[open-sans] rounded-t-lg border-b-2 text-slate-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-yellow-500 dark:border-yellow-500"
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
                className=" font-[open-sans] inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"
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
            <p class="text-base text-gray-500 dark:text-gray-400">
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
