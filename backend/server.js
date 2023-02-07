const http = require("http");

const students = [
  { name: "Ram Sharma", english: 80, maths: 93, science: 68, computer: 84 },
  { name: "Shyam Sharma", english: 80, maths: 93, science: 68, computer: 84 },
  { name: "Gopal Sharma", english: 80, maths: 93, science: 68, computer: 84 },
  { name: "Hari Sharma", english: 80, maths: 93, science: 68, computer: 84 },
];

const headers = {
  "Access-Control-Allow-Origin": "*" /* @dev First, read about security */,
  "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
  "Access-Control-Max-Age": 2592000, // 30 days
  /** add other headers as per requirement */
};

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/students") {
    res.writeHead(200, headers).end(JSON.stringify(students));
  } else {
    res.writeHead(404, headers).end("Not Found");
  }
});

server.listen(8000, () => {
  console.log("server listening on port: ", 8000);
});
