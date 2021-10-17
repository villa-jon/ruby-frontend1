import React, {useEffect, useState} from "react";
import Comments from "./components/Comments";
import Apple from "./components/Apple";
import DPCard from "./components/DPCard";
// import './App.css';

const real = "http://localhost:9292/article"
// aki = "http://api.mediastack.com/v1/news?access_key=19eb13b51a527ab54654d8a151929493&sources=cnn,bbc"

function App() { 
	const [articles, setArticles] = useState([]);
  const [comments, setComments1] = useState([])

  const newsStyle = {
		fontFamily: 'Harry Potter',
		fontWeight: 'bolder',
		backgroundColor: "#F1C40F",
    // fontWeight: 20,
    fontSize: 30
		// padding: '20px'
	}
  // const paperstyle = {{ backgroundColor:  }}
  function addArticles(newArticles) {
    setArticles([...articles, newArticles])
  }

	useEffect(() => {
		fetch(real)
		  .then((r) => r.json())
		  .then((articles) => {setArticles(articles)}
   
      );
	      }, []);

console.log(articles)

useEffect(() => {
  fetch("http://localhost:9292/comment")
    .then((r) => r.json())
    .then((comments) => {setComments1(comments)}
 
    );
      }, []);

      console.log(comments)

      function handleComments(updatedComments) {
        const updatedComments1 = comments.map((comments) => {
          if (comments.id === updatedComments.id) {
            return updatedComments;
          } else {
            return comments;
          }
        });
        setComments1(updatedComments1);
      }
    

  return (
    <div className="App"
    style = {newsStyle}
    >
      <header
      className="d-flex mx-auto justify-content-center"
      >
        Daily Prophet 
      </header>
      <Apple addArticle = {addArticles} articles = {articles}/>
      <Comments comments = {comments} showcomments={handleComments} />
      <DPCard articles = {articles}/>
    </div>
  );
}

export default App;
