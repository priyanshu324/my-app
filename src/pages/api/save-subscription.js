let subscriptions = [];

export default function handler(req, res) {
  if (req.method === "POST") {
    subscriptions.push(req.body); // Save in memory (for demo)
    res.status(201).json({ success: true });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}

export { subscriptions };
