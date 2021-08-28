const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const printLogFormat = combine(
  label({
    label: "백엔드 서버 테스트"
  }),
  timestamp({
    format: "YYYY-MM-DD HH:mm:dd",
  }),
  printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
  })
);

const logger = createLogger({
  transports: [
    new transports.File({
      filename: './logs/combined.log',
      level: 'info',
      format: printLogFormat,      
    }),
    new transports.Console({ 
      level: 'error' 
    }),
  ],
});

module.exports = logger; 