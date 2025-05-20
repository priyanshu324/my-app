// This will be your mock list of subscriptions (in-memory)
export const subscriptions = [];

// Optional: Save subscription from frontend
export default function handler(req, res) {
  if (req.method === "POST") {
    const subscription = req.body;
    subscriptions.push(subscription);
    res.status(201).json({ message: "Subscription saved!" });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
