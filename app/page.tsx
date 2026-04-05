"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import BusTable from "@/components/table";

export default function Home() {
  return (
    <main className="bg-[url('/buso.jpg')] bg-cover bg-center h-screen ">
      <div
        id="main"
        className="flex justify-center items-center w-full h-screen"
      >
        <BusTable/>
        {/* <form action="" method="post" className="flex">
          <div id="origin">
            <input
              type="text"
              name="from"
              className="font-lg p-[2.7em] h-20 font-bold outline-none border-2 border-gray-500 bg-white"
              placeholder="Origin"
            />
          </div>
          <div id="destination">
            <input
              type="text"
              name="to"
              className="font-lg p-[2.7em] h-20 font-bold outline-none border-2 border-gray-500 bg-white text-black"
              placeholder="Destination"
            />
          </div>
          <input
            type="date"
            name=""
            className="font-lg p-[2.7em] h-20 font-bold outline-none border-2 border-gray-500 bg-white"
            placeholder="Date"
          />
          <button
            type="submit"
            className="bg-black font-bold text-md h-22 px-5 py-5 text-white hover:bg-white hover:text-black"
          >
            {" "}
            Search buses
          </button>
        </form> */}
      </div>
    </main>
  );
}
