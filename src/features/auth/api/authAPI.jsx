import { api } from "../../../config/api";

export const loginUserApi = async (credentials) => {
  try {
    let res = await api.post("/auth/login", credentials);
    // console.log("response from login ", res);
    localStorage.setItem("accessToken", res.data.accessToken);
    return res.data;
  } catch (error) {
    console.log("error in login api", error);
  }
};

export const hydrateUser = async () => {
  let accessToken = localStorage.getItem("accessToken");
  try {
    let res = await api.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    // console.log("response from login ", res);
    return res.data;
  } catch (error) {
    console.log("error in hydration", error);
  }
};
