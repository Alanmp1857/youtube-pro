const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex items-center m-2 p-2 bg-gray-100 rounded-md w-1/2">
      <img
        className="h-8"
        src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
        alt=""
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
