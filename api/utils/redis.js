import { createClient } from 'redis'
import { promisify } from 'util'

class RedisClient {
    constructor() {
        this.client = createClient();
        this.client.on('error', (error) => {
            console.log(`Redis client not connected to the server: ${error.message}`);
        });
    }
    isConnected () {
        return this.client.connected;
    }

    
}

const redisClient = new RedisClient();
export default redisClient;