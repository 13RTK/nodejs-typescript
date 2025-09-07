import express, { type Router } from 'express';
import { getOriginURL } from '../controllers/url-redirect.controller.ts';

const urlRedirectRouter: Router = express.Router();

urlRedirectRouter.route('/:urlCode').get(getOriginURL);

export default urlRedirectRouter;
