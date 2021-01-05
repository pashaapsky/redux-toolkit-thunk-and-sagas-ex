import React, {Fragment} from "react";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import FetchedPosts from "./components/FetchedPosts";

function App() {
  return (
      <Fragment>
          <div>

              <PostForm />
          </div>

          <div>
              <h1>Синхронные посты</h1>
              <Posts />
          </div>

          <div>
              <h1>Асинхронные посты</h1>
              <FetchedPosts />
          </div>
      </Fragment>
  );
}

export default App;
