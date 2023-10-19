
const products2= [
    {
        id:1,
        categoria:"bandeja",
        medida:[
            {nombre:"20cm x 12cm ",precio:560}
        ],
        image:'1.png', 
        stock: 99,
        titulo:"bandeja"
    }, 
   {
        id:2,
        categoria:"bandeja",
        medida:[
            {nombre:"27cm x 18cm",precio:1000},
            {nombre:"35cm x 24cm",precio:1630},
            {nombre:"40cm x 30cm",precio:2130},
        ],
        image:'2.png', 
        stock: 99,
        titulo:"bandeja"
    },
    {
        id:5,
        categoria:"bandeja",
        medida:[
            {nombre:"20cm x 20cm",precio:880},
            {nombre:"30cm x 20cm",precio:1200},
            {nombre:"25cm x 35cm",precio:1500},
        ],
        image:'3.png', 
        stock: 99,
        titulo:"bandeja"
    },
    {
        id:8,
        categoria:"bandeja",
        medida:[
            {nombre:"18cm x 24cm ",precio:1300}
        ],
        image:'16.png' ,
        stock: 99,
        titulo:"bandeja"
    },
    {
        id:9,
        categoria:"bandeja",
        medida:[
            {nombre:"30cm x 50cm",precio:2850}
        ],
        image:'14.png' ,
        stock: 99,
        titulo:"bandeja"
    },
    {
        id:10,
        categoria:"bandeja",
        medida:[
            {nombre:"30cm x 30cm",precio:2380}
        ],
        image:'19.png' ,
        stock: 99,
        titulo:"bandeja"
    },
    {
        id:11,
        categoria:"bandeja",
        medida:[
            {nombre:"14cm x 18cm",precio:750}
        ],
        image:'26.png' ,
        stock: 99,
        titulo:"bandeja"
    },
    {
        id:12,
        categoria:"portaretrato",
        medida:[
            {nombre:"10cm x 15cm 'v'", precio:560}
        ],
        image:'13.png',
        stock: 99,
        titulo:"portaretrato"
    },
    {
        id:13,
        categoria:"portaretrato",
        medida:[
            {nombre:"10cm x 15cm 'h'",precio:560}
        ],
        image:'15.png' ,
        stock: 99,
        titulo:"portaretrato"
    },
    {
        id:14,
        categoria:"portaretrato",
        medida:[
            {nombre:"10cm x 15cm 'h'",precio:880},
            {nombre:"18cm x 13cm 'h'", precio:1130},
        ],
        image:'17.png' ,    
        stock: 99,
        titulo:"portaretrato"
    },
    {
        id:16,
        categoria:"portaretrato",
        medida:[
            {nombre:"10cm x 15cm 'v'",precio:750},
            {nombre:"18cm x 13cm 'v'",precio:1060},
        ],
        image:'18.png' ,
        stock: 99,
        titulo:"portaretrato"
    },
    {
        id:18,
        categoria:"portaretrato",
        medida:[
            {nombre:"10cm x 15cm 'h'",precio:800},
            {nombre:"18cm x 13cm 'h'",precio:1060},
        ],
        image:'27.png' ,
        stock: 99,
        titulo:"portaretrato"
    },
    {
        id:20,
        categoria:"portaretrato",
        medida:[
            {nombre:"3cm x 7cm 'v'",precio:380},
            {nombre:" 9cm x 6cm 'v'", precio:500},
        ],
        image:'20.png' ,
        stock: 99,
        titulo:"portaretrato"
    },
   
    {
        id:22,
        categoria:"portaretrato",
        medida:[
            {nombre:" 4cm x 6cm 'v'",precio:450}
        ],
        image:'24.png' ,
        stock: 99,
        titulo:"portaretrato"
    },
    {
        id:23,
        categoria:"caja_de_te",
        medida:[
            {nombre:"28cm x 11cm",precio:1940},
            {nombre:"19cm x 19cm",precio:1690},
        ],
        image:'7.png', 
        stock: 99,
        titulo:"caja de té"
    },
  
    {
        id:25,
        categoria:"caja_de_te",
        medida:[
            {nombre:"26cm x 19cm",precio:2690},
            {nombre:"25cm x 25cm",precio:3450},
        ],
        image:'6.png', 
        stock: 99,
        titulo:"caja de té"
    },
   
    {
        id:27,
        categoria:"caja_de_te",
        medida:[
            {nombre:"19cm x 19cm ",precio:2130},
            {nombre:"26cm x 19cm ",precio:2950},
            {nombre:"25cm x 25cm",precio:3690},
        ],
        image:'8.png', 
        stock: 99,
        titulo:"caja de té"
    },
    {
        id:30,
        categoria:"caja_de_te",
        medida:[
            {nombre:"20cm de alto",precio:1130}
        ],
        image:'39.png' ,
        stock: 99,
        titulo:"caja de té"
    },
    {
        id:31,
        categoria:"caja_de_te",
        medida:[
            {nombre:"25cm de alto",precio:3150}
        ],
        image:'40.png' ,
        stock: 99,
        titulo:"caja de té"
    },
    {
        id:32,
        categoria:"cajita",
        medida:[
            {nombre:"20cm x 14,5cm",precio:1000},
            {nombre:"15cm x 11,5cm",precio:630},
            {nombre:"22cm x 30cm",precio:1300},
        ],
        image:'5.png', 
        stock: 99,
        titulo:"cajita"
    },
    {
        id:35,
        categoria:"cajita",
        medida:[
            { nombre:"11cm x 8cm",precio:560}
        ],    
        image:'4.png',   
        stock: 99,
        titulo:"cajita"
    },
    {
        id:36,
        categoria:"cajita",
        medida:[
            {nombre:"15cm x 15cm",precio:750}
        ],
        image:'25.png' ,
        stock: 99,
        titulo:"cajita"
    },
    {
        id:37,
        categoria:"cajita",
        medida:[
            {nombre:"20cm x 15cm",precio:1060}
        ],
        image:'22.png' ,
        stock: 99,
        titulo:"cajita"
    },
    {
        id:38,
        categoria:"lapicero",
        medida:[
            {nombre:"9cm alto",precio:300},
            {nombre:"12cm alto",precio:750},
    ],
      image:'10.png' ,
        stock: 99,
        titulo:"lapicero"
    },
    {
        id:40,
        categoria:"servilletero",
        medida:[
            {nombre:"12cm alto",precio:800}
      ],
       image:'48.png' ,
        stock: 99,
        titulo:"servilletero"
    },
    {
        id:41,
        categoria:"servilletero",
        medida:[
            {nombre:"9cm de alto",precio:300},
            {nombre:"12cm de alto",precio:750 },
        ],
        image:'47.png' ,
        stock: 99,
        titulo:"servilletero"
    },
    {
        id:43,
        categoria:"servilletero",
        medida:[
            {nombre:"9cm alto", precio:300},
            {nombre:"12cm alto",precio:750 },
     ],
        image:'46.png' , 
        stock: 99,
        titulo:"servilletero"
    },
    {
        id:45,
        categoria:"cajonera",
        medida:[
            {nombre:"12cm ancho, 6cm prof. 18cm alto",precio:3880},
            {nombre:"18cm ancho, 14cm prof. 22cm alto",  precio:4880},
        ],
        image:'34.png' ,
        stock: 99,
        titulo:"cajonera"
    },
    {
        id:47,
        categoria:"cajonera",
        medida:[
            {nombre:"8cm ancho, 15cm prof. 8cm alto",precio:1630}
        ],
        image:'31.png' ,
        stock: 99,
        titulo:"cajonera"
    },
    {
        id:48,
        categoria:"cajonera",
        medida:[
            {nombre:"33cm largo, 10cm prof. 15cm alto",precio:3880}
        ],
        image:'32.png' ,
        stock: 99,
        titulo:"cajonera"
    },
    {
        id:49,
        categoria:"cajonera",
        medida:[
            {nombre:"22cm largo, 10cm prof.15cm alto ", precio:2650}
        ],
        image:'33.png' ,
        stock: 99,
        titulo:"cajonera"
    },
    {
        id:50,
        categoria:"cajonera",
        medida:[
            {nombre:"33cm largo, 10cm prof. 15cm alto ",precio:3630}
        ],    
        image:'35.png' ,
        stock: 99,
        titulo:"cajonera"
    },
    {
        id:51,
        categoria:"cajonera",
        medida:[
            {nombre:"33cm largo, 10cm prof. 15cm alto",precio:3630}
        ],    
        image:'28.png' ,
        stock: 99,
        titulo:"cajonera"
    },
    {
        id:52,
        categoria:"cajonera",
        medida:[
            {nombre:"14cm alto, 14cm prof.17cm ancho",precio:3250}
        ],     
        image:'70.png' ,
        stock: 99,
        titulo:"cajonera"
    },
    {
        id:53,
        categoria:"espejo",
        medida:[
            {nombre:"42cm alto x 23cm ancho",precio:5130}
        ],     
        image:'30.png' ,
        stock: 99,
        titulo:"espejo"
    },
    {
        id:54,
        categoria:"espejo",
        medida:[
            {nombre:"22cm alto x 17cm ancho",precio:1750}
        ],     
        image:'29.png' ,
        stock: 99,
        titulo:"espejo"
    },
    {
        id:55,
        categoria:"plantera",
        medida:[
            {nombre:"10cm alto ",precio:800 }
        ],    
        image:'38.png' ,
        stock: 99,
        titulo:"plantera"
    },
    {
        id:56,
        categoria:"plantera",
        medida:[
            {nombre:"13cm x 11cm ",precio:880}
        ],     
        image:'36.png' ,     
        stock: 99,
        titulo:"plantera"
    },
    {
        id:57,
        categoria:"plantera",
        medida:[
            {nombre:"19cm x 11cm ",precio:940}
        ],     
        image:'37.png' ,
        stock: 99,
        titulo:"plantera"
    },
    {
        id:58,
        categoria:"porta_llave",
        medida:[
            {nombre:"23cm x 11cm ",precio:1500}
        ],     
        image:'54.png' ,
        stock: 99,
        titulo:"porta llave"
    },
    {
        id:59,
        categoria:"porta_llave",
        medida:[
            {nombre:"33cm x 16cm ",precio:1380}
        ],     
        image:'53.png' , 
        stock: 99,
        titulo:"porta llave"
    },
    {
        id:60,
        categoria:"porta_llave",
        medida:[
            {nombre:"24cm x 11cm ",precio:1060}
        ],     
        image:'55.png' ,
        
        stock: 99,
        titulo:"porta llave"
    },
    {
        id:61,
        categoria:"porta_llave",
        medida:[
            {nombre:"25cm x 10cm ",precio:1060}
        ],     
        image:'52.png',
        stock: 99,
        titulo:"porta llave"
    },
    {
        id:62,
        categoria:"porta_llave",
        medida:[
            {nombre:"26cm x 11cm ",precio:1130}
        ],     
        image:'50.png',
        stock: 99,
        titulo:"porta llave"
    },
    {
        id:63,
        categoria:"porta_llave",
        medida:[
            {nombre:"20cm x 9cm ",precio:1000}
        ],     
        image:'49.png' ,
        stock: 99,
        titulo:"porta llave"
    },
    {
        id:64,
        categoria:"porta_llave",
        medida:[
            {nombre:"24cm x 19cm "}
        ],     
        image:'41.png' ,
        precio:1750,
        stock: 99,
        titulo:"porta llave"
    },
    {
        id:65,
        categoria:"porta_llave",
        medida:[
            {nombre:"25cm x 17cm ",precio:1250},
            {nombre:"25cm x 17cm ",precio:1250},
        ],     
        image:'45.png' ,  
        stock: 99,
        titulo:"porta llave"
    },
    {
        id:67,
        categoria:"bandeja",
        medida:[
            {nombre:"15cm x 20cm ",precio:1060},
            {nombre:"19cm x 27cm ",precio:1200},
        ],
        image:'67.png' ,
        stock: 99,
        titulo:"bandeja"
    },
    
    {
        id:70,
        categoria:"bandeja",
        medida:[
            {nombre:"22cm x 14cm ",precio:690},
            {nombre:"24cm x 16cm ",precio:800},
            {nombre:"26cm x 19cm ",precio:940},
        ],
        image:'69.png' ,
        stock: 99,
        titulo:"bandeja"
    },
    {
        id:73,
        categoria:"cajita",
        medida:[
            { nombre:"6cm x 3cm ",precio:450},
            {nombre:"8cm x 6cm ",precio:500},
            {nombre:"8cm x 8cm ",precio:560},
       ],
       image:'63.png' ,
        stock: 99,
        titulo:"cajita"
    }, 
   
    {
        id:76,
        categoria:"cajita",
        medida:[
            {nombre:"10cm x 13cm ",precio:1060},
            {nombre:"12cm x 20cm ",precio:1880},
            {nombre:"16cm x 23cm ",precio:2450},
        ],
        image:'62.png' ,
        stock: 99,
        titulo:"cajita"
    },              
       
    {
        id:79,
        categoria:"cajita",
        medida:[
            {nombre:"8cm x 8cm x 8cm ",precio:750}
        ],
        image:'68.png' ,
        stock: 99,
        titulo:"cajita"
    },                                            
]

export default products2