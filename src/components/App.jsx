import React, { useState } from 'react';
import { Header } from './Header';
import { ItemList } from './ItemList';
import { InputFiled } from './InputField';


function App() {

  const [texts, setTexts] = useState([]);


  function addText(text) {
    setTexts(prevTexts => [...prevTexts, text])
  }

  function deleteitem(id) {
    setTexts(prevTexts => (
      prevTexts.filter((text, index) => (id !== index))
    ))
  }


  return (
    <div className="container">
      <Header />
      <InputFiled addText={addText} />
      <ItemList deleteitem={deleteitem} texts={texts} />
    </div>
  );
}

export default App;
