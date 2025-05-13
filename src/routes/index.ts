// filepath: src/routes/index.ts
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('Welcome to the Content Management System');
});

export default router;