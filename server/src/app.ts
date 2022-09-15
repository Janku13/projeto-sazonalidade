import connect from './utils/connectDB';
import logger from './utils/logger';
import createServer from './utils/server';

const port = process.env.PORT || 8000;

const app = createServer();

app.listen(port, async () => {
  logger.info(`App is on port ${port}`);
  await connect();
});
