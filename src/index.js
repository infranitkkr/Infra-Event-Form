import express from "express"
import connectDB from './database/db.js';
import cors from "cors"
import dotenv from "dotenv";
import Mixcrete from "./database/models/mixcrete.models.js";
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
        const formData = new Mixcrete(req.body);
        console.log(req.body.teamLeader);
        console.log(req.body.teamName);
        console.log(req.body.email);
        console.log(req.body.number);
        await formData.save();
        res.status(200).send({ message: 'Form submitted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Error saving form data', error });
    }
});