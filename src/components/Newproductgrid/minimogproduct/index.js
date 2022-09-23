import { faEye, faShare, faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./style.scss";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { ImEye } from "react-icons/im";
export default function Minimogpro() {
  return (
    <div className="minimog-product grid grid-cols-2 md:grid-cols-5 font---minimog-theme-font">
      <div className="cols-item space-y-3 p-3">
        <div className="image overflow-hidden group relative flex justify-center group-hover:opacity-50">
          <img
            className="scale-100 hover:scale-110 duration-300 "
            src="https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/product_fashion_15_a_6-450x600.jpg"
            alt=""
          />
          <input
            type="button"
            value="Add To Cart"
            className="w-[80%] opacity-0 -bottom-[28rem] 
            duration-300 group-hover:opacity-100 absolute group-hover:bottom-5 
              bg-minimog-theme-cartbutton-bg-color text-minimog-theme-cartbutton-title-color p-2"
          />

          <div className="icon space-y-3 absolute -right-[25rem] duration-300 group-hover:right-4 top-6 opacity-0 group-hover:opacity-100">
            <div
              className="item text-minimog-theme-title-color bg-minimog-theme-default-bg-color hover:bg-minimog-theme-default-bg-hover-color
             hover:text-minimog-theme-title-hover-color rounded-full place-items-center text-[16px] grid w-[45px] h-[45px]"
            >
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div
              className="item text-minimog-theme-title-color bg-minimog-theme-default-bg-color hover:bg-minimog-theme-default-bg-hover-color
             hover:text-minimog-theme-title-hover-color rounded-full place-items-center text-[16px] grid w-[45px] h-[45px]"
            >
              <ImEye />
            </div>
            <div
              className="item text-minimog-theme-title-color bg-minimog-theme-default-bg-color hover:bg-minimog-theme-default-bg-hover-color
             hover:text-minimog-theme-title-hover-color rounded-full place-items-center text-[16px] grid w-[45px] h-[45px]"
            >
              <RiArrowLeftRightFill />
            </div>
          </div>
        </div>
        <div className="p-t space-y-1">
          <h3 className="text-minimog-theme-title-color font-[500] text-[18px]">
            Wool-blend Jacket
          </h3>
          <h3 className="text-minimog-theme-price-color">
            <span className=" text-[14px] text-minimog-theme-mrp-color">
              {" "}
              <s>$39.00</s>{" "}
            </span>{" "}
            $29.00
          </h3>
        </div>

        <div className="cplpr flex space-x-3">
          <div className="item w-[25px] bg-black rounded-full h-[25px]"></div>
          <div className="item w-[25px] bg-blue-600 rounded-full h-[25px]"></div>
          <div className="item w-[25px] bg-green-600 rounded-full h-[25px]"></div>
        </div>
      </div>
    </div>
  );
}
