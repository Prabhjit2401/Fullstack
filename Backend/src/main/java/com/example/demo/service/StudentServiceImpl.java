package com.example.demo.service;

import com.example.demo.model.Student;
import com.example.demo.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService{

    private final StudentRepository studentRepository;

    @Autowired
    StudentServiceImpl(StudentRepository studentRepository)
    {
        this.studentRepository = studentRepository;
    }

    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    public void deleteStudent(Integer studentId){
//        studentRepository.deleteById(studentId);
        boolean exists = studentRepository.existsById(studentId);
        if(!exists)
        {
            throw new IllegalArgumentException("The Id "+ studentId +" doesn't exists");
        }
        studentRepository.deleteById(studentId);
    }

    // use cntrl + o to auto type the required code from the iterface
    @Override
    public List<Student> getStudents() {
        return studentRepository.findAll();
    }
}
