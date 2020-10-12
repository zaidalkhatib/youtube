const express = require("express"),
  nodemailer = require("nodemailer"),
  compression = require("compression");
if (
  ((bodyParser = require("body-parser")),
  (key = require("./key")),
  (app = express()),
  app.use(compression()),
  app.use(bodyParser.urlencoded({extended: !1})),
  app.use(bodyParser.json()),
  app.post("/message", (e, s) => {
    console.log(e.body);
    const o = `\n  <h1> message </h1>\n  <ul>  \n    <h3>Name: ${e.body.name}</h3>\n    <h3>Email: ${e.body.email}</h3>\n    <h3>Subject: ${e.body.subject}</h3>\n  </ul>\n  <h3>Message</h3>\n  <h1>${e.body.contant}</h1>\n`;
    var r = nodemailer.createTransport({
        service: "gmail",
        auth: {user: "teenozaytoon@gmail.com", pass: key.password},
      }),
      n = {
        from: e.body.email,
        to: "zalkhatib@mail.sfsu.edu",
        subject: "You have a new message",
        html: o,
      };
    r.sendMail(n, function (e, s) {
      e ? console.log(e) : console.log("Email sent: " + s.response);
    });
  }),
  "production" === process.env.NODE_ENV)
) {
  app.use(express.static("client/build"));
  const e = require("path");
  app.get("*", (s, o) => {
    o.sendFile(e.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.listen(process.env.PORT, () => {});
