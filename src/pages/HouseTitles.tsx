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
      <Profile 
        handle="stani"
      />
      <Profile 
        handle="0xdhruvv"
      />
      </Box>
    </>

  );
};

export default HouseTitles;
