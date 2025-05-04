import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import morgan from "morgan"


const app=express();

app.use(cors({
   // origin: 'https://file-flow-file-share.vercel.app',
    origin:process.env.CLIENT_URL,
    credentials:true
}))

app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('API is running 🚀');
  });



export {app};