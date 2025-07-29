package com.goats.TodoList.Repository;

import com.goats.TodoList.Models.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Repository extends JpaRepository <Task,Integer> {

}
