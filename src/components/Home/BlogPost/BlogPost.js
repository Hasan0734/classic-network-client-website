import React from "react";
import "./BlogPost.css";

const BlogPost = ({ blog }) => {
  return (
    <div className="col-md-4 mt-4">
      <div className="card blog-card">
        <img className="card-img-top" src={blog.img} alt="Imgage here" />
        <div className="card-body">
          <h5 className="card-title">{blog.title}</h5>
          <p className="card-text">
            {blog.description}.{" "}
            <a className="text-danger" href="#">
              Read More
            </a>
          </p>
          <div className="d-flex">
            <img className="author-img" src={blog.authorImg} alt="" />
            <div className="author">
              <h6>by {blog.author}</h6>
              <small>{blog.date}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
