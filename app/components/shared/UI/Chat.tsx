import { useState, useRef, useEffect } from "react";

import { IoMdSend } from "react-icons/io";
import { FaMicrophoneLines } from "react-icons/fa6";
import { FaMicrophoneLinesSlash } from "react-icons/fa6";
import { botJsonData } from "~/data/botJsonData";

import { v4 as uuidv4 } from "uuid";

export const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: uuidv4(),
      bot: "Hello Dankan, how can I help you today?",
      time: "11:53 AM",
      user: "",
    },
    {
      id: uuidv4(),
      bot: "",
      time: "11:55 AM",
      user: "I am inquiring about the current state of agriculture in Uganda.",
    },
    {
      id: uuidv4(),
      bot: "The Agriculture sector in Uganda sector is a key part of the economy, with crops, livestock, and fisheries contributing significantly. It faces challenges like climate change, limited access to modern technology, and market inefficiencies but shows potential with ongoing efforts in modernization and sustainability.",
      time: "11:56 AM",
      user: "",
    },
  ]);

  const [botState, setBotState] = useState("voiced");

  const [newMessage, setNewMessage] = useState("");
  const messagesRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState("voice");

  const handleBotState = () => {
    if (botState === "voiced") setBotState("text");
    else setBotState("voiced");
    console.log("botstate", botState);
  };

  const extractCity = (command: string) => {
    const locationKeywords = ["in", "at", "for"];

    for (const keyword of locationKeywords) {
      const pattern = new RegExp(`${keyword}\\s(\\w+)`, "i");
      const match = command.match(pattern);

      if (match) {
        return match[1];
      }
    }

    return "kampala";
  };

  const getWeather = async (city: string) => {
    const API_KEY = "349c27f24aeee03e34affd43ad60e8ce";
    const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";

    const queryParams = new URLSearchParams({
      q: city,
      appid: API_KEY,
    });

    const url = `${BASE_URL}?${queryParams}`;

    try {
      const response = await fetch(url);

      if (response.ok) {
        const weatherData = await response.json();
        return weatherData;
      } else {
        console.error("Error fetching weather data:", response.statusText);
        return null;
      }
    } catch (error: any) {
      console.error("Error fetching weather data:", error.message);
      return null;
    }
  };

  const randomString = () => {
    const randomList = [
      "Oops, seems I lost track of what you just said.",
      "Oh! It appears you spoke something I don't understand yet. Do you mind rephrasing",
      "I'm terribly sorry dear, I didn't quite catch that. What do you mean?",
    ];

    const listCount = randomList.length;
    const randomItem = Math.floor(Math.random() * listCount);

    return randomList[randomItem];
  };

  const extractUserName = (inputString: string) => {
    const namePattern = /(?:I\s+am\s+called|My\s+name\s+is)\s+([^\s.,;?!]+)/i;
    const match = inputString.match(namePattern);
    return match ? match[1] : null;
  };
  const introduceUser = (userInput: string) => {
    // const nameRegex =
    //   /(?:hey\s*ecoGrid\s*,?\s*say\s*(?:hi|hello)\s*to\s*|say\s*(?:hi|hello)\s*to\s*\s*)(\w+)/i;
    const nameRegex =
      /(?:hey\s*(?:say\s*)?(?:hi|hello)\s*to\s*|say\s*(?:hi|hello)\s*to\s*\s*)(\w+)/i;

    const match = userInput.match(nameRegex);
    return match ? match[1] : null;
  };

  const calculateResponse = (inputString: string) => {
    const splitMessage = inputString.toLowerCase().split(/\s+|[,;?!.-]\s*/);
    const scoreList = [];

    const introducedUserName = introduceUser(inputString);
    const userName = extractUserName(inputString);
    // If a name is found in the user input, generate a response
    if (introducedUserName) {
      const name = introducedUserName;
      // const responses = [
      // `Hey ${name}, it's nice knowing you. I am the EcoGrid assistant and I am here to help with all matters regarding the EcoGrid system.`,
      // `Hey ${name}, it's great to meet you. I'm the EcoGrid assistant, ready to assist you with anything related to managing data generated from renewables or its storage and distribution.`,
      //   // Add more creative responses here
      // ];
      const responses = [
        `Hey ${name}, it's nice knowing you. I am the EcoGrid assistant and I am here to help with all matters regarding the EcoGrid system.`,
        `Hey ${name}, it's great to meet you. I'm the EcoGrid assistant, ready to assist you with anything related to managing data generated from renewables or its storage and distribution.`,
        `Hey ${name}, welcome! I'm your EcoGrid companion, here to navigate you through the fascinating world of renewable energy management.`,
        `Ahoy ${name}! It's a pleasure to make your acquaintance. I'm the EcoGrid genie, granting your wishes for sustainable energy management.`,
        `Greetings ${name}! I'm the EcoGrid guru, here to enlighten you on all things related to harnessing the power of renewables.`,
        `Salutations ${name}! As your EcoGrid ally, I'm here to tackle any challenges you may face in the realm of renewable energy optimization.`,
        `Hello ${name}, delighted to meet you! I'm the EcoGrid virtuoso, orchestrating the symphony of renewable energy solutions.`,
      ];

      // Randomly select a response from the array
      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];

      return randomResponse;
    }

    if (userName) {
      const randomResponses = [
        `Hey ${userName}! Nice to hear from you. I am Botly by the way`,
        `Wow, I like your name ${userName}! Did your grandmother give it to you?`,
        `It feels nice to know you ${userName}! How are you?`,
        `You have a nice name ${userName}! I wish we could shake hands but sadly, I am yet to have some`,
        `Great knowing you ${userName}! I am Botly by the way.`,
      ];

      const listCount = randomResponses.length;
      const randomItem = Math.floor(Math.random() * listCount);

      return randomResponses[randomItem];
    }

    for (const response of botJsonData) {
      let responseScore = 0;
      let requiredScore = 0;
      const requiredWords = response.required_words;

      if (requiredWords.length > 0) {
        for (const word of splitMessage) {
          if (requiredWords.includes(word)) {
            requiredScore += 1;
          }
        }
      }

      if (requiredScore === requiredWords.length) {
        for (const word of splitMessage) {
          if (response.user_input.includes(word)) {
            responseScore += 1;
          }
        }
      }

      scoreList.push(responseScore);
    }

    const bestResponse = Math.max(...scoreList, 0);
    if (bestResponse !== 0) {
      const responseIndex = scoreList.indexOf(bestResponse);
      const possibleResponses = botJsonData[responseIndex].bot_response;

      const listCount = possibleResponses.length;
      const randomItem = Math.floor(Math.random() * listCount);
      const selectedResponse = possibleResponses[randomItem];
      return selectedResponse;
    }

    return randomString();
  };

  const getTime = () => {
    const currentTime = new Date();

    const formattedTime = currentTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    return formattedTime;
  };

  const getDate = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();

    return formattedDate;
  };

  const randomStrings = [
    "Okay, let me search it out.",
    "Let me quickly find you internet results",
    "Searching for answers...",
    "Let me find that for you.",
    "On it! Fetching results.",
    "Scouring the web for info.",
    "Hold tight, searching in progress.",
    "Time to seek and find.",
    "Searching the web's archives.",
    "Finding answers, one click at a time.",
  ];

  const resultStrings = [
    "Okay, here we go!",
    "Alright!",
    "Got it!",
    "Perfect!",
    "Great, here's what I found.",
    "Ta-da! Here are the results.",
    "Voila! Information at your fingertips.",
    "Excellent! Check this out.",
    "Awesome! Here's what I discovered.",
    "Fantastic! Take a look at these results.",
  ];

  function getRandomResultString() {
    const randomIndex = Math.floor(Math.random() * resultStrings.length);
    return resultStrings[randomIndex];
  }
  function getRandomString() {
    const randomIndex = Math.floor(Math.random() * randomStrings.length);
    return randomStrings[randomIndex];
  }
  const scrollToBottom = () => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    // Set initial messages
    setMessages(messages);

    // Scroll to the bottom of the messages when new messages are added
    scrollToBottom();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!newMessage) return;

    try {
      if (
        ["time", "how are you by the sun"].some((keyword) =>
          newMessage.includes(keyword)
        )
      ) {
        const time = getTime();

        const botReply = `Current time is ${time}.`;
        const updatedMessages = [
          ...messages,
          { id: uuidv4(), bot: botReply, user: newMessage, time: time },
        ];

        setMessages(updatedMessages);
        setNewMessage("");

        return;
      }

      if (newMessage.includes("calculate") || newMessage.includes("solve")) {
        const expression = newMessage.replace(/(calculate|solve)\s+/i, "");
        try {
          const result = eval(expression);

          const botResponse = `The result of the calculation is ${result}`;

          const updatedMessages = [
            ...messages,
            {
              id: uuidv4(),
              bot: botResponse,
              user: newMessage,
              time: getTime(),
            },
          ];

          setMessages(updatedMessages);
          setNewMessage("");

          return;
        } catch (error) {
          console.log(
            "Sorry, I couldn't perform the calculation. Please check your expression."
          );

          const botReply =
            "Sorry, I couldn't perform the calculation. Please check your expression.";

          const updatedMessages = [
            ...messages,
            { id: uuidv4(), bot: botReply, user: newMessage, time: getTime() },
          ];

          setMessages(updatedMessages);
          setNewMessage("");
          return;
        }
      }
      const response = calculateResponse(newMessage);

      console.log("done");

      console.log("resonse:", response);

      console.log("before snapshot execution");

      console.log("after snapshot execution");

      const updatedMessages = [
        ...messages,
        { id: uuidv4(), bot: response, user: newMessage, time: getTime() },
      ];

      console.log("before snapshot execution");

      console.log("after snapshot execution");
      setMessages(updatedMessages);
      setNewMessage("");
    } catch (error) {
      console.error("Error submitting user input:", error);
    }
  };

  const handleActiveTabChange = (tab: string) => {
    setActive(tab);
    scrollToBottom();
  };

  //   const convertIsoStringToCustomFormat = (isoString: string) => {
  //     const inputDate = new Date(isoString);

  //     if (isNaN(inputDate)) {
  //       return;
  //     }

  //     let hours = inputDate.getHours();
  //     let minutes = inputDate.getMinutes();
  //     const ampm = hours >= 12 ? "PM" : "AM";

  //     // Convert to 12-hour format
  //     hours = hours % 12 || 12;

  //     // Add leading zeros if needed
  //     hours = hours < 10 ? "0" + hours : hours;
  //     minutes = minutes < 10 ? "0" + minutes : minutes;

  //     const formattedTime = `${hours}:${minutes} ${ampm}`;
  //     // console.log("chat foprmatted time", formattedTime);
  //     return formattedTime;
  //   };

  return (
    <div className=" mx-8 bg-white w-[30%] border-[0.2px] rounded-lg shadow-lg text-[0.7rem] fixed right-8 bottom-4">
      <div className=" relative px-1 min-h-[3rem] flex gap-3 items-center shadow-md">
        <div className="flex-between w-full px-3">
          <span>Tulime Chatbot</span>
          <span className=" flex items-center justify-center gap-1 text-green-100">
            <div className=" w-2 h-2 rounded-full bg-green-100"></div>
            <span>Online</span>
          </span>
        </div>
      </div>

      <div className=" px-3 py-3 max-h-80 overflow-y-scroll" ref={messagesRef}>
        {messages.map((message, index) => (
          <div key={index}>
            {message?.user && (
              <div className=" w-full flex justify-end mt-1">
                <div className=" flex flex-col justify-center gap-2 w-[80%]">
                  <div className=" w-full flex justify-end">
                    <div className=" w-7 h-7 flex items-center justify-center rounded-full bg-orange-600 text-white">
                      <span>D</span>
                    </div>
                  </div>
                  <div className="user-bubble px-1 py-1 bg-gray-200 rounded-md flex flex-col">
                    <span>{message?.user}</span>
                    <span className="flex justify-end text-[0.5rem] text-gray-600">
                      {message?.time}
                    </span>
                  </div>
                </div>
              </div>
              // <div>
              //   {/* <span>👤</span>  */}
              //   <span>{message?.user}</span>
              //   <span>{message?.time}</span>
              // </div>
            )}
            {message?.bot && (
              <>
                <div className=" flex flex-col gap-2 w-[80%]">
                  {/* <span>🤖</span> */}
                  <div className=" w-7 h-7 flex items-center justify-center rounded-full bg-gray-200">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      height="1.4em"
                      width="1.4em"
                      className=" text-blue-100"
                    >
                      <path d="M6 12.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 004.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 01-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 013 9.219V8.062zm4.542-.827a.25.25 0 00-.217.068l-.92.9a24.767 24.767 0 01-1.871-.183.25.25 0 00-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 00.189-.071l.754-.736.847 1.71a.25.25 0 00.404.062l.932-.97a25.286 25.286 0 001.922-.188.25.25 0 00-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 00-.166.076l-.754.785-.842-1.7a.25.25 0 00-.182-.135z" />
                      <path d="M8.5 1.866a1 1 0 10-1 0V3h-2A4.5 4.5 0 001 7.5V8a1 1 0 00-1 1v2a1 1 0 001 1v1a2 2 0 002 2h10a2 2 0 002-2v-1a1 1 0 001-1V9a1 1 0 00-1-1v-.5A4.5 4.5 0 0010.5 3h-2V1.866zM14 7.5V13a1 1 0 01-1 1H3a1 1 0 01-1-1V7.5A3.5 3.5 0 015.5 4h5A3.5 3.5 0 0114 7.5z" />
                    </svg>
                  </div>
                  <div className="bot-bubble px-1 py-1 bg-gray-200 rounded-md flex flex-col">
                    <span>{message?.bot}</span>
                    <span className="flex justify-end text-[0.5rem] text-gray-600">
                      {message?.time}
                    </span>
                  </div>
                </div>
              </>
            )}
            {/* <div className="message-text">{message.text}</div> */}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className=" px-3 mb-3  relative">
        <input
          type="text"
          placeholder="Ask Tulime chatbot"
          value={newMessage}
          onChange={handleInputChange}
          className=" bg-gray-200 rounded-[4rem] px-3 py-2 w-full focus:outline-none"
        />
        <button
          type="submit"
          className="text-white  absolute right-5 top-1 bg-green-100 rounded-full px-1 py-1 text-[1rem]"
        >
          <IoMdSend />
        </button>
      </form>
    </div>
  );
};
