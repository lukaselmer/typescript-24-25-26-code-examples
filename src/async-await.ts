async function say(message: string): Promise<any> {
  return new Promise(
    resolve => setTimeout(() => {
      console.log(message);
      resolve(message);
    }, 1000)
  );
}

async function test(): Promise<any> {
  await say("hey");
  await say("ho");
  await say("hey");
  await say("ho");
  console.log("we are done!");
}

test();

