import express from 'express';
import path from 'path';
import url from 'url';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
const PORT = 8000;
const app = express();

// LOCATION 
const __fileName = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

// SETUP EJS 
app.set('view engine', 'ejs');
app.set('views', 'views');

// MiddleWare body 
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

let urlDatabase = {};

const urlsPath = path.join(__dirname, 'urls.json');

if(fs.existsSync(urlsPath)){
    const data = fs.readFileSync(urlsPath);
    urlDatabase = JSON.parse(data); // it changes a string into an object 
}

function savetoFile(){
    fs.writeFileSync(urlsPath, JSON.stringify(urlDatabase, null, 2));
}

app.get('/', (req, res)=>{
    res.render('us', { urls: urlDatabase, error: null, PORT, host: req.hostname});
})

app.post('/urlShort', (req, res)=>{
    const longUrl = req.body.longUrl.trim();
    const shortUrl = uuidv4().slice(0, 6);
    urlDatabase[shortUrl] = longUrl;
    savetoFile();
    res.redirect('/');
})

app.get('/:shortUrl', (req, res)=>{
    const shortUrl = req.params.shortUrl;
    const longUrl = urlDatabase[shortUrl];
    if(longUrl){
        res.redirect(longUrl);
    }else{
        res.render('/', {shorten: null, error: `URL is not working:${longUrl}`})
    }
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})
