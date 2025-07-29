package com.goats.TodoList;

import com.goats.TodoList.Models.Task;
import com.goats.TodoList.Services.Services;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class WebController {

    @Autowired
    private Services service;

    @RequestMapping("/findall")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Task> findall(Model model){
        return service.findAll();
    }

    @PostMapping("/add")
    @CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
    public Task add(@RequestBody Task task, HttpSession session) {

        Task saved = service.add(task);
        session.setAttribute("lastTask", saved);
        return saved;
    }

    @PutMapping("/update")
    @CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
    public Task update(@RequestBody Task task){
        return service.update(task);
    }













}
