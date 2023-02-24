
//  1. перепишите функцию через рекурсию
// function printArrayValues(arr) {
//  for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i], 'array');
//  }
// }

// printArrayValues([1, 2, 3]);
 
//Решение
// function printArrayValues(arr, i = 0) {
//     if (i < arr.length) {
//       console.log(arr[i], 'array');
//       printArrayValues(arr, i + 1);
//     }
//   }
//   printArrayValues([1, 2, 3]);


// 2. проверка на знании с работой массивами
// дано такой массив let arr = [4,5,6]
// создайте новый массив при этом сначало заполните массив
// 1,2,3 а потом копируйте arr и добавьте остальные цифры до 10и
// ожидаемый результат должен так [1,2,3,4,5,6,7,8,9,10]

//Решение:
//  let arr = [4, 5, 6];
// let ten = [1, 2, 3].concat(arr);

// for (let i = 7; i <= 10; i++) {
//   ten.push(i);
// }

// console.log(ten);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 3. Получить последний элемент из массива
// let arr = [1,2,3,4,5] - получить 5

//Решение:
// let arr = [1, 2, 3, 4, 5];
// console.log(arr[4]);

// 4. Напишите функцию countChar который считает переданный символ в массиве
// countChar('loremipsumdolor', 'o'); должен вернуть 3 так как о 3 раза участвует

//Решение
    function countChar(str, symb) {
        const rexExp = new RegExp(symb);
        return rexExp.test(str);
      }
      console.log('loremipsumdolor'.match(/o/g));