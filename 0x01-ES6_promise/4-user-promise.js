export default function signUpUser(firstName, lastName) {
    const myPromise = new Promise((resolve) => {
      resolve(
        { firstName, lastName },
      );
    });
    return myPromise;
  }
