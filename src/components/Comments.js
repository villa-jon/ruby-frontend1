import React from "react";
import Comment1 from "./Comment1";

function Comments({ comments, showcomments }) {
  return (
    <div className="list">
      <ul>
        {comments.map((comments) => (
	<Comment1
	key={comments.id}
	comments={comments}
	showcomments={showcomments}
	/>   
        ))}
      </ul>
    </div>
  );
}

export default Comments;