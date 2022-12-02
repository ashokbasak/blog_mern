import React, { useState } from "react";
import { useLocation } from "react-router";
import "./write.css";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

function Write() {
  const [blog, setBlog] = useState({
    title: "",
    username: "",
    desc: "",
  });
  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;

    setBlog({ ...blog, [name]: value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const { title, username, desc } = blog;
    const res = await fetch("/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        username,
        desc,
      }),
    });
    const blogData = res.json();

    if (blogData) {
      window.alert("Your blog posted successfully");
      window.location.replace("/");
    }
    console.log(blogData);
  };
  //action="/compose"
  return (
    <form method="POST">
      <div className="form-group">
        <label htmlFor="fileInput">
          <ControlPointIcon className="formIcon" />
          Add an Image
        </label>
        <br />
        <input type="file" id="fileInput" style={{ display: "none" }} />
        <br />
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          name="title"
          value={blog.title}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          name="username"
          value={blog.username}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          type="text"
          className="form-control"
          name="desc"
          value={blog.desc}
          onChange={handleChange}
          rows="3"
        ></textarea>
      </div>
      <button type="submit" onClick={handleClick} className="btn btn-primary">
        Publish
      </button>
    </form>
  );
}

export default Write;
