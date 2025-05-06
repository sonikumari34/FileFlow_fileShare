import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import morgan from "morgan"
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const app=express();
const __dirname = path.dirname(__filename);


app.use(cors({
   // origin: 'https://file-flow-file-share.vercel.app',
   
    origin:process.env.CLIENT_URL,
    credentials:true
}))

app.use(cookieParser());
//server static file from uploads folder 
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('API is running 🚀');
  });



export {app};