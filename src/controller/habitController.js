const habitData = require("../utils/data");

// create the new habits
const createHabit = async (req, res) => {
  if (!name || !description || !arget_days_per_week) {
    return res.status(400).json({
      message:
        "Invalid input data. 'title', 'author', and 'year' are required.",
    });
  }

  // Create a new book
  const newHabit = {
    id: habitData.length + 1,
    name,
    description,
    arget_days_per_week,
    completed_days
  };

  habitData.push(newHabit);
  res.status(201).json({
    message: "habit created successfully",
    book: newHabit,
  });
};

// Get all habits
const getAllHabits = async (req, res) => {
  const { page = 1, limit = 10, name } = req.query;

  // convert data into integer
  const parsedPage = parseInt(page);
  const parsedLimit = parseInt(limit);

  // Validate query parameters
  if (isNaN(parsedPage) || isNaN(parsedLimit) || parsedPage < 1 || parsedLimit < 1) {
    return res.status(400).json({ message: "Invalid query parameters." });
  }

  // Filter habit from habit collection
  if (name) {
    filteredHabits = habitData.filter(habit => habit.name.toLowerCase().includes(name.toLowerCase()));
  }

  // Pagination logic
  const startIndex = (parsedPage - 1) * parsedLimit;
  const endIndex = startIndex + parsedLimit;
  const paginatedHabits = filteredHabits.slice(startIndex, endIndex);

  // Response object
  const response = {
    habits: paginatedHabits,
    total: filteredHabits.length,
    page: parsedPage,
    limit: parsedLimit
  };

  res.status(200).json(response);
};


// POST /habits/:id/log
const HabitLogged = async (req, res) => {

  const habitId = req.params.id;
  const { date } = req.body;

  // Validate date format (YYYY-MM-DD)
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(date)) {
    return res.status(400).json({ message: 'Invalid date format' });
  }

  // Find the habit by ID
  const habit = habitData.find((h) => h.id === habitId);
  if (!habit) {
    return res.status(404).json({ message: 'Habit not found' });
  }

  // Check if completion already logged
  const logExists = habit.logs.some((log) => log.date === date);
  if (logExists) {
    return res.status(409).json({ message: 'Completion already logged for this date' });
  }

  // Add the log and increment completed_days
  habit.logs.push({ date, completed: true });
  habit.completed_days += 1;

  return res.status(201).json({
    id: habitId,
    date,
    message: 'Completion logged successfully',
  });



};


// Get a habit by ID
const getHabitById = async (req, res) => {
  const habitId = parseInt(req.params.id);
  const habit = habitData.find((b) => b.id === habitId);
  if (habit) {
    res.json(habit);
  } else {
    res.status(404).json({ message: "habit not found" });
  }
};

// delete a habit by ID
const deleteHabitById = async (req, res) => {
  const { id } = req.params;

  // Find habit by id
  const habitIndex = habitData.findIndex(habit => habit.id === id);
  
  // return error
  if (habitIndex === -1) {
    return res.status(404).json({ message: 'Habit not found' });
  }

  // Remove habit from the Databae
  habits.splice(habitIndex, 1);

  // Return 204 success message
  return res.status(204).json({ message: 'Habit deleted successfully.' });
};

module.exports = {
  getAllHabits,
  deleteHabitById,
  getHabitById,
  createHabit,
  HabitLogged
};
