"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BusTable from "@/components/table";
import api from "@/lib/axios";
const busData = {
  departure_time: "Tue, 07 Apr 2026 05:00:00 GMT",
  id: 2,
  name: "Musango",
};
type Bus = {
  id: number;
  name: string;
  departure_time: string;
};
export default function Home() {
  const [bus, setBus] = useState<Bus | null>(null);

  useEffect(() => {
    const fetchBus = async () => {
      try {
        const response = await api.get<Bus>("/agencies/2");
        setBus(response.data);
      } catch (error) {
        console.error("Error fetching bus:", error);
      }
    };

    fetchBus();
  }, []);
  console.log(bus);
  return (
    <main className="bg-[url('/buso.jpg')] bg-cover bg-center h-screen ">
      <div
        id="main"
        className="flex justify-center items-center w-full h-screen"
      >
        <BusTable bus={busData} />
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
