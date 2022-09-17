package com.example.demo.controller;

import com.example.demo.model.Student;
import com.example.demo.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/student")
@RestController
public class StudentController {

    private final StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService)
    {
        this.studentService  = studentService;
    }

    @PostMapping("/add")
    public String SaveStudent(@RequestBody Student student)
    {
        studentService.saveStudent(student);
        return "new student is added";
    }

    @GetMapping("getAll")
    public List<Student> getStudent()
    {
        return studentService.getStudents();
    }

}
