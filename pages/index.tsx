import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="bg-amber-100 px-20 py-10 flex flex-col space-y-6">
      <div className="bg-white p-10 shadow-lg rounded-lg w-3/4 mx-auto">
        <span className="font-bold text-2xl">Selected Item</span>
        <div className="flex justify-between my-2">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$190</span>
        </div>
        <div className="flex justify-between my-2 pb-2">
          <span className="text-gray-500">Tooly Desk</span>
          <span className="font-semibold">$190</span>
        </div>
        <div className="flex justify-between border-t-2 border-dashed pt-3">
          <span className="font-semibold">Total</span>
          <span className="font-semibold">$380</span>
        </div>
        <div className="font-semibold bg-blue-500 text-white p-3 mt-4 w-2/4 mx-auto text-center rounded-lg">
          Checkout
        </div>
      </div>
      <div className="bg-white p-10 shadow-lg rounded-lg w-3/4 mx-auto"></div>
      <div className="bg-white p-10 shadow-lg rounded-lg w-3/4 mx-auto"></div>
      <div className="bg-white p-10 shadow-lg rounded-lg w-3/4 mx-auto"></div>
    </div>
  );
};

export default Home;
