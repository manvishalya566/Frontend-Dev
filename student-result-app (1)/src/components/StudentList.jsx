import React from 'react';

export default function StudentList({ students, onLoad, onAdd, onEdit, onDelete, onView }) {
  return (
    <div>
      <div style={{ marginBottom: 12 }}>
        <button onClick={onLoad}>Load Students</button>{' '}
        <button onClick={onAdd}>Add Student</button>
      </div>

      {students.length === 0 ? (
        <p>No students loaded. Click "Load Students".</p>
      ) : (
        <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Section</th>
              <th>Marks</th>
              <th>Grade</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map(s => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.section}</td>
                <td>{s.marks}</td>
                <td>{s.grade}</td>
                <td>
                  <button onClick={() => onEdit(s)}>Edit</button>{' '}
                  <button onClick={() => onDelete(s)}>Delete</button>{' '}
                  <button onClick={() => onView(s)}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
