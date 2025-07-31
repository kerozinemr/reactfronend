import { useState } from 'react';
import api from '../services/api';

function Inputs() {
  const [formData, setFormData] = useState({
    start: '',
    pickup: '',
    dropoff: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/create-trip/', formData);
      console.log('Trip created:', response.data);
      alert('Trip created successfully!');
    } catch (error) {
      console.error('Error creating trip:', error.response?.data || error.message);
      alert('Error creating trip');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Current Location"
        value={formData.start}
        onChange={(e) => setFormData({ ...formData, start: e.target.value })}
      />
      <input
        type="text"
        placeholder="Pickup Location"
        value={formData.pickup}
        onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
      />
      <input
        type="text"
        placeholder="Dropoff Location"
        value={formData.dropoff}
        onChange={(e) => setFormData({ ...formData, dropoff: e.target.value })}
      />
      <button type="submit">Create Trip</button>
    </form>
  );
}

export default Inputs;