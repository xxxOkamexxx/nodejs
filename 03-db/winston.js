const {transports} = require('winston');
const winston = require('winston');

const log = winston.createLogger({
    level: 'info',
    format: winston.format.simple(),
    // meta
    transports:[
        new winston.transports.Console(),
        new winston.transports.File()
    ] 

});

log.error('Ett error moddelande');
log.warn('Ett warn moddelande');
log.info('Ett info moddelande');
log.http('Ett http moddelande');
log.vebose('Ett verbose moddelande');
log.debug('Ett debug moddelande');
log.silly('Ett silly moddelande');