package com.goats.TodoList.Services;

import com.goats.TodoList.Models.Task;
import com.goats.TodoList.Repository.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Services {

    @Autowired
    private Repository repo;

    public List<Task> findAll(){
        return repo.findAll();
    }

    public Task update(Task task){
        Task existTask = repo.findById(task.getId()).orElseThrow(() -> new RuntimeException("Task ID not Found" + task.getId()));
        existTask.setName(task.getName());
        existTask.setStatus(task.isStatus());

        return repo.save(existTask);
    }

    public Task add(Task task){
        return repo.save(task);
    }






}
