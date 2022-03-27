import React from "react"

export default function TodoInput(props){
   const [complete, setComplete] = React.useState({
        isComplete : false
    })
   
    function handleComplete(event){
        const {name, checked} = event.target
        setComplete(prevComplete => {
            return {
                ...prevComplete,
                [name]: checked
            }
        })
    
    }
   
   
    return(
        <div className="listDiv">
          {!complete.isComplete &&  <section className="list">
                <input 
                    className="listItem"
                    type="checkbox"
                    id={props.id}
                    name="isComplete"
                    checked={complete.isComplete}
                    onChange={handleComplete}
                />
                <label className="listItemName">{props.item}</label> 
            </section> }
        </div>
    )
}