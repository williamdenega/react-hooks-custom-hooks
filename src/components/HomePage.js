import React, { useEffect } from "react";
import About from "./About";
import ArticleList from "./ArticleList";
import useQuery from "../hooks/useQuery";


function HomePage() {
  // fetch data for posts
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [posts, setPosts] = useState([]);

  const {data:posts, isLoaded} = useQuery("http://localhost:4000/posts")


  // set the document title
  useEffect(() => {
    document.title = "Underreacted | Home";
  }, []);

  return (
    <>
      <About />
      {isLoaded ? <ArticleList posts={posts} /> : <h3>Loading...</h3>}
    </>
  );
}

export default HomePage;
