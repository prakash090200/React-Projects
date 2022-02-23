
import './App.css';
import { BrowserRouter } from 'react-router-dom';
// import Project1 from './Mycomponent/Project1'
// import Part1 from './Project_0/Part1'
// import Part2 from './Project_0/Part2'
// import Search_dropdown from './project_3/Search_dropdown'
// import Todo from './Project_2/Todo'
// import Router from './Project_4/Router'
// import Getapi from './Project_5/Getapi';
import Pikachu_api from './Project_5/Pikachu_api';

function App() {
  return (
    <div className="App">
      {/* <Project1/> */}

      {/*        project 0 INC AND DESC        */}

      {/* <Part1/>   
          <Part2/>    */}
      {/* <Todo /> */}
      {/* <Search_dropdown/> */}
      <Pikachu_api/>
      {/* <BrowserRouter><Router/></BrowserRouter> */}
      
    </div>
  );
}

export default App;
