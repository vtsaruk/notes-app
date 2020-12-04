export const getLocalData = (key) =>  JSON.parse(localStorage.getItem(key));
export const setLoalData = (key, value) => localStorage.setItem(key, JSON.stringify(value));