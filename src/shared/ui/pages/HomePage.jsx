import React from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../../../features/auth/state/authSlice";

const HomePage = () => {
  let dispatch = useDispatch();
  return (
    <div>
      <h1>Home Page</h1>
      {/* <button
        onClick={() => {
          dispatch(removeUser());
          localStorage.removeItem("accessToken");
        }}
        className="border px-5 py-4 rounded-xl text-white bg-red-500 text-xl font-semibold cursor-pointer"
      >
        Logout
      </button> */}
    </div>
  );
};

export default HomePage;
