import { Router } from "express";
import { createShortURL, getToLongURL } from "../controllers/shortUrlController.js";
import { isLoggedIn } from "../middlewares/authMiddleware.js";

const shortURLRouter = Router();

shortURLRouter.post("/", isLoggedIn ,createShortURL);

shortURLRouter.get("/:shortcode", isLoggedIn ,getToLongURL);


export default shortURLRouter;
