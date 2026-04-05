import React from "react";

type Bus = {
  id: number;
  name: string;
  departure_time: string;
};

type Props = {
  bus: Bus;
};

const BusTable: React.FC<Props> = ({ bus }) => {
  const dateObj = new Date(bus.departure_time);

  const formattedDate = dateObj.toLocaleDateString();
  const formattedTime = dateObj.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

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
          <tr className="hover:bg-gray-50">
            <td className="px-6 py-4 border-b">{bus.name}</td>
            <td className="px-6 py-4 border-b">{formattedDate}</td>
            <td className="px-6 py-4 border-b">{formattedTime}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BusTable;