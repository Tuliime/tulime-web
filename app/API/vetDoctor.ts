import { baseUrl } from "~/utils/baseUrl";

export const postVetDoctor = async (
  userId: string,
  token: string,
  name: string,
  gender: "male" | "female",
  licenseNumber: string,
  email: string,
  telNumber: number
) => {
  const response = await fetch(
    `${baseUrl}/api/v0.01/vetdoctor/user/${userId}`,
    {
      method: "POST",
      body: JSON.stringify({
        name,
        gender,
        licenseNumber,
        email,
        telNumber,
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  console.log("postVetDoctor RESPONSE", response);

  const data = await response.json();
  console.log("postVetDoctor", data);
};

export const getVetDoctorByUser = async (userId: string) => {
  const response = await fetch(
    `${baseUrl}/api/v0.01/vetdoctor/user/${userId}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  );

  console.log("getVetDoctorByUser RESPONSE", response);

  const data = await response.json();
  console.log("getVetDoctorByUser", data);
};

export const getVetDoctor = async (vetDoctorId: string) => {
  const response = await fetch(
    `${baseUrl}http://localhost:5000/api/v0.01/vetdoctor/${vetDoctorId}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  );

  console.log("getVetDoctor RESPONSE", response);

  const data = await response.json();
  console.log("getVetDoctor", data);
};

export const updateVetDoctor = async (
  vetDoctorId: string,
  token: string,
  name: string,
  gender: "male" | "female",
  licenseNumber: string,
  email: string,
  telNumber: number
) => {
  const response = await fetch(
    `${baseUrl}/api/v0.01/vetdoctor/${vetDoctorId}`,
    {
      method: "PATCH",
      body: JSON.stringify({
        name,
        gender,
        licenseNumber,
        email,
        telNumber,
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  console.log("updateVetDoctor RESPONSE", response);

  const data = await response.json();
  console.log("updateVetDoctor", data);
};

export const deleteVetDoctor = async (token: string, vetDoctorId: string) => {
  await fetch(`${baseUrl}/api/v0.01/vetdoctor/${vetDoctorId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
