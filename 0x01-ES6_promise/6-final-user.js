import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const s = signUpUser(firstName, lastName);
  const u = uploadPhoto(fileName);

  return Promise.allSettled([s, u]).then((vals) => {
    const resArr = [];
    vals.forEach((val) => {
      if (val.status === 'fulfilled') {
        resArr.push({ status: val.status, value: val.value });
      } else {
        resArr.push({
          status: val.status,
          value: `Error: ${val.reason.message}`,
        });
      }
    });
    return resArr;
  });
}
