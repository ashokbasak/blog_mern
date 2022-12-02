import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Context } from "../../context/Context";
import "./singlePost.css";
import Navbar from "../navbar/Navbar";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

function SinglePost() {
  const { user } = useContext(Context);
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  // const [post, setPost] = useState({
  //   title: "",
  //   username: "",
  //   desc: "",
  // });
  // console.log(path);
 

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      // setUser(res.data.username);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      console.log(res.data);
      console.log(res.data.username);
    };
    getPost();
  }, [path]);
 

  return (
    <>
      <Navbar />
      <div
        className="card mb-3 mx-auto"
        style={{ width: "60rem", marginTop: "100px" }}
      >
        <img
          className="card-img-top singlePostImg"
          srcSet="https://mdbootstrap.com/img/new/standard/nature/184.webp"
          alt="Card image cap"
        ></img>
        <div className="card-body">
          {post.username === user?.username && (
            <div className="singlePostEdit">
              <EditIcon className="singlePostIcon" />
              <DeleteIcon className="singlePostIcon" />
            </div>
          )}
          <h5 className="card-title singlePostTitle">{post.title}</h5>

          <h6 className="card-title">{post.username}</h6>
          <p className="card-text">
            <small className="text-muted">
              {new Date(post.createdAt).toDateString()}
            </small>
          </p>
          <p className="h6 singlePostDesc">{post.desc}</p>
        </div>
      </div>

      {/* <div className="singlePost">
        <div className="singlePostWrapper">
          <img
            className="singlePostImg"
            srcSet="https://mdbootstrap.com/img/new/standard/nature/184.webp"
            alt=""
          />
          <h1 className="singlePostTitle">
          
            {post.title}
            <div className="singlePostEdit">
              <EditIcon className="singlePostIcon" />
              <DeleteIcon className="singlePostIcon" />
            </div>
          </h1>
          <div className="singlePostInfo">
            <span className="singlePostAuthor">
              Author: <b>{post.username}</b>
            </span>
            <span className="singlePostDate">
              <b> {new Date(post.createdAt).toDateString()}</b>
            </span>
          </div>
          <p className="singlePostDesc">
           {post.desc}
          </p>
        </div>
      </div> */}
    </>
  );
}

export default SinglePost;
