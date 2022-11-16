import axios from "axios";

const login = async (username, password) => {
  return await axios //Promised based HTTP Client for Javascript
    .post(
      `http://localhost:8080/api/user/login?username=` +
        username +
        `&password=` +
        password
    )
    .then((res) => res.data)
    .catch((error) => {
      return { isError: true, error: error };
    });
};

export default login;
