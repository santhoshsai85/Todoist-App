package com.ssd.todoistbackend.controller;

import com.ssd.todoistbackend.DTO.TaskDTO;
import com.ssd.todoistbackend.model.Task;
import com.ssd.todoistbackend.service.TaskService;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@Slf4j
@RestController
@RequestMapping("/api/v1/tasks")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> addTask(@Valid @RequestBody TaskDTO task) {
        try {
            log.info("Adding task: {} to DB", task.toString());
            taskService.addTask(task);
            return ResponseEntity.status(HttpStatus.CREATED).body("Added Task to DB");
        } catch (Exception e) {
            log.error(e.toString());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public ResponseEntity<List<Task>> getTasks() {
        log.info("Get all tasks");
        return ResponseEntity.ok(taskService.getTasks());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Task> getTask(@PathVariable Long id) {
        try {
            log.info("Get task with id: {}", id);
            return ResponseEntity.ok(taskService.getTask(id));
        } catch (Exception e) {
            log.error(e.getMessage());
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTask(@PathVariable Long id) {
        try {
            log.info("Deleting task with id: {}", id);
            taskService.deleteTask(id);
            return ResponseEntity.ok("Deleted Task");
        } catch (Exception e) {
            log.error(e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}