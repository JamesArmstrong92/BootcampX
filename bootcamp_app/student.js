const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});



pool.query(`
SELECT id, name, cohort_id
FROM students
LIMIT 5;
`)
.then(res => {
  console.log(res);
})
.catch(err => console.error('query error', err.stack));


pool.query(`
SELECT id, name, cohort_id
FROM students
LIMIT 5;
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_id} cohort`);
  })
});


const cohortName = process.argv[2];
const limit = process.argv[3] || 5;
// Store all potentially malicious values in an array. 
const values = [`%${cohortName}%`, limit];

pool.query(queryString, values);