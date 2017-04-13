interface Config {
  [prop: string]: boolean;
}

const options: Config = {isProduction: true};

// Used to be an error, now allowed. Before:
// const debug = options['debugMode'];
const debug = options.debugMode;

