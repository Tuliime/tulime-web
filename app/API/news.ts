import { baseUrl } from "~/utils/baseUrl";

export const postNews = async (
  title: string,
  category: "G.O.U" | "conference" | "research" | "general",
  source: string,
  file: any,
  token: string
) => {
  let formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${baseUrl}/api/v0.01/agroproducts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      category,
      source,
      formData,
    }),
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  console.log("postNews RESPONSE", response);

  const data = await response.json();
  console.log("postNews", data);
};

export const getAllNews = async (limit: number) => {
  const response = await fetch(`${baseUrl}/api/v0.01/news?limit=${limit}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  console.log("getAllNews RESPONSE", response);
  const data = await response.json();
  console.log("getAllNews", data);
};

export const getNews = async (newsId: string) => {
  const response = await fetch(`${baseUrl}/api/v0.01/news/${newsId}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  console.log("getNews RESPONSE", response);
  const data = await response.json();
  console.log("getNews", data);
};

export const updateNews = async (
  token: string,
  amounts: number,
  title: string,
  description: string,
  category: "G.O.U" | "conference" | "research" | "general",
  source: string,
  newsId: string
) => {
  const response = await fetch(`${baseUrl}/api/v0.01/news/${newsId}`, {
    method: "PATCH",
    body: JSON.stringify({
      title,
      amounts,
      description,
      category,
      source,
    }),
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("updateNews RESPONSE", response);
  const data = await response.json();
  console.log("updateNews", data);
};

export const updateNewsImage = async (
  token: string,
  photo: any,
  newsId: string
) => {
  let formData = new FormData();
  formData.append("photo", photo);

  const response = await fetch(`${baseUrl}/api/v0.01/news/${newsId}/image`, {
    method: "PATCH",
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log("updateNewsImage RESPONSE", response);

  const data = await response.json();
  console.log("updateNewsImage", data);
};

export const deleteNews = async (token: string, newsId: string) => {
  await fetch(`${baseUrl}/api/v0.01/news/${newsId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
