import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Banner from "../../../components/ActiveLink/Banner/Banner";
import BannerTail from "../../../components/ActiveLink/Banner/BannerTail";
import { addToDb } from "../../../../fakedb";

const Home = () => {
  const [Inter, setInter] = useState(false);
  console.log(Inter);

  const addItem = (id) => {
    addToDb(id);
  };

  return (
    <div>
      <div className="h-16"></div>
      <div className="border-[20px]">
        <div className="py-1 px-7 pt-[60px] grid grid-cols-[auto_400px] relative">
          <div className="border-4 border-white pt-6 pb-2 grid grid-cols-[48%_auto] gap-3 px-2">
            <div>
              <div className="border-2 border-yellow-300 w-full pb-3 mt-10 relative">
                <div className="absolute -top-[5%] left-5">
                  <Banner name="regular" />
                </div>

                <div className="px-5 pt-2">
                  <div className="w-[120px] ml-auto flex justify-between">
                    <img
                      src="./images/chicken.png"
                      className="w-8 h-8"
                      alt=""
                    />
                    <img src="./images/cow.png" className="w-10" alt="" />
                  </div>
                </div>

                <div className="pl-5">
                  <div className=" hover:h-[105%] hover:border rounded-md hover:p-2 transition-all group">
                    <div className="flex">
                      <p className="text-2xl font-bold text-yellow-300 uppercase flex-grow">
                        mr.mini
                      </p>
                      <p
                        onClick={() => addItem("MR.MINI")}
                        className="w-[80px] text-center font-bold text-yellow-300 mt-auto group-hover:btn group-hover:btn-outline group-hover:border-yellow-300 group-hover:text-yellow-300"
                      >
                        70TK
                      </p>
                      <p className="w-[80px] text-center font-bold text-yellow-300 mt-auto">
                        --
                      </p>
                    </div>
                    <p className="text-white text-sm">
                      Consent with chicken party - MACICAL*
                    </p>
                  </div>

                  <div className=" hover:h-[105%] hover:border rounded-md hover:p-2 transition-all group">
                    <div className="flex">
                      <p className="text-2xl font-bold text-yellow-300 uppercase flex-grow">
                        mr.moderate
                      </p>
                      <p
                        onClick={() => addItem("MR.moderate-chicken")}
                        className="w-[80px] text-center font-bold text-yellow-300 mt-auto group-hover:btn group-hover:btn-outline group-hover:border-yellow-300 group-hover:text-yellow-300 group-hover:mr-2"
                      >
                        170TK
                      </p>
                      <p
                        onClick={() => addItem("MR.moderate-meet")}
                        className="w-[80px] text-center font-bold text-yellow-300 mt-auto group-hover:btn group-hover:btn-outline group-hover:border-yellow-300 group-hover:text-yellow-300"
                      >
                        180TK
                      </p>
                    </div>
                    <p className="text-white text-sm">
                      Consent with chicken/beef party - MACICAL*
                    </p>
                  </div>

                  <div className=" hover:h-[105%] hover:border rounded-md hover:p-2 transition-all group">
                    <div className="flex">
                      <p className="text-2xl font-bold text-yellow-300 uppercase flex-grow">
                        mr.perfect
                      </p>
                      <p
                        onClick={() => addItem("MR.perfect-chicken")}
                        className="w-[80px] text-center font-bold text-yellow-300 mt-auto group-hover:btn group-hover:btn-outline group-hover:border-yellow-300 group-hover:text-yellow-300 group-hover:mr-2"
                      >
                        190TK
                      </p>
                      <p
                        onClick={() => addItem("MR.perfect-meet")}
                        className="w-[80px] text-center font-bold text-yellow-300 mt-auto group-hover:btn group-hover:btn-outline group-hover:border-yellow-300 group-hover:text-yellow-300"
                      >
                        200TK
                      </p>
                    </div>
                    <p className="text-white text-sm">
                      Chicken/beef party mensoned by chicken & picklet -
                      PERFECTION*
                    </p>
                  </div>

                  <div className=" hover:h-[105%] hover:border rounded-md hover:p-2 transition-all group">
                    <div className="flex">
                      <p className="text-2xl font-bold text-yellow-300 uppercase flex-grow">
                        mr.hot chick
                      </p>
                      <p
                        onClick={() => addItem("MR.hot chick")}
                        className="w-[80px] text-center font-bold text-yellow-300 mt-auto group-hover:btn group-hover:btn-outline group-hover:border-yellow-300 group-hover:text-yellow-300"
                      >
                        190TK
                      </p>
                      <p className="w-[80px] text-center font-bold text-yellow-300 mt-auto">
                        --
                      </p>
                    </div>
                    <p className="text-white text-sm">
                      Consert with chicken party - DUCLIOUS*
                    </p>
                  </div>
                </div>
              </div>

              {/* House-Special Section */}

              <div className="border-2 border-yellow-300 w-full pb-3 mt-10 relative">
                <div className="absolute -top-[5%] left-5">
                  <BannerTail name="house-special" />
                </div>

                <div className="px-5 pt-2">
                  <div className="w-[120px] ml-auto flex justify-between">
                    <img
                      src="./images/chicken.png"
                      className="w-8 h-8"
                      alt=""
                    />
                    <img src="./images/cow.png" className="w-10" alt="" />
                  </div>
                </div>

                <div className="pl-5">
                  <div className=" hover:h-[105%] hover:border rounded-md hover:p-2 transition-all group">
                    <div className="flex">
                      <p className="text-2xl font-bold text-yellow-300 uppercase flex-grow">
                        mr.naga
                      </p>
                      <p
                        onClick={() => addItem("MR.naga-chicken")}
                        className="w-[80px] text-center font-bold text-yellow-300 mt-auto group-hover:btn group-hover:btn-outline group-hover:border-yellow-300 group-hover:text-yellow-300 group-hover:mr-2"
                      >
                        170TK
                      </p>
                      <p
                        onClick={() => addItem("MR.naga-meet")}
                        className="w-[80px] text-center font-bold text-yellow-300 mt-auto group-hover:btn group-hover:btn-outline group-hover:border-yellow-300 group-hover:text-yellow-300"
                      >
                        180TK
                      </p>
                    </div>
                    <p className="text-white text-sm max-w-[80%]">
                      Chicken/beef party inserted by chicken & picklet - FEEDING
                      HIGH*
                    </p>
                  </div>

                  <div className=" hover:h-[105%] hover:border rounded-md hover:p-2 transition-all group">
                    <div className="flex">
                      <p className="text-2xl font-bold text-yellow-300 uppercase flex-grow">
                        mr.baclon <span className="text-sm">and</span> co.
                      </p>
                      <p
                        onClick={() => addItem("MR.baclon-chicken")}
                        className="w-[80px] text-center font-bold text-yellow-300 mt-auto group-hover:btn group-hover:btn-outline group-hover:border-yellow-300 group-hover:text-yellow-300 group-hover:mr-2"
                      >
                        190TK
                      </p>
                      <p
                        onClick={() => addItem("MR.baclon-meet")}
                        className="w-[80px] text-center font-bold text-yellow-300 mt-auto group-hover:btn group-hover:btn-outline group-hover:border-yellow-300 group-hover:text-yellow-300"
                      >
                        200TK
                      </p>
                    </div>
                    <p className="text-white text-sm max-w-[85%]">
                      Chicken/beef party with beef botom & cheese - HEAVENLY*
                    </p>
                  </div>

                  <div className=" hover:h-[105%] hover:border rounded-md hover:p-2 transition-all group">
                    <div className="flex">
                      <p className="text-2xl font-bold text-yellow-300 uppercase flex-grow">
                        mr.sausage <span className="text-sm">and</span> co.
                      </p>
                      <p
                        onClick={() => addItem("MR.sausage-chicken")}
                        className="w-[80px] text-center font-bold text-yellow-300 mt-auto group-hover:btn group-hover:btn-outline group-hover:border-yellow-300 group-hover:text-yellow-300 group-hover:mr-2"
                      >
                        190TK
                      </p>
                      <p
                        onClick={() => addItem("MR.sausage-meet")}
                        className="w-[80px] text-center font-bold text-yellow-300 mt-auto group-hover:btn group-hover:btn-outline group-hover:border-yellow-300 group-hover:text-yellow-300"
                      >
                        200TK
                      </p>
                    </div>
                    <p className="text-white text-sm max-w-[85%]">
                      Chicken/beef party rapped with chicken mongoe & wrapper
                      with cheeses - NOM NOM*
                    </p>
                  </div>

                  <div className=" hover:h-[105%] hover:border rounded-md hover:p-2 transition-all group">
                    <div className="flex">
                      <p className="text-2xl font-bold text-yellow-300 uppercase flex-grow">
                        mr.cheeseroom
                      </p>
                      <p
                        onClick={() => addItem("MR.cheeseroom-chicken")}
                        className="w-[80px] text-center font-bold text-yellow-300 mt-auto group-hover:btn group-hover:btn-outline group-hover:border-yellow-300 group-hover:text-yellow-300 group-hover:mr-2"
                      >
                        190TK
                      </p>
                      <p
                        onClick={() => addItem("MR.cheeseroom-meet")}
                        className="w-[80px] text-center font-bold text-yellow-300 mt-auto group-hover:btn group-hover:btn-outline group-hover:border-yellow-300 group-hover:text-yellow-300"
                      >
                        200TK
                      </p>
                    </div>
                    <p className="text-white text-sm max-w-[80%]">
                      Chicken/beef party happened with dabble chicken & solted
                      manifesto - HEAVENLY*
                    </p>
                  </div>

                  <div className=" hover:h-[105%] hover:border rounded-md hover:p-2 transition-all group">
                    <div className="flex">
                      <p className="text-2xl font-bold text-yellow-300 uppercase flex-grow">
                        mr.handy man
                      </p>
                      <p
                        onClick={() => addItem("MR.handy-chicken")}
                        className="w-[80px] text-center font-bold text-yellow-300 mt-auto group-hover:btn group-hover:btn-outline group-hover:border-yellow-300 group-hover:text-yellow-300 group-hover:mr-2"
                      >
                        190TK
                      </p>
                      <p
                        onClick={() => addItem("MR.handy-meet")}
                        className="w-[80px] text-center font-bold text-yellow-300 mt-auto group-hover:btn group-hover:btn-outline group-hover:border-yellow-300 group-hover:text-yellow-300"
                      >
                        200TK
                      </p>
                    </div>
                    <p className="text-white text-sm max-w-[80%]">
                      Chicken/beef party mensoned by chicken & picklet -
                      SCROUMPTUS*
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gourmet Section */}
            <div className="border-2 border-yellow-300 w-full mt-10 relative">
              <div className="absolute -top-5 left-5">
                <BannerTail name="Gourmet" />
              </div>
              <img
                src="./images/brlocue.png"
                className="w-32 absolute translate-y-[-53%] right-5 ml-auto"
                alt=""
              />

              <div className="p-3"></div>

              {/* Meaty Dealer section */}
              <div className="border-0 border-b-2 border-yellow-300 flex gap-5 pb-2 mx-5 pt-5 group">
                <img src="./images/burger.png" className="w-40" alt="" />
                <div>
                  <div className="flex">
                    <img
                      src="./images/cow.png"
                      className="w-[50px] h-auto mb-3 group-hover:hidden transition-all ease-in-out"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-nowrap">
                    <p className="text-xl font-bold text-yellow-300 uppercase whitespace-nowrap ">
                      mr.meaty dealear
                    </p>
                    <p className="ml-5 font-bold text-yellow-300 uppercase text-xl">
                      310TK
                    </p>
                  </div>
                  <p className="text-white text-sm">
                    A bigger chunk of beef pffee infused with cheese and topped
                    with jolopona. Sanford on a BRIOCHE SUNI-DELIGHISOME*
                  </p>
                  <button
                    onClick={() => addItem("MR.meaty dealear")}
                    className="group-hover:flex hidden btn btn-outline normal-case text-yellow-300 border-yellow-300 transition-all ease-in-out"
                  >
                    Order Now <BsArrowRight className="text-xl" />{" "}
                  </button>
                </div>
              </div>

              {/* Cow boy Section */}

              <div className="border-0 border-b-2 border-yellow-300 flex gap-5 pb-2 mx-5 pt-5 group">
                <img src="./images/burger.png" className="w-40" alt="" />
                <div>
                  <div className="flex">
                    <img
                      src="./images/cow.png"
                      className="w-[50px] h-auto mb-3 group-hover:hidden transition-all ease-in-out"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-nowrap">
                    <p className="text-xl font-bold text-yellow-300 uppercase whitespace-nowrap ">
                      mr.cowboy
                    </p>
                    <p className="ml-5 font-bold text-yellow-300 uppercase text-xl">
                      340TK
                    </p>
                  </div>
                  <p className="text-white text-sm">
                    A bigger chunk of beef pffee infused with cheese and topped
                    with jolopona. Sanford on a BRIOCHE SUNI-DELIGHISOME*
                  </p>
                  <button
                    onClick={() => addItem("MR.cowboy")}
                    className="group-hover:flex hidden btn btn-outline normal-case text-yellow-300 border-yellow-300 transition-all ease-in-out"
                  >
                    Order Now <BsArrowRight className="text-xl" />{" "}
                  </button>
                </div>
              </div>

              {/* Son Of a Bun Section */}
              <div className="border-0 border-b-2 border-yellow-300 flex gap-5 pb-2 mx-5 pt-5 group">
                <img src="./images/burger.png" className="w-40" alt="" />
                <div>
                  <div className="flex">
                    <img
                      src="./images/cow.png"
                      className="w-[50px] h-auto mb-3 group-hover:hidden transition-all ease-in-out"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-nowrap">
                    <p className="text-xl font-bold text-yellow-300 uppercase whitespace-nowrap ">
                      mr.son of a bun
                    </p>
                    <p className="ml-5 font-bold text-yellow-300 uppercase text-xl">
                      330TK
                    </p>
                  </div>
                  <p className="text-white text-sm">
                    A bigger chunk of beef pffee infused with cheese and topped
                    with jolopona. Sanford on a BRIOCHE SUNI-DELIGHISOME*
                  </p>
                  <button
                    onClick={() => addItem("MR.son of a bun")}
                    className="group-hover:flex hidden btn btn-outline normal-case text-yellow-300 border-yellow-300 transition-all ease-in-out"
                  >
                    Order Now <BsArrowRight className="text-xl" />{" "}
                  </button>
                </div>
              </div>

              {/* Big Boppa Section */}
              <div className="border-0 border-b-2 border-yellow-300 flex gap-5 pb-2 mx-5 pt-5 group">
                <img src="./images/burger.png" className="w-40" alt="" />
                <div>
                  <div className="flex">
                    <img
                      src="./images/cow.png"
                      className="w-[50px] h-auto mb-3 group-hover:hidden transition-all ease-in-out"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-nowrap">
                    <p className="text-xl font-bold text-yellow-300 uppercase whitespace-nowrap ">
                      mr.big boppa
                    </p>
                    <p className="ml-5 font-bold text-yellow-300 uppercase text-xl">
                      380TK
                    </p>
                  </div>
                  <p className="text-white text-sm">
                    A bigger chunk of beef pffee infused with cheese and topped
                    with jolopona. Sanford on a BRIOCHE SUNI-DELIGHISOME*
                  </p>
                  <button
                    onClick={() => addItem("MR.big boppa")}
                    className="group-hover:flex hidden btn btn-outline normal-case text-yellow-300 border-yellow-300 transition-all ease-in-out"
                  >
                    Order Now <BsArrowRight className="text-xl" />{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Second Grid Section */}
          <section className="px-5 mx-auto">
            <div className="mx-auto w-fit">
              <Banner name={"add-ons"} text={"text-[18px]"} />
            </div>
            <div className=" border-0 border-x-2 border-yellow-300  w-[300px] mx-auto relative">
              <div
                onMouseEnter={() => setInter(true - 0)}
                onMouseOut={() => setInter(false)}
                className="grid grid-cols-[auto_80px]"
              >
                <p className="text-white font-bold text-xl uppercase pl-2 flex items-center">
                  Chicken/Beef Patty
                </p>
                {Inter === true - 0 ? (
                  <p
                    onClick={() => addItem("Chicken/Beef Patty")}
                    className="btn btn-outline text-yellow-300 border-l-2 border-yellow-300 text-end mr-2 hover:btn"
                  >
                    Order
                  </p>
                ) : (
                  <p className="text-xl font-bold text-yellow-300 uppercase border-0 border-l-2 border-yellow-300 text-end mr-2 hover:btn">
                    100TK
                  </p>
                )}
              </div>

              <div
                onMouseEnter={() => setInter(true - 1)}
                onMouseOut={() => setInter(false)}
                className="grid grid-cols-[auto_80px]"
              >
                <p className="text-white font-bold text-xl uppercase pl-2 flex items-center">
                  beef bacon
                </p>
                {Inter === true - 1 ? (
                  <p
                    onClick={() => addItem("beef bacon")}
                    className="btn btn-outline text-yellow-300 border-l-2 border-yellow-300 text-end mr-2 hover:btn"
                  >
                    Order
                  </p>
                ) : (
                  <p className="text-xl font-bold text-yellow-300 uppercase border-0 border-l-2 border-yellow-300 text-end mr-2 hover:btn">
                    60TK
                  </p>
                )}
              </div>

              <div
                onMouseEnter={() => setInter(true - 2)}
                onMouseOut={() => setInter(false)}
                className="grid grid-cols-[auto_80px]"
              >
                <p className="text-white font-bold text-xl uppercase pl-2 flex items-center">
                  cheese
                </p>
                {Inter === true - 2 ? (
                  <p
                    onClick={() => addItem("cheese")}
                    className="btn btn-outline text-yellow-300 border-l-2 border-yellow-300 text-end mr-2 hover:btn"
                  >
                    Order
                  </p>
                ) : (
                  <p className="text-xl font-bold text-yellow-300 uppercase border-0 border-l-2 border-yellow-300 text-end mr-2 hover:btn">
                    25TK
                  </p>
                )}
              </div>

              <div
                onMouseEnter={() => setInter(true - 3)}
                onMouseOut={() => setInter(false)}
                className="grid grid-cols-[auto_80px]"
              >
                <p className="text-white font-bold text-xl uppercase pl-2 flex items-center">
                  pepperoni
                </p>
                {Inter === true - 3 ? (
                  <p
                    onClick={() => addItem("pepperoni")}
                    className="btn btn-outline text-yellow-300 border-l-2 border-yellow-300 text-end mr-2 hover:btn"
                  >
                    Order
                  </p>
                ) : (
                  <p className="text-xl font-bold text-yellow-300 uppercase border-0 border-l-2 border-yellow-300 text-end mr-2 hover:btn">
                    50TK
                  </p>
                )}
              </div>

              <div
                onMouseEnter={() => setInter(true - 4)}
                onMouseOut={() => setInter(false)}
                className="grid grid-cols-[auto_80px]"
              >
                <p className="text-white font-bold text-xl uppercase pl-2 flex items-center">
                  mushrooms
                </p>
                {Inter === true - 4 ? (
                  <p
                    onClick={() => addItem("mushrooms")}
                    className="btn btn-outline text-yellow-300 border-l-2 border-yellow-300 text-end mr-2 hover:btn"
                  >
                    Order
                  </p>
                ) : (
                  <p className="text-xl font-bold text-yellow-300 uppercase border-0 border-l-2 border-yellow-300 text-end mr-2 hover:btn">
                    50TK
                  </p>
                )}
              </div>

              <div
                onMouseEnter={() => setInter(true - 5)}
                onMouseOut={() => setInter(false)}
                className="grid grid-cols-[auto_80px]"
              >
                <p className="text-white font-bold text-xl uppercase pl-2 flex items-center">
                  pickle
                </p>
                {Inter === true - 5 ? (
                  <p
                    onClick={() => addItem("pickle")}
                    className="btn btn-outline text-yellow-300 border-l-2 border-yellow-300 text-end mr-2 hover:btn"
                  >
                    Order
                  </p>
                ) : (
                  <p className="text-xl font-bold text-yellow-300 uppercase border-0 border-l-2 border-yellow-300 text-end mr-2 hover:btn">
                    20TK
                  </p>
                )}
              </div>

              <div
                onMouseEnter={() => setInter(true - 6)}
                onMouseOut={() => setInter(false)}
                className="grid grid-cols-[auto_80px]"
              >
                <p className="text-white font-bold text-xl uppercase pl-2 flex items-center">
                  jalapeno
                </p>
                {Inter === true - 6 ? (
                  <p
                    onClick={() => addItem("jalapeno")}
                    className="btn btn-outline text-yellow-300 border-l-2 border-yellow-300 text-end mr-2 hover:btn"
                  >
                    Order
                  </p>
                ) : (
                  <p className="text-xl font-bold text-yellow-300 uppercase border-0 border-l-2 border-yellow-300 text-end mr-2 hover:btn">
                    20TK
                  </p>
                )}
              </div>

              <div
                onMouseEnter={() => setInter(true - 7)}
                onMouseOut={() => setInter(false)}
                className="grid grid-cols-[auto_80px]"
              >
                <p className="text-white font-bold text-xl uppercase pl-2 flex items-center">
                  sausage
                </p>
                {Inter === true - 7 ? (
                  <p className="btn btn-outline text-yellow-300 border-l-2 border-yellow-300 text-end mr-2 hover:btn">
                    Order
                  </p>
                ) : (
                  <p className="text-xl font-bold text-yellow-300 uppercase border-0 border-l-2 border-yellow-300 text-end mr-2 hover:btn">
                    30TK
                  </p>
                )}
              </div>

              <div
                onMouseEnter={() => setInter(true - 8)}
                onMouseOut={() => setInter(false)}
                className="grid grid-cols-[auto_80px]"
              >
                <p className="text-white font-bold text-xl uppercase pl-2 flex items-center">
                  coleslaw
                </p>
                {Inter === true - 8 ? (
                  <p
                    onClick={() => addItem("coleslaw")}
                    className="btn btn-outline text-yellow-300 border-l-2 border-yellow-300 text-end mr-2 hover:btn"
                  >
                    Order
                  </p>
                ) : (
                  <p className="text-xl font-bold text-yellow-300 uppercase border-0 border-l-2 border-yellow-300 text-end mr-2 hover:btn">
                    40TK
                  </p>
                )}
              </div>

              <div
                onMouseEnter={() => setInter(true - 9)}
                onMouseOut={() => setInter(false)}
                className="grid grid-cols-[auto_80px]"
              >
                <p className="text-white font-bold text-xl uppercase pl-2 flex items-center">
                  egg
                </p>
                {Inter === true - 9 ? (
                  <p
                    onClick={() => addItem("egg")}
                    className="btn btn-outline text-yellow-300 border-l-2 border-yellow-300 text-end mr-2 hover:btn"
                  >
                    Order
                  </p>
                ) : (
                  <p className="text-xl font-bold text-yellow-300 uppercase border-0 border-l-2 border-yellow-300 text-end mr-2 hover:btn">
                    25TK
                  </p>
                )}
              </div>
            </div>

            <div className="mx-auto w-fit pt-5">
              <Banner name={"dips"} text={"text-[18px]"} />
            </div>
            <div className=" border-0 border-x-2 border-yellow-300  w-[300px] mx-auto relative">
              <div
                onMouseEnter={() => setInter(true - 10)}
                onMouseOut={() => setInter(false)}
                className="grid grid-cols-[auto_80px]"
              >
                <p className="text-white font-bold text-xl uppercase pl-2 flex items-center">
                  honey mustered
                </p>
                {Inter === true - 10 ? (
                  <p
                    onClick={() => addItem("honey mustered")}
                    className="btn btn-outline text-yellow-300 border-l-2 border-yellow-300 text-end mr-2 hover:btn"
                  >
                    Order
                  </p>
                ) : (
                  <p className="text-xl font-bold text-yellow-300 uppercase border-0 border-l-2 border-yellow-300 text-end mr-2 hover:btn">
                    20TK
                  </p>
                )}
              </div>

              <div
                onMouseEnter={() => setInter(true - 11)}
                onMouseOut={() => setInter(false)}
                className="grid grid-cols-[auto_80px]"
              >
                <p className="text-white font-bold text-xl uppercase pl-2 flex items-center">
                  naga
                </p>
                {Inter === true - 11 ? (
                  <p
                    onClick={() => addItem("naga")}
                    className="btn btn-outline text-yellow-300 border-l-2 border-yellow-300 text-end mr-2 hover:btn"
                  >
                    Order
                  </p>
                ) : (
                  <p className="text-xl font-bold text-yellow-300 uppercase border-0 border-l-2 border-yellow-300 text-end mr-2 hover:btn">
                    20TK
                  </p>
                )}
              </div>

              <div
                onMouseEnter={() => setInter(true - 12)}
                onMouseOut={() => setInter(false)}
                className="grid grid-cols-[auto_80px]"
              >
                <p className="text-white font-bold text-xl uppercase pl-2 flex items-center">
                  bbq
                </p>
                {Inter === true - 12 ? (
                  <p
                    onClick={() => addItem("BBq")}
                    className="btn btn-outline text-yellow-300 border-l-2 border-yellow-300 text-end mr-2 hover:btn"
                  >
                    Order
                  </p>
                ) : (
                  <p className="text-xl font-bold text-yellow-300 uppercase border-0 border-l-2 border-yellow-300 text-end mr-2 hover:btn">
                    20TK
                  </p>
                )}
              </div>
            </div>

            {/* Shakes and drinks */}
            <div className="border-2 mt-14 w-[400px] pb-5 relative">
              {/* tilte */}
              <div className="flex gap-2 items-center w-fit mx-auto relative -translate-y-1/2 bg-[#010E17]">
                <h3 className="text-white text-3xl font-bold uppercase">
                  shakes{" "}
                </h3>
                <span className="text-white font-bold uppercase">and</span>
                <h3 className="text-white text-3xl font-bold uppercase">
                  drinks
                </h3>
              </div>

              {/* title image */}
              <img
                src="./images/juce-cup.png"
                className="pb-5 w-14 absolute top-0 -translate-y-1/2"
                alt=""
              />

              <div className="flex ">
                <p className="text-yellow-300 text-xl font-bold w-[70px] text-center ml-auto">
                  R
                </p>
                <p className="text-yellow-300 text-xl font-bold w-[70px] text-center">
                  L
                </p>
              </div>

              <div className="flex ml-4">
                <h3 className="uppercase text-xl text-yellow-300 font-bold py-2">
                  choco cold coffee
                </h3>

                <div
                  className="ml-auto"
                  onMouseEnter={() => setInter(true - 13)}
                  onMouseOut={() => setInter(false)}
                >
                  {Inter === true - 13 ? (
                    <p
                      onClick={() => addItem("choco cold coffee-regular")}
                      className="btn btn-outline text-yellow-300 border-l-2 border-yellow-300 text-end mr-2 hover:btn normal-case ml-auto"
                    >
                      Order
                    </p>
                  ) : (
                    <p className="text-white text-xl font-bold w-[70px] text-center ml-auto py-2">
                      70TK
                    </p>
                  )}
                </div>
                <div
                  onMouseEnter={() => setInter(true - 14)}
                  onMouseOut={() => setInter(false)}
                >
                  {Inter === true - 14 ? (
                    <p
                      onClick={() => addItem("choco cold coffee-large")}
                      className="btn btn-outline text-yellow-300 border-l-2 border-yellow-300 text-end mr-2 hover:btn normal-case"
                    >
                      Order
                    </p>
                  ) : (
                    <p className="text-white text-xl font-bold w-[70px] text-center border-0 py-2 border-yellow-300 border-l-2">
                      120TK
                    </p>
                  )}
                </div>
              </div>

              <div className="flex ml-4">
                <h3 className="uppercase text-xl text-yellow-300 font-bold py-2">
                  strawaberry shakes
                </h3>
                <div
                  className="ml-auto"
                  onMouseEnter={() => setInter(true - 16)}
                  onMouseOut={() => setInter(false)}
                >
                  {Inter === true - 16 ? (
                    <p
                      onClick={() => addItem("strawaberry shakes-regular")}
                      className="btn btn-outline text-yellow-300 border-l-2 border-yellow-300 text-end mr-2 hover:btn normal-case ml-auto"
                    >
                      Order
                    </p>
                  ) : (
                    <p className="text-white text-xl font-bold w-[70px] py-2 text-center ml-auto">
                      70TK
                    </p>
                  )}
                </div>
                <div
                  onMouseEnter={() => setInter(true - 17)}
                  onMouseOut={() => setInter(false)}
                >
                  {Inter === true - 17 ? (
                    <p
                      onClick={() => addItem("strawaberry shakes-large")}
                      className="btn btn-outline text-yellow-300 border-l-2 border-yellow-300 text-end mr-2 hover:btn normal-case"
                    >
                      Order
                    </p>
                  ) : (
                    <p className="text-white text-xl font-bold w-[70px] py-2 text-center border-0 border-yellow-300 border-l-2">
                      120TK
                    </p>
                  )}
                </div>
              </div>

              <div className="flex py-2 ml-4">
                <h3 className="uppercase text-xl text-yellow-300 font-bold">
                  coke/sprite/fanta
                </h3>
                <div
                  className="ml-auto"
                  onMouseEnter={() => setInter(true - 15)}
                  onMouseOut={() => setInter(false)}
                >
                  {Inter === true - 15 ? (
                    <p
                      onClick={() => addItem("coke/sprite/fanta")}
                      className="btn btn-outline text-yellow-300 border-l-2 border-yellow-300 text-end mr-2 hover:btn normal-case ml-auto"
                    >
                      Order
                    </p>
                  ) : (
                    <p className="text-white text-xl font-bold w-[70px] text-center ml-auto">
                      20TK
                    </p>
                  )}
                </div>

                <p className="text-white text-xl font-bold w-[70px] text-center"></p>
              </div>

              <div className="flex py-2 ml-4">
                <h3
                  className="uppercase text-xl text-yellow-300 font-bold"
                  onMouseEnter={() => setInter(true - 16)}
                  onMouseOut={() => setInter(false)}
                >
                  Mineral water
                </h3>
                <div
                  className="ml-auto"
                  onMouseEnter={() => setInter(true - 18)}
                  onMouseOut={() => setInter(false)}
                >
                  {Inter === true - 18 ? (
                    <p
                      onClick={() => addItem("mineral water")}
                      className="btn btn-outline text-yellow-300 border-l-2 border-yellow-300 text-end mr-2 hover:btn normal-case ml-auto"
                    >
                      Order
                    </p>
                  ) : (
                    <p className="text-white text-xl font-bold w-[70px] text-center ml-auto">
                      15TK
                    </p>
                  )}
                </div>

                <p className="text-white text-xl font-bold w-[70px] text-center"></p>
              </div>
            </div>
          </section>
          <div className="uppercase text-white text-[40px] font-bold absolute left-24 top-8 bg-[#010E17]">
            Burgers
          </div>
        </div>
        {/* Bottom Section */}
        <section className="my-5 ml-6 mr-2 mt-10">
          <div className="grid grid-cols-[auto_400px] gap-5">
            <div className="grid grid-cols-[495px_auto] gap-3">
              {/* sandwich section */}
              <div className="border-2 relative">
                <p className="uppercase text-3xl font-bold text-white absolute bg-[#010E17] w-fit -translate-y-1/2 pb-2 ml-7">
                  sandwich
                </p>

                <div className="h-[20px]"></div>

                <div className="hover:border rounded-md hover:p-2 transition-all pl-3 group pb-5">
                  <div className="flex">
                    <p className="text-xl font-bold text-yellow-300 uppercase flex-grow">
                      smoked chicken
                    </p>
                    <p onClick={() => addItem("smoked chicken")} className="w-[80px] text-xl text-center font-bold text-white mt-auto group-hover:btn group-hover:btn-outline group-hover:border-yellow-300 group-hover:text-yellow-300">
                      190TK
                    </p>
                  </div>

                </div>

                <div className="hover:border rounded-md hover:p-2 transition-all pl-3 group pb-5">
                  <div className="flex">
                    <p className="text-xl font-bold text-yellow-300 uppercase flex-grow">
                      chicken sub
                    </p>
                    <p onClick={() => addItem("chicken sub")} className="w-[80px] text-center font-bold text-white text-xl mt-auto group-hover:btn group-hover:btn-outline group-hover:border-yellow-300 group-hover:text-yellow-300">
                      180TK
                    </p>
                  </div>

                </div>

                <div className="hover:border rounded-md hover:p-2 transition-all pl-3 group pb-3">
                  <div className="flex">
                    <p className="text-xl font-bold text-yellow-300 uppercase flex-grow">
                      chicken mushrooms sub
                    </p>
                    <p onClick={() => addItem("chicken mushrooms sub")} className="w-[80px] text-center font-bold text-white text-xl mt-auto group-hover:btn group-hover:btn-outline group-hover:border-yellow-300 group-hover:text-yellow-300">
                      210TK
                    </p>
                  </div>

                </div>
              </div>

              {/* chicken things section*/}
              <div className="border-2 relative">
                <p className="uppercase text-3xl font-bold text-white absolute bg-[#010E17] w-fit -translate-y-1/2 pb-2 ml-7">
                  chicken things
                </p>

                <div className="h-[25px]"></div>

                <div className="hover:border rounded-md hover:p-2 transition-all pl-3 group">
                  <div className="flex">
                    <p className="text-xl font-bold text-yellow-300 uppercase flex-grow">
                      chicken lollipops
                    </p>
                    <p onClick={() => addItem("chicken lollipops")} className="w-[80px] text-xl text-center font-bold text-white mt-auto group-hover:btn group-hover:btn-outline group-hover:border-yellow-300 group-hover:text-yellow-300">
                      70TK
                    </p>
                  </div>
                  <p className="text-white text-sm">
                    Consent with chicken party
                  </p>
                </div>

                <div className="hover:border rounded-md hover:p-2 transition-all pl-3 group">
                  <div className="flex">
                    <p className="text-xl font-bold text-yellow-300 uppercase flex-grow">
                      buffalo chicken wings
                    </p>
                    <p onClick={() => addItem("buffalo chicken wings")} className="w-[80px] text-center font-bold text-white text-xl mt-auto group-hover:btn group-hover:btn-outline group-hover:border-yellow-300 group-hover:text-yellow-300">
                      70TK
                    </p>
                  </div>
                  <p className="text-white text-sm">
                    Consent with chicken party
                  </p>
                </div>

                <div className="hover:border rounded-md hover:p-2 transition-all pl-3 group">
                  <div className="flex">
                    <p className="text-xl font-bold text-yellow-300 uppercase flex-grow">
                      naga wings
                    </p>
                    <p onClick={() => addItem("naga wings")} className="w-[80px] text-center font-bold text-white text-xl mt-auto group-hover:btn group-hover:btn-outline group-hover:border-yellow-300 group-hover:text-yellow-300">
                      70TK
                    </p>
                  </div>
                  <p className="text-white text-sm">
                    Consent with chicken party
                  </p>
                </div>

                <div className="hover:border rounded-md hover:p-2 transition-all pl-3 group">
                  <div className="flex">
                    <p className="text-xl font-bold text-yellow-300 uppercase flex-grow">
                      crispy wings
                    </p>
                    <p onClick={() => addItem("crispy wings")} className="w-[80px] text-center font-bold text-white text-xl mt-auto group-hover:btn group-hover:btn-outline group-hover:border-yellow-300 group-hover:text-yellow-300">
                      70TK
                    </p>
                  </div>
                  <p className="text-white text-sm">
                    Consent with chicken party
                  </p>
                </div>

                <div className="hover:border rounded-md hover:p-2 transition-all pl-3 pb-3 group">
                  <div className="flex">
                    <p className="text-xl font-bold text-yellow-300 uppercase flex-grow">
                      honey garlic wings
                    </p>
                    <p onClick={() => addItem("honey garlic wings")} className="w-[80px] text-center font-bold text-white text-xl mt-auto group-hover:btn group-hover:btn-outline group-hover:border-yellow-300 group-hover:text-yellow-300">
                      70TK
                    </p>
                  </div>
                  <p className="text-white text-sm">
                    Consent with chicken party
                  </p>
                </div>
              </div>
            </div>

            <div>
              {/* slides section */}
              <div className="border-2 ">
                <p className="uppercase text-3xl font-bold text-white absolute bg-[#010E17] w-fit -translate-y-1/2 pb-2 ml-7">
                  Slides
                </p>
                <div className="h-[25px]"></div>
                <div className="hover:border rounded-md hover:p-2 transition-all pl-3 group">
                  <div className="flex">
                    <p className="text-xl font-bold text-yellow-300 uppercase flex-grow">
                      fried rices
                    </p>
                    <p onClick={() => addItem("fried rices")} className="w-[80px] text-center font-bold text-white text-xl mt-auto group-hover:btn group-hover:btn-outline group-hover:border-yellow-300 group-hover:text-yellow-300">
                      120TK
                    </p>
                  </div>
                </div>

                <div className="hover:border rounded-md hover:p-2 transition-all pl-3 group">
                  <div className="flex">
                    <p className="text-xl font-bold text-yellow-300 uppercase flex-grow">
                      cheesy nuggets
                    </p>
                    <p onClick={() => addItem("cheesy nuggets")} className="w-[80px] text-center font-bold text-white text-xl mt-auto group-hover:btn group-hover:btn-outline group-hover:border-yellow-300 group-hover:text-yellow-300">
                      150TK
                    </p>
                  </div>
                  <p className="text-white text-sm">(6 PCS)</p>
                </div>

                <div className="hover:border rounded-md hover:p-2 transition-all pl-3 group">
                  <div className="flex">
                    <p className="text-xl font-bold text-yellow-300 uppercase flex-grow">
                      garlic mushrooms
                    </p>
                    <p onClick={() => addItem("garlic mushrooms")} className="w-[80px] text-center font-bold text-white text-xl mt-auto group-hover:btn group-hover:btn-outline group-hover:border-yellow-300 group-hover:text-yellow-300">
                      250TK
                    </p>
                  </div>
                </div>

                <div className="hover:border rounded-md hover:p-2 transition-all pl-3 pb-3 group">
                  <div className="flex">
                    <p className="text-xl font-bold text-yellow-300 uppercase flex-grow">
                      Loaded Fries
                    </p>
                    <p onClick={() => addItem("Loaded Fries")} className="w-[80px] text-center font-bold text-white text-xl mt-auto group-hover:btn group-hover:btn-outline group-hover:border-yellow-300 group-hover:text-yellow-300">
                      250TK
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center h-[110px]">
                <img src="./images/mr.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
