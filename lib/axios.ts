import axios from "axios";

const api = axios.create({
  baseURL: "https://bus-booking-system-fawn.vercel.app/", // Flask server
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
