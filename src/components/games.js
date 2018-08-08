// const mongoose = require('mongoose');

// const GameSchema = new mongoose.Schema({
//   title: {
//       type: String,
//       required: true,
//       trim: true,
//       unique: true
//   },
//   img: {
//       type: String,
//       required: [true, 'Please upload an image'],
//       trim: true
//   },
//   title: {
//       type: String,
//       required: [true, 'Please enter the title'],
//       trim: true,
//       unique: true
//   },
//   review: {
//       type: String,
//       required: [true, 'Please enter a short review']
//   },
//   price: {
//       type: Number,
//       required: [true, 'How much does it cost?']
//   },
//   releaseDate: {
//       type: Number,
//       required: [true, 'When was the game released?']
//   },
//   meta: {
//       likes: Number
//   }
// });

// const Game = mongoose.model('Game', GameSchema);

// module.exports = {
//     User
// };

export const games = [
    {
        id: 1,
        img: 'http://www.nerdbite.com/wp-content/uploads/2017/05/theVideoGameGallery_30259_3840x2160-1.jpg',
        title: 'Zelda: Breath of the Wild',
        description: 'Breath of the Wild is a game that offers ',
        price: 59.99,
        releaseDate: 2016
    }, 
    {
        id: 2,
        img: 'https://i.imgur.com/W8kpuu4.jpg',
        title: 'Super Mario Odyssey',
        description: 'Breath of the Wild is an action-adventure game set in an open world environment where players are tasked with exploring the kingdom of Hyrule while controlling Link.',
        price: 59.99,
        releaseDate: 2017
    }, 
    {
        id: 3,
        img: 'https://cdn4.dualshockers.com/wp-content/uploads/2017/09/Switch_ProjectOctopathTraveler_keyart_01-ds1-670x518-constrain.jpg',
        title: 'Octopath Traveler',
        description: 'Breath of the Wild is an action-adventure game set in an open world environment where players are tasked with exploring the kingdom of Hyrule while controlling Link.',
        price: 59.99,
        releaseDate: 2018
    }, 
]

