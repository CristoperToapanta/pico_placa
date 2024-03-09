import { Router, Request, Response } from 'express';
import ejecucionController from '../controllers/ejecucionController';

const router: Router = Router();

router.route('/validarCirculacion')
    .post((req: Request, res: Response): void => {
        ejecucionController.validarCirculacion (req, res);
    });

export default router;