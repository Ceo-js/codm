

let 
   value = [ // 0,91666667
      /*  51 */ 52, // 0,91666667
      /*  52 */ 51.08333333, 
      /*  53 */ 50.16666667,
      /*   */ 
      /*  54 */ 49.25, 
      /*  55 */ 48.33333333, 
      /*  56 */ 47.41666667,
      /*  57 */ 46.5, 
      /*  58 */ 45.58333333, 
      /*  59 */ 44.66666667,
      /*  60 */ 43.75, 
      /*  61 */ 42.83333333, 
      /*  62 */ 41.91666667,
      /*  63 */ 41, 
      /*  64 */ 40.08333333, 
      /*   */ 
      /*  65 */ 39.16666667, 
      /*  66 */ 38.25, 
      /*  67 */ 37.33333333,
      /*  68 */ 36.41666667, 
      /*  69 */ 35.5, 
      /*  70 */ 34.58333333,
      /*  71 */ 33.66666667, 
      /*  72 */ 32.75, 
      /*  73 */ 31.83333333,
      /*  74 */ 30.91666667, 
      /*  75 */ 30,
      /*  76 */ 29.08333358,
      /*  77 */ 28.16666717,
      /*  78 */ 27.25000077,
      /*  79 */ 26.33333438,
      /*  80 */ 25.41666899,
      /*  81 */ 24.50000262,
      /*  82 */ 23.58333626,
      /*  83 */ 22.66666991,
      /*  84 */ 21.75000357,
      /*  85 */ 20.83333724,
      /*  86 */ 19.91667092,
      /*  87 */ 19.00000461,
      /*  88 */ 18.08333831,
      /*  89 */ 17.16667202,
      /*  90 */ 16.25000574,
   ],
   x = 0.91666667   
;


value.forEach(
   valor => {
      x -= 0.00000001;
      console.log(
         valor - x 
      );
   }
);