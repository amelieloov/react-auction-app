const AddBid = async (bidData) => {
    try {
      const response = await fetch("https://localhost:7242/api/Bid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bidData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Bid created successfully:", data);
    } catch (error) {
      console.error("Error creating bid:", error);
    }
  };


  const DeleteBid = async (id) => {
    try {
      const response = await fetch(`https://localhost:7242/api/Bid?bidId=${id}`, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Bid deleted successfully:", data);
    } catch (error) {
      console.error("Error deleting bid:", error);
    }
  };

  const GetBidsByUserID = async () => {

    const data = await fetch(`https://localhost:7242/api/Bid`, {
      headers: {
          "Authorization": `Bearer ${localStorage.getItem("AuthToken")}`, // Attach token here
      },
    }).then(response => response.json());

    console.log("bidsbyuserid", data);

    return data;
}

export {AddBid, DeleteBid, GetBidsByUserID};