import Cookies from 'universal-cookie';
const cookies = new Cookies();
export default cookies
// const cookieUtils = {
//   set: (key, value, options = {}) => {
//     cookies.set(key, value, { path: '/', ...options });
//   },
//   get: (key) => {
//     return cookies.get(key);
//   },
//   remove: (key) => {
//     cookies.remove(key, { path: '/' });
//   }
// };

// export default cookieUtils;
