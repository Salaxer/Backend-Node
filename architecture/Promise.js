const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      return resolve("hello World");
    } else {
      return reject(new Error("hell0 error"));
    }
  }, 2000);
});

promise
  .then((msg) => msg.toUpperCase())
  .then((msg) => console.log("menssage" + msg))
  .catch((err) => console.error("error" + err));
