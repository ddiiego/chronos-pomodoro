import type { TaskModel } from "./TaskModel"

// Estado -> Componete -> Filhos

export type TaskStateModel = {
  tasks: TaskModel[]; // histórico, MainForm
  secondsRemaining: number; // Home, CountDown, Histórico, MainForm, Button
  formettedSecondsRemaining: string; // Título, CountDown
  activeTask: TaskModel | null; // CountDown, Histórico, MainForm, Button
  currentCycle: number; //1 a 8 Home
  config: {
    workTime: number; // MainForm
    shortBraekTime: number; // MainForm
    longBreakTime: number; // MainForm
  };
};