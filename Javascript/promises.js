const doSomeThingPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    // did something
    resolve("First data");
  }, 100);
});

const doOtherThingPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    // did something
    resolve("Second data");
  }, 100);
});

doSomeThingPromise().then(data => {
    console.log(data.split(""));
    return doOtherThingPromise();
})
.then(data2 => console.log(data2.split("")))
.catch(error => console.log('Ops', error));
