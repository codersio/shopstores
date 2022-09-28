export default function Minimogshop() {
  return (
    <div className="filtersofminimog font-minimog-theme-font  ">
      <div className="item space-y-10 w-[25%]   border-2 border-black">
        <h3 className="text-[34px] text-minimog-theme-title-color">Filters</h3>
        <div className="sizeall min-w-fit">
          <div className="flex">
            <h3>Size</h3>
          </div>
          <div className="item  flex flex-wrap   ">
            <div className="m-1">
              <button className="border rounded-lg p-3 text-[18px]">
                Iphone 11 Pro case
              </button>
            </div>
            <div className="m-1">
              <button className="border rounded-lg p-3 text-[18px]">
                Iphone 8 case
              </button>
            </div>
            <div className="m-1">
              <button className="border rounded-lg p-3 text-[18px]">
                Iphone 8 case
              </button>
            </div>
            <div className="m-1">
              <button className="border rounded-lg p-3 text-[18px]">
                Iphone 8 case
              </button>
            </div>
            <div className="m-1">
              <button className="border rounded-lg p-3 text-[18px]">Xl</button>
            </div>
          </div>
        </div>

        {/* ENDOF PRODUC SIZE */}
        <div className="color">
          <div className="flex">
            <h3>Color</h3>
          </div>
          <div className="item ">
            <div className="div flex flex-wrap ">
              <div className="w-[30px] h-[30px] m-1 bg-black rounded-full"></div>
              <div className="w-[30px] h-[30px] m-1 bg-black rounded-full"></div>
              <div className="w-[30px] h-[30px] m-1 bg-black rounded-full"></div>
              <div className="w-[30px] h-[30px] m-1 bg-black rounded-full"></div>
              <div className="w-[30px] h-[30px] m-1 bg-black rounded-full"></div>
              <div className="w-[30px] h-[30px] m-1 bg-black rounded-full"></div>
              <div className="w-[30px] h-[30px] m-1 bg-black rounded-full"></div>
              <div className="w-[30px] h-[30px] m-1 bg-black rounded-full"></div>
              <div className="w-[30px] h-[30px] m-1 bg-black rounded-full"></div>
              <div className="w-[30px] h-[30px] m-1 bg-black rounded-full"></div>
              <div className="w-[30px] h-[30px] m-1 bg-black rounded-full"></div>
              <div className="w-[30px] h-[30px] m-1 bg-black rounded-full"></div>
              <div className="w-[30px] h-[30px] m-1 bg-black rounded-full"></div>
              <div className="w-[30px] h-[30px] m-1 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
        {/* ENDOF PRODUC COLOR */}

        <div className="category space-y-4">
          <div className="flex">
            <h3>Categories</h3>
          </div>
          <div className="item h-[14rem] scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300  overflow-y-scroll  ">
            <ul className="text-[16px] space-y-2">
              <li>
                <a href="">Houseware (5)</a>
              </li>
              <li>
                <a href="">Juice (11)</a>
              </li>
              <li>
                <a href="">Mirror (8)</a>
              </li>
              <li>
                <a href="">Nail Polishing (20)</a>
              </li>
              <li>
                <a href="">Organic (11)</a>
              </li>
              <li>
                <a href="">Pet (5)</a>
              </li>
              <li>
                <a href="">Pizza (9)</a>
              </li>
              <li>
                <a href="">POD (14)</a>
              </li>
              <li>
                <a href="">Skateboards (16)</a>
              </li>
              <li>
                <a href="">Skincare (4)</a>
              </li>
              <li>
                <a href="">Socks (8)</a>
              </li>
            </ul>
          </div>
        </div>

        {/* ENDOF PRODUC CATEGORY */}
        <div className="Price">
          <div className="flex">
            <h3>Price</h3>
          </div>
          <div className="item">
            <ul className="text-[16px]">
              <li>
                <a href="">$0.00 – $470.00</a>
              </li>
              <li>
                <a href="">$470.00 – $940.00</a>
              </li>
              <li>
                <a href="">$940.00 – $1,410.00</a>
              </li>
              <li>
                <a href="">$1,410.00 – $1,880.00</a>
              </li>
              <li>
                <a href="">$1,880.00 – $2,350.00</a>
              </li>
            </ul>
          </div>
        </div>
        {/* ENDOF PRODUC price */}
        <div className="Brand">
          <div className="flex">
            <h3>Brand</h3>
          </div>
          <div className="item">
            <ul className="text-[16px]">
              <li>
                <a href="">Abby (41)</a>
              </li>
              <li>
                <a href="">Brook (32)</a>
              </li>
              <li>
                <a href="">Learts (5)</a>
              </li>
              <li>
                <a href="">Minimog (350)</a>
              </li>
              <li>
                <a href="">Retrolie (26)</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
