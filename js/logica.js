/********************************************
 *  Resumen de Variables y Expresiones Regulares en JavaScript
 ********************************************/


/* ==============================
   1. VARIABLES: var, let, const
   ============================== */

/*
 - var:
    Antigua forma de declarar variables.
    Tiene "scope" de función (NO de bloque).
    Se puede redeclarar y reasignar.
    Hace "hoisting" (se eleva y existe como undefined antes de declararse).
*/

/*
 - let:
    Moderna y más segura.
    Tiene "scope" de bloque { }.
    Se puede reasignar, pero NO redeclarar en el mismo bloque.
    No está disponible antes de su declaración (zona muerta temporal).
*/

/*
 - const:
    Igual que let en cuanto a scope.
    NO se puede reasignar (es constante).
    Ideal para valores fijos.
*/


/* ==============================
   2. EXPRESIONES REGULARES BÁSICAS
   ============================== */

/*
 [abc] → Busca un carácter que sea "a", "b" o "c".
 Ejemplo: "gato".match(/[abc]/g)   devuelve ["a"]

 [0-9] → Busca cualquier dígito del 0 al 9.
 Ejemplo: "123".match(/[0-9]/g)   devuelve ["1","2","3"]

 (x|y) → Busca "x" o "y".
 Ejemplo: "hoy".match(/(x|y)/g)    devuelve ["y"]
*/


/* ==============================
   3. METACARACTERES
   ============================== */

/*
 \d → Busca cualquier dígito (0 al 9).
 Ejemplo: "Semestre 4 y 8".match(/\d/g)   ["4","8"]

 \s → Busca un espacio en blanco.
 Ejemplo: "Hola mundo".match(/\s/g)       [" "]

 \b → Marca inicio o fin de palabra.
 Ejemplo: "Hola".match(/\bHo/g)           ["Ho"]

 \uxxxx → Busca un carácter en Unicode (hexadecimal).
 Ejemplo: "\u0041"   "A"
*/


/* ==============================
   4. CUANTIFICADORES
   ============================== */

/*
 n+ → El carácter aparece UNA o más veces.
 Ejemplo: "holaaa".match(/a+/g)   ["aaa"]

 n* → El carácter aparece CERO o más veces.
 Ejemplo: "hola".match(/a * /g)     ["", "", "", "a", ""]

 n? → El carácter aparece CERO o UNA vez.
 Ejemplo: "hola".match(/a?/g)     ["", "", "", "a", ""]
*/


/********************************************
 *  MÉTODOS DE EXPRESIONES REGULARES EN JAVASCRIPT
 ********************************************/

/*
1. exec()
   - Ejecuta una búsqueda de coincidencia en una cadena.
   - Devuelve un arreglo con información de la coincidencia o null si no encuentra nada.
   - Se usa desde la RegExp.

    Estructura:
   regexp.exec(str)

    Ejemplo:
   let str = "Hola mundo";
   let regexp = /mundo/;
   console.log(regexp.exec(str)); // ["mundo"]
*/


/*
2. test()
   - Prueba si hay coincidencia en una cadena.
   - Devuelve true o false.
   - Se usa desde la RegExp.

    Estructura:
   regexp.test(str)

    Ejemplo:
   let str = "Me gusta JavaScript";
   let regexp = /gusta/i;
   console.log(regexp.test(str)); // true
*/


/*
3. match()
   - Devuelve un arreglo con todas las coincidencias encontradas en la cadena.
   - Si no encuentra nada, devuelve null.
   - Se usa desde la cadena.

    Estructura:
   str.match(regexp)

    Ejemplo:
   let str = "Semestre 4 y 8";
   let regexp = /\d/g;
   console.log(str.match(regexp)); // ["4","8"]
*/


/*
4. matchAll()
   - Devuelve un iterador con todas las coincidencias (incluye grupos de captura).
   - Necesita el modificador "g" en la RegExp.
   - Se usa desde la cadena.

    Estructura:
   str.matchAll(regexp)

    Ejemplo:
   let str = "Semestre 4 y 8";
   let regexp = /\d/g;
   for (let m of str.matchAll(regexp)) {
       console.log(m[0]); // 4 y luego 8
   }
*/


/*
5. search()
   - Busca una coincidencia y devuelve el índice donde la encuentra.
   - Devuelve -1 si no encuentra nada.
   - Se usa desde la cadena.

    Estructura:
   str.search(regexp)

    Ejemplo:
   let str = "Me gusta JS";
   let regexp = /gusta/i;
   console.log(str.search(regexp)); // 3
*/


/*
6. replace()
   - Busca una coincidencia y la reemplaza por otra subcadena.
   - Solo reemplaza la primera coincidencia, a menos que se use "g".
   - Se usa desde la cadena.

    Estructura:
   str.replace(regexp, "nuevoTexto")

    Ejemplo:
   let str = "Hola mundo";
   let regexp = /mundo/;
   console.log(str.replace(regexp, "amigo")); // "Hola amigo"
*/


/*
7. replaceAll()
   - Reemplaza TODAS las coincidencias de la cadena.
   - Similar a replace, pero actúa sobre todas las apariciones.
   - Se usa desde la cadena.

    Estructura:
   str.replaceAll(regexp, "nuevoTexto")

    Ejemplo:
   let str = "Hola mundo, adiós mundo";
   let regexp = /mundo/g;
   console.log(str.replaceAll(regexp, "amigo"));
   // "Hola amigo, adiós amigo"
*/


/*
8. split()
   - Divide una cadena en un arreglo, usando una expresión regular o texto fijo como separador.
   - Se usa desde la cadena.

    Estructura:
   str.split(regexp)

    Ejemplo:
   let str = "uno, dos, tres";
   let regexp = /,\s/; // separa por coma y espacio
   console.log(str.split(regexp)); // ["uno","dos","tres"]
*/