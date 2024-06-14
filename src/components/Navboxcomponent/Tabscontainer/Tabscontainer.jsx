import React, { useState } from "react";
import "./Tabscontainer.css";
import ContentTabs from "./ContentTabs/ContentTabsfirst";
import ContentTabssecond from "./ContentTabs/ContentTabssecond";
import {updateNewPostText, AddPost} from '../../../redux/store';
import ContentTabsPhotos from "./ContentTabs/ContentTabsPhotos";
function Tabscontainer(props) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
    <div className="container">
      <div className="block-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Timeline
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          About
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Friends
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Photos
        </button>
      </div>

      <ContentTabs toggleState={toggleState} />
     

    </div>

    <div className="secondContainer">

    <ContentTabssecond toggleState={toggleState}  />

      
    </div>

    <div>
      
      <ContentTabsPhotos toggleState={toggleState}/>
    
    </div>

    </div>
  );
}

export default Tabscontainer;