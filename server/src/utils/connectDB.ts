import mongoose from 'mongoose'
import logger from './logger'

async function connect() {
  const dbUri = process.env.dbUri || 'mongodb://localhost:27017/sazonalidade'
  try {
    await mongoose.connect(dbUri)
     logger.info("mongoose db connected ");
  } catch (error) {
     logger.error(error)
      process.exit(1);
  }

}

export default connect