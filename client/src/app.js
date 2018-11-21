const ActivitiesFormView = require('./views/activities_form_view.js');
const ActivitiesGridView = require('./views/activities_grid_view.js');
const Activities = require('./models/activities.js');

document.addEventListener('DOMContentLoaded', () => {
  const activitiesForm = document.querySelector('form#activity-form');
  const activitiesFormView = new ActivitiesFormView(activitiesForm);
  activitiesFormView.bindEvents();

  const activitiesContainer = document.querySelector('div#activities');
  const activitiesGridView = new ActivitiesGridView(activitiesContainer);
  activitiesGridView.bindEvents();

  const activitiesURL = 'http://localhost:3000/api/activities';
  const activities = new Activities(activitiesURL);
  activities.bindEvents();
  activities.getData();
})
