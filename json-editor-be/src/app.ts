import './utils/tracing'; 
import express from 'express';
import cors from 'cors';
import workflowRoutes from './routes/workflow';


const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/v1/workflow', workflowRoutes);


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
