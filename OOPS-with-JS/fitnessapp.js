

class FitnessAnalytics {
  constructor(data) {
    if (!data || data.length === 0) {
      throw new Error("Dataset is empty");
    }
    this.data = data;
  }

  getActiveUsers() {
    return this.data.filter(entry => entry.steps > 7000);
  }

  getAverageCalories() {
    const total = this.data.reduce((sum, entry) => sum + entry.calories, 0);
    return total / this.data.length;
  }

  getUserSummary() {
    return this.data.map(entry =>
      `${entry.user} walked ${entry.steps} steps and burned ${entry.calories} calories`
    );
  }
}

// Test data
const dataset = [
  { user: "A", steps: 8000, calories: 300 },
  { user: "B", steps: 12000, calories: 500 },
  { user: "C", steps: 4000, calories: 200 }
];

try {
  const analytics = new FitnessAnalytics(dataset);

  console.log("Active Users:", analytics.getActiveUsers());
  console.log("Average Calories:", analytics.getAverageCalories());
  console.log("User Summary:", analytics.getUserSummary());
} catch (err) {
  console.error(err.message);
}
