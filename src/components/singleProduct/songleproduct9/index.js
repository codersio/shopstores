import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Singleproduct9() {
  return (
    <div className="contaier p-4 flex md:space-x-6">
      <div className="row w-[80%]">
        <Carousel>
          <img
            src="https://cdn.shopify.com/s/files/1/0265/3493/6627/products/ipadgreen.png?v=1649393790"
            alt=""
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0265/3493/6627/products/ipadgreen.png?v=1649393790"
            alt=""
          />
        </Carousel>
      </div>
      <div className="row w-[60%]">
        <div className="title">
          <h3>Bulgari</h3>
          <h3>Faxtex Product Sample</h3>
        </div>
        <div className="share flex space-x-3 mt-3">
          <div className="f-share bg-blue-600 text-white w-[15%] grid place-items-center">
            Share
          </div>
          <div className="f-share bg-blue-600 text-white w-[15%] grid place-items-center">
            Tweet
          </div>
        </div>
        <div className="sku mt-3">
          <h3 className="text-slate-500 text-sm">Product SKU: 4827521</h3>
        </div>
        <hr className="mt-4" />

        <div className="desc space-y-2 text-slate-400 mt-3">
          <li className="">Accept SIM card and call</li>
          <li>Take photos</li>
          <li>Make calling instead of mobile phone</li>
          <li>Sync music play and sync control music</li>
          <li>Sync Facebook,Twitter,email and calendar</li>
        </div>
        <hr className="mt-4" />

        <div className="ith mt-4">
          <h3 className=" text-slate-500">
            <span className="font-semibold text-black">
              Other people want this.
            </span>{" "}
            1 people have this in their carts right now.
          </h3>
        </div>
        <div className="ith mt-4">
          <h3 className=" text-slate-500">
            <span className="font-semibold text-black">
              Want it delivered by
            </span>{" "}
            Saturday, 3 September
          </h3>
        </div>
        <div className="ut mt-4">
          <h3>
            Order until <span className="text-yellow-300">14:00 tomorrow</span>
          </h3>
        </div>

        <div className=" md:hidden block stk border-2 p-5 rounded-2xl mt-4">
          <h3>
            Available: <span className="text-green-500">In stock</span>
          </h3>
          <hr className="mt-4" />

          <h3 className="mt-4 text-3xl font-sans text-slate-600">$110.00</h3>
          <p className="text-slate-600 text-sm">
            {" "}
            <s> $199.00</s>
          </p>
          <h3 className="mt-3">SIZE</h3>
          <div className="siz flex space-x-3 mt-2">
            <div className="s border w-[50px] h-[50px] text-center leading-[3rem] rounded-full border-yellow-400">
              m
            </div>
            <div className="s border w-[50px] h-[50px] text-center leading-[3rem] rounded-full border-yellow-400">
              l
            </div>
            <div className="s border w-[50px] h-[50px] text-center leading-[3rem] rounded-full border-yellow-400">
              x
            </div>
          </div>
          <h3 className="mt-3">color</h3>
          <div className="color flex space-x-3 mt-2">
            <div className="s border w-[50px] h-[50px] text-center leading-[3rem] rounded-full bg-blue-500"></div>
            <div className="s border w-[50px] h-[50px] text-center leading-[3rem] rounded-full bg-blue-500"></div>
            <div className="s border w-[50px] h-[50px] text-center leading-[3rem] rounded-full bg-blue-500"></div>
          </div>
          <h3 className="mt-4">Quantity</h3>

          <div className="mt-2 text-slate-500 rounded-3xl qty flex border space-x-3 w-[35%] border-slate-500   p-2">
            <div className="item flex-glow text-2xl w-[85%]">1</div>
            <div className="item text-2xl">+</div>
            <div className="item text-2xl">-</div>
          </div>
          <div className="mt-4 cart space-y-3">
            <input
              type="button"
              value="ADD TO CART"
              className=" w-full p-3 rounded-3xl bg-yellow-300 text-center text-sm text-white font-semibold"
            />
            <input
              type="button"
              value="ADD TO CART"
              className=" w-full p-3 rounded-3xl bg-black text-center text-sm text-white font-semibold"
            />
          </div>
          <div className="w flex space-x-7 mt-3">
            <div className="item text-sltate-500">Wishlist</div>
            <div className="item text-sltate-500">Compare</div>
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
                  class="inline-block p-4 font-serif rounded-t-lg border-b-2 text-black hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-yellow-500 dark:border-yellow-500"
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
                  className=" font-serif inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-black dark:text-gray-400 border-gray-100 dark:border-gray-700"
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
                Short was designed in a casual, relaxed fit that’s not too short
                and not too long. Just pull on and go
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
      <div className="row w-[40%]">
        <div className=" md:block hidden stk border-2 p-5 rounded-2xl mt-4">
          <h3>
            Available: <span className="text-green-500">In stock</span>
          </h3>
          <hr className="mt-4" />

          <h3 className="mt-4 text-3xl font-sans text-slate-600">$110.00</h3>
          <p className="text-slate-600 text-sm">
            {" "}
            <s> $199.00</s>
          </p>
          <h3 className="mt-3">SIZE</h3>
          <div className="siz flex space-x-3 mt-2">
            <div className="s border w-[50px] h-[50px] text-center leading-[3rem] rounded-full border-yellow-400">
              m
            </div>
            <div className="s border w-[50px] h-[50px] text-center leading-[3rem] rounded-full border-yellow-400">
              l
            </div>
            <div className="s border w-[50px] h-[50px] text-center leading-[3rem] rounded-full border-yellow-400">
              x
            </div>
          </div>
          <h3 className="mt-3">color</h3>
          <div className="color flex space-x-3 mt-2">
            <div className="s border w-[50px] h-[50px] text-center leading-[3rem] rounded-full bg-blue-500"></div>
            <div className="s border w-[50px] h-[50px] text-center leading-[3rem] rounded-full bg-blue-500"></div>
            <div className="s border w-[50px] h-[50px] text-center leading-[3rem] rounded-full bg-blue-500"></div>
          </div>
          <h3 className="mt-4">Quantity</h3>

          <div className="mt-2 text-slate-500 rounded-3xl qty flex border space-x-3 w-[35%] border-slate-500   p-2">
            <div className="item flex-glow text-2xl w-[85%]">1</div>
            <div className="item text-2xl">+</div>
            <div className="item text-2xl">-</div>
          </div>
          <div className="mt-4 cart space-y-3">
            <input
              type="button"
              value="ADD TO CART"
              className=" w-full p-3 rounded-3xl bg-yellow-300 text-center text-sm text-white font-semibold"
            />
            <input
              type="button"
              value="ADD TO CART"
              className=" w-full p-3 rounded-3xl bg-black text-center text-sm text-white font-semibold"
            />
          </div>
          <div className="w flex space-x-7 mt-3">
            <div className="item text-sltate-500">Wishlist</div>
            <div className="item text-sltate-500">Compare</div>
          </div>
        </div>
      </div>
    </div>
  );
}
