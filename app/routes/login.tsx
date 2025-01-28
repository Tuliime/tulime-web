import { ActionFunction, ActionFunctionArgs } from "@remix-run/node";
import {
  Form,
  isRouteErrorResponse,
  Link,
  useActionData,
  useLoaderData,
  useNavigate,
  useNavigation,
  useRouteError,
} from "@remix-run/react";
import { useEffect, useState } from "react";
import { login } from "~/API/auth";
import { AppLayout } from "~/components/shared/layout/AppLayout";
import { useAuthUserStore, User } from "~/store/auth";
import { formatPhoneNumber } from "~/utils/formatTelNumber";

// export async function loader({ request }) {
//   return getProjects();
// }

// export const loader = async () => {
//   const data = login;
//   return data;
// };

export const action = async ({ request }: ActionFunctionArgs) => {
  const form = await request.formData();

  const telephone = form.get("telephone");
  const telephoneRaw = typeof telephone === "string" ? telephone : "";

  const telNumber = formatPhoneNumber(telephoneRaw);

  const passwordRaw = form.get("password");
  const password = typeof passwordRaw === "string" ? passwordRaw : "";

  if (!password) {
    throw new Error("Password is required");
  }

  if (!telNumber || isNaN(telNumber)) {
    throw new Error("Invalid telephone number");
  }

  const { accessToken, user } = await login(telNumber, password);
  // setUser(token, user);
  console.log("USER from login response", user);
  console.log("TOKEN from login response", accessToken);
  return { accessToken, user };
};

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [telephone, setTelephone] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleTelephoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTelephone(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const setUser = useAuthUserStore((state) => state.authenticateUser);

  const actionData = useActionData<{
    accessToken: string;
    user: { id: string; name: string; telNumber: string; role: string };
  }>();

  useEffect(() => {
    if (actionData?.accessToken && actionData?.user) {
      setUser(actionData.accessToken, actionData.user);
      setTelephone("");
      setPassword("");
      navigate("/");
    }
  }, [actionData, setUser]);

  // setUser(actionData.accessToken, actionData.user);
  // const setlogOut = useAuthUserStore((state) => state.logOutUser);

  const showPassordHandler = () => {
    setShowPassword(!showPassword);
  };

  const { state } = useNavigation();
  const busy = state === "submitting";

  return (
    <AppLayout>
      <div className=" flex flex-col gap-4 justify-center items-center sm:mt-20 lg:mt-28 text-gray-700 text-sm">
        <p>Log Into Your Account</p>
        <Form
          className=" flex flex-col gap-4 bg-white py-5 px-5 rounded-sm shadow-md text-[0.8rem]"
          method="post"
        >
          <div className="flex flex-col gap-1">
            <label>Tel Number</label>
            <input
              name="telephone"
              type="text"
              value={telephone}
              onChange={handleTelephoneChange}
              className="rounded-sm border py-1 outline-none placeholder-gray-700"
            />
          </div>
          <div className="flex flex-col gap-1 relative">
            <label>Password</label>
            <input
              name="password"
              type={`${showPassword ? "text" : "password"}`}
              value={password}
              onChange={handlePasswordChange}
              className="rounded-sm border py-1 outline-none px-1"
            />
            {showPassword ? (
              <svg
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 1024 1024"
                className=" absolute right-1 top-8 cursor-pointer"
                onClick={showPassordHandler}
              >
                <path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z" />
                <path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z" />
              </svg>
            ) : (
              <svg
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 1024 1024"
                className=" absolute right-1 top-8 cursor-pointer"
                onClick={showPassordHandler}
              >
                <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" />
              </svg>
            )}
          </div>
          <button
            className="bg-[#37B24D] text-white py-1 rounded-sm text-[0.8rem]"
            type="submit"
            disabled={busy}
          >
            {busy ? "Logging In..." : "Log In"}
          </button>
        </Form>
        <div className=" text-[0.7rem] flex flex-col text-blue-100 justify-center items-center">
          <p>
            Forgot Password?{" "}
            {/* <Link to="/reset" className="underline cursor-pointer">
              Reset
            </Link> */}
            {/* <Link to="/verify-password" className=" underline cursor-pointer">
              Password Reset
            </Link> */}
            <Link to="/change-password" className=" underline cursor-pointer">
              Change Password
            </Link>
            {/* <Link
              to="/verify-password-code"
              className=" underline cursor-pointer"
            >
              Verify
            </Link> */}
          </p>
          <p>
            Don't have an account?{" "}
            <Link to="/register-user" className=" underline cursor-pointer">
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
    </AppLayout>
  );
};

export default Login;

// export function ErrorBoundary({ error }: { error: Error }) {
//   return (
//     <div>
//       <h1>Something went wrong!</h1>
//       <p>{error.message}</p>
//     </div>
//   );
// }
export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        {/* <p>The stack trace is:</p> */}
        {/* <pre>{error.stack}</pre> */}
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}

//   export async function loader({ request }) {
//     return getProjects();
//   }

//   export async function action({ request }) {
//     const form = await request.formData();
//     return createProject({ title: form.get("title") });
//   }

//   export default function Projects() {
//     const projects = useLoaderData();
//     const { state } = useNavigation();
//     const busy = state === "submitting";

//     return (
//       <div>
//         {projects.map((project) => (
//           <Link to={project.slug}>{project.title}</Link>
//         ))}

//         <Form method="post">
//           <input name="title" />
//           <button type="submit" disabled={busy}>
//             {busy ? "Creating..." : "Create New Project"}
//           </button>
//         </Form>
//       </div>
//     );
//   }
