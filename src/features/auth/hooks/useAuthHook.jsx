import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { loginUserApi } from "../api/authAPI";
import { useDispatch } from "react-redux";
import { addUser } from "../state/authSlice";
import { toast } from "react-toastify";

export const useAuth = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registerForm = (data) => {
    console.log(data);
  };

  const loginForm = async (data) => {
    try {
      //  api call
      let response = await loginUserApi(data);
      dispatch(addUser(response));
      toast.success("User logged in!")
    } catch (error) {
      console.log(error);
    }
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    registerForm,
    loginForm,
  };
};
