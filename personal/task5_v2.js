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

  len = Math.round( Math.random() * 100 );

  for ( var i = 0; i < len; i++  ) {
    numbs[ i ] = Math.round( Math.random() * 1000 );
  }
  return numbs;
}

/**
 * вычисляет корень квадратный из каждого элемента массива в цикле While
 * @param {Array} принимает обрабатываемый массив
 *
 */

function getSquareInWhile(  array = [] ) {
  var
    square_root = [],
    len = array.length;
  var i = 0;
  while ( i < len ) {
    square_root[ i ] = Math.sqrt( array[ i ] );
    i++;
  }
  return square_root;
}

console.log( getSquare( setArray() ) );