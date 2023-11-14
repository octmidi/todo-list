import { useState } from 'react'
import './App.css'

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { InputGroup, FormControl, ListGroup, Badge } from 'react-bootstrap';

function App() {

  const [inputText, setInputText] = useState('');
  const [listItems, setListItems] = useState([]);

  const handleInputChange = (e) => {
    const capitalizedText = e.target.value
      .toLowerCase()  // Convierte todo a minúsculas
      .replace(/\b\w/g, (char) => char.toLocaleUpperCase());  // Convierte la primera letra de cada palabra en mayúscula

    setInputText(capitalizedText);



  }

  const handleAddItem = () => {
    if (inputText.trim() !== '') {
      setListItems([...listItems, inputText]);
      setInputText('');
    }
  };

  const handleKeyPress = (e) => {
    const regex = /^(?=[a-zA-Z]{2})[\s\w\d]*$/;

    if (e.key === 'Enter') {
      if (regex.test(inputText)) {

        handleAddItem();
      } else {
        setInputText('');
        alert('Las cadena no cumple con los requisitos mínimos. Los primeros dos caracteres deben ser letras');

      }
    }

  };

  const handleRemoveItem = (index) => {
    const updatedList = [...listItems];
    updatedList.splice(index, 1);
    setListItems(updatedList);
  }

  return (
    <>
      <div className='div-back'><h1>Todos</h1></div>
      <div className='list'>

        <ListGroup className='group'>

          <InputGroup className="mb-3">
            <FormControl
              type="text"
              value={inputText}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
              placeholder="Ingrese un elemento y presione Enter"
            />

          </InputGroup>
          {listItems.map((item, index) => (
            <ListGroup.Item key={index} className='left-aligned-item'>{item}
              <Badge bg="Light" pill className='icon' onClick={() => handleRemoveItem(index)}>
                '❌'
              </Badge>

            </ListGroup.Item>

          ))}
        </ListGroup>
      </div>
    </>

  )
}

export default App
