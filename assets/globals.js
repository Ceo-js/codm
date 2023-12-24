

let 
   _ = ( ...v ) => console.log( ...v ),
   $ = v => document.querySelector( v ),
   $$ = v => document.querySelectorAll( v );
value = [ 
   52,            51.08333333, 
   50.16666667,   49.25, 
   48.33333333,   47.41666667,
   46.5,          45.58333333, 
   44.66666667,   43.75, 
   42.83333333,   41.91666667,
   41,            40.08333333,
   39.16666667,   38.25, 
   37.33333333,   36.41666667, 
   35.5,          34.58333333,
   33.66666667,   32.75, 
   31.83333333,   30.91666667, 
   30,            29.08333358,
   28.16666717,   27.25000077,
   26.33333438,   25.41666899,
   24.50000262,   23.58333626,
   22.66666991,   21.75000357,
   20.83333724,   19.91667092,
   19.00000461,   18.08333831,
   17.16667202,   16.25000574,
]
;
      
      
      
/* 
         Standard: 82.0
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
      
addEventListener( "load", ev => {
   let 
      calculator = $( "calculator" ),
      i_fov = $( "input[fov]" ),
      i_standardSensi = $( "input[standard-sensi]" ),
      btn_calculate = $( "input[value='calculate']" )
         ;
         
   function CalcSensi( fov, standardSensi ) {
      fov = value[ fov ];
      let returned = [
         s1 = ( standardSensi * 3 ) / ( 80 / fov ),
         s2 = ( standardSensi * 3 ) / ( 101 / fov ),
         s3 = ( standardSensi * 3 ) / ( 136 / fov ),
         s4 = ( standardSensi * 3 ) / ( 195 / fov ),
         s5 = ( standardSensi * 5 ) / ( 344 / fov ),
         s6 = ( standardSensi * 5 ) / ( 393 / fov ),
      ];
      return( returned );
   }
         
   btn_calculate.addEventListener( "click", ev => {
      let 
         getSensi = i_standardSensi.value,
         getFov = i_fov.value,
         FOV = getFov < 51 ? 0 :
            getFov > 90 ? 39 : ( getFov - 51 ),
         Returned = CalcSensi( FOV, getSensi )
            ;
      _( {FOV}, {value}, "value[FOV]", value[ FOV ] );
      calculator.innerHTML = "";
      calculator.innerHTML += `
            <h2>Sensi</h2>
               <label>
                  <tt>Camera FOV</tt>
                  <input type="number" value="${ getFov }" readonly>
               </label>
               <label>
                  <tt>Camera Standard Sensitivity</tt>
                  <input type="number" value="${ getSensi }" readonly>
               </label>
               <label>
                  <tt>ADS</tt>
                  <input type="number" value="${ Math.round( Returned[0] ) }" readonly>
               </label>
               <label>
                  <tt>Sniper</tt>
                  <input type="number" value="${ Math.round( Returned[4] ) }" readonly>
               </label>
               <label>
                  <tt>Sniper( Quickscope )</tt>
                  <input type="number" value="${ Math.round( Returned[4] + ( Returned[4] / 2 ) ) }" readonly>
               </label>
               <label>
                  <tt>Escopo Tático</tt>
                  <input type="number" value="${ Math.round( Returned[1] ) }" readonly>
               </label>
               <label>
                  <tt>3x Tactical Scope</tt>
                  <input type="number" value="${ Math.round( Returned[2] ) }" readonly>
               </label>
               <label>
                  <tt>4x Tactical </tt>
                  <input type="number" value="${ Math.round( Returned[3] ) }" readonly>
               </label>
               <label>
                  <tt>6x Tactical </tt>
                  <input type="number" value="${ Math.round( Returned[5] ) }" readonly>
               </label>
               <label>
                  <tt>8x Tactical </tt>
                  <input type="number" value="${ Math.round( Returned[5] ) }" readonly>
               </label>
            `;
   } );
} );