import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Singleproduct8() {
  return (
    <div className="container p-3">
      <div className="container-child md:flex">
        <div className="row md:w-[50%]">
          <Carousel>
            <img
              src="https://minimog-4437.kxcdn.com/wp-content/uploads/2022/02/11-1-570x760.png"
              alt=""
              srcset=""
            />
            <img
              src="https://minimog-4437.kxcdn.com/wp-content/uploads/2022/02/11-1-570x760.png"
              alt=""
              srcset=""
            />
          </Carousel>
        </div>

        <div className="row md:w-[50%]">
          <div className="title flex">
            <div className="item font-[jost] text-2xl text-black">
              <h3>Android 9.0 Tablet MT8163 Quad Core</h3>
            </div>
            <div className="item">
              <div className="wish border leading-[2.9rem] text-center rounded-full w-[50px] h-[50px]">
                w
              </div>
            </div>
          </div>
          <div className="pr-re flex justify-between">
            <div className="item font-[jost] ">
              <h3 className="text-2xl">$138.29</h3>
            </div>
            <div className="item">
              <h3>0 review</h3>
            </div>
          </div>
          <div className="view mt-5">
            <h3 className="text-slate-500">
              {" "}
              <span className="text-black font-semibold font-[jost]">
                30
              </span>{" "}
              people are viewing this right now
            </h3>
          </div>
          <div className="qty mt-3 space-y-4">
            <h3>Quantity</h3>
            <div className="cart-q flex space-x-8">
              <div className="qt-1 rounded-md flex space-x-10 bg-slate-200 p-2 text-base w-[33%]">
                <div className="m text-lg">-</div>
                <div className="m">2</div>
                <div className="m">+</div>
              </div>
              <input
                type="button"
                value="ADD TO CART"
                className="w-[80%] rounded-md text-center border border-black text-sm p-2  text-black"
              />
            </div>
          </div>

          <div className="b-n mt-3">
            <input
              type="button"
              value="BUY NOW"
              className="w-full rounded-md bg-black text-center text-white text-sm p-3"
            />
          </div>

          <div className="com-as flex font-[jost] text-lg space-x-12 mt-3">
            <div className="item">Compare</div>
            <div className="item">Ask a Question</div>
            <div className="item">Share</div>
          </div>
          <hr className="mt-5" />
          <div className="del mt-3">
            <div className="item flex space-x-10">
              <h3 className="text-lg font-semibold font-[jost]">
                Estimated Delivery:
              </h3>
              <h3 className="ml-[75px]">01 - 08 Sep, 2022</h3>
            </div>
            <div className="item space-x-10 flex">
              <h3 className="text-lg font-semibold font-[jost]">
                Free Shipping & Returns:
              </h3>
              <h3>On all orders over $200.00</h3>
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
                    class="inline-block p-4 font-[jost] rounded-t-lg border-b-2 text-black hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-yellow-500 dark:border-yellow-500"
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
                    className=" font-[jost] inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-black dark:text-gray-400 border-gray-100 dark:border-gray-700"
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
                  lightweight with a comfortable elastic waist, the Easy Chino
                  Short was designed in a casual, relaxed fit that’s not too
                  short and not too long. Just pull on and go
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
                  . Clicking another tab will toggle the visibility of this one
                  for the next. The tab JavaScript swaps classes to control the
                  content visibility and styling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
