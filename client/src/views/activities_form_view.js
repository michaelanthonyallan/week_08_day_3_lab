const PubSub = require('../helpers/pub_sub.js')

const ActivityFormView = function (form) {
  this.form = form;
};

ActivityFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

ActivityFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newActivity = this.createActivity(evt.target);
  PubSub.publish('ActivityView:activity-submitted', newActivity);
  evt.target.reset();
};

ActivityFormView.prototype.createActivity = function (form) {
  const newActivity = {
    name: form.name.value
  };

  return newActivity;
};

module.exports = ActivityFormView;
