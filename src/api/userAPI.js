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
  // return await fetch(`http://localhost:8080/api/user/login`, {
  //   method: "GET",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     username,
  //     password,
  //   }),
  // })
  //   .then((res) => console.log(res))
  //   .catch((error) => {
  //     console.log(error);
  //   });
};

export default login;
