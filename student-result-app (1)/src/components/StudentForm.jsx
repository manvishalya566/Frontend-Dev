import React, { useState } from 'react';

export default function StudentForm({ initialData, onSubmit, onCancel }) {
  const [name, setName] = useState(initialData ? initialData.name : '');
  const [section, setSection] = useState(initialData ? initialData.section : '');
  const [marks, setMarks] = useState(initialData ? initialData.marks : '');
  const [grade, setGrade] = useState(initialData ? initialData.grade : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      id: initialData ? initialData.id : undefined,
      name: name.trim(),
      section: section.trim(),
      marks: Number(marks),
      grade: grade.trim()
    };
    onSubmit(payload);
  };

  return (
    <div>
      <h2>{initialData ? 'Edit Student' : 'Add Student'}</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 8 }}>
          <label>
            Name:
            <input value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
        </div>
        <div style={{ marginBottom: 8 }}>
          <label>
            Section:
            <input value={section} onChange={(e) => setSection(e.target.value)} required />
          </label>
        </div>
        <div style={{ marginBottom: 8 }}>
          <label>
            Marks:
            <input type="number" value={marks} onChange={(e) => setMarks(e.target.value)} required />
          </label>
        </div>
        <div style={{ marginBottom: 8 }}>
          <label>
            Grade:
            <input value={grade} onChange={(e) => setGrade(e.target.value)} required />
          </label>
        </div>

        <div>
          <button type="submit">Save</button>{' '}
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
