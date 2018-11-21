const Request = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_Sub.js');

const Activities = function(url){
  this.url = url;
};

Activities.prototype.getData = function () {
  const request = new Request(this.url);
  request.get()
    .then((activities) => {
      PubSub.publish('Activities:data-loaded', activities);
    })
    .catch(console.error);
};

Activities.prototype.bindEvents = function () {
  PubSub.subscribe('ActivityView:activity-delete-clicked', (evt) => {
    this.deleteActivity(evt.detail);
  });
  PubSub.subscribe('ActivityView:activity-submitted', (evt) => {
    this.postActivity(evt.detail);
  })
  PubSub.subscribe('ActivityView:activity-update-clicked', (evt) => {
    this.updateActivity(evt.detail);
  })
};
Activities.prototype.postActivity = function (activity) {
  const request = new Request(this.url);
  request.post(activity)
    .then((activities) => {
      PubSub.publish('Activities:data-loaded', activities);
    })
    .catch(console.error);
};

Activities.prototype.deleteActivity = function (activityId) {
  const request = new Request(this.url);
  request.delete(activityId)
    .then((activities) => {
      PubSub.publish('Activities:data-loaded', activities);
    })
    .catch(console.error);
};

Activities.prototype.updateActivity = function(activityId){
  const request = new Request(this.url);
  request.put(activityId, {status: "Complete"})
  .then((activities) => {
    PubSub.publish('Activities:data-loaded', activities);
  })
  .catch(console.error);
};

module.exports = Activities;
