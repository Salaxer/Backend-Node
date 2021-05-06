const asyncCallback = (cb) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      return cb(null, "hello World");
    } else {
      return cb(new Error("hell0 error"));
    }
  }, 2000);
};

asyncCallback((err, msg) => {
  if (err) {
    console.error(`error ${err}`);
  } else {
    console.log(`Mensaje: ${msg}`);
  }
});
