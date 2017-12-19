interface User {
  name: string | number;
}

const u1: User = { name: 'Lukas Elmer' };

function printNameInitials(name: string) {
  console.log(name.split(' ').map(part => part[0]));
}

printNameInitials(u1.name); // Error

const promise = new Promise(resolve => resolve(u1.name));
promise.then(printNameInitials); // Error only if strict function types enabled
