import mongoose from 'mongoose';
import serverConfig from './config';

mongoose.Promise = global.Promise;

class db {
    connection;
    constructor (url, callback){
       this.db = mongoose.connect(url, (error) => {
            if (error) {
                console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
                throw error;
            } else {
                console.log("MongoDB is online");
            }
        });
    };
}

let myConnect = new db(serverConfig.mongoURL);

