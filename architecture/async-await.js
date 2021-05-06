const promiseFunction = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        return resolve("hello World");
      } else {
        return reject(new Error("hello error"));
      }
    }, 2000);
  });

const asyncAwait = async () => {
  try {
    const msg = await promiseFunction();
    console.log("message " + msg);
  } catch (err) {
    console.error(err);
  }
};

asyncAwait();
