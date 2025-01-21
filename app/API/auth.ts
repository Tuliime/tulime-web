import { useAuthUserStore, User } from "~/store/auth";
import { baseUrl } from "~/utils/baseUrl";

const saveDataToStorage = (token: string | null, user: User | null) => {
  localStorage.setItem(
    "userData",
    JSON.stringify({
      token: token,
      user: user,
    })
  );
};

export const authenticate = (token: string, user: User) => {
  // setUser(token, user);
  saveDataToStorage(token, user);
};

export const login = async (telNumber: number, password: string) => {
  const response = await fetch(`${baseUrl}/api/v0.01/user/auth/signin`, {
    method: "POST",
    body: JSON.stringify({
      telNumber,
      password,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    console.log("forgot password error messaage:", data.message);
    throw new Error(data.message);
  }

  // authenticate(data.token, data.user);
  saveDataToStorage(data.user, data.accessToken);
  return data;
};

// export const logOut = () => {
//   localStorage.clear();
//   setlogOut();
// };

export const register = async (
  name: string,
  telNumber: number,
  password: string
) => {
  const response = await fetch(`${baseUrl}/api/v0.01/user/auth/signup`, {
    method: "POST",
    body: JSON.stringify({
      name,
      telNumber,
      password,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });

  console.log("USER REGISTER RESPONSE", response);

  const data = await response.json();
  console.log("USER REG DATA", data);

  // authenticate(data.user, data.accessToken);
  saveDataToStorage(data.user, data.accessToken);
  return data;
};

export const forgotPassword = async (telNumber: number) => {
  const response = await fetch(
    `${baseUrl}/api/v0.01/user/auth/forgot-password`,
    {
      method: "POST",
      body: JSON.stringify({
        telNumber,
      }),
      headers: {
        "Content-type": "application/json",
      },
    }
  );

  console.log("FORGOT PASSWORD RESPONSE", response);

  const data = await response.json();
  console.log("FORGOT PASSWORD DATA", data);
};

export const verifyOtp = async (otp: number) => {
  const response = await fetch(`${baseUrl}/api/v0.01/user/auth/verify-otp`, {
    method: "POST",
    body: JSON.stringify({
      otp,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });

  console.log("VERIFY OTP RESPONSE", response);

  const data = await response.json();
  console.log("VERIFY OTP DATA", data);
};

export const resetPassword = async (password: string, savedOtp: number) => {
  const response = await fetch(
    `${baseUrl}/api/v0.01/user/auth/reset-password/${savedOtp}`,
    {
      method: "PATCH",
      body: JSON.stringify({
        password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    }
  );

  console.log("RESET PASSWORD RESPONSE", response);

  const data = await response.json();
  console.log("RESET PASSWORD", data);
};

export const changePassword = async (
  currentPassword: string,
  newPassword: string,
  userId: string,
  token: string
) => {
  const response = await fetch(
    `${baseUrl}/api/v0.01/user/${userId}/auth/change-password`,
    {
      method: "PATCH",
      body: JSON.stringify({
        currentPassword,
        newPassword,
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  console.log("RESET PASSWORD RESPONSE", response);

  const data = await response.json();
  console.log("RESET PASSWORD", data);
};

export const updateUserImage = async (
  userId: string,
  token: string,
  photo: any
) => {
  let formData = new FormData();
  formData.append("photo", photo);

  const response = await fetch(`${baseUrl}/api/v0.01/user/${userId}/image`, {
    method: "PATCH",
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log("updateUserImage RESPONSE", response);

  const data = await response.json();
  console.log("updateUserImage", data);
};

export const updateUser = async (
  userId: string,
  token: string,
  name: string,
  telNumber: number
) => {
  const response = await fetch(`${baseUrl}/api/v0.01/user/${userId}`, {
    method: "PATCH",
    body: JSON.stringify({
      name,
      telNumber,
    }),
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  console.log("updateUserImage RESPONSE", response);
  const data = await response.json();
  console.log("updateUserImage", data);
};
