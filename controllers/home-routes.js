const router = require('express').Router();
const Project = require('../models/Dish');

// route to get all dishes
router.get('/', async (req, res) => {
  const projectData = await Project.findAll().catch((err) => {
    res.json(err);
  });
  const projects = projectData.map((projects) => dish.get({ plain: true }));
  res.render('all', { projects });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
