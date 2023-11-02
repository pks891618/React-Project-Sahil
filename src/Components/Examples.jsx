import Section from "./Section.jsx"
import { EXAMPLES } from "../data.js";
import { useState } from 'react'
import TabButton from "./TabButton.jsx";

export default function Examples () {
    const [selectedTopic, setSelectedTopic]=useState();
    // let tabcontent = "Please Tap a Button..";
     function handleSelect(selectedButton)
     {
       //selectedButton =>'Components','Jsx', 'Props', 'State'
      // console.log("selectedbutoton>>>",selectedButton);
       setSelectedTopic(selectedButton);
       console.log(selectedTopic);
     }
    return(
    <Section title="Examples" id = "examples" >
          <h2>Examples.</h2>
          <menu>
              <TabButton 
                isSelected={selectedTopic ==='components'} 
                onSelect={() => handleSelect("components")}>Components
              </TabButton>
              <TabButton
                 isSelected={selectedTopic ==='jsx'} 
                 onSelect={() => handleSelect("jsx")}>Jsx
              </TabButton>
              <TabButton 
                  isSelected={selectedTopic ==='props'} 
                  onSelect={() => handleSelect("props")}>Props
              </TabButton>
              <TabButton
                  isSelected={selectedTopic ==='state'} 
                  onSelect={() => handleSelect("state")}>State
              </TabButton>
          </menu>
            {!selectedTopic && <p>Please Select a Topic..</p>} 
            {selectedTopic &&  (<div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>
                  {EXAMPLES[selectedTopic].code}
                  </code>
                </pre>
            </div>)}
              
        </Section>
    )
}