import React, { useState } from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';
import studentService from './services/studentService';

export default function App() {
  const [students, setStudents] = useState([]);
  const [mode, setMode] = useState('list'); // 'list' | 'add' | 'edit' | 'details'
  const [selected, setSelected] = useState(null);

  // Load students (only when button clicked)
  const loadStudents = async () => {
    try {
      const data = await studentService.getAll();
      setStudents(data);
      alert('Students loaded.');
    } catch (err) {
      alert('Failed to load students: ' + err.message);
    }
  };

  const onAddClick = () => {
    setSelected(null);
    setMode('add');
  };

  const onEditClick = (student) => {
    setSelected(student);
    setMode('edit');
  };

  const onViewClick = (student) => {
    setSelected(student);
    setMode('details');
  };

  const onDeleteClick = async (student) => {
    if (!window.confirm(`Delete ${student.name}?`)) return;
    try {
      await studentService.deleteStudent(student.id);
      alert('Student deleted. Click "Load Students" to refresh list.');
    } catch (err) {
      alert('Delete failed: ' + err.message);
    }
  };

  const handleFormSubmit = async (formData) => {
    try {
      if (mode === 'add') {
        await studentService.createStudent(formData);
        alert('Student added. Click "Load Students" to refresh list.');
      } else if (mode === 'edit') {
        await studentService.updateStudent(formData.id, formData);
        alert('Student updated. Click "Load Students" to refresh list.');
      }
      setMode('list');
      setSelected(null);
    } catch (err) {
      alert('Save failed: ' + err.message);
    }
  };

  const handleCancel = () => {
    setMode('list');
    setSelected(null);
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>Student Result App</h1>
      {mode === 'list' && (
        <StudentList
          students={students}
          onLoad={loadStudents}
          onAdd={onAddClick}
          onEdit={onEditClick}
          onDelete={onDeleteClick}
          onView={onViewClick}
        />
      )}

      {(mode === 'add' || mode === 'edit') && (
        <StudentForm
          initialData={selected}
          onSubmit={handleFormSubmit}
          onCancel={handleCancel}
        />
      )}

      {mode === 'details' && selected && (
        <StudentDetails student={selected} onBack={handleCancel} />
      )}
    </div>
  );
}
