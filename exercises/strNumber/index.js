// function strFunc(str) {
//   return str
//     .split(" ")
//     .map((element) => {
//       if (parseFloat(element)) {
//         return (element = parseFloat(element).toFixed(1));
//       } else {
//         return element;
//       }
//     })
//     .join(" ");
// }

function strFunc(str) {
  return str.replace(
    /(?:[^\d,]|^)(\d+(?:(?:,\d+)*,\d{3})?\.\d{2,20})\b/g,
    function (e) {
      let number = parseFloat(e).toFixed(1);
      return " " + number;
    }
  );
}

strFunc(
  "has transmitted a new reading threshold ranges 250.22 of 22.636 is no value"
);
