let promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation Successful!");
  } else {
    reject("Operation Failed!");
  }
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
