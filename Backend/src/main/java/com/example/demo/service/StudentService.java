package com.example.demo.service;

import com.example.demo.model.Student;

import java.util.List;

public interface StudentService {

    public Student saveStudent(Student student);

    public void deleteStudent(Integer studentId);

    public List<Student> getStudents();
}
