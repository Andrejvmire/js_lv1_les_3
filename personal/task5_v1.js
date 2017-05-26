"use strict";

/**
 * @author Andrey Yacenco
 *
 */

/**
 * Функция формирует заданный массив
 *
 */


function setArray() {
  var len,
    numbs = [];

  len = Math.round(Math.random() * 100);

  for (var i = 0; i < len; i++) {
    numbs[i] = Math.round(Math.random() * 1000);
  }
  return numbs;
}

/**
 * вычисляет корень квадратный из каждого элемента массива
 * @param {Array} принимает обрабатываемый массив
 *
 */

function getSquare( array = [] ) {
  var
    square_root = [],
    len = array.length;
  for ( var i = 0; i < len; i++ ) {
    square_root[ i ] = Math.sqrt( array[ i ] );
  }
  return square_root;
}

console.log( getSquare( setArray () ) );