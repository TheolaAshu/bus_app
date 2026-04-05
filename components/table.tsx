import React from "react";

type Bus = {
  name: string;
  departureDate: string;
  departureTime: string;
};

const busData: Bus[] = [
  {
    name: "Express Line",
    departureDate: "2026-04-06",
    departureTime: "08:30 AM",
  },
  {
    name: "City Rider",
    departureDate: "2026-04-07",
    departureTime: "02:15 PM",
  },
];

const BusTable: React.FC = () => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
              Bus name
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
              Departure date
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
              Departure time
            </th>
          </tr>
        </thead>
        <tbody>
          {busData.map((bus, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 border-b">{bus.name}</td>
              <td className="px-6 py-4 border-b">{bus.departureDate}</td>
              <td className="px-6 py-4 border-b">{bus.departureTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BusTable;