const createTodo = (name, done, date, priority) => {
  const getName = () => name;
  const getDone = () => done;
  const getDate = () => date;
  const getPriority = () => priority;

  return { getName, getDone, getDate, getPriority };
};

export { createTodo };
