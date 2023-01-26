import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import style from "./style.module.css";

const HookForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    setError,
    clearErrors,
  } = useForm({
    mode: "onBlur",
  });
  

  const onSubmit = (data) => {
    debugger
    props.loginThunkCreator(data.firstName, data.lastName, data.rememberMe, setError)
    reset();
  };

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <label>
          Login
          <input
            {...register("firstName", {
              required: true,
              minLength: {
                value: 5,
                message: "Минимум 5 символов",
              },
            })}
            onFocus={() => {clearErrors()}}
          />
          <div>
            {errors?.firstName && (
              <p>{errors?.firstName?.message || "Error!"}</p>
            )}
          </div>
        </label>
        <label>
          Password
          <input
            {...register("lastName", {
              required: true,
              minLength: {
                value: 5,
                message: "Минимум 5 символов",
              },
            })}
           type={"password"}
           onFocus={() => {clearErrors()}}

          />
        </label>
        <div>
          {errors?.lastName && <p>{errors?.lastName?.message || "Error!"}</p>}
        </div>

        <label>
          <input
            type="checkbox"
           
            {...register("rememberMe", { required: true })}
          />
          <span>Remember Me</span>
        </label>
        <input type="submit" disabled={!isValid} />
        {errors.server && <div style={{color:'red'}}>{errors.server.message}</div>}
      </form>
    </>
  );
};

export default HookForm;
