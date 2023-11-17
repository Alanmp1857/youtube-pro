const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center mb-2 ml-4 shadow-sm">
      <img
        className="h-7 w-7 rounded-full"
        src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
        alt=""
      />
      <p className="m-1 font-bold">{name}</p>
      <p className="m-1 ">{message}</p>
    </div>
  );
};

export default ChatMessage;
