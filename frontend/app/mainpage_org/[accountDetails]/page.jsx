"use client";
import React, { useState } from "react";
import { FlagIcon, BadgeCheckIcon } from "@heroicons/react/solid";
import pfp from "../../../bg2.png";
import Image from "next/image";
import "../../App.css";
import bg from '../../../account.jpg'
const page = ({ params }) => {
  function sendProps() {
    {
      first ? setfirst(false) : setfirst(true);
    }
  }
  const [first, setfirst] = useState(false);
  const ids = [
    "user1_id",
    "user2_id",
    "user3_id",
    "abc",
    "def",
    "xyz",
    "rtrt",
    "rtyr",
    "sdsa" /* ... */,
  ];
  const ids2 = [
    "user1" /* ... */,
    ,
    "user2" /* ... */,
    ,
    "user3" /* ... */,
    ,
    "user4" /* ... */,
    ,
    "user5" /* ... */,
    ,
    "user6" /* ... */,
    ,
    "user7" /* ... */,
    ,
    "user8" /* ... */,
    ,
    "user9" /* ... */,
    ,
  ];
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className=" max-h-screen flex justify-between my-10 mx-10">
      <div className="gradient-02"></div>

      <div>
        <div
          className={`panel ${isFlipped ? "is-flipped" : ""}`}
          onClick={toggleFlip}
        >
          {!isFlipped ? (
            <div className="bg-violet-100  p-4 rounded-lg shadow-violet-300 shadow-[0px_0px_60px_rgba(0,0,0,0.5)]">
              <div className="max-w-2xl mx-auto">
                <h1 className="text-2xl font-semibold mb-4 text-black">
                  See the people who flagged @{params.accountDetails}
                </h1>
                <div className="bg-violet-50 p-4 rounded-lg shadow">
                  {/* Dashboard Content */}
                  <div className="lg:h-96 overflow-y-auto ">
                    {/* Scrollable Content */}
                    <ul className="space-y-4 text-black ">
                      {ids2.map((id, index) => (
                        
                          <li key={index} className="border p-2 rounded-md ">
                            {id}
                          </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <p className="text-black py-2">Click to flip ;)</p>
            </div>
          ) : (
            <div className=" rotate-y-180 bg-violet-100  p-4 rounded-lg shadow-violet-300 shadow-[0px_0px_60px_rgba(0,0,0,0.5)]">
              <div className="max-w-2xl mx-auto">
                <h1 className="text-2xl font-semibold mb-4 text-black">
                  See the people who @{params.accountDetails} has flagged
                </h1>
                <div className="bg-violet-50 p-4 rounded-lg shadow">
                  {/* Dashboard Content */}
                  <div className="lg:h-96 overflow-y-auto ">
                    {/* Scrollable Content */}
                    <ul className="space-y-4 text-black ">
                      {ids.map((id, index) => (
                        <div className="flex items-center justify-between mr-10">
                          <li key={index} className="border p-2 rounded-md ">
                            {id}
                          </li>
                          {index / 2 === 0 ? (
                            <BadgeCheckIcon className="h-5 w-5" />
                          ) : (
                            <></>
                          )}
                        </div>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <p className="text-black py-2">Click to flip ;)</p>
            </div>
          )}
        </div>
      </div>

      <div className=" ">
        <div className="max-w-lg bg-gray-200 p-4 rounded-lg shadow-violet-300 shadow-[0px_0px_60px_rgba(0,0,0,0.5)]">
          <Image
            src={pfp}
            alt="User Profile"
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h1 className="text-2xl font-semibold text-center mt-4 text-black">
            <p className="text-gray-600 text-center">
              @{params.accountDetails}
            </p>
          </h1>
          <div className="text-black flex justify-between ">
            <div className="items-center">
              <p className="font-semibold">Followers: </p>
              <p>3.7k</p>
            </div>
            <div className="items-center justify-center">
              <p className="font-semibold">Following: </p>
              <p>645</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-gray-700 font-semibold">Bio:</p>
            <p className="text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vehicula tortor in suscipit fermentum.
            </p>
          </div>
        </div>
        <div>
        <Image
                src={bg}
                className="object-contain mt-5 w-[500px] relative z-10 rounded-tl-2xl  "
              />
        </div>
      </div>
    </div>
  );
};

export default page;
