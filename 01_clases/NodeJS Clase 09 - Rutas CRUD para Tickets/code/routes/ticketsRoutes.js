import express from "express";
import Ticket from "../models/Ticket.js";

const router = express.Router();

// GET /api/tickets/
router.get("/", async (req, res) => {
  try {
    const tickets = await Ticket.find({});
    res.status(200).json({ tickets: tickets });
  } catch (err) {
    res.status(500).send({ message: "Server Error" + err.message });
  }
});

// POST /api/tickets/
router.post("/", async (req, res) => {
  const ticket = new Ticket({
    user: req.body.userId,
    title: req.body.title,
    description: req.body.description,
    priority: req.body.priority,
    status: req.body.status,
  });

  try {
    const newTicket = await ticket.save();
    res.status(201).json({ ticket: newTicket });
  } catch (err) {
    res.status(500).json({ message: "Server Error" + err.message });
  }
});

// GET /api/tickets/:id
router.get("/:id", async (req, res) => {
  try {
    const ticket = await Ticket.findOne({ id: req.params.id });
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    res.status(200).json({ ticket: ticket });
  } catch (err) {
    res.status(500).json({ message: "Server Error" + err.message });
  }
});

// PUT /api/tickets/:id
router.put("/:id", async (req, res) => {
  const updates = req.body;
  try {
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, updates, {
      new: true,
    });
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    res.status(200).json({ ticket: ticket });
  } catch (err) {
    res.status(500).json({ message: "Server Error" + err.message });
  }
});

// DELETE /api/tickets/:id
router.delete("/:id", async (req, res) => {
  try {
    const ticket = await Ticket.findByUdAndDelete(req.params.id);
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    res.status(200).json({ ticket: ticket });
  } catch (err) {
    res.status(500).json({ message: "Server Error" + err.message });
  }
});

export default router;
