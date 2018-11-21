use bucketlist;
db.dropDatabase();

db.activities.insertMany([
  {name: "Visit a volcano"},
  {name: "Try a front-line customer service job just for the experience"},
  {name: "Act in a film (self-production or otherwise)"}
]);
