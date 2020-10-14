import React, {useState} from 'react';
import propTypes from 'prop-types'
import '../styles/components/App.css';

const AddCategories = ({setCategories}) => {

    const [Input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if( Input.trim().length > 2){
        setCategories( categories => [Input,...categories])
        setInput('');
        }

    }

    return (
      <form onSubmit={handleSubmit}>
        <input placeholder="Busca tu GIF" type="text" value={Input} onChange={handleInputChange} />
      </form>
    );

}

AddCategories.propTypes = {
    setCategories:  propTypes.func.isRequired
}

export default AddCategories;