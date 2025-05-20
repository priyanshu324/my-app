import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const subscriptionsPath = path.resolve("data/subscriptions.json");
  const body = req.body;

  const existing = fs.existsSync(subscriptionsPath)
    ? JSON.parse(fs.readFileSync(subscriptionsPath))
    : [];

  const updated = [...existing, body];

  fs.writeFileSync(subscriptionsPath, JSON.stringify(updated, null, 2));

  res.status(200).json({ message: "Subscription saved" });
}
