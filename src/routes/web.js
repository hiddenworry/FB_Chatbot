import express, { Router } from "express";
import res, { append } from "express/lib/response";
import chatBotController from "../controllers/chatBotController";

let router = express.Router();

let initWebRouter = (app) => {
    router.get("/", chatBotController.getHomePage);
    router.get("/webhook", chatBotController.getWebhook);
    router.post("/webhook", chatBotController.postWebhook);

    return app.use("/", router);

};

module.exports = initWebRouter;
