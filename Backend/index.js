const express = require("express");
const usuariosRouter = require("./Routes/usuarios");
const tipoUsuariosRouter = require("./Routes/tipo_usuarios");
const cursosRouter = require("./Routes/cursos");
const cursosUsuariosRouter = require("./Routes/cursos_usuarios");
const intentosLoginRouter = require("./Routes/intentos_login");


const cors = require('cors');

const app = express();
const port = 3000;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

var corsOptions = {
  origin: "http://localhost:3001",
  optionsSuccessStatus: 200, 
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/api/usuarios",usuariosRouter);
app.use("/api/tipo_usuarios",tipoUsuariosRouter);
app.use("/api/cursos",cursosRouter);
app.use('/api/cursos_usuarios', cursosUsuariosRouter);
app.use('/api/intentos_login', intentosLoginRouter);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
