import TreeMenu from "./TreeMenu";
import menus from "./menus";

function App() {

  return (
    <>
      <div className="menu-container">
        <TreeMenu menus = {menus}/>
      </div>    
    </>
  )
}

export default App
