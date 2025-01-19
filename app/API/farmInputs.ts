import { baseUrl } from "~/utils/baseUrl";

export const postFarmInput = async (
  name: string,
  category: "fertilizer" | "equipment" | "pesticides" | "seeds",
  purpose: string,
  file: any,
  token: string,
  price: number,
  priceCurrency: string,
  source: string,
  sourceUrl: string
) => {
  let formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${baseUrl}/api/v0.01/farminputs`, {
    method: "POST",
    body: JSON.stringify({
      name,
      source,
      category,
      purpose,
      price,
      priceCurrency,
      formData,
      sourceUrl,
    }),
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  console.log("postFarmInput RESPONSE", response);

  const data = await response.json();
  console.log("postFarmInput", data);
};

export const getFarmInputs = async () => {
  const response = await fetch(`${baseUrl}/api/v0.01/farminputs`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  console.log("getFarmInputs RESPONSE", response);
  const data = await response.json();
  console.log("getFarmInputs", data);
};

export const getFarmInput = async (farmInputId: string) => {
  const response = await fetch(
    `${baseUrl}/api/v0.01/farminputs/${farmInputId}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  console.log("getFarmInput RESPONSE", response);
  const data = await response.json();
  console.log("getFarmInput", data);
};

export const updateFarmInput = async (
  name: string,
  category: "fertilizer" | "equipment" | "pesticides" | "seeds",
  purpose: string,
  token: string,
  price: number,
  priceCurrency: string,
  source: string,
  farmInputId: string
) => {
  const response = await fetch(
    `${baseUrl}/api/v0.01/farminputs/${farmInputId}`,
    {
      method: "PATCH",
      body: JSON.stringify({
        name,
        category,
        purpose,
        price,
        priceCurrency,
        source,
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log("updateFarmInput RESPONSE", response);
  const data = await response.json();
  console.log("updateFarmInput", data);
};

export const updateInputFarmImage = async (
  token: string,
  photo: any,
  farmInputId: string
) => {
  let formData = new FormData();
  formData.append("photo", photo);

  const response = await fetch(
    `${baseUrl}/api/v0.01/farminputs/${farmInputId}/image`,
    {
      method: "PATCH",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  console.log("updateInputFarmImage RESPONSE", response);

  const data = await response.json();
  console.log("updateInputFarmImage", data);
};

export const deleteFarmInputFarmImage = async (
  token: string,
  farmInputId: string
) => {
  await fetch(`${baseUrl}/api/v0.01/farminputs/${farmInputId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
