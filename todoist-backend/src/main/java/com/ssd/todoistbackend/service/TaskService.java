package com.ssd.todoistbackend.service;

import com.ssd.todoistbackend.DTO.TaskDTO;
import com.ssd.todoistbackend.model.Task;
import com.ssd.todoistbackend.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class TaskService {
    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public void addTask(TaskDTO task) {
        Task newTask = Task.builder()
                .id(task.getId())
                .name(task.getName())
                .description(task.getDescription())
                .build();
        taskRepository.save(newTask);
    }

    public List<Task> getTasks() {
        return taskRepository.findAll();
    }

    // Handle Null in future
    public Task getTask(Long id) {
        Optional<Task> task = taskRepository.findById(id);
        if(task.isPresent())    return task.get();
        throw new NoSuchElementException("No Task with given id: " + id);
    }

    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }
}
