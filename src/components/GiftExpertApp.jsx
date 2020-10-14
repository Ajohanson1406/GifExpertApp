import React, {useState} from 'react';
import AddCategories from './AddCategories'
import '../styles/components/App.css';
import GifCard from './GifCard';

const GiftExpertApp = () => {


    /* const categories = ['One Punch', 'Samurai X', 'Dragon Ball']; */

    const [categories, setCategories] = useState(['Dragon Ball'])

    /* const handleAdd = () => {
        setCategories([...categories, 'HunterXhunter'])
    } */


  return (
    <div>
      <h2>GiftExpertApp</h2>
      <AddCategories setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifCard category={category} key={category} />
        ))}
      </ol>
    </div>
  );
};

export default GiftExpertApp;
