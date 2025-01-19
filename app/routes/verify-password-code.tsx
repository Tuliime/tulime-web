import { Link } from "@remix-run/react";
import React from "react";
import { AppLayout } from "~/components/shared/layout/AppLayout";

const VerifyPasswordCode = () => {
  return (
    <AppLayout>
      <div className=" flex flex-col gap-4 justify-center items-center sm:mt-20 lg:mt-28 text-gray-700 text-sm">
        <p>Verify Reset Password Code</p>
        <form className=" flex flex-col gap-4 bg-white py-5 px-5 rounded-sm shadow-md">
          <p className=" text-center text-[0.8rem] mb-2">
            Please provide reset code sent to your
            <br /> number
          </p>
          <div className="flex flex-col gap-3 text-[0.8rem]">
            <label>Reset Code</label>
            <div className="flex gap-5">
              <input
                name="code1"
                type="text"
                className="rounded-sm border py-1 outline-none placeholder-gray-700 w-8"
              />
              <input
                name="code2"
                type="text"
                className="rounded-sm border py-1 outline-none placeholder-gray-700 w-8"
              />
              <input
                name="code3"
                type="text"
                className="rounded-sm border py-1 outline-none placeholder-gray-700 w-8"
              />
              <input
                name="code4"
                type="text"
                className="rounded-sm border py-1 outline-none placeholder-gray-700 w-8"
              />
              <input
                name="code5"
                type="text"
                className="rounded-sm border py-1 outline-none placeholder-gray-700 w-8"
              />
            </div>
          </div>

          <button className="bg-[#37B24D] text-white py-1 rounded-sm  text-[0.8rem]">
            Verify
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
export default VerifyPasswordCode;
