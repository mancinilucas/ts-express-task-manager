import { createApp } from "./app";
import { startServer } from "./server";

const port = Number(process.env.PORT) || 3000;

const app = createApp();
startServer(app, port);
