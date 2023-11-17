import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="m-2 p-2 h-[524px] border border-black w-full bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
          <form
            className="flex p-2 border border-slate-300"
            onSubmit={(e) => {
              e.preventDefault();
              console.log("ON form submit", liveMessage);
              dispatch(
                addMessage({
                  name: "Alan Panicker",
                  message: liveMessage,
                })
              );
            }}>
            <img
              className="h-7 w-7 rounded-full"
              src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
              alt=""
            />
            <input
              type="text"
              className="py-1 pl-2 ml-3 w-3/4 border border-black rounded-md"
              value={liveMessage}
              onChange={(e) => {
                setLiveMessage(e.target.value);
              }}
            />
            <button>
              <img
                className="ml-6 h-7 w-7"
                src="https://img.icons8.com/android/96/paper-plane.png"
                alt="send"
              />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LiveChat;
