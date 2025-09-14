const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Create or open the database file
const dbPath = path.resolve(__dirname, 'sqlite/offline.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database at', dbPath);
  }
});

// Initialize tables
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS courses (
    id TEXT PRIMARY KEY,
    name TEXT
  )`, (err) => {
    if (err) {
      console.error('Error creating table:', err.message);
    } else {
      console.log('Courses table ready');
    }
  });
});

db = require('./offlineDb');

function addCourse(id, name) {
  db.run(`INSERT OR REPLACE INTO courses (id, name) VALUES (?, ?)`, [id, name], (err) => {
    if (err) {
      console.error("Error inserting course:", err.message);
    } else {
      console.log("Course saved:", id, name);
    }
  });
}

// Example usage
addCourse("1", "Class 1");

function getCourses(callback) {
  db.all(`SELECT * FROM courses`, [], (err, rows) => {
    if (err) {
      console.error("Error fetching courses:", err.message);
      callback([]);
    } else {
      callback(rows);
    }
  });
}

// Example usage
getCourses((courses) => {
  console.log("Courses from SQLite:", courses);
});

const Course = require('./models/Course'); // MongoDB model
db = require('./offlineDb');

async function syncCourses() {
  const courses = await Course.find({});
  courses.forEach(course => {
    db.run(`INSERT OR REPLACE INTO courses (id, name) VALUES (?, ?)`, [course._id.toString(), course.name]);
  });
  console.log('Courses synced to SQLite');
}

sqlite3 = require('sqlite3').verbose();
db = new sqlite3.Database(':memory:'); // creates an in-memory database

// Or if you want to create a temporary file
// const db = new sqlite3.Database('./sqlite/offline.db');

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS courses (id TEXT, name TEXT)");
  
  // Load data from MongoDB here
});

db = new sqlite3.Database(':memory:');

// At startup
loadCoursesFromMongo();

function loadCoursesFromMongo() {
  Course.find({}).then(courses => {
    db.serialize(() => {
      db.run("DELETE FROM courses");
      const stmt = db.prepare("INSERT INTO courses (id, name) VALUES (?, ?)");
      courses.forEach(course => {
        stmt.run(course._id.toString(), course.name);
      });
      stmt.finalize();
    });
  });
}

// Optionally sync every 10 minutes
setInterval(loadCoursesFromMongo, 10 * 60 * 1000);

module.exports = db;
