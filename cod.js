

const _ = ( ...v ) => console.log( ...v );

let draw1 = [
   /* 1  */ /* 8, */
   /* 2  */ /* 30, */
   /* 3  */ /* 50, */
   /* 4  */ 120,
   /* 5  */ 200,
   /* 6  */ 320,
   /* 7  */ 520,
   /* 8  */ 800,
   /* 9  */ 1100,
   /* 10 */ 1400,
   /* total = 4548 */
];

draw = [ 1548, 0 ];

_( draw.reduce( ( p, i ) => {
   return( p + i );
} ) );
_( 2300 - draw.reduce( ( a, b ) => ( a + b ) ) );





let sens = {
   camera: {
      padrão: 86, // 82
      mira: 167,  // 81
      redDot: 167,// 71
      tatico: 136,// 
      sniper: 187,// 51
   },
   disparo: {
      padrão: 95, // 75
      mira: 167,  // 75
      redDot: 167,// 72
      tatico: 121,// 
      sniper: 187,// 54
   },
};

// ghost
// face 
