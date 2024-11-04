import React, { useEffect, useState } from 'react';

export default function Student() {
  const paperStyle = { padding: '50px 20px', width: '600px', margin: '20px auto', border: '1px solid #ddd', borderRadius: '8px' };
  const inputStyle = { margin: '10px 0', padding: '10px', width: '100%', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' };
  const buttonStyle = { padding: '10px 20px', backgroundColor: '#1976d2', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' };
  const listStyle = { margin: '10px', padding: '15px', textAlign: 'left', border: '1px solid #ddd', borderRadius: '4px' };
  
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [students, setStudents] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const student = { name, address };
    console.log(student);
    
    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student)
    }).then(() => {
      console.log("New Student added");
    });
  };

  useEffect(() => {
    fetch("http://localhost:8080/student/getAll")
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
  }, []);

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div style={paperStyle}>
        <h1 style={{ color: 'blue', textAlign: 'center' }}><u>Add Student</u></h1>
        <form style={{ display: 'flex', flexDirection: 'column' }} noValidate autoComplete="off">
          <input
            type="text"
            placeholder="Student Name"
            style={inputStyle}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Student Address"
            style={inputStyle}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <button type="submit" style={buttonStyle} onClick={handleClick}>Submit</button>
        </form>
      </div>

      <h1>Students</h1>
      <div style={paperStyle}>
        {students.map((student) => (
          <div style={listStyle} key={student.id}>
            <strong>Id:</strong> {student.id}<br />
            <strong>Name:</strong> {student.name}<br />
            <strong>Address:</strong> {student.address}
          </div>
        ))}
      </div>
    </div>
  );
}
