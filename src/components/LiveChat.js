import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const polling = setInterval(() => {
      console.log("API Polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 1500);

    return () => {
      clearInterval(polling);
    };
  }, []);

  return (
    <div className="m-2 p-2 h-[524px] border border-black w-full bg-slate-100 overflow-y-scroll flex flex-col-reverse">
      {chatMessages.map((c, i) => (
        <ChatMessage key={i} name={c.name} message={c.message} />
      ))}
    </div>
  );
};

export default LiveChat;
