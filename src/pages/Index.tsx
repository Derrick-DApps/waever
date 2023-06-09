import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React, { Fragment, useEffect, useRef, useState } from "react";
import GraphicBackground from "../components/GraphicBackground";
import { useAccount, useConnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
// const provider = new ethers.JsonRpcProvider('https://8545-derricksope-scaffoldeth-yyiqw900tvt.ws-us92.gitpod.io');
const wallet = false; // TODO: remove this is just for testing
const Index = () => {

  const { address, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address })
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  console.log("address: ", address);

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p style={{textShadow: "none", margin: "auto", textAlign: "center"}}>Waever ensures that your legal rights to your home are safe with cutting edge digital assets and custody technology</p>
      <div style={{
        position: "absolute",
        top: "50%",
        margin: "auto",
        width: "100%",
        textAlign: "center"
      }}>
        {!isConnected
          ? <>
            <Box sx={{ flexGrow: 1 }}>
              <Button style={{
                width: "25em",
                height: "3em",
                backgroundColor: "blue",
                borderColor: "black",
                color: "white",
                boxShadow: "5px 5px #333333"
              }}
                onClick={() => { connect(); console.log("connected: ", isConnected) }}
                variant="outlined"><strong>Connect Wallet</strong></Button>
            </Box>
          </>
          : <>
            
            <Box sx={{ flexGrow: 1 }}>
              <Button style={{
                width: "25em",
                height: "3em",
                backgroundColor: "blue",
                borderColor: "black",
                color: "white",
                boxShadow: "5px 5px #333333"
              }}
                href="/titles"
                variant="outlined"><strong>View Title Deeds</strong></Button>
            </Box>
          </>
        }

      </div>
      
    </>

  );
};

export default Index;