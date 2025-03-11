
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
      "Authorization": `Bearer ${localStorage.getItem("AuthToken")}`, // Attach token here
    },
  }).then(response => response.json());

  console.log("auctionsbyuserid", data);

  return data;
}

const CreateAuction = async (auctionobject) => {

  try {
    const response = await fetch("https://localhost:7242/api/Auction/create", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("AuthToken")}`,
      },
      body: auctionobject
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // const data = await response.json();
    // console.log("Auction created successfully:", data);
  } catch (error) {
    console.error("Error creating auction:", error);
  }
};

const UpdateAuction = async (auctionobject) => {

  try {

    const response = await fetch(`https://localhost:7242/api/Auction/update`, {
      method: 'PUT',
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("AuthToken")}`,
      },
      body: auctionobject
    })

    // const data = await response.json();

    if (!response.ok) {
      const data = await response.json();  // Parse the response body only if it's not OK
      throw new Error(data.message || "An unexpected error occurred.");
    }
    // const data = await response.json();
    // console.log("Auction created successfully:", data);
  } catch (error) {
    throw(error);
  }
}

const DeleteAuction = async (id) => {
  const url = `https://localhost:7242/api/Auction?auctionid=${id}`

  await fetch(url), {
    method: 'DELETE',
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("AuthToken")}`,
    }
  }
}

export { GetAuctionById, SearchAuctions, GetAuctionsByUserID, CreateAuction, UpdateAuction, DeleteAuction };