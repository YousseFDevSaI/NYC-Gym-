import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminTable() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({});
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    // Make GET request to server to retrieve data
    axios.get('http://localhost:3000/api/admin').then(res => {
      setData(res.data);
    });
  }, []);

  const handleEdit = (user) => {
    setFormData(user);
    setEditing(true);
  }

  const handleDelete = (id) => {
    // Display confirmation dialog and make DELETE request to server if confirmed
    if (window.confirm('Are you sure you want to delete this user?')) {
      axios.delete(`http://localhost:3000/api/admin/${id}`).then(res => {
        setData(data.filter(item => item._id !== id));
      });
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editing) {
      // Make PUT request to update data
      axios.put(`http://localhost:3000/api/admin/${formData._id}`, formData).then(res => {
        setData(data.map(item => (item._id === formData._id ? formData : item)));
      });
    }
    setEditing(false);
    setFormData({});
  }

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <div>
      {editing ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact</label>
            <input type="text" className="form-control" id="contact" name="contact" value={formData.contact} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
          <button type="button" className="btn btn-secondary" onClick={() => setEditing(false)}>Cancel</button>
        </form>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>{item.address}</td>
                <td>
                  <button className="btn btn-secondary btn-edit" onClick={() => handleEdit(item)}>Edit</button>
                  <button className="btn btn-danger btn-delete" onClick={() => handleDelete(item._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminTable;

