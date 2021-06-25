import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import studpostRoutes from './routes/studPosts.js';
import techpostRoutes from './routes/techPosts.js';


const app = express();



app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());



app.use('/studposts', studpostRoutes);
app.use('/techposts', techpostRoutes);



const CONNECTION_URL = 'mongodb+srv://sAkmongo:sAkBang.99@cluster0.da2a0.mongodb.net/schooldb?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
        .catch((error) => console.log(error.message));


        mongoose.set('useFindAndModify',false);