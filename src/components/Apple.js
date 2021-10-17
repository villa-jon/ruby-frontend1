import React, {useState} from "react"
import Button from 'react-bootstrap/Button'

function Apple({ id, addArticle }) {
	const [body, setBody] = useState("");

	const newsStyle = {
		fontFamily: 'Montserrat',
		fontWeight: 'bolder',
		backgroundColor: "#A93226"
		// padding: '20px'
	}
	const styling = {
		width:"20rem",
		background:"#F2F1F9", 
		border:"none", 
		padding:"0.5rem"}

	const newArticle = {
		padding: "10px"
	}

	function handleOnSubmit(w) {
		w.preventDefault();
		fetch(`http://localhost:9292/comment/${id}`, {
		method: "POST",
		headers: {
		  "Content-Type": "application/json",
		},
		comment: JSON.stringify({
			comment: body,
		}),
	      })
		.then((r) => r.json())
		.then((newArticle) => addArticle(newArticle));
		setBody("")

	}

	return (
		<div 
		className="d-flex mx-auto justify-content-center"
		style={newsStyle}>
			<div className="formParent">
			<form 
		    className={newArticle} 
		    onSubmit={handleOnSubmit}>
			<input
				style = {styling}   
				type="text"
				name="body"
				autoComplete="off"
				value={body}
				onChange={(w) => setBody(w.target.value)}
			/>
			</form>	
			</div>
			<br/>
			<Button variant = "secondary" type="submit">Sendus To-Serveus</Button>
		</div>

	)
	
	
	}

export default Apple