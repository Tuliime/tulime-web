import { baseUrl } from "~/utils/baseUrl";

export const postChat = async (
  userId: string,
  token: string,
  text: string,
  sentAt: string,
  reply: string,
  file?: any,
  mention?: string
) => {
  const response = await fetch(`${baseUrl}/api/v0.01/chatroom/`, {
    method: "POST",
    body: JSON.stringify({
      userId,
      text,
      reply,
      file,
      sentAt,
      mention,
    }),
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
};

export const getLliveChat = async (token: string) => {
  const response = await fetch(`${baseUrl}/api/v0.01/chatroom/live`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  console.log("getLliveChat RESPONSE", response);
  const data = await response.json();
  console.log("getLliveChat", data);
};

export const getChat = async (token: string) => {
  const response = await fetch(`${baseUrl}/api/v0.01/chatroom/`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  console.log("getChat RESPONSE", response);
  const data = await response.json();
  console.log("getChat", data);
};
