"use client";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  /*const router = useRouter();
  const stoppages: string[] = [
    "Buea",
    "Douala",
    "Yaounde",
    "Ebolowa",
    "Maroua",
    "Garoua",
    "Ngoundere",
    "Bamenda",
    "Bertoua",
    "Bafoussam",
  ];*/
  return (
    <main className="bg-[url('/bus.jpg')] bg-cover bg-center h-screen">
      <div
        id="main"
        className="flex justify-center items-center w-full h-screen"
      >
        <form action="" method="post" className="flex">
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
            className="bg-pink-600 font-bold text-md h-22 px-5 py-5 text-white"
          >
            {" "}
            Search buses
          </button>
        </form>
      </div>
    </main>
  );
}
