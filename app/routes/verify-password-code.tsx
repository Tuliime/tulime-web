import {
  Form,
  json,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
  useViewTransitionState,
} from "@remix-run/react";
import React, { useEffect, useRef } from "react";
import { verifyOtp } from "~/API/auth";
import { AppLayout } from "~/components/shared/layout/AppLayout";

type ActionDataProps = {
  success?: boolean;
  error?: string;
};

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const codeArray = Array.from({ length: 6 }).map((_, index) =>
    formData.get(`code${index + 1}`)
  );

  if (
    codeArray.some(
      (code) => !code || typeof code !== "string" || code.length !== 1
    )
  ) {
    return json(
      { error: "Invalid code. Please fill all the fields correctly." },
      { status: 400 }
    );
  }

  const code = codeArray.join("");

  const response = await verifyOtp(code);
  if (!response.ok) {
    return json(
      { error: "Failed to verify the code. Please try again." },
      { status: 500 }
    );
  }

  return json({ success: true });
};

const VerifyPasswordCode = () => {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const actionData = useActionData<ActionDataProps>();

  const { state } = useNavigation();
  const busy = state === "submitting";

  useEffect(() => {
    if (!busy && actionData?.success) {
      inputRefs.current.forEach((input) => {
        if (input) input.value = "";
      });
    }
  }, [busy, actionData]);

  const handleInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = event.target;

    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (value.length === 0 && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <AppLayout>
      <div className="flex flex-col gap-4 justify-center items-center sm:mt-20 lg:mt-28 text-gray-700 text-sm">
        <p>Verify Reset Password Code</p>
        <Form
          className="flex flex-col gap-4 bg-white py-5 px-5 rounded-sm shadow-md"
          method="post"
        >
          <p className="text-center text-[0.8rem] mb-2">
            Please provide the reset code sent to your
            <br /> number
          </p>
          <div className="flex flex-col gap-3 text-[0.8rem]">
            <label>Reset Code</label>
            <div className="flex gap-5">
              {Array.from({ length: 6 }).map((_, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  name={`code${index + 1}`}
                  type="text"
                  maxLength={1}
                  className="rounded-sm border py-1 outline-none placeholder-gray-700 w-8 text-center"
                  onChange={(event) => handleInput(event, index)}
                />
              ))}
            </div>
          </div>
          {actionData?.error && (
            <p className="text-red-500 text-center text-[0.8rem]">
              {actionData.error}
            </p>
          )}
          {actionData?.success && (
            <p className="text-green-500 text-center text-[0.8rem]">
              Code verified successfully!
            </p>
          )}

          <button
            className="bg-[#37B24D] text-white py-1 rounded-sm text-[0.8rem]"
            type="submit"
            disabled={busy}
          >
            {busy ? "Verifying..." : "Verify"}
          </button>
        </Form>
        <div className="text-[0.7rem] flex flex-col text-blue-100 justify-center items-center">
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
