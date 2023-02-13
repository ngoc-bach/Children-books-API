const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      "id": 1,
      "img": "https://images-fe.ssl-images-amazon.com/images/I/81jS0ENjenL._AC_UL600_SR600,400_.jpg",
      "author": "Scott Pape",
      "title": "Barefoot Kids",
      "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae atque itaque ea nobis accusamus? Aperiam provident dolores error earum nihil animi! Est eos quos porro nostrum magni odit ullam modi!",
      "price": 19.00,
      "audio": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      "rating": 5,
      "review": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, ullam omnis corporis eligendi ipsam natus totam. Quod minima magni esse? Beatae facere maxime aperiam quaerat. Culpa cupiditate dolorum autem illum?",
   },
   {
      "id": 2,
      "img": "https://images-fe.ssl-images-amazon.com/images/I/618lIfMrw-L._AC_UL600_SR600,400_.jpg",
      "author": "Tui Sutherland",
      "title": "Moon Rising",
      "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae atque itaque ea nobis accusamus? Aperiam provident dolores error earum nihil animi! Est eos quos porro nostrum magni odit ullam modi!",
      "price": 14.99,
      "audio": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      "rating": 4.5,
      "review": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, ullam omnis corporis eligendi ipsam natus totam. Quod minima magni esse? Beatae facere maxime aperiam quaerat. Culpa cupiditate dolorum autem illum?"
   },
   {
      "id": 3,
      "img": "https://images-fe.ssl-images-amazon.com/images/I/71YGTNVYQAL._AC_UL600_SR600,400_.jpg",
      "author": "Marion Cocklico",
      "title": "No More Nappies",
      "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae atque itaque ea nobis accusamus? Aperiam provident dolores error earum nihil animi! Est eos quos porro nostrum magni odit ullam modi!",
      "price": 9.95,
      "audio": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      "rating": 4.75,
      "review": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, ullam omnis corporis eligendi ipsam natus totam. Quod minima magni esse? Beatae facere maxime aperiam quaerat. Culpa cupiditate dolorum autem illum?"
   },
   {
      "id": 4,
      "img": "https://images-fe.ssl-images-amazon.com/images/I/71sREBV3LDL._AC_UL600_SR600,400_.jpg",
      "author": "Bluey",
      "title": "Bluey",
      "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae atque itaque ea nobis accusamus? Aperiam provident dolores error earum nihil animi! Est eos quos porro nostrum magni odit ullam modi!",
      "price": 6.00,
      "audio": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
      "rating": 4.25,
      "review": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, ullam omnis corporis eligendi ipsam natus totam. Quod minima magni esse? Beatae facere maxime aperiam quaerat. Culpa cupiditate dolorum autem illum?"
   },
   {
      "id": 5,
      "img": "https://images-fe.ssl-images-amazon.com/images/I/81vTRhCo4sL._AC_UL600_SR600,400_.jpg",
      "author": "Patrice Karst",
      "title": "The Invisible String",
      "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae atque itaque ea nobis accusamus? Aperiam provident dolores error earum nihil animi! Est eos quos porro nostrum magni odit ullam modi!",
      "price": 11.99,
      "audio": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
      "rating": 4,
      "review": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, ullam omnis corporis eligendi ipsam natus totam. Quod minima magni esse? Beatae facere maxime aperiam quaerat. Culpa cupiditate dolorum autem illum?"
   },
   {
      "id": 6,
      "img": "https://images-fe.ssl-images-amazon.com/images/I/81x4+jwTdFL._AC_UL600_SR600,400_.jpg",
      "author": "Sarah Allen",
      "title": "Jumping Joeys",
      "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae atque itaque ea nobis accusamus? Aperiam provident dolores error earum nihil animi! Est eos quos porro nostrum magni odit ullam modi!",
      "price": 27.27,
      "audio": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
      "rating": 4,
      "review": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, ullam omnis corporis eligendi ipsam natus totam. Quod minima magni esse? Beatae facere maxime aperiam quaerat. Culpa cupiditate dolorum autem illum?"
   },
   {
      "id": 7,
      "img": "https://images-fe.ssl-images-amazon.com/images/I/91gO2A87g+L._AC_UL600_SR600,400_.jpg",
      "author": "Paul Davies",
      "title": "Hogwarts Legacy",
      "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae atque itaque ea nobis accusamus? Aperiam provident dolores error earum nihil animi! Est eos quos porro nostrum magni odit ullam modi!",
      "price": 18.70,
      "audio": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
      "rating": 4.5,
      "review": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, ullam omnis corporis eligendi ipsam natus totam. Quod minima magni esse? Beatae facere maxime aperiam quaerat. Culpa cupiditate dolorum autem illum?"
   },
   {
      "id": 8,
      "img": "https://images-fe.ssl-images-amazon.com/images/I/91ml6NFB4jL._AC_UL600_SR600,400_.jpg",
      "author": "Roald Dahl",
      "title": "Matilda",
      "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae atque itaque ea nobis accusamus? Aperiam provident dolores error earum nihil animi! Est eos quos porro nostrum magni odit ullam modi!",
      "price": 10.99,
      "audio": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
      "rating": 4,
      "review": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, ullam omnis corporis eligendi ipsam natus totam. Quod minima magni esse? Beatae facere maxime aperiam quaerat. Culpa cupiditate dolorum autem illum?"
   },
   {
      "id": 9,
      "img": "https://images-fe.ssl-images-amazon.com/images/I/91drTBmtWzL._AC_UL300_SR300,200_.jpg",
      "author": "Roald Dahl",
      "title": "Charlie and the Chocolate Factory",
      "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae atque itaque ea nobis accusamus? Aperiam provident dolores error earum nihil animi! Est eos quos porro nostrum magni odit ullam modi!",
      "price": 10.99,
      "audio": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
      "rating": 4,
      "review": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, ullam omnis corporis eligendi ipsam natus totam. Quod minima magni esse? Beatae facere maxime aperiam quaerat. Culpa cupiditate dolorum autem illum?"
   },
   {
      "id": 10,
      "img": "https://images-fe.ssl-images-amazon.com/images/I/41DDRSq1BEL._AC_UL300_SR300,200_.jpg",
      "title": "That's Not My Koala",
      "author": "Fiona Watt",
      "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae atque itaque ea nobis accusamus? Aperiam provident dolores error earum nihil animi! Est eos quos porro nostrum magni odit ullam modi!",
      "price": 6.00,
      "audio": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
      "rating": 5,
      "review": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, ullam omnis corporis eligendi ipsam natus totam. Quod minima magni esse? Beatae facere maxime aperiam quaerat. Culpa cupiditate dolorum autem illum?"
   },
   {
      "id": 11,
      "img": "https://images-fe.ssl-images-amazon.com/images/I/51GkdA8vSCL._AC_UL600_SR600,400_.jpg",
      "title": "Babys Very First Black and White Little Library",
      "author": "Usborne",
      "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae atque itaque ea nobis accusamus? Aperiam provident dolores error earum nihil animi! Est eos quos porro nostrum magni odit ullam modi!",
      "price": 9.49,
      "audio": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
      "rating": 4,
      "review": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, ullam omnis corporis eligendi ipsam natus totam. Quod minima magni esse? Beatae facere maxime aperiam quaerat. Culpa cupiditate dolorum autem illum?"
   },
   {
      "id": 12,
      "img": "https://images-fe.ssl-images-amazon.com/images/I/61PHM7D1RXL._AC_UL600_SR600,400_.jpg",
      "title": "I Choo Choo Choose You: Happy Valentines",
      "author": "Neila Stewart",
      "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae atque itaque ea nobis accusamus? Aperiam provident dolores error earum nihil animi! Est eos quos porro nostrum magni odit ullam modi!",
      "price": 11.99,
      "audio": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
      "rating": 3.95,
      "review": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, ullam omnis corporis eligendi ipsam natus totam. Quod minima magni esse? Beatae facere maxime aperiam quaerat. Culpa cupiditate dolorum autem illum?"
   },
   {
      "id": 13,
      "img": "https://images-fe.ssl-images-amazon.com/images/I/81ET-I0zZgL._AC_UL600_SR600,400_.jpg",
      "title": "Crown of Midnight",
      "author": "Sarah J. Maas",
      "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae atque itaque ea nobis accusamus? Aperiam provident dolores error earum nihil animi! Est eos quos porro nostrum magni odit ullam modi!",
      "price": 8.59,
      "audio": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
      "rating": 4.5,
      "review": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, ullam omnis corporis eligendi ipsam natus totam. Quod minima magni esse? Beatae facere maxime aperiam quaerat. Culpa cupiditate dolorum autem illum?"
   },
   {
      "id": 14,
      "img": "https://images-fe.ssl-images-amazon.com/images/I/71IVHSZbfTL._UX300__PJku-sticker-v7,TopRight,0,-50_AC_UL600_SR600,400_.jpg",
      "title": "Dave the Villager 46",
      "author": "Dave Villager",
      "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae atque itaque ea nobis accusamus? Aperiam provident dolores error earum nihil animi! Est eos quos porro nostrum magni odit ullam modi!",
      "price": 5.99,
      "audio": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
      "rating": 4.5,
      "review": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, ullam omnis corporis eligendi ipsam natus totam. Quod minima magni esse? Beatae facere maxime aperiam quaerat. Culpa cupiditate dolorum autem illum?"
   },
   {
      "id": 15,
      "img": "https://images-fe.ssl-images-amazon.com/images/I/816MFUTuBYL._AC_UL600_SR600,400_.jpg",
      "title": "The Lightning Thief",
      "author": "Rick Riordan",
      "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae atque itaque ea nobis accusamus? Aperiam provident dolores error earum nihil animi! Est eos quos porro nostrum magni odit ullam modi!",
      "price": 18.99,
      "audio": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
      "rating": 4.75,
      "review": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, ullam omnis corporis eligendi ipsam natus totam. Quod minima magni esse? Beatae facere maxime aperiam quaerat. Culpa cupiditate dolorum autem illum?"
   }]
  );
});


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(`/.netlify/functions/api/books`, router);

module.exports = app;
module.exports.handler = serverless(app);
