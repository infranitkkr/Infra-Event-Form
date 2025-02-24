import express from "express"
import connectDB from './database/db.js';
import cors from "cors"
import dotenv from "dotenv";
import bodyParser from "body-parser";
import Mixcrete from "./database/models/mixcrete.models.js";
import BuildEmAll from "./database/models/buildemall.models.js"
import CADPro from "./database/models/cadpro.models.js";
import GoGate from "./database/models/gogate.models.js";
import Planning from "./database/models/planning.models.js";
import Cvquiz from "./database/models/cvquiz.models.js"
import Opinion from "./database/models/opinion.models.js";

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
app.use(bodyParser.json());
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

const logRequest = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

app.use(logRequest);

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
app.post('/submit/build-em-all', async (req, res) => {
    try {
        const formData = new BuildEmAll(req.body);
        await formData.save();
        res.status(200).send({ message: 'Form submitted successfully' });
    } catch (error) {
        if(error.code===11000){
res.status(400).json({message:'User already exists'})
        }
else{

res.status(500).json({message:'Server Error'})

}
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

app.post('/submit/opinion', async (req, res) => {
    try {
        const formData = new Opinion(req.body);
        await formData.save();
        res.status(200).send({ message: 'Form submitted successfully'});
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Error saving form data', error });
    }
}
)

app.post('/api/sendMail', (req, res) => {
    const { name, phone, message } = req.body;
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com',  // Replace with your email
        pass: 'your-email-password',   // Replace with your email password
      },
    });
  
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'your-email@gmail.com',
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.status(200).send('Message sent successfully!');
    });
  });