/*
In continuation of the 8th question, let's now explore the concept of the maximum number of listeners
allowed for event handlers1 For this coding challenge, your task is to determine the current maximum
number of event listeners associated with an event and then set the maximum number of event listeners to
51 Note that the default maximum number of listeners might vary1 Your task is to limit the number of listeners to 5.
*/

const events = require("events");

const eventEmitter = new events.EventEmitter();

const eventHandler = (channel_name) => {
  console.log("User Subscribed !");
  console.log(`Thanks for subscribing ${channel_name}`);
};

eventEmitter.on("subscribe", eventHandler);

eventEmitter.emit("subscribe", "College Wallah");

console.log(
  "default Maximum no of events listener is:",
  eventEmitter.getMaxListeners()
);

eventEmitter.setMaxListeners(5);

console.log(
  "Updated  Maximum no of events listener is:",
  eventEmitter.getMaxListeners()
);
