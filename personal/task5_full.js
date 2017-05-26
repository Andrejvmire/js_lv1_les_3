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

  len =  Math.round( Math.random() * 100 );

  for ( var i = 0; i < len; i++  ) {
    numbs[ i ] = Math.round( Math.random() * 1000 );
  }
  return numbs;
}

/**
 * вычисляет корень квадратный из каждого элемента массива в цикле For
 * @param {Array} принимает обрабатываемый массив
 *
 */

function getSquareInFor(  array = [] ) {
  var
    square_root = [],
    len = array.length;
  for ( var i = 0; i < len; i++  ) {
    square_root[ i ] = Math.sqrt( array[ i ] );
  }
  return square_root;
}

/**
 * вычисляет корень квадратный из каждого элемента массива в цикле While
 * @param {Array} принимает обрабатываемый массив
 *
 */

function getSquareInWhile(  array = [] ) {
  var
    square_root = [],
    len = array.length,
    i = 0;
  while ( i < len ) {
    square_root[ i ] = Math.sqrt( array[ i ] );
    i++;
  }
  return square_root;
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
    i++;
  } while ( i < len );
  return square_root;
}

/**
 * вычисляет корень квадратный из каждого элемента массива в рекурсии
 * @param {Array} принимает обрабатываемый массив
 *
 */

function getSquareInReq(  array = [] ) {
  var
    square_root = [];
  function req( array ) {
    if ( array.length == 0 ) {
      return square_root;
    } else {
      square_root.push( Math.sqrt( array.shift() ) );
      req( array );
    }
  }
  req( array );
  return square_root;
}

var mass = setArray();

console.log( getSquareInFor( mass ) );
console.log( getSquareInWhile( mass ) );
console.log( getSquareInDo( mass ) );
console.log( getSquareInReq( mass ) );
