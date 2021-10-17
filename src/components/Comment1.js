import React from "react";
import { Card } from "react-bootstrap"
import "./Card.css"

function Comment1({ comments }) {
      
	const { user, comment } = comments;

	const newArticle = {
		padding: "10px"
	}
      
	return (
	<div style={newArticle}>
	<Card border="dark" className="card">
	<Card.Body className="cardText">
	  <li>
	    <span className="user">{user}</span>
	    <p className="comment">
		    {comment}
		</p>
	  </li>
	  </Card.Body>
	</Card>
	</div>
	);
      }
      
      export default Comment1;