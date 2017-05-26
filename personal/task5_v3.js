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
 * вычисляет корень квадратный из каждого элемента массива в цикле Do-While
 * @param {Array} принимает обрабатываемый массив
 *
 */

function getSquareInDo(  array = [] ) {
  var
    square_root = [],
    len = array.length,
    i = 0;
  do {
    square_root[ i ] = Math.sqrt( array[ i ] );
    i++
  } while ( i < len );
  return square_root;
}

console.log( getSquare( setArray() ) );
