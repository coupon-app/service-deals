import express from 'express';
import cors from 'cors';
import path from 'path';
import db from '../db';

const app = express();
const PORT = process.env.PORT || 3003;
const dir = path.resolve(__dirname, '..', 'client', 'public');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(dir));

app.get('/api/checkout/:packageId', (req, res) => {
  db.returnPackage(req.params.packageId, (packageDeal) => {
    const packageData = packageDeal[0];
    const dealData = packageDeal.slice(1);
    res.status(200).json({ packageData, dealData });
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}.`);
});
