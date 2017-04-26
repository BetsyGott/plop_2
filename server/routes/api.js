import * as express from 'express';
import * as http from 'http';
import * as path from 'path';
import * as fs from 'fs';
import {myConnect} from '../db';
import Friend from '../friend';
const router = express.Router();

//request -> req, response -> res
router.get('/', (req, res) => {
    const time = new Date();
    res.write("Hello API: " + time.toISOString());
    res.end();
});

//this will get shown at /api/people
router.get('/people', (req, res) => {

    // let buddy = new Friend({firstName: 'Betsy', lastName: 'Gottesman', gender: 'Female'});
    // buddy.save( (error, buddy) => {
    //     if (error){
    //         console.log("Error: ", error);
    //     }
    //
    //     console.log("it worked");
    //     const time = new Date();
    //     res.write("HELLO FROM THE PEOPLE API " + time.toISOString());
    //     res.end();
    // });

    Friend.find( (error, buddies) => {
        if(error){
            console.log("error: ", error);
        }

        console.log("buddies: ", buddies);
        res.write("returned " + buddies[0] + "friends.");
    });

});

module.exports = router;
