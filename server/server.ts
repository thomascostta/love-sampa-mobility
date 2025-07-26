import http from "http";
import { app } from "./app";
import prisma from "./utils/prisma";
const server = http.createServer(app);

server.listen({ port: process.env.PORT, host: "0.0.0.0" }, () => {
  console.log(`Server is connected with port ${process.env.PORT}`);

  // Ping no banco a cada 30 minutos para evitar que Render desligue pata Teste no BD
  setInterval(async () => {
    try {
      await prisma.driver.findFirst();
      console.log("✅ Keep-alive: banco acessado com sucesso");
    } catch (e) {
      console.error("❌ Erro no keep-alive do banco:", e);
    }
  }, 1000 * 60 * 60); // a cada 30 minutos
});
