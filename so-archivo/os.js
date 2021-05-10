const os = require("os");

// console.log(os.cpus());
// console.log(
//   os.networkInterfaces()["Wi-Fi"].map((i) => {
//     return i.address;
//   })
// );
// console.table(os.networkInterfaces());
// console.table(os.networkInterfaces()["Wi-Fi"]);
// console.table(os.networkInterfaces()["Loopback Pseudo-Interface 1"]);

console.log(os.freemem());

console.log(os.type());

console.log(os.release());

console.log(os.userInfo());
