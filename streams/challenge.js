const { Transform } = require("stream");

const camelCase = (data) => {
  return data
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
};
const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    const convert = camelCase(chunk.toString());
    this.push(convert);
    callback();
  },
});

process.stdin.pipe(transformStream).pipe(process.stdout);
