import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Alan Panicker",
    text: "One of the best videos!",
    replies: [],
  },
  {
    name: "Alan Panicker",
    text: "One of the best videos!",
    replies: [
      {
        name: "Alan Panicker",
        text: "One of the best videos!",
        replies: [
          {
            name: "Alan Panicker",
            text: "One of the best videos!",
            replies: [
              {
                name: "Alan Panicker",
                text: "One of the best videos!",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Alan Panicker",
    text: "One of the best videos!",
    replies: [
      {
        name: "Alan Panicker",
        text: "One of the best videos!",
        replies: [
          {
            name: "Alan Panicker",
            text: "One of the best videos!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Alan Panicker",
    text: "One of the best videos!",
    replies: [],
  },
  {
    name: "Alan Panicker",
    text: "One of the best videos!",
    replies: [],
  },
  {
    name: "Alan Panicker",
    text: "One of the best videos!",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="my-5 ml-10 p-2">
      <h1 className="text-xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
