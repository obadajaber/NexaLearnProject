"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { initialTasks } from "@/data/initialTasks";

// TODO 1: Create TaskContext
const TaskContext = createContext(null);

const STORAGE_KEY = "studentflow-tasks";

export function TaskProvider({ children }) {
  // TODO 2: Initialize tasks state with initialTasks
  const [tasks, setTasks] = useState(initialTasks);

  // TODO 3: Load saved tasks from localStorage on initial mount (useEffect)
  // We do this in useEffect (not during render) because localStorage is a
  // browser-only API and doesn't exist on the server. Reading it during the
  // initial render would cause a hydration mismatch.
  useEffect(() => {
    const savedTasks = localStorage.getItem(STORAGE_KEY);
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // TODO 4: Save tasks to localStorage when tasks change (useEffect)
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  // TODO 5: Implement addTask(newTask)
  function addTask(newTask) {
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  }

  // TODO 6: Implement toggleTask(taskId)
  function toggleTask(taskId) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: task.status === "completed" ? "pending" : "completed",
            }
          : task
      )
    );
  }

  // TODO 7: Implement deleteTask(taskId)
  function deleteTask(taskId) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        toggleTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
}
