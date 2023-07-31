/*
Let's simulate a subscription feature similar to YouTube Using the events module, we'll create a custom
event named "subscribe" When this event is triggered, it should display a message in the console indicating that the user has subscribed.
*/
const events = require("events");

const eventEmitter = new events.EventEmitter();

const eventHandler = (channel_name) => {
  console.log("User Subscribed! ");
  console.log(`Thanks for subscribing ${channel_name} `);
};

eventEmitter.on("subscribe", eventHandler);

eventEmitter.emit("subscribe", "College Wallah");
