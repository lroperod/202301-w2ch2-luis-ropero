/*
 * Escribe una función llamada strictEquals(valueA, valueB) que devuelva el mismo valor que valueA === valueB. 
 * Tu implementación no puede usar los operadores === ni !==, ni nigún operador de comparacion
 * Testea la función con este set de pruebas:

 * Dada la función strictEquals
 * Cuando se comparan <valueA> y <valueB>
 * Entonces el resultado será <Result>
*/

function strictEquals(valueA, valueB) {
  console.log(Object.is(valueA, valueB));
}
strictEquals(1, 1);
strictEquals(NaN, NaN);
strictEquals(0, -0);
strictEquals(-0, 0);
strictEquals(1, "1");
strictEquals(true, false);
strictEquals(false, false);
strictEquals("water", "oil");
