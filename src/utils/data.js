export const generateMockData = () => {
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 1);
  const days = [];

  for (let i = 0; i < 365; i++) {
    const date = new Date(start);
    date.setDate(start.getDate() + i);
    days.push({
      date: date.toISOString().slice(0, 10),
      count: Math.floor(Math.random() * 8),
    });
  }

  return days;
};