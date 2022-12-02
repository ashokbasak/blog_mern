
import Post from "../post/Post";
import "./posts.css";


function Posts({posts}) {
 

  return (
    <div className="post">
      {posts.map((post) => {
        return (
          <Post
            post={post}
            key={post.id}
            // id={index}
            // title={post.title}
            // author={post.author}
            // desc={post.desc}
          />
        );
      })}
    </div>
  );
}

export default Posts;
