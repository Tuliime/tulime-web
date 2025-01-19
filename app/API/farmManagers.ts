import { baseUrl } from "~/utils/baseUrl";

export const postFarmManager = async (
  userId: string,
  token: string,
  name: string,
  gender: "male" | "female",
  regNo: string,
  email: string,
  telNumber: number
) => {
  const response = await fetch(
    `${baseUrl}/api/v0.01/farmmanager/user/${userId}`,
    {
      method: "POST",
      body: JSON.stringify({
        name,
        gender,
        regNo,
        email,
        telNumber,
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  console.log("postFarmManager RESPONSE", response);

  const data = await response.json();
  console.log("postFarmManager", data);
};

export const getFarmManagerByUser = async (userId: string) => {
  const response = await fetch(
    `${baseUrl}/api/v0.01/farmmanager/user/${userId}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  console.log("getFarmManagerByUser RESPONSE", response);
  const data = await response.json();
  console.log("getFarmManagerByUser", data);
};

export const getFarmManager = async (farmManagerId: string) => {
  const response = await fetch(
    `${baseUrl}/api/v0.01/farmmanager/${farmManagerId}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  );

  console.log("getFarmManagerByUser RESPONSE", response);
  const data = await response.json();
  console.log("getFarmManagerByUser", data);
};

export const updateFarmManager = async (
  farmManagerId: string,
  token: string,
  name: string,
  gender: "male" | "female",
  regNo: string,
  email: string,
  telNumber: number
) => {
  const response = await fetch(
    `${baseUrl}/api/v0.01/farmmanager/${farmManagerId}`,
    {
      method: "PATCH",
      body: JSON.stringify({
        name,
        gender,
        regNo,
        email,
        telNumber,
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  console.log("updateFarmManager RESPONSE", response);

  const data = await response.json();
  console.log("updateFarmManager", data);
};

export const deleteFarmManager = async (
  token: string,
  farmManagerId: string
) => {
  await fetch(`${baseUrl}/api/v0.01/farmmanager/${farmManagerId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
