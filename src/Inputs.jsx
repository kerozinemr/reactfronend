import { useState } from 'react';
import axios from 'axios';
import './Inputs.css';


function Inputs(){

  const [formData, setFormData] = useState({
    pickup: '',
    dropoff: '',
    current: ''
  });

  // 👇 PASTE THE API CALL CODE HERE 👇
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8000/api/create-trip/', {
        start: { lat: 40.7128, lng: -74.0060 },    // NYC
        pickup: { lat: 40.7589, lng: -73.9851 },   // Times Square
        dropoff: { lat: 40.6892, lng: -74.0445 }   // Statue of Liberty
      });
      
      console.log('Trip created:', response.data);
      alert('Trip created successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Error creating trip');
    }
  };

    return(
        <>
        














  <form onSubmit={handleSubmit}>
    <input 
        type="text"
        placeholder="Current Location" 
        value={formData.start}
        onChange={(e) => setFormData({...formData, start: e.target.value})}
      />
      <input 
        type="text"
        placeholder="Pickup Location" 
        value={formData.pickup}
        onChange={(e) => setFormData({...formData, pickup: e.target.value})}
      />
      <input 
        type="text"
        placeholder="Dropoff Location" 
        value={formData.dropoff}
        onChange={(e) => setFormData({...formData, dropoff: e.target.value})}
      />
      <button type="submit">Create Trip</button>
    </form>
    <div style={{backgroundColor:'white', width:'150px',height:'150px'}}>

    </div>

        </>
    );
}

export default Inputs