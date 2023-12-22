

let 
   _ = ( ...v ) => console.log( ...v ),
   value = [ 52,
      51.08333333,
      50.16666667,
      49.25,
      48.33333333,
      47.41666667,
      46.5,
      45.58333333,
      44.66666667,
      43.75,
      42.83333333,
      41.91666667,
      41,
      40.08333333,
      39.16666667,
      38.25,
      37.33333333,
      36.41666667,
      35.5,
      34.58333333,
      33.66666667,
      32.75,
      31.83333333,
      30.91666667,
      30
   ],

   fov = 54,
   standardSensi = 82
;

function Sensi( v ) {
   v = value[ v ];
   s1 = ( standardSensi * 3 ) / ( 80 / v );
   s2 = ( standardSensi * 3 ) / ( 101 / v );
   s3 = ( standardSensi * 3 ) / ( 136 / v );
   s4 = ( standardSensi * 3 ) / ( 195 / v );
   s5 = ( standardSensi * 5 ) / ( 344 / v );
   s6 = ( standardSensi * 5 ) / ( 393 / v );
   // 
   _(
      `[== == == == == == == == ==]
   Mira: ${ Math.round( s1 ) }
   Escopo Tático: ${ Math.round( s2 ) }
   Sniper: ${ Math.round( s5 ) }
   Sniper( Quickscope ): ${ Math.round( s5 + ( s5 / 2 ) ) }
   3x: ${ Math.round( s3 ) }
   4x: ${ Math.round( s4 ) }
   6x: ${ Math.round( s6 ) }
   8x: ${ Math.round( s6 ) }
[== == == == == == == == ==]`
   );
}

switch( fov ) {
case 51: Sensi( 24 );
   break;
case 52: Sensi( 24 );
   break;
case 53: Sensi( 24 );
   break;
case 54: Sensi( 24 );
   break;
case 55: Sensi( 24 );
   break;
case 56: Sensi( 24 );
   break;
case 57: Sensi( 24 );
   break;
case 58: Sensi( 24 );
   break;
case 59: Sensi( 24 );
   break;
case 60: Sensi( 24 );
   break;
case 61: Sensi( 24 );
   break;
case 62: Sensi( 24 );
   break;
case 63: Sensi( 24 );
   break;
case 64: Sensi( 24 );
   break;
case 65: Sensi( 24 );
   break;
case 66: Sensi( 24 );
   break;
case 67: Sensi( 24 );
   break;
case 68: Sensi( 24 );
   break;
case 69: Sensi( 24 );
   break;
case 70: Sensi( 24 );
   break;
case 71: Sensi( 24 );
   break;
case 72: Sensi( 24 );
   break;
case 73: Sensi( 24 );
   break;
case 74: Sensi( 24 );
   break;
case 75: Sensi( 24 );
   break;
case 76: Sensi( 24 );
   break;
case 77: Sensi( 24 );
   break;
case 78: Sensi( 24 );
   break;
case 79: Sensi( 24 );
   break;
case 80: Sensi( 24 );
   break;
case 81: Sensi( 24 );
   break;
case 82: Sensi( 24 );
   break;
case 83: Sensi( 24 );
   break;
case 84: Sensi( 24 );
   break;
case 85: Sensi( 24 );
   break;
case 86: Sensi( 24 );
   break;
case 87: Sensi( 24 );
   break;
case 88: Sensi( 24 );
   break;
case 89: Sensi( 24 );
   break;
case 90: Sensi( 24 );
   break;
default: _( "Input FOV between 51 to 75" );
   break;
}

/* 
   Mira: 92.0
   Escopo T�tico: 73.0
   3x: 54.0
   4x: 38.0
   Sniper: 36.0
   Sniper (for Quickscope): 54.0
   6x: 31.0
   8x: 31.0

   flicking: spray-transfer
   
*/