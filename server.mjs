import express from 'express';
import cors from "cors";

async function main() {
  const app = express();
  const port = 8009;

  app.use(cors());

  app.use(express.static("docs"));

  app.listen(port, () => {
    console.log(`Test app listening on port ${port}`);
  });
}

main();