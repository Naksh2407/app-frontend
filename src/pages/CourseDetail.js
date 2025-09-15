// src/pages/CourseDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  const { id } = useParams();

  return (
    <div className="main-content">
      <h1>Course Detail</h1>
      <p>Course ID: {id}</p>
      <p>This page will show the details and study material for the selected course.</p>
    </div>
  );
};

export default CourseDetail;
