package com.example.demo.controller;

import com.example.demo.model.Student;
import com.example.demo.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/student")
@RestController
@CrossOrigin
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

    @DeleteMapping(path="{studentId}")
    public String deleteStudent(@PathVariable("studentId") Integer studentId){
        studentService.deleteStudent(studentId);
        return("student with id "+ studentId + " has been deleted");
    }

}

//DELETE http://localhost:8080/api/v1/student/{{studentId}}