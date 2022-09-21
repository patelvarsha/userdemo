import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import StudentForm from './component/StudentForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-v5';
import StudentList from './component/StudentList';
import StudentEditPage from './component/StudentEditPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <Routes>

        <Route path="/" element={<StudentForm />} />
        <Route path="/studentlist" element={<StudentList />} />
        <Route path='/studentedit/:id' element={<StudentEditPage />} />

      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);
reportWebVitals();
