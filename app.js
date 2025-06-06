const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const { title } = require('process');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   res.render('index');
// });

// In app.js or your route file
app.get('/', (req, res) => {
  const projects = [
    {
      title: "AB Enterprises",
      description: " A live, fully responsive website I developed to demonstrate real-world web development skills.",
      image: "/images/abenterprises.jpg",
      link: "https://ansaribrother.com"
    },
    {
      title: "Zerodha Frontend",
      description: "A MERN stack project for clone of zerodha with MongoDB backend.",
      image: "/images/zerodha.jpg",
      link: "https://zerodha-frontend-flame.vercel.app/"
    },
    {
      title: "Wanderlust",
      description: "I created this project to understand full stack development with MERN with user authentication",
      image: "/images/wanderlust.jpg",
      link: "https://wanderlust-travel-sl4i.onrender.com/listings"
    },
    
    {
        title : "My Portfolio Website",
         description: "A MERN stack project for clone of zerodha with MongoDB backend.",
        image: "/images/portfolio.jpg",
        link: "https://github.com/your-repo/travel-site"

    },
    {
      title : "Spotify Clone",
         description: "Only frontend Using HTML & CSS.",
        image: "/images/spotify.jpg",
        link: "https://mediumpurple-hornet-965296.hostingersite.com/"
    }
  ];
  const skills = [
    { name: 'HTML5', icon: '/icons/html5.svg' },
    { name: 'CSS3', icon: '/icons/css.svg' },
    { name: 'JavaScript', icon: '/icons/javascript.svg' },
    { name: 'Bootstrap', icon: '/icons/bootstrap.svg' },
    { name: 'Node.js', icon: '/icons/nodejs.svg' },
    { name: 'MongoDB', icon: '/icons/mongodb.svg' },
    { name: 'React', icon: '/icons/react.svg' },
    { name: 'Python', icon: '/icons/python.svg' },
    { name: 'Express.js', icon: '/icons/express.svg' },
    { name: 'SQL', icon: '/icons/sql.svg' },
    { name: 'Java', icon: '/icons/java.svg' },
    { name: 'Visual Studio Code', icon: '/icons/vscode.svg' },
    
    // Add more as needed
  ];

  res.render('index', { projects , skills });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Print or log the values (can be sent to email or DB instead)
  console.log("Form submitted:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  res.send("Thank you! Your message has been received.");
});


app.listen(3000, () => console.log('Server running on http://localhost:3000'));
