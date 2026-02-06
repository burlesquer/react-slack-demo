export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(date));
};

export const sortData = (data, key, direction = 'asc') => {
  return [...data].sort((a, b) => {
    if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
    if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
    return 0;
  });
};

export const filterData = (data, searchTerm, keys) => {
  if (!searchTerm) return data;
  const lowerSearch = searchTerm.toLowerCase();
  return data.filter(item =>
    keys.some(key =>
      String(item[key]).toLowerCase().includes(lowerSearch)
    )
  );
};

export const generateMockData = (count = 10) => {
  const statuses = ['Active', 'Pending', 'Completed', 'Cancelled'];
  const names = ['Alice Johnson', 'Bob Smith', 'Charlie Brown', 'Diana Ross', 'Edward King', 'Fiona Apple', 'George Lucas', 'Hannah Montana'];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: names[i % names.length],
    email: `user${i + 1}@example.com`,
    amount: Math.floor(Math.random() * 10000) + 100,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    date: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString(),
  }));
};

export const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};
