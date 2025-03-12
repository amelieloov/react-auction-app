
const GetAuctionById = async (id) => {

  const url = `https://localhost:7242/api/Auction/${id}`;

  const data = await fetch(url).then(response => response.json());

  console.log("data", data);

  return data;
}

const SearchAuctions = async (condition) => {

  try {
    const response = await fetch(`https://localhost:7242/api/Auction/search?condition=${condition}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log(data);

    return data;

  } catch (error) {
    console.error("Error creating auction:", error);
  }
}


const GetAuctionsByUserID = async () => {

  const data = await fetch(`https://localhost:7242/api/Auction/userId`, {
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("AuthToken")}`,
    },
  }).then(response => response.json());

  return data;
}

const CreateAuction = async (auctionobject) => {

  console.log("auctionobject", auctionobject)
  try {
    const response = await fetch("https://localhost:7242/api/Auction/create", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("AuthToken")}`,
      },
      body: auctionobject
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || "An unexpected error occurred.");
    }

  } catch (error) {
    throw(error);
  }
};

const UpdateAuction = async (auctionobject) => {

  for (let [key, value] of auctionobject.entries()) {
    console.log(key, value);
}

  try {

    const response = await fetch(`https://localhost:7242/api/Auction/update`, {
      method: 'PUT',
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("AuthToken")}`,
      },
      body: auctionobject
    })

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || "An unexpected error occurred.");
    }

  } catch (error) {
    throw(error);
  }
}

const DeleteAuction = async (id) => {
  try{
    const response = await fetch(`https://localhost:7242/api/Auction?auctionid=${id}`, {
      method: 'DELETE',
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("AuthToken")}`,
      }
    })
  
    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || "An unexpected error occurred.");
    }
  } catch (error){
    throw(error)
  }
}

export { GetAuctionById, SearchAuctions, GetAuctionsByUserID, CreateAuction, UpdateAuction, DeleteAuction };