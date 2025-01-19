import { baseUrl } from "~/utils/baseUrl";

export const postChat = async (
  userId: string,
  prompt: string,
  token: string
) => {
  const response = await fetch(`${baseUrl}/api/v0.01/chatbot/user/${userId}`, {
    method: "POST",
    body: JSON.stringify({
      prompt,
    }),
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
};

export const getChatByUser = async (
  token: string,
  cursor: string,
  userId: string
) => {
  const response = await fetch(
    `${baseUrl}/api/v0.01/chatbot/user/${userId}?cursor=${cursor}}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  console.log("getChatByUser RESPONSE", response);
  const data = await response.json();
  console.log("getChatByUser", data);
};
