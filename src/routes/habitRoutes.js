import express from "express";
import {
  createHabit,
  deleteHabitById,
  getAllHabits,
  getHabitById
} from "../controller/habitController.js";

const router = express.Router();

router.post('/habits', createHabit);

router.get('/habits', getAllHabits);

router.get('/tasks/info/:id', getHabitById);

router.delete('habits/:id',  deleteHabitById);

export default router;
