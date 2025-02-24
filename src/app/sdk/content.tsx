
import { useEffect, useState } from "react";
import getContentTypes from "./getContentTypes";
import getEntries from "./getEntries";
import initializeContentstackSdk from "./utils";



const Content = async ({entry} : {entry:any}) => {
    
    const entries = await getEntries(entry);

    return (
      <div>
        <h2>{entries?.title || "No title available"}</h2>
          <img src={entries?.imageUrl} alt="Content Image" width="200" />
      </div>
    );
  };
  
  export default Content;