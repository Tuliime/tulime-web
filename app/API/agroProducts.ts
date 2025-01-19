import { baseUrl } from "~/utils/baseUrl";

export const getAllAgroProduct = async (limit: number, cursor: string) => {
  const response = await fetch(
    `${baseUrl}/api/v0.01/agroproducts?limit=${limit}&category=crops&cursor=${cursor}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  );

  console.log("getAllAgroProduct RESPONSE", response);
  const data = await response.json();
  console.log("getAllAgroProduct", data);
};

export const postAgroProduct = async (
  name: string,
  category: "crops" | "poultry" | "fish" | "animals",
  file: any,
  token: string
) => {
  const response = await fetch(`${baseUrl}/api/v0.01/agroproducts`, {
    method: "POST",
    body: JSON.stringify({
      name,
      category,
      file,
    }),
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  console.log("postAgroProduct RESPONSE", response);

  const data = await response.json();
  console.log("postAgroProduct", data);
};

export const postAgroProductPrice = async (
  token: string,
  agroProductId: string,
  amount: number,
  currency: string
) => {
  const response = await fetch(
    `${baseUrl}/api/v0.01/agroproducts/${agroProductId}/price`,
    {
      method: "POST",
      body: JSON.stringify({
        amount,
        currency,
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  console.log("postAgroProductPrice RESPONSE", response);

  const data = await response.json();
  console.log("postAgroProductPrice", data);
};

export const getAgroProductPrice = async (agroProductId: string) => {
  const response = await fetch(
    `${baseUrl}/api/v0.01/agroproducts/${agroProductId}/price`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  console.log("getAgroProductPrice RESPONSE", response);
  const data = await response.json();
  console.log("getAgroProductPrice", data);
};

export const updateAgroProductPrice = async (
  token: string,
  amount: number,
  currency: string,
  agroProductId: string,
  agroPriceId: string
) => {
  const response = await fetch(
    `${baseUrl}/api/v0.01/agroproducts/${agroProductId}/price/${agroPriceId}`,
    {
      method: "PATCH",
      body: JSON.stringify({
        amount,
        currency,
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log("updateAgroProductPrice RESPONSE", response);
  const data = await response.json();
  console.log("updateAgroProductPrice", data);
};

export const getAllAgroProductPrices = async () => {
  const response = await fetch(`${baseUrl}/api/v0.01/agroproducts/prices`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  console.log("getAllAgroProductPrices RESPONSE", response);
  const data = await response.json();
  console.log("getAllAgroProductPrices", data);
};

export const deleteAgroProductPrice = async (
  token: string,
  agroProductId: string,
  agroPriceId: string
) => {
  await fetch(
    `${baseUrl}/api/v0.01/agroproducts/${agroProductId}/price/${agroPriceId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const updateAgroProduct = async (
  name: string,
  category: "crops" | "poultry" | "fish" | "animals",
  agroProductId: string,
  token: string
) => {
  const response = await fetch(
    `${baseUrl}/api/v0.01/agroproducts/${agroProductId}`,
    {
      method: "PATCH",
      body: JSON.stringify({
        name,
        category,
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  console.log("updateAgroProduct RESPONSE", response);

  const data = await response.json();
  console.log("updateAgroProduct", data);
};

export const getAgroProduct = async (agroProductId: string) => {
  const response = await fetch(
    `${baseUrl}/api/v0.01/agroproducts/${agroProductId}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  console.log("getAgroProduct RESPONSE", response);
  const data = await response.json();
  console.log("getAgroProduct", data);
};

export const deleteAgroProduct = async (
  token: string,
  agroProductId: string
) => {
  await fetch(`${baseUrl}/api/v0.01/agroproducts/${agroProductId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateAgroProductImage = async (
  token: string,
  photo: any,
  agroProductId: string
) => {
  let formData = new FormData();
  formData.append("photo", photo);

  const response = await fetch(
    `${baseUrl}/api/v0.01/agroproducts/${agroProductId}`,
    {
      method: "PATCH",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  console.log("updateAgroProductImage RESPONSE", response);

  const data = await response.json();
  console.log("updateAgroProductImage", data);
};

export const updateNewsImage = async (
  token: string,
  photo: any,
  agroProductId: string
) => {
  let formData = new FormData();
  formData.append("photo", photo);

  const response = await fetch(
    `${baseUrl}/api/v0.01/agroproducts/${agroProductId}`,
    {
      method: "PATCH",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  console.log("updateNewsImage RESPONSE", response);

  const data = await response.json();
  console.log("updateNewsImage", data);
};
