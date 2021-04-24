// Why we need asynchronous code
// When we need it

// Promises

// Two states
//  Pending
//  Fulfilled
//      Resolved
//      Rejected

/*
new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve("Everything went well.");
    reject("sum ting wong");
  }, 4000);
})
  .then((message) => {
    console.log(message);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });

// wrapping a function with a Promise


function myPromiseFunction() {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          resolve("Everything went well.");
          //reject("sum ting wong");
        }, 3000);
      } catch (error) {
        reject("Every promise does not work out this way");
      }
    });
  }
// call the function and handle the promises...
myPromiseFunction()
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error);
});
*/

async function myPromiseFunction() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve("Everything went well.");
        //reject("sum ting wong");
      }, 3000);
    } catch (error) {
      reject("Every promise does not work out this way");
    }
  })
}

async function asyncCall() {
    const message = await myPromiseFunction();
    console.log(message);
}
asyncCall();