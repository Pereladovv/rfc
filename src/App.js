import React, { useState } from "react";
import ClassCounter from "./ClassCounter";
import Counter from "./components/Counter";
import NewTest from "./components/NewTest";
import PostItem from "./components/PostItem";
import './styles/App.css';

function App() {
    const [value, setValue] = useState('Текст в инпуте')

  return (
    <div className="App">
       <PostItem/>
       <PostItem/>
       <PostItem/>
       <PostItem/>
       <PostItem/>
       <PostItem/>
    </div>
  );
}

export default App;
