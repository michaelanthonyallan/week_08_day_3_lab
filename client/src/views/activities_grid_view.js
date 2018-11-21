const PubSub = require('../helpers/pub_sub.js');
const ActivityView = require('./activity_view.js');

const ActivitiesView = function (container) {
  this.container = container;
};

ActivitiesView.prototype.bindEvents = function () {
  PubSub.subscribe('Activities:data-loaded', (evt) => {
    this.render(evt.detail);
  });
};

ActivitiesView.prototype.render = function (activities) {
  this.container.innerHTML = '';
  const activityView = new ActivityView(this.container);
  activities.forEach((activity) => activityView.render(activity));
};

module.exports = ActivitiesView;
