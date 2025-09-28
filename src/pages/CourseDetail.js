import React from 'react';
import { useParams } from 'react-router-dom';

export default function CourseDetail(){
  const { id } = useParams();
  return (
    <div className="section">
      <h1>Course - Class {id}</h1>
      <p>This page will contain study material for Class {id}. You can add PDFs, videos, and quizzes here.</p>
    </div>
  );
}
