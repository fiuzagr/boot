import runner from './runner';

export default { runner };

// ensures that ctrl+c interrupts the process
process.on('SIGINT', () => {
  process.exit(0);
});
