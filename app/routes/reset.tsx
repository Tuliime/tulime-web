import { ActionFunctionArgs } from "@remix-run/node";
import {
  Form,
  Link,
  useActionData,
  useNavigate,
  useNavigation,
} from "@remix-run/react";
import React, { useEffect, useState } from "react";
import { forgotPassword } from "~/API/auth";
import { AppLayout } from "~/components/shared/layout/AppLayout";
import { formatPhoneNumber } from "~/utils/formatTelNumber";

export const action = async ({ request }: ActionFunctionArgs) => {
  const form = await request.formData();

  const telephone = form.get("telephone");
  const telephoneRaw = typeof telephone === "string" ? telephone : "";

  const telNumber = formatPhoneNumber(telephoneRaw);

  if (!telNumber || isNaN(telNumber)) {
    throw new Error("Invalid telephone number");
  }

  const response = await forgotPassword(telNumber);
  // setUser(token, user);
  console.log("forgotPassword response", response);

  return response;
};

const Reset = () => {
  const [telephone, setTelephone] = useState<string>("");

  const navigate = useNavigate();

  const actionData = useActionData();

  useEffect(() => {
    if (actionData) {
      console.log("ACTION DATA", actionData);
      setTelephone("");

      navigate("/verify-password-code");
    }
  }, [actionData]);

  const handleTelephoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTelephone(e.target.value);
  };

  const { state } = useNavigation();
  const busy = state === "submitting";
  return (
    <AppLayout>
      <div className=" flex flex-col gap-4 justify-center items-center sm:mt-20 lg:mt-28 text-gray-700 text-sm">
        <p>Reset Your Account Password</p>
        <Form
          className=" flex flex-col gap-4 bg-white py-5 px-5 rounded-sm shadow-md"
          method="post"
        >
          <p className=" text-center text-[0.8rem] mb-2">
            Please provide the telephone number
            <br /> associated with your account
          </p>
          <div className="flex flex-col gap-1 text-[0.8rem]">
            <label>Tel Number</label>
            <input
              name="telephone"
              type="text"
              value={telephone}
              onChange={handleTelephoneChange}
              className="rounded-sm border py-1 outline-none placeholder-gray-700"
            />
          </div>

          <button className="bg-[#37B24D] text-white py-1 rounded-sm  text-[0.8rem]">
            {busy ? "Submitting..." : "Submit"}
          </button>
        </Form>
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
