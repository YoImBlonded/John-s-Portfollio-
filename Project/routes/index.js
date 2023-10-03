const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('index', { title: 'Home - My Portfolio' }));
router.get('/about', (req, res) => res.render('about', { title: 'About Me' }));
router.get('/projects', (req, res) => res.render('projects', { title: 'My Projects' }));
router.get('/services', (req, res) => res.render('services', { title: 'Services Offered' }));
router.get('/contact', (req, res) => res.render('contact', { title: 'Contact Me' }));

module.exports = router;
