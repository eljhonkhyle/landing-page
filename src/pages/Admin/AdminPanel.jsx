import { useState, useEffect } from "react";
import axios from "axios";
import "./admin.css";

const AdminPanel = () => {
  const [property, setProperty] = useState({
    name: "",
    location: "",
    beds: "",
    baths: "",
    image: "",
    amenities: "",
    description: "",
  });
  const [properties, setProperties] = useState([]);

  const handleChange = (e) =>
    setProperty({ ...property, [e.target.name]: e.target.value });

  const fetchProperties = async () => {
    const res = await axios.get("http://localhost:5000/api/properties");
    setProperties(res.data);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/properties", property);
    fetchProperties();
    setProperty({
      name: "",
      location: "",
      beds: "",
      baths: "",
      image: "",
      amenities: "",
      description: "",
    });
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/properties/${id}`);
    fetchProperties();
  };

  return (
    <div className="admin-container">
      {/* Form Section */}
      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Property Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleChange}
        />
        <input
          type="number"
          name="beds"
          placeholder="Beds"
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <textarea
          name="amenities"
          placeholder="Amenities"
          onChange={handleChange}
        ></textarea>
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        ></textarea>
        <button type="submit">Add Property</button>
      </form>

      {/* Property List */}
      <div className="property-list">
        <h3>Property List</h3>
        {properties.map((item) => (
          <div key={item._id} className="property-item">
            <h4>{item.name}</h4>
            <p>{item.location}</p>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
