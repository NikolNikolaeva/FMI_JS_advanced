const router = require("express").Router();

let events = new Map();
let counter = 0;

router.get("/:id", function (req, res) {
  const id = +req.params.id;
  const event = events.get(id);
  if (!event) {
    res.writeHead(404);
    res.end();
  }
  res.send(event);
});

router.post("/", function (req, res) {
  const { name, capacity } = req.body;
  const newEvent = { name, capacity, id: ++counter, guests: [] };
  events = events.set(newEvent.id, newEvent);
  res.status(201).send(newEvent);
});

router.delete("/:id", function (req, res) {
  const id = +req.params.id;
  const event = events.get(id);
  let isDeleted = events.delete(id);
  if (!isDeleted) {
    res.writeHead(404);
    res.end();
  }
  res.send(event);
});

router.post("/:id/booking", function (req, res) {
  const id = +req.params.id;
  const { firstName, lastName } = req.body;
  const event = events.get(id);

  if (!event) {
    res.status(404);
    res.end();
  }

  if (
    !event.guests.find(
      (g) => g.firstName === firstName && g.lastName === lastName
    )
  ) {
    if (event.guests.length === +event.capacity) {
      res.writeHead(404);
      res.write("Full event");
    }
    let countGuests = event.guests.length + 1;
    event.guests = event.guests.concat({
      firstName,
      lastName,
      id: countGuests,
    });
    const vacancyPlaces = event.capacity - event.guests.length;
    res.send({ vacancyPlaces });
  }
  else{
    res.write("Already added");
    res.end();
  }
});

router.get("/:id/booking", function (req, res) {
  const id = +req.params.id;
  const event = events.get(id);

  if (!event) {
    res.writeHead(404);
    res.end();
  }

  const guests = event.guests;
  res.send(guests);
});

router.get("/:id/booking/:bookingId", function (req, res) {
  const id = +req.params.id;
  const event = events.get(id);
  const bookingId = +req.params.bookingId;

  if (!event) {
    res.writeHead(404);
    res.end();
  }

  const guest = event.guests.find((g) => g.id === bookingId);
  res.send(guest);
});

router.delete("/:id/booking/:bookingId", function (req, res) {
  const id = +req.params.id;
  const event = events.get(id);
  const bookingId = +req.params.bookingId;

  if (!event) {
    res.writeHead(404);
    res.end();
  }

  const guest=event.guests.find(g=>g.id===bookingId);
  event.guests = event.guests.filter((g) => g.id !== bookingId);
  res.send(guest);
});

module.exports = router;
