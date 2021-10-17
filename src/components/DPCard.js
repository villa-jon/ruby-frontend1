import React from "react"
import "./Card.css"
import { Card, Button } from "react-bootstrap"

function DPCard({articles}){
const tasksthing = articles.map((article) => 
	<div className="cardParent">
	<Card border="dark" className="card" key={article.id}>
	<Card.Img variant="top" src = {article.image} placeholder={"holder.js/100px180"}/>
	<div className="cardText">
	<Card.Body className="cardText">
		<Card.Title>{article.title}</Card.Title>
		<Card.Text >
			<li>Description: {article.description}</li>
			<li>Source: {article.source}</li>
			<li>Country: {article.country}</li>
			<li>Category: {article.category}</li>
			<li>{article.published_at}</li>
			{/* {article.language} */}
		</Card.Text>
		<Button variant="primary" href={article.url}>Link</Button>
	</Card.Body>
	</div>
	</Card>					
	</div>
)

return(
	<div className="newsCardStyle">
		{tasksthing}				
	</div>
)
}

export default DPCard