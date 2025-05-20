const subscriptions = [];

function handler(req, res) {
  if (req.method === "POST") {
    const subscription = req.body;
    subscriptions.push(subscription);
    res.status(201).json({ message: "Subscription saved!" });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}

module.exports = {
  subscriptions,
  handler
};
