import express from "express"
import connectDB from './database/db.js';
import cors from "cors"
import dotenv from "dotenv";
import Mixcrete from "./database/models/mixcrete.models.js"
import BuildEmAll from "./database/models/buildemall.models.js"
import CADPro from "./database/models/cadpro.models.js";
import GoGate from "./database/models/gogate.models.js";
import Planning from "./database/models/planning.models.js";

import Cvquiz from "./database/models/cvquiz.models.js"
dotenv.config({
    path: './env'
})

const app = express();
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));    
connectDB()
    .then(() => {
        app.listen(PORT || 3001, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    })
    .catch((error) => {
        console.log("MongoDB connection error in src index", error);
    })

app.get('/test', (req, res) => {
    res.send('Hello World2')
})

app.post('/submit/mixcrete', async (req, res) => {
    try {
      const newEntry = new Mixcrete(req.body);
      await newEntry.save();
      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      if (error.code === 11000) { // duplicate key error
        res.status(400).json({ message: 'User already exists' });
      } else {
        res.status(500).json({ message: 'Server error' });
      }
    }
  });
app.post('/submit/build-em-all', async (req, res) => {
    try {
      const newEntry = new BuildEmAll(req.body);
      await newEntry.save();
      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      if (error.code === 11000) { // duplicate key error
        res.status(400).json({ message: 'User already exists' });
      } else {
        res.status(500).json({ message: 'Server error' });
      }
    }
  });
  app.post('/submit/cadpro', async (req, res) => {
    console.log(res.body);
    try {
      const newEntry = new CADPro(req.body);
      await newEntry.save();
      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      if (error.code === 11000) { // duplicate key error
        res.status(400).json({ message: 'User already exists' });
      } else {
        res.status(500).json({ message: 'Server error' });
      }
    }
  });
  app.post('/submit/cvquiz', async (req, res) => {
    try {
      const newEntry = new Cvquiz(req.body);
      await newEntry.save();
      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      if (error.code === 11000) { // duplicate key error
        res.status(400).json({ message: 'User already exists' });
      } else {
        res.status(500).json({ message: 'Server error' });
      }
    }
  });
  app.post('/submit/gogate', async (req, res) => {
    try {
      const newEntry = new GoGate(req.body);
      await newEntry.save();
      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      if (error.code === 11000) { // duplicate key error
        res.status(400).json({ message: 'User already exists' });
      } else {
        res.status(500).json({ message: 'Server error' });
      }
    }
  });

  app.post('/submit/planning', async (req, res) => {
    try {
      const newEntry = new Planning(req.body);
      await newEntry.save();
      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      if (error.code === 11000) { // duplicate key error
        res.status(400).json({ message: 'User already exists' });
      } else {
        res.status(500).json({ message: 'Server error' });
      }
    }
  });

app.post('/submit/opinion', async (req, res) => {
    try {
        const formData = new Opinion(req.body);
        await formData.save();
        res.status(200).send({ message: 'Form submitted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Error saving form data', error });
    }
}
)
