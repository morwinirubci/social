import React from "react";
import Post from "./Post";
import { useForm } from "react-hook-form";

const MyPosts = (props) => {
 
  const {
    register,
    formState: { errors, isValid },
    reset,
    handleSubmit,
  } = useForm({ mode: "onBlur" });


  let onSubmit = (data) => {

        alert(data.textAreaField)
        props.addPost(data.textAreaField);
        reset();
  }

  let postElement = props.profilePage.postData.map((postNew) => (
    <Post id={postNew.id} message={postNew.message} likeCount={postNew.like} />
  ));






  return (
    <div className="posts">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            {...register("textAreaField",
            {required: true,
            minLength:{
              value: 5,
              message: "Минимум 5 символов"
            } })}
            placeholder="New post..."
          ></textarea>
          <div>{errors?.textAreaField && (<p>{errors?.textAreaField?.message || "Error"}</p>)}</div>
          <button disabled={!isValid}>Add post </button>
        </form>
      </div>
      <div>{postElement}</div>
    </div>
  );
};

export default MyPosts;
