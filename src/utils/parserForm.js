const checkData = (evt) => [...evt.target];
const filterButton = (fields) => fields.filter(_ =>  _.localName === 'input');
const createListOption = data => data.map(d => ({ [d.name]: d.value.trim() }));
const createObjOption = data => data.reduce((cash, item) => ({ ...cash, ...item }), {})


const pipe = (...func) => data => func.reduce((r, f) => f(r), data);

export const parserForm = pipe(checkData, filterButton, createListOption, createObjOption);