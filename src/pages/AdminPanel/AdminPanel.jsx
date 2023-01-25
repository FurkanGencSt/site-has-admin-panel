import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BlogForm from "../../components/Form/Blog Form/BlogForm";
import MyBlogForm from "../../components/Form/Blog Form/MyBlogForm";
const AdminPanel = () => {
  const user = useSelector((state) => state.login.user);
  const navigate = useNavigate();

  if (!user) {
    return navigate("/login");
  } else {
    return (
      <>
        {/* <BlogForm /> */}
        <MyBlogForm />
      </>
    );
  }
};

export default AdminPanel;
