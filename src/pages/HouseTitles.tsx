import React from "react";
import {
  Profile, Theme
} from '@lens-protocol/widgets-react'
import Box from "@mui/material/Box";



const HouseTitles = () => {
  return (
    <>
    <Box style={{ textAlign: "center" }}>
      <h1 style={{ textShadow: "none" }}>Deeds</h1>
      <div className="monopoly-card" style={{ textShadow: "none", margin: "auto" }}>
   <div className="monopoly-card_title red" style={{ textShadow: "none", margin: "auto" }}>
      123 ABC Street...
   </div>
   <div className="monopoly-card_content" style={{ textShadow: "none" }}>
      <div className="description">Owner: derrick.eth</div>
      <div className="monopoly-money">Grantor: john.eth</div>
   
   </div>
   <div className="monopoly-card_footer" style={{ textShadow: "none", margin: "auto" }}>
      <div className="description">House Value:100.000.00 USDC</div>
 
   </div>  
</div>
      </Box>
    </>

  );
};

export default HouseTitles;
