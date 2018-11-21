const PubSub = require('../helpers/pub_sub.js');

const ActivityView = function (container) {
  this.container = container;
};

ActivityView.prototype.render = function (activity) {
  const activityContainer = document.createElement('div');
  activityContainer.id = 'activity';

  const name = this.createHeading(activity.name);
  activityContainer.appendChild(name);

  const deleteButton = this.createDeleteButton(activity._id);
  activityContainer.appendChild(deleteButton);

  this.container.appendChild(activityContainer);
};

ActivityView.prototype.createHeading = function (textContent) {
  const heading = document.createElement('h3');
  heading.textContent = textContent;
  return heading;
};

ActivityView.prototype.createDetail = function (textContent) {
  const detail = document.createElement('p');
  detail.textContent = textContent;
  return detail;
};

ActivityView.prototype.createDeleteButton = function (activityId) {
  const button = document.createElement('button');
  button.classList.add('delete-btn');
  button.value = activityId;
  button.textContent = 'Delete';

  button.addEventListener('click', (evt) => {
    PubSub.publish('ActivityView:activity-delete-clicked', evt.target.value);
  });

  return button;
};

module.exports = ActivityView;
