import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { BsCart, BsArrowLeft } from "react-icons/bs";

const Home: NextPage = () => {
  return (
    <div className="bg-amber-100 px-20 py-10 flex flex-col space-y-6 min-h-screen">
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
        <div className="font-semibold bg-blue-500 text-white p-3 mt-4 w-2/4 mx-auto text-center rounded-lg hover:opacity-80 hover:scale-105 active:bg-red-400">
          Checkout
        </div>
      </div>
      <div className="mx-auto w-3/4 group">
        <div className="bg-blue-500 text-white flex justify-between overflow-hidden p-6 rounded-2xl py-11">
          <span className="text-2xl pb-20">Profile</span>
          <span>
            <BsCart size={35} />
          </span>
        </div>
        <div className="bg-white rounded-3xl relative -top-20 px-8 py-5  shadow-lg">
          <div className="relative -top-20 flex flex-col items-center">
            <div className="h-24 w-24 rounded-full bg-yellow-400 group-hover:bg-red-300 transition-opacity"></div>
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
      <div className="bg-white p-10 shadow-lg rounded-lg w-3/4 mx-auto">
        <div className="flex justify-between items-center">
          <span>
            <BsArrowLeft size={35} />
          </span>
          <div className="space-x-5">
            <span className="font-semibold">⭐4.9</span>
            <span className="shadow-xl bg-slate-200 rounded-xl p-2">💖</span>
          </div>
        </div>
        <div className="flex justify-center my-10">
          <Image src="/chair.png" alt="chair image" width={200} height={350} />
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-semibold mb-1.5">Swoon Lounge</span>
          <span className="text-slate-500 text-md mb-1.5">Chair</span>
        </div>
        <div className="w=30 h=30 bg-yellow-500" />
        <div className="flex items-center justify-between">
          <div className="flex space-x-1.5">
            <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
            <button className="w-5 h-5 rounded-full bg-blue-500 focus:ring-2 ring-offset-2 ring-blue-500 transition" />
            <button className="w-5 h-5 rounded-full bg-red-500 focus:ring-2 ring-offset-2 ring-red-500 transition" />
          </div>
          <div className="flex items-center justify-center">
            <button className="flex justify-center items-center bg-blue-200 aspect-square w-10 text-2xl rounded-lg">
              -
            </button>
            <span className="text-lg font-semibold mx-2">1</span>
            <button className="flex justify-center items-center bg-blue-200 aspect-square w-10 text-2xl rounded-lg">
              +
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center mt-5">
          <span className="text-2xl font-bold">$450</span>
          <button className="p-2 bg-blue-600 rounded-lg text-white text-lg hover:opacity-80 hover:scale-105 active:bg-red-400">
            Add to cart
          </button>
        </div>
      </div>
      <div className="bg-slate-200 p-10 shadow-lg rounded-lg w-3/4 mx-auto focus-within:bg-blue-300">
        <form action="submit" className="flex flex-col space-y-5 ">
          <input
            type="text"
            placeholder="userName"
            required
            className="peer shadow-lg p-3 rounded-lg required:border-2 required:border-red-500 invalid:bg-red-200 border border-gray-300"
          />
          <span className="hidden peer-invalid:block peer-invalid:text-red-500">
            The Username is invalid
          </span>
          <input
            type="password"
            placeholder="password"
            required
            className="shadow-lg p-3 rounded-lg required:border-2 required:border-red-500 invalid:bg-red-200 border border-gray-300"
          />
          <input
            type="submit"
            value="Login"
            required
            className="shadow-lg p-3 rounded-lg bg-blue-500 text-white text-2xl hover:opacity-75 hover:scale-105"
          />
        </form>
      </div>
    </div>
  );
};

export default Home;
