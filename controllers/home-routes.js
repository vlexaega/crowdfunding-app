const router = require('express').Router();
const { Project, User } = require('../models');

router.get('/', async (req, res) => {
  try {
    const displayProjects = await Project.findAll({
      include: [
        {
          model: Project,
          User,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const projects = displayProjects.map((project) =>
      project.get({ plain: true })
    );

    res.render('homepage', {
      projects,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
