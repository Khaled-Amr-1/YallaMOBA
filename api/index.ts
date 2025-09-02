import { createServer } from "http";
import app from "../src/app.js";
let server: ReturnType<typeof createServer> | null = null;

export default function handler(req: any, res: any) {
  if (!server) {
    server = createServer(app);
  }
  server.emit("request", req, res);
}
