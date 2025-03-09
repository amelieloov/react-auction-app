
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
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("User created successfully:", data);
    } catch (error) {
      console.error("Error creating user:", error);
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
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Assuming the backend returns the JWT token
    const token = data.token; // Adjust the path according to your API response structure

    // Store the token in localStorage
    localStorage.setItem("AuthToken", token);

    console.log("Successfully logged in:", token);
  } catch (error) {
    console.error("Error while logging in:", error);
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
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Successfully updated user:", data);
  } catch (error) {
    console.error("Error while updating user:", error);
  }
}

export {CreateUser, Login, UpdateUser};