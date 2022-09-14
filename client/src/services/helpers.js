export * from './constants';

export const arrayToBase64 = (value, options = {}) => {
  const { type } = options;
  let array = value;
  let result = array.reduce(
    (data, byte) => data + String.fromCharCode(byte),
    ''
  );
  return `data:${type || 'image/png'};base64,` + btoa(result);
};

export const bufferToBase64 = (value, { type }) =>
  new Promise((resolve) => {
    var blob = new Blob([value], { type });

    var reader = new FileReader();
    reader.onload = function (event) {
      resolve(event.target.result);
    };

    reader.readAsDataURL(blob);
  });
