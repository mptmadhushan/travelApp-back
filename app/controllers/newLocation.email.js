var nodemailer = require("nodemailer");
exports.mail = (place, res) => {
  console.log("req data", place);
  const subject = "New Hotel Added";
  const email = "orelstore7@gmail.com";
  // const place = {
  //   place: data.place,
  //   hotel_name: data.hotel_name,
  //   distance: data.distance,
  // };

  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // hostname
    secureConnection: true, // use SSL
    port: 465,
    auth: {
      user: "orelstore7@gmail.com",
      pass: "orelstore123",
    },
  });

  var mailOptions = {
    from: "orelstore7@gmail.com",
    to: email,
    subject: subject,
    text: email,
    // html:
    // "<b>Client Email Template- Received this once the Booking done</b><div>The Following booking is confirmed:</div>
    // <div>Preferred Location: {{location}}</div><div>Exam Type {{exam_type}}</div>
    // <div>Event Name: {{event_name}}</div><div>Event Dates: {{event_date}}</div><div>Title:{{title}}</div><div>First name:{firstName}</div><div>Last Name:{{last name}}</div><div>Phone:</div>",
    html: `<!doctype html>
      <html ⚡4email>
        <head>
          <meta charset="utf-8">
          <style amp4email-boilerplate>body{visibility:hidden}</style>
          <script async src="https://cdn.ampproject.org/v0.js"></script>
          <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
        </head>
        <body>
<p class="text-center">New hotel added</p>
<br/>
        <div>• Location : ${place.place}</div>
        <div>• Hotel Name : ${place.hotel_name}</div>
        <div>• Email : ${place.email}</div>
        </body>
      </html>`,
  };

  transporter
    .sendMail(mailOptions)

    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred ",
      });
    });
};
