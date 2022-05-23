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
      <div className="w-3/4 mx-auto">
        <div className="bg-blue-500 text-white flex justify-between overflow-hidden p-6 rounded-2xl py-11">
          <span className="text-2xl pb-20">Profile</span>
          <span>cart</span>
        </div>
        <div className="bg-white rounded-3xl relative -top-20 px-8 py-5  shadow-lg">
          <div className="relative -top-20 flex flex-col items-center">
            <div className="h-24 w-24 rounded-full bg-yellow-400"></div>
          </div>
          <div className="relative -top-24">
            <div className="flex justify-between">
              <div className="flex flex-col items-center">
                <span className="text-gray-500 text-sm">Orders</span>
                <span className="text-xl font-semibold">340</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-gray-500 text-sm">Spent</span>
                <span className="text-xl font-semibold">$2,310</span>
              </div>
            </div>
            <div className="flex flex-col items-center -mt-5 -mb-10">
              <span className="font-bold text-2xl">Tony Molloy</span>
              <span className="mt-2 text-gray-500">New York, USA</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 shadow-lg rounded-lg w-3/4 mx-auto"></div>
      <div className="bg-white p-10 shadow-lg rounded-lg w-3/4 mx-auto"></div>
    </div>
  );
};

export default Home;
