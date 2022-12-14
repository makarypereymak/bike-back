import express from 'express';
import cors from "cors";
import router from './routes/router.js'; 

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(
  cors({ 
    credentials: true,
    origin: "http://localhost:3001",
  })
);
app.use("/api", router);

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
