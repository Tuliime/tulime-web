import { Link } from "@remix-run/react";
import React, { useState } from "react";
import { AppLayout } from "~/components/shared/layout/AppLayout";

const Reset = () => {
  return (
    <AppLayout>
      <div className=" flex flex-col gap-4 justify-center items-center sm:mt-20 lg:mt-32 text-gray-700 text-sm">
        <p>Reset Your Account Password</p>
        <form className=" flex flex-col gap-4 bg-white py-5 px-5 rounded-sm shadow-md">
          <p className=" text-center text-[0.8rem] mb-2">
            Please provide the telephone number
            <br /> associated with your account
          </p>
          <div className="flex flex-col gap-1 text-[0.8rem]">
            <label>Tel Number</label>
            <input
              name="telephone"
              type="text"
              className="rounded-sm border py-1 outline-none placeholder-gray-700"
            />
          </div>

          <button className="bg-[#37B24D] text-white py-1 rounded-sm  text-[0.8rem]">
            Submit
          </button>
        </form>
        <div className=" text-[0.7rem] flex flex-col text-blue-100 justify-center items-center">
          <p>
            Remember password?{" "}
            <Link to="/login" className="underline cursor-pointer">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </AppLayout>
  );
};

export default Reset;
