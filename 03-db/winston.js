const {transports} = require('winston');
const winston = require('winston');

const myFormat = winston.format.printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}${message}`;
});

const log = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'YYMMDD HH:mm:ss'
        }),
        winston.format.splat(),
        myFormat
    ),
    // meta
    transports:[
        new winston.transports.Console(),        
    ] 
});

log.error('Ett error moddelande');
log.warn('Ett warn moddelande');
log.info('Ett info moddelande');
log.http('Ett http moddelande');
log.verbose('Ett verbose moddelande');
log.debug('Ett debug moddelande');
log.silly('Ett silly moddelande');

const person = { id: 10, name: "Martin", email:"martin@email.com" };
log.info("%s loggade precis in med lösenordet %s", person.name, person.email);