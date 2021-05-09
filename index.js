
class PromiseA {
  static padding = "padding";
  static success = "success";
  static fail = "fail";

  constructor(executor) {
    this.state = PromiseA.padding;
    this.rejectCallbackList = [];
    this.resolveCllbackList = [];
    this.value = null;
    this.reason = null;
    try {
      executor(this.resolve.bind(this), this.reject.bind(this))
    } catch (e) {

    }
  };
  resolve(value) {
    //改變狀態
    if (this.state === PromiseA.padding) {
      this.state = PromiseA.success;
      this.value = value;
    };
  };
  reject(reason) {
    //改變狀態
    if (this.state === PromiseA.padding) {
      this.state === PromiseA.fail;
      this.value = reason;
    };
  };
  then(resolveCallback, rejectCallback) {
    if (typeof resolveCallback !== "function" || typeof rejectCallback !== "function") {
      resolveCallback = () => { };
      rejectCallback = () => { };
    }
    if (this.state === PromiseA.padding) {
      this.rejectCallbackList.push(rejectCallback);
      this.resolveCllbackList.push(resolveCallback);
    };
    return this;
  }
}

const getData = () => {
  return new PromiseA((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'jack',
        age: 12,
      })
    }, 3000);
    // resolve({
    //   name:'mary',
    //   age:18,
    // })
  })
}
getData()
  .then((result) => {
    console.log(result);
  })
  .then(result => {
    console.log(result);
  });
console.log('play')