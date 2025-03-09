
const GetAuctionById = async (id) => {

    const url = `https://localhost:7242/api/Auction/${id}`;

    const data = await fetch(url).then(response => response.json());

    console.log("data", data);

    return data;
}

const SearchAuctions = async (condition) => {

    const url = `https://localhost:7242/api/Auction/search?condition=${condition}`;

    const data = await fetch(url).then(response => response.json());

    console.log("data", data);

    return data;
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
              "Authorization": `Bearer ${localStorage.getItem("AuthToken")}`, // Attach token here
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

const UpdateAuction = async (id, auctionobject) => {
    const url = `https://localhost:7242/api/Auction/update/auctionId?auctionid=${id}`

    await fetch(url), {
        method: PUT,
        body: JSON.stringify(auctionobject),
        headers: {
            'Content-Type': 'application/json'
        }
    }

}

const DeleteAuction = async (id) => {
    const url = `https://localhost:7242/api/Auction?auctionid=${id}`
 
    await fetch(url), {
        method: DELETE,
    }
}

export {GetAuctionById, SearchAuctions, GetAuctionsByUserID, CreateAuction, UpdateAuction, DeleteAuction};