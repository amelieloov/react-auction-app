
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
  try {
    const response = await fetch("https://localhost:7242/api/User/login", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || "An unexpected error occurred.");
    }

    console.log("Successfully updated user:", data);
  } catch (error) {
    console.error("Error while updating user:", error);
  }
}

export {CreateUser, Login, UpdateUser};