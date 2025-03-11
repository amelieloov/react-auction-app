
const CreateUser = async (userData) => {
    try {
      const response = await fetch("https://localhost:7242/api/User/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "An unexpected error occurred.");
      }

      console.log("User created successfully:", data);
    } catch (error) {
      throw(error);
    }
  };


const Login = async (loginData) => {
  try {
    const response = await fetch("https://localhost:7242/api/User/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || "An unexpected error occurred.");
    }

    const data = await response.json();
    const token = data.token;
    localStorage.setItem("AuthToken", token);

    if(token){
      return true;
    }
  } catch (error) {
    throw(error);
  }
}

const UpdateUser = async (userData) => {

  console.log("userdata", userData);

  try {
    const response = await fetch("https://localhost:7242/api/User", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("AuthToken")}`
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const data = await response.json();
      console.log("json data", data);
      throw new Error(data.message || "An unexpected error occurred.");
    }

    const data = await response.json();
    console.log("json data", data);

  } catch (error) {
    throw(error);
  }
}

const GetUser = async () => {
  const response = await fetch("https://localhost:7242/api/User", {
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("AuthToken")}`, // Attach token here
    },
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message || "An unexpected error occurred.");
  }

  const data = await response.json();
  console.log("user", data);

  return data;
}

export {CreateUser, Login, UpdateUser, GetUser};