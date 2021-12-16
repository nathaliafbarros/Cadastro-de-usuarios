// importando o swagger-ui-express
import swaggerUi from "swagger-ui-express";

import { app } from ".";
// importando o arquivo swagger.json
import swaggerFile from "./swagger.json";

// Passando uma url/rota para onde vai ficar nossa documentação - Chamando o servidor - Passando um arquivo de
// setup que é swagger.json
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3333, () => console.log("Server is running!"));
