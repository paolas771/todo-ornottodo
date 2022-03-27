import React from "react"
import TodoInput from "./components/TodoInput"

export default function App() {
  const [todoItems, setTodoItems] = React.useState({
      item: "",
  })
  const [list, setList] = React.useState([])
  function handleInput(event){
    const {name, value} = event.target
    setTodoItems(prevItem => {
      return{
        ...prevItem,
        [name] : value
      }
    
    })
  }
  function handleSubmit(e){
    e.preventDefault()
    var listItems = todoItems.item
    setList(prevList => {
      return[
        ...prevList,
        listItems
      ]
    })
    setTodoItems(prevItem => {
      return{
        ...prevItem,
        item : ""
      }
    })
  }


  const toDoListItems = list.map((things, index) => {
      return(
        <TodoInput 
          key={index}
          id={index}
          item = {things}
        />
      )
  })
  return (
    <main className="App">
      <div>
        <h1 className="appName">TO DO OR NOT TO DO</h1>
      </div>
      <div className="divForm">
        <form onSubmit={handleSubmit} className="itemForm">
          <input 
            className="itemInput"
            type="text"
            name="item"
            value={todoItems.item}
            onChange={handleInput}          
          />
          <br />
          <button className="button">ADD</button>
        </form>
        {toDoListItems}
      </div>
    </main>
  )
}


