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
        const formData = new Mixcrete(req.body);
        await formData.save();
        res.status(200).send({ message: 'Form submitted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Error saving form data', error });
    }
})
app.post('/submit/build-em-all', async (req, res) => {
    try {
        const formData = new BuildEmAll(req.body);
        await formData.save();
        res.status(200).send({ message: 'Form submitted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Error saving form data', error });
    }
}
)
app.post('/submit/cadpro', async (req, res) => {
    try {
        const formData = new CADPro(req.body);
        await formData.save();
        res.status(200).send({ message: 'Form submitted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Error saving form data', error });
    }
}
)
app.post('/submit/cvquiz', async (req, res) => {
    try {
        const formData = new Cvquiz(req.body);
        await formData.save();
        res.status(200).send({ message: 'Form submitted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Error saving form data', error });
    }
}
)
app.post('/submit/gogate', async (req, res) => {
    try {
        const formData = new GoGate(req.body);
        await formData.save();
        res.status(200).send({ message: 'Form submitted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Error saving form data', error });
    }
}
)

app.post('/submit/planning', async (req, res) => {
    try {
        const formData = new Planning(req.body);
        await formData.save();
        res.status(200).send({ message: 'Form submitted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Error saving form data', error });
    }
}
)
