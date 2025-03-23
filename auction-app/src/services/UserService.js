
export const createUser = async (userData) => {

    try {
      const response = await fetch("https://localhost:7242/api/User/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "An unexpected error occurred.");
      }

    } catch (error) {
      throw(error);
    }
  };


export const loginUser = async (loginData) => {
  try {
    const response = await fetch("https://localhost:7242/api/User/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "An unexpected error occurred.");
    }

    const token = data.token;
    localStorage.setItem("AuthToken", token);

    return !!token;

  } catch (error) {
    throw(error);
  }
}

export const updateUser = async (userData) => {

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
      throw new Error(data.message || "An unexpected error occurred.");
    }

    const data = await response.json();

  } catch (error) {
    throw(error);
  }
}

export const getUser = async () => {
  const response = await fetch("https://localhost:7242/api/User", {
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("AuthToken")}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message || "An unexpected error occurred.");
  }
  
  return data;
}