import React from "react";

const Comments = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex items-center bg-gray-100 my-2 pl-2">
      <img className="w-8 h-8" src="./user.png" alt="user" />
      <div className="flex flex-col px-3">
        <p className="font-semibold">{name}</p>
        <p>{text}</p>
        {/* <p>{replies[0]}</p> */}
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comments data={comment} />
      <div className="pl-5 border-dotted border-gray-700 border-l-2">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  const commentsData = [
    {
      name: "user 1",
      text: "sample text",
      replies: [
        {
          name: "user2",
          text: "sample text",
          replies: [],
        },
        {
          name: "user3",
          text: "sample text",
          replies: [],
        },
        {
          name: "user6",
          text: "sample text",
          replies: [
            {
              name: "user4",
              text: "sample text",
              replies: [],
            },
            {
              name: "user5",
              text: "sample text",
              replies: [
                {
                  name: "user6",
                  text: "sample text",
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "user 11",
      text: "sample text",
      replies: [],
    },
    {
      name: "user 12",
      text: "sample text",
      replies: [],
    },
    {
      name: "user 16",
      text: "sample text",
      replies: [],
    },
    {
      name: "user 18",
      text: "sample text",
      replies: [],
    },
  ];

  return (
    <div className="my-5 ml-5 mr-0 p-2">
      <h2 className="text-2xl font-bold">Comments</h2>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
