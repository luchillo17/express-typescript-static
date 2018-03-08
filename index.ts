// Express deps
import express = require('express');
// import { Response } from 'express';
import cors = require('cors');
import * as config from './config.json';

const app = express();
const { port, baseMediaPath } = (config as any);

app.use(cors());

app.use(express.static(baseMediaPath));

app.listen(port, () => {
  console.log('====================================');
  console.log(`Server listening in port ${port}`);
  console.log('====================================');
});
