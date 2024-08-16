import express from 'express';
import Doctor from '../models/Doctor';

const router = express.Router();

// Doktorları listeleme
router.get('/', async (req, res) => {
    const doctors = await Doctor.findAll();
    res.json(doctors);
});

// Yeni doktor ekleme
router.post('/', async (req, res) => {
    const doctor = await Doctor.create(req.body);
    res.json(doctor);
});

export default router;
