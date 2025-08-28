import express from 'express';
const app = express();
import dotenv from 'dotenv';
import connectDB from './src/config/mongo.config.js';
import auth_routes from './src/routes/auth.routes.js';
import short_url from './src/routes/shortUrl.routes.js';
import { redirectFromShortUrl } from './src/controllers/shortUrl.controller.js';
import {errorHandler} from './src/utilis/errorHandler.js';
dotenv.config("./.env");
import cors from 'cors';
import { attachUser } from './src/utilis/attachUser.js';
import cookieParser from 'cookie-parser'

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(attachUser)

app.use(cors({
    origin: 'http://localhost:5173', // your React app
    credentials: true // 👈 this allows cookies to be sent
}));

app.use('/api/auth',auth_routes);
app.use('/api/create', short_url);
app.get('/:id', redirectFromShortUrl);
//app.use(cors());

app.use(errorHandler);

//     async (req, res) => {
//     const shortUrlid = req.params.shortUrlid;
//     const url = await shortUrlSchema.findOne({ short_url: shortUrlid });
//     if (url) {
//         url.clicks++;
//         await url.save();
//         res.redirect(url.full_url);
//     } else {
//         res.status(404).send('URL not found');
//     }
// }


app.listen(3000, () => {
    connectDB();
    console.log('Server is running on http://localhost:3000');
});