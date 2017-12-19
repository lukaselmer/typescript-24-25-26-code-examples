interface Options {
  data?: string;
  timeout?: number;
  maxRetries?: number;
}

function sendMessage(options: Options) {
  console.log(options.data);
  console.log(options.timeout);
  console.log(options.maxRetries);
}

const opts = {
  payload: 'hello world!',
  retryOnFail: true
};

sendMessage(opts);
