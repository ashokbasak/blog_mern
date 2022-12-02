import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import axios from "axios";
import { Link } from "react-router-dom";
//import Posts from "../posts/Posts";

import "./home.css";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("./posts")
      .then((res) => {
        const data = res.data;
         setPosts(data);
       
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //xs={12} md={8} sm={12}
  return (
    <>
      <Header />

      <div className="row">
        {posts.map((post, index) => {
          return (
            <div className="col-lg-4 col-md-4 col-sm-4 col-10 d-block m-auto">
              <div className="card mt-5 ml-3" style={{ width: "25rem" }}>
                <img
                  className="card-img-top"
                  src="https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
                  alt=""
                ></img>
                <div className="card-body">
                  <h4 className="card-title" key={index.id}>
                    {post.title}
                  </h4>
                  <h6 className="card-title" key={index.id}>
                    {post.username}
                  </h6>
                  <p className="card-text postDesc" key={index.id}>
                    {post.desc}
                  </p>

                  <div className="text-center" key={index.id} >
                    <a href={`/posts/${post._id}`}class="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* {posts.map((post, index) => {
        return (
          <Card
            className="text-center  mx-auto"
            style={{ width: "600px", marginTop: "60px" }}
          >
            <Card.Img
              variant="top"
              style={{ height: "200px", objectFit: "cover" }}
              src="https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
            />
            <Card.Body>
              <Card.Title key={index.id}>{post.title}</Card.Title>
              <Card.Subtitle className="mb-2" key={index.id}>
                {post.username}
              </Card.Subtitle>
              <Card.Text>{post.desc}</Card.Text>
              <div className="text-center">
                <Button variant="primary">Read More</Button>
              </div>
            </Card.Body>
          </Card>
        );
      })} */}
    </>
  );
}

export default Home;
