
const products2= [
    {
        id:1,
        categoria:"bandeja",
        medida:[            
            {nombre:"20cm x 12cm ", precio:560 }
    ],
        image:'1.png', 
        stock: 99,
        titulo:"Bandeja"
    }, 
   {
        id:2,
        categoria:"bandeja",
        medida:[            
            {nombre:"27cm x 18cm", precio:1000},
            {nombre:"35cm x 24cm", precio:1630},
            {nombre:"40cm x 30cm", precio:2130}
        ],
        image:'2.png', 
        stock: 99,
        titulo:"Bandeja"
    },
    {
        id:5,
        categoria:"bandeja",
        medida:[            
            {nombre:"20cm x 20cm", precio:880},
            {nombre:"30cm x 20cm", precio:1200},
            {nombre:"25cm x 35cm", precio:1500}
        ],
        image:'3.png', 
        stock: 99,
        titulo:"Bandeja"
    },
    {
        id:8,
        categoria:"bandeja",
        medida:[            {nombre:"18cm x 24cm ", precio:1300 },
    ],
        image:'16.png' ,
        stock: 99,
        titulo:"Bandeja"
    },
    {
        id:9,
        categoria:"bandeja",
        medida:[            {nombre:"30cm x 50cm", precio:2850 },
    ],
        image:'14.png' ,
        stock: 99,
        titulo:"Bandeja"
    },
    {
        id:10,
        categoria:"bandeja",
        medida:[            {nombre:"30cm x 30cm", precio:2380 },
    ],
        image:'19.png' ,
        stock: 99,
        titulo:"Bandeja"
    },
    {
        id:11,
        categoria:"bandeja",
        medida:[            
            {nombre:"14cm x 18cm", precio:750 }
    ],
        image:'26.png' ,
        stock: 99,
        titulo:"Bandeja"
    },
    {
        id:12,
        categoria:"portaretrato",
        medida:[           
        {nombre:"10cm x 15cm 'v'",  precio:560 },
        {nombre:"15cm x 18cm 'v'",  precio:630 }
    ],
        image:'13.png',
        stock: 99,
        titulo:"Portaretrato"
    },
    {
        id:13,
        categoria:"portaretrato",
        medida:[          
            {nombre:"10cm x 15cm 'h'", precio:560 },
            {nombre:"15cm x 18cm 'h'",  precio:630 }
    ],
        image:'15.png' ,
        stock: 99,
        titulo:"Portaretrato"
    },
    {
        id:14,
        categoria:"portaretrato",
        medida:[            
            {nombre:"10cm x 15cm 'h'", precio:880},
            {nombre:"18cm x 13cm 'h'",  precio:1130}
        ],
        image:'17.png' ,    
        stock: 99,
        titulo:"Portaretrato"
    },
    {
        id:16,
        categoria:"portaretrato",
        medida:[          
            {nombre:"10cm x 15cm 'v'", precio:750},
            {nombre:"18cm x 13cm 'v'", precio:1060}
        ],
        image:'18.png' ,
        stock: 99,
        titulo:"Portaretrato"
    },
    {
        id:18,
        categoria:"portaretrato",
        medida:[            
            {nombre:"10cm x 15cm 'h'", precio:800},
            {nombre:"18cm x 13cm 'h'", precio:1060}
        ],
        image:'27.png' ,
        stock: 99,
        titulo:"Portaretrato"
    },
    {
        id:20,
        categoria:"portaretrato",
        medida:[            {nombre:"3cm x 7cm 'v'", precio:380 },
            {nombre:" 9cm x 6cm 'v'",  precio:500}
        ],
        image:'20.png' ,
        stock: 99,
        titulo:"Portaretrato"
    },
   
    {
        id:22,
        categoria:"portaretrato",
        medida:[            {nombre:" 4cm x 6cm 'v'", precio:450 },
    ],
        image:'24.png' ,
        stock: 99,
        titulo:"Portaretrato"
    },
    {
        id:23,
        categoria:"caja_de_te",
        medida:[            {nombre:"28cm x 11cm", precio:1940 },
            {nombre:"19cm x 19cm", precio:1690}
        ],
        image:'7.png', 
        stock: 99,
        titulo:"Caja de té"
    },
  
    {
        id:25,
        categoria:"caja_de_te",
        medida:[    
            {nombre:"19cm x 19cm", precio:1690 },
            {nombre:"26cm x 19cm", precio:2690 },
            {nombre:"25cm x 25cm", precio:3450}
        ],
        image:'6.png', 
        stock: 99,
        titulo:"Caja de té"
    },
   
    {
        id:27,
        categoria:"caja_de_te",
        medida:[            
            {nombre:"19cm x 19cm ", precio:2130},
            {nombre:"26cm x 19cm ", precio:2950},
            {nombre:"25cm x 25cm", precio:3690}
        ],
        image:'8.png', 
        stock: 99,
        titulo:"Caja de té"
    },
    {
        id:30,
        categoria:"caja_de_te",
        medida:[            
            {nombre:"20cm de alto", precio:1130}
    ],
        image:'39.png' ,
        stock: 99,
        titulo:"Caja de té"
    },
    {
        id:31,
        categoria:"caja_de_te",
        medida:[           
             {nombre:"25cm de alto", precio:3150}
    ],
        image:'40.png' ,
        stock: 99,
        titulo:"Caja de té"
    },
    {
        id:32,
        categoria:"cajitas",
        medida:[            
            {nombre:"20cm x 14,5cm", precio:1000},
            {nombre:"15cm x 11,5cm", precio:630},
            {nombre:"22cm x 30cm", precio:1300}
        ],
        image:'5.png', 
        stock: 99,
        titulo:"Cajita"
    },
    {
        id:35,
        categoria:"cajitas",
        medida:[            { nombre:"11cm x 8cm", precio:560 },
        ],   
        image:'4.png',   
        stock: 99,
        titulo:"Cajita"
    },
    {
        id:36,
        categoria:"cajitas",
        medida:[            {nombre:"15cm x 15cm", precio:750 },
    ],
        image:'25.png' ,
        stock: 99,
        titulo:"Cajita"
    },
    {
        id:37,
        categoria:"cajitas",
        medida:[            {nombre:"20cm x 15cm", precio:1060 },
    ],
        image:'22.png' ,
        stock: 99,
        titulo:"Cajita"
    },
    {
        id:38,
        categoria:"lapicero",
        medida:[            
            {nombre:"9cm alto", precio:300},
            {nombre:"12cm alto", precio:500},
            {nombre:"17cm alto", precio:750}
    ],
      image:'10.png' ,
        stock: 99,
        titulo:"Lapicero"
    },
    {
        id:40,
        categoria:"servilletero",
        medida:[            {nombre:"12cm alto", precio:800 },      ],
       image:'48.png' ,
        stock: 99,
        titulo:"Servilletero"
    },
    {
        id:41,
        categoria:"servilletero",
        medida:[            {nombre:"9cm de alto", precio:300 },
            {nombre:"12cm de alto", precio:750 }
        ],
        image:'47.png' ,
        stock: 99,
        titulo:"Servilletero"
    },
    {
        id:43,
        categoria:"servilletero",
        medida:[            {nombre:"9cm alto",  precio:300 },
            {nombre:"12cm alto", precio:75 },
     ],
        image:'46.png' , 
        stock: 99,
        titulo:"Servilletero"
    },
    {
        id:45,
        categoria:"cajonera",
        medida:[            {nombre:"12cm x 6cm x 18cm", precio:3880 },
            {nombre:"18cm x 14cm x 22cm",   precio:4880}
        ],
        image:'34.png' ,
        stock: 99,
        titulo:"Cajonera"
    },
    {
        id:47,
        categoria:"cajonera",
        medida:[            {nombre:"8cm x 15cm x 8cm", precio:1630 },
    ],
        image:'31.png' ,
        stock: 99,
        titulo:"Cajonera"
    },
    {
        id:48,
        categoria:"cajonera",
        medida:[            {nombre:"33cm x 10cm x 15cm", precio:3880 },
    ],
        image:'32.png' ,
        stock: 99,
        titulo:"Cajonera"
    },
    {
        id:49,
        categoria:"cajonera",
        medida:[            {nombre:"22cm x 10cm x 15cm",  precio:2650 },
    ],
        image:'33.png' ,
        stock: 99,
        titulo:"Cajonera"
    },
    {
        id:50,
        categoria:"cajonera",
        medida:[            {nombre:"33cm x 10cm x 15cm", precio:3630 },
        ],   
        image:'35.png' ,
        stock: 99,
        titulo:"Cajonera"
    },
    {
        id:51,
        categoria:"cajonera",
        medida:[            {nombre:"33cm x 10c x 15cm", precio:3630 },
        ],   
        image:'28.png' ,
        stock: 99,
        titulo:"Cajonera"
    },
    {
        id:52,
        categoria:"cajonera",
        medida:[            {nombre:"14cm x 14cm x 17cm", precio:3250 },
        ],    
        image:'70.png' ,
        stock: 99,
        titulo:"Cajonera"
    },
    {
        id:53,
        categoria:"espejo",
        medida:[            {nombre:"42cm x 23cm", precio:5130 },
        ],    
        image:'30.png' ,
        stock: 99,
        titulo:"Espejo"
    },
    {
        id:54,
        categoria:"espejo",
        medida:[            {nombre:"22cm x 17cm", precio:1750 },
        ],    
        image:'29.png' ,
        stock: 99,
        titulo:"Espejo"
    },
    {
        id:55,
        categoria:"plantera",
        medida:[            {nombre:"10cm alto ", precio:800 },
        ],   
        image:'38.png' ,
        stock: 99,
        titulo:"Plantera"
    },
    {
        id:56,
        categoria:"plantera",
        medida:[            {nombre:"13cm x 11cm ", precio:880 },
        ],    
        image:'36.png' ,     
        stock: 99,
        titulo:"Plantera"
    },
    {
        id:57,
        categoria:"plantera",
        medida:[            {nombre:"19cm x 11cm ", precio:940 },
        ],    
        image:'37.png' ,
        stock: 99,
        titulo:"Plantera"
    },
    {
        id:58,
        categoria:"porta_llave",
        medida:[            {nombre:"23cm x 11cm ", precio:1500 },
        ],    
        image:'54.png' ,
        stock: 99,
        titulo:"Porta llave"
    },
    {
        id:59,
        categoria:"porta_llave",
        medida:[            {nombre:"33cm x 16cm ", precio:1200 },
        ],    
        image:'53.png' , 
        stock: 99,
        titulo:"Porta llave"
    },
    {
        id:60,
        categoria:"porta_llave",
        medida:[            
            {nombre:"24cm x 11cm ", precio:940 },
        ],    
        image:'55.png' ,
        
        stock: 99,
        titulo:"Porta llave"
    },
    {
        id:61,
        categoria:"porta_llave",
        medida:[            {nombre:"25cm x 10cm ", precio:1060 },
        ],    
        image:'52.png',
        stock: 99,
        titulo:"Porta llave"
    },
    {
        id:62,
        categoria:"porta_llave",
        medida:[            {nombre:"26cm x 11cm ", precio:880 },
        ],    
        image:'50.png',
        stock: 99,
        titulo:"Porta llave"
    },
    {
        id:63,
        categoria:"porta_llave",
        medida:[            {nombre:"20cm x 9cm ", precio:1000 },
        ],    
        image:'49.png' ,
        stock: 99,
        titulo:"Porta llave"
    },
    {
        id:64,
        categoria:"porta_llave",
        medida:[            
            {nombre:"24cm x 19cm ",  precio:1250}
        ],    
        image:'41.png',
        stock: 99,
        titulo:"Porta llave"
    },
    {
        id:65,
        categoria:"porta_llave",
        medida:[            
            {nombre:"18cm x 15cm ", precio:940 },
           
        ],     
        image:'45.png' ,  
        stock: 99,
        titulo:"Porta llave"
    },
    {
        id:67,
        categoria:"bandeja",
        medida:[           
            {nombre:"15cm x 20cm ", precio:1060},
            {nombre:"19cm x 27cm ", precio:1200}
        ],
        image:'67.png' ,
        stock: 99,
        titulo:"Bandeja"
    },
    
    {
        id:70,
        categoria:"bandeja",
        medida:[            
            {nombre:"22cm x 14cm ", precio:690},
            {nombre:"24cm x 16cm ", precio:800},
            {nombre:"26cm x 19cm ", precio:940}
        ],
        image:'69.png' ,
        stock: 99,
        titulo:"Bandeja"
    },
    {
        id:73,
        categoria:"caja_con_tapa",
        medida:[            
            { nombre:"6cm x 3cm ", precio:450},
            {nombre:"8cm x 6cm ", precio:500},
            {nombre:"8cm x 8cm ", precio:560}
       ],
       image:'63.png' ,
        stock: 99,
        titulo:"Caja con tapa"
    }, 
   
    {
        id:76,
        categoria:"caja_con_tapa",
        medida:[       
            {nombre:"10cm x 13cm ", precio:1060},
            {nombre:"12cm x 20cm ", precio:1880},
            {nombre:"16cm x 23cm ", precio:2450}
        ],
        image:'62.png' ,
        stock: 99,
        titulo:"Caja con tapa"
    },              
       
    {
        id:79,
        categoria:"caja_con_tapa",
        medida:[    
            {nombre:"8cm x 8cm x 8cm ", precio:750}
    ],
        image:'68.png' ,
        stock: 99,
        titulo:"Caja con tapa"
    },       
    {
        id:80,
        categoria:"bastidores",
        medida:[
            { nombre: "8cm x 8cm x 8cm", precio: 750},
            { nombre: "20cm x 20cm", precio: 50 },
            { nombre: "40cm x 40cm", precio: 1550 },
            { nombre: "20cm x 30cm", precio: 750 },
            { nombre: "40cm x 50cm", precio: 1900 },
            { nombre: "20cm x 40cm", precio: 950 },
            { nombre: "40cm x 60cm", precio: 2200},
            { nombre: "20cm x 50cm", precio: 150 },
            { nombre: "40cm x 70cm", precio: 2500 },
            { nombre: "20cm x 60cm", precio: 1300 },
            { nombre: "40cm x 80cm", precio: 2300 },
            { nombre: "25cm x 25cm", precio: 650 },
            { nombre: "40cm x 90cm", precio: 2950 },
            { nombre: "40cm x 100cm", precio: 3450 },
            { nombre: "30cm x 40cm", precio: 1300 },
            { nombre: "30cm x 50cm", precio: 1550 },
            { nombre: "30cm x 60cm", precio: 1800 },
            { nombre: "30cm x 70cm", precio: 2000 },
            { nombre: "50cm x 50cm", precio: 2200 },
            { nombre: "50cm x 60cm", precio: 2400 },
            { nombre: "50cm x 70cm", precio: 3000 },
            { nombre: "50cm x 80cm", precio: 3300 },
            { nombre: "30cm x 80cm", precio: 2300 },
            { nombre: "50cm x 90cm", precio: 3450 },
            { nombre: "50cm x 100cm", precio: 4050 },
            { nombre: "60cm x 70cm", precio: 3450 },
            { nombre: "70cm x 70cm", precio: 3450 },
            { nombre: "60cm x 80cm", precio: 3950 },
            { nombre: "70cm x 80cm", precio: 3950 },
            { nombre: "60cm x 90cm", precio: 4400 },
            { nombre: "70cm x 90cm", precio: 4550 },
            { nombre: "60cm x 100cm", precio: 6600 },
            { nombre: "90cm x 90cm", precio: 5400 },
            { nombre: "100cm x 100cm", precio: 6650 }
        ],
        image:'72.png' ,
        stock: 99,
        titulo:"Bastidores"
    },  
    {
        id:81,
        categoria:"placas3mm",
        medida:[
            { nombre: "20cm x 20cm", precio: 90 },
            { nombre: "20cm x 30cm", precio: 440 },
            { nombre: "20cm x 40cm", precio: 200 },
            { nombre: "20cm x 50cm", precio: 230 },
            { nombre: "120cm x 60cm", precio: 270 },
            { nombre: "25cm x 25cm", precio: 140 },
            { nombre: "30cm x 30cm", precio: 200 },
            { nombre: "30cm x 40cm", precio: 270 },
            { nombre: "30cm x 50cm", precio: 340 },
            { nombre: "30cm x 60cm", precio: 400 },
            { nombre: "30cm x 70cm", precio: 480 },
            { nombre: "30cm x 80cm", precio: 550 },
            { nombre: "40cm x 90cm", precio: 370 },
            { nombre: "40cm x 50cm", precio: 460 },
            { nombre: "40cm x 60cm", precio: 550 },
            { nombre: "40cm x 70cm", precio: 645 },
            { nombre: "40cm x 80cm", precio: 730 },
            { nombre: "40cm x 90cm", precio: 830 },
            { nombre: "40cm x 100cm", precio: 900},
            { nombre: "50cm x 50cm", precio: 570 },
            { nombre: "50cm x 60cm", precio: 690 },
            { nombre: "50cm x 70cm", precio: 800 },
            { nombre: "50cm x 80cm", precio: 930 },
            { nombre: "50cm x 90cm", precio: 1050 },
            { nombre: "60cm x 60cm", precio: 850 },
            { nombre: "60cm x 70cm", precio: 950 },
            { nombre: "60cm x 80cm", precio: 1100 },
            { nombre: "70cm x 70cm", precio: 1100 },
            { nombre: "70cm x 80cm", precio: 1280 },
            { nombre: "70cm x 90cm", precio: 1450 },
            { nombre: "90cm x 90cm", precio: 1850 },
            { nombre: "90cm x 60cm", precio: 1250 },
            { nombre: "100cm x 100cm", precio: 2300 }
        ],
        image:'71.png' ,
        stock: 99,
        titulo:"Placas mdf 3mm"
    },             
    {
        id:82,
        categoria:"placas9mm",
        medida:[
            { nombre: "25cm x 25cm", precio: 690 },
            { nombre: "20cm x 30cm", precio: 690 },
            { nombre: "20cm x 40cm", precio: 900 },
            { nombre: "25cm x 50cm", precio: 1400 },
            { nombre: "25cm x 60cm", precio: 1300 },
            { nombre: "25cm x 70cm", precio: 1550 },
            { nombre: "30cm x 50cm", precio: 1300 },
            { nombre: "30cm x 60cm", precio: 1800 },
            { nombre: "40cm x 50cm", precio: 1750 },
            { nombre: "40cm x 60cm", precio: 2100 },
            { nombre: "40cm x 70cm", precio: 2450 },
            { nombre: "50cm x 50cm", precio: 2200 },
            { nombre: "50cm x 60cm", precio: 2650 },
            { nombre: "50cm x 70cm", precio: 3050 }
        ],
        image:'73.png' ,
        stock: 99,
        titulo:"Placas mdf 9mm"
    },              
    {
        id:83,
        categoria:"porta_rollo",
        medida:[
            {nombre:"35cm de alto", precio:1100 }
        ],
        image:'74.png' ,
        stock: 99,
        titulo:"Porta rollo"
    },    
    {
        id:84,
        categoria:"porta_rollo",
        medida:[
            {nombre:"35cm de alto", precio:1100 }
        ],
        image:'75.png' ,
        stock: 99,
        titulo:"Porta rollo"
    },         
    {
        id:85,
        categoria:"porta_rollo",
        medida:[
            {nombre:"35cm de alto", precio:1100 }
        ],
        image:'76.png' ,
        stock: 99,
        titulo:"Porta rollo"
    },         
    {
        id:86,
        categoria:"porta_rollo",
        medida:[
            {nombre:"35cm de alto", precio:1100 }
        ],
        image:'77.png' ,
        stock: 99,
        titulo:"Porta rollo"
    },         
    {
        id:87,
        categoria:"porta_rollo",
        medida:[
            {nombre:"35cm de alto", precio:1100 }
        ],
        image:'78.png' ,
        stock: 99,
        titulo:"Porta rollo"
    },         
    {
        id:88,
        categoria:"porta_rollo",
        medida:[
            {nombre:"35cm de alto", precio:1100 }
        ],
        image:'79.png' ,
        stock: 99,
        titulo:"Porta rollo"
    },         
    {
        id:89,
        categoria:"porta_rollo",
        medida:[
            {nombre:"35cm de alto", precio:1100 }
        ],
        image:'80.png' ,
        stock: 99,
        titulo:"Porta rollo"
    },         
    {
        id:90,
        categoria:"porta_rollo",
        medida:[
            {nombre:"35cm de alto", precio:1100 }
        ],
        image:'81.png' ,
        stock: 99,
        titulo:"Porta rollo"
    },         
    {
        id:91,
        categoria:"porta_rollo",
        medida:[
            {nombre:"35cm de alto", precio:1100 }
        ],
        image:'82.png' ,
        stock: 99,
        titulo:"Porta rollo"
    },         
    {
        id:92,
        categoria:"porta_rollo",
        medida:[
            {nombre:"35cm de alto", precio:1100 }
        ],
        image:'83.png' ,
        stock: 99,
        titulo:"Porta rollo"
    },     
    {
        id:93,
        categoria:"caja_de_te",
        medida:[
            {nombre:"19cm x 19cm", precio:2200 }
        ],
        image:'85.png' ,
        stock: 99,
        titulo:"Caja de té"
    },       
    {
        id:94,
        categoria:"caja_de_te",
        medida:[
            {nombre:"26cm x 19cm", precio:3060 }
        ],
        image:'84.png' ,
        stock: 99,
        titulo:"Caja de té"
    },          
    {
        id:95,
        categoria:"lapicero",
        medida:[                 
            {nombre:"12cm alto", precio:800}
    ],
      image:'11.png' ,
        stock: 99,
        titulo:"Lapicero"
    }, 
    {
        id:96,
        categoria:"circulo_mdf_3mm",
        medida:[        
            {nombre:"10cm", precio:130},         
            {nombre:"16cm", precio:250},
            {nombre:"20cm", precio:300},
            {nombre:"23cm", precio:380},
            {nombre:"25cm", precio:450},
            {nombre:"30cm", precicmo:500},
    ],
      image:'86.png' ,
        stock: 99,
        titulo:"Círculo mdf 3mm"
    }, 
    {
        id:97,
        categoria:"circulo_melamina_3mm",
        medida:[        
            {nombre:"15cm", precio:190},         
            {nombre:"20cm", precio:550},
            {nombre:"25cm", precio:630},
            {nombre:"30cm", precio:780},
            {nombre:"35cm", precio:1000},
            {nombre:"45cm", precio:1500},
    ],
      image:'87.png' ,
        stock: 99,
        titulo:"Círculo melamina 3mm"
    }, 
    {
        id:98,
        categoria:"caja_de_te",
        medida:[    
            {nombre:"19 x 19cm", precio:2200}
        
        ],
        image:'65.png', 
        stock: 99,
        titulo:"Caja de té"
    },
    {
        id:99,
        categoria:"porta_aderezo",
        medida:[
            {nombre:"11cm x 10cm", precio:750 }
        ],
        image:'64.png' ,
        stock: 99,
        titulo:"Porta aderezo"
    },
    {
        id:100,
        categoria:"soporte",
        medida:[
            {nombre:"8cm de alto", precio:190 },
            {nombre:"11cm de alto", precio:300 },
            {nombre:"20cm de alto", precio:630 }
        ],
        image:'61.png' ,
        stock: 99,
        titulo:"Soporte"
    },
    {
        id:101,
        categoria:"porta_celular",
        medida:[
            {nombre:"17cm de alto", precio:800 }
        ],
        image:'42.png' ,
        stock: 99,
        titulo:"Porta celular"
    },
    {
        id:102,
        categoria:"porta_celular",
        medida:[
            {nombre:"17cm de alto", precio:800 }
        ],
        image:'43.png' ,
        stock: 99,
        titulo:"Porta celular"
    },

    {
        id:103,
        categoria:"letras",
        medida:[
            {nombre:"1,7 cm", precio:25 },
            {nombre:"2,5 cm", precio:38 },
            {nombre:"5 cm", precio:50 },
            {nombre:"6 cm", precio:65 },
            {nombre:"10 cm", precio:190 },
            {nombre:"15 cm", precio:250 },
            {nombre:"20 cm", precio:380 },
            {nombre:"24 cm", precio:480 }
        ],
        image:'57.png' ,
        stock: 99,
        titulo:"Letras"
    },
    {
        id:104,
        categoria:"caja_con_tapa",
        medida:[
            {nombre:"8cm x 8cm x 7cm", precio:500 },
            {nombre:"11cm x 11cm x 10cm", precio:690 },
            {nombre:"16cm x 16cm x 5cm", precio:750 },
            {nombre:"16cm x 11cm x 8cm", precio:750 },
            {nombre:"19cm x 11cm x 8cm", precio:800 },
            {nombre:"31cm x 16cm x 7cm", precio:1250 },
            {nombre:"25cm x 20cm x 8cm", precio:1500 }
       
          
        ],
        image:'56.png' ,
        stock: 99,
        titulo:"Caja con tapa"
    },
    {
        id:105,
        categoria:"porta_llave",
        medida:[
            {nombre:"35cm de largo", precio:1880 }
        ],
        image:'91.png' ,
        stock: 99,
        titulo:"Porta llave"
    },
    {
        id:106,
        categoria:"porta_llave",
        medida:[
            {nombre:"43cm de largo", precio:2000 }
        ],
        image:'96.png' ,
        stock: 99,
        titulo:"Porta llave"
    },
    {
        id:107,
        categoria:"caja_de_te",
        medida:[
            {nombre:"19cm x 19cm", precio:2200 }
        ],
        image:'89.png' ,
        stock: 99,
        titulo:"Caja de té"
    },
    {
        id:108,
        categoria:"casita",
        medida:[
            {nombre:"17cm x 12cm 23cm", precio:1900 }
        ],
        image:'100.png' ,
        stock: 99,
        titulo:"casita de pajaritos"
    },
    {
        id:109,
        categoria:"casita",
        medida:[
            {nombre:"20cm x 12cm 23cm", precio:1900 }
        ],
        image:'93.png' ,
        stock: 99,
        titulo:"casita de pajaritos"
    },
    {
        id:154,
        categoria:"casita",
        medida:[
            {nombre:"14cm x 15cm", precio:880 }
        ],
        image:'137.png' ,
        stock: 99,
        titulo:"casita de pajaritos"
    },
    {
        id:110,
        categoria:"porta_rollo",
        medida:[
            {nombre:"26cm x 31cm", precio:2380 }
        ],
        image:'99.png' ,
        stock: 99,
        titulo:"Porta rollo"
    },
    {
        id:111,
        categoria:"porta_rollo",
        medida:[
            {nombre:"30cm de ancho", precio:2000 }
        ],
        image:'92.png' ,
        stock: 99,
        titulo:"Porta rollo"
    },
    {
        id:112,
        categoria:"lapicero",
        medida:[                 
            {nombre:"11cm alto", precio:630}
    ],
      image:'90.png' ,
        stock: 99,
        titulo:"Lapicero melamina"
    },
    {
        id:113,
        categoria:"porta_llave",
        medida:[            {nombre:"19cm x 25cm ", precio:1750 },
        ],    
        image:'97.png',
        stock: 99,
        titulo:"Porta carta"
    },
    {
        id:114,
        categoria:"navidad",
        medida:[           
             {nombre:"50cm de alto ", precio:1900 },
        ],    
        image:'102.png',
        stock: 99,
        titulo:"Arbolito"
    },
    {
        id:115,
        categoria:"navidad",
        medida:[            
            {nombre:"37cm de alto ", precio:800 },
            {nombre:"50cm de alto ", precio:1200 },
        ],    
        image:'94.png',
        stock: 99,
        titulo:"Arbolito"
    },
    {
        id:116,
        categoria:"navidad",
        medida:[            {nombre:"32cm de alto ", precio:450 },
        ],    
        image:'98.png',
        stock: 99,
        titulo:"Arbolito"
    },
    {
        id:117,
        categoria:"navidad",
        medida:[           
             {nombre:"30cm de alto ", precio:940 },
        ],    
        image:'95.png',
        stock: 99,
        titulo:"Arbolito"
    },
    {
        id:118,
        categoria:"porta_llave",
        medida:[            
            {nombre:"22cm x 18cm ", precio:1200 },
        ],    
        image:'101.png',
        stock: 99,
        titulo:"Porta llave"
    },
    {
        id:119,
        categoria:"navidad",
        medida:[           
             {nombre:"33cm de alto ", precio:940 },
        ],    
        image:'103.png',
        stock: 99,
        titulo:"Arbolito"
    },
    {
        id:137,
        categoria:"navidad",
        medida:[           
             {nombre:"14cm de alto ", precio:190 },
             {nombre:"16cm de alto ", precio:190 },
             {nombre:"22cm de alto ", precio:250 },
             {nombre:"40cm de alto ", precio:380 },
        ],    
        image:'129.png',
        stock: 99,
        titulo:"Arbolito"
    },
    {
        id:120,
        categoria:"navidad",
        medida:[            
            {nombre:"7cm de diametro ", precio:300 },
        ],    
        image:'104.png',
        stock: 99,
        titulo:"Adorno"
    },
    {
        id:121,
        categoria:"navidad",
        medida:[            
            {nombre:"9cm de diametro ", precio:380 },
        ],    
        image:'105.png',
        stock: 99,
        titulo:"Adorno"
    },
    {
        id:122,
        categoria:"navidad",
        medida:[            
            {nombre:"9cm de diametro ", precio:300 },
        ],    
        image:'106.png',
        stock: 99,
        titulo:"Adorno"
    },
    {
        id:123,
        categoria:"navidad",
        medida:[            
            {nombre:"7cm de diametro ", precio:300 },
        ],    
        image:'107.png',
        stock: 99,
        titulo:"Adorno"
    },
    {
        id:124,
        categoria:"navidad",
        medida:[            
            {nombre:"8cm x 5cm", precio:190 },
            {nombre:"8cm x 7cm", precio:250 },
            {nombre:"9cm x 8cm", precio:300 }
        ],    
        image:'108.png',
        stock: 99,
        titulo:"Aplique"
    },
    {
        id:125,
        categoria:"navidad",
        medida:[            
            {nombre:"16cm ", precio:250 },
        ],    
        image:'109.png',
        stock: 99,
        titulo:"Aplique"
    },
    {
        id:126,
        categoria:"navidad",
        medida:[            
            {nombre:"6cm ", precio:130 },
        ],    
        image:'110.png',
        stock: 99,
        titulo:"Aplique"
    },
    {
        id:127,
        categoria:"navidad",
        medida:[            
            {nombre:"7cm ", precio:100 },
        ],    
        image:'111.png',
        stock: 99,
        titulo:"Aplique"
    },
    {
        id:128,
        categoria:"navidad",
        medida:[            
            {nombre:"8cm ", precio:380 },
        ],    
        image:'113.png',
        stock: 99,
        titulo:"Aplique"
    },
    {
        id:129,
        categoria:"navidad",
        medida:[            
            {nombre:"13cm ", precio:380 },
        ],    
        image:'114.png',
        stock: 99,
        titulo:"Aplique"
    },
    {
        id:130,
        categoria:"navidad",
        medida:[            
            {nombre:"9cm ", precio:150 }
        ],    
        image:'115.png',
        stock: 99,
        titulo:"Aplique"
    },
    {
        id:131,
        categoria:"navidad",
        medida:[            
            {nombre:"13cm ", precio:300 }
        ],    
        image:'116.png',
        stock: 99,
        titulo:"Aplique"
    },
    {
        id:132,
        categoria:"navidad",
        medida:[            
            {nombre:"20cm x 13cm", precio:940 }
        ],    
        image:'117.png',
        stock: 99,
        titulo:"Pecebre"
    },
    {
        id:133,
        categoria:"navidad",
        medida:[            
            {nombre:"20cm x 13cm ", precio:940 }
        ],    
        image:'112.png',
        stock: 99,
        titulo:"Pesebre"
    },
    {
        id:134,
        categoria:"navidad",
        medida:[            
            {nombre:"12cm ", precio:250 }
        ],    
        image:'118.png',
        stock: 99,
        titulo:"Aplique"
    },
    {
        id:135,
        categoria:"navidad",
        medida:[            
            {nombre:"12cm ", precio:380 }
        ],    
        image:'119.png',
        stock: 99,
        titulo:"Aplique"
    },
    {
        id:136,
        categoria:"navidad",
        medida:[            
            {nombre:"5cm ", precio:100 },
            {nombre:"7cm ", precio:140 }
        ],    
        image:'120.png',
        stock: 99,
        titulo:"Aplique"
    },
   
    {
        id:139,
        categoria:"navidad",
        medida:[            
            {nombre:"30cm x 26cm", precio:1400 }
        ],    
        image:'121.png',
        stock: 99,
        titulo:"Pesebre"
    },
    {
        id:140,
        categoria:"navidad",
        medida:[            
            {nombre:"27cm x 30cm", precio:1380 }
        ],    
        image:'122.png',
        stock: 99,
        titulo:"Pesebre"
    },
    {
        id:141,
        categoria:"navidad",
        medida:[            
            {nombre:"18cm x 26cm", precio:1380 }
        ],    
        image:'123.png',
        stock: 99,
        titulo:"Pesebre"
    },
    {
        id:142,
        categoria:"navidad",
        medida:[            
            {nombre:"20cm x 22cm", precio:1100 }
        ],    
        image:'124.png',
        stock: 99,
        titulo:"Pesebre"
    },
    {
        id:143,
        categoria:"navidad",
        medida:[            
            {nombre:"26cm x 20cm", precio:1050 }
        ],    
        image:'125.png',
        stock: 99,
        titulo:"Pesebre"
    },
    {
        id:144,
        categoria:"navidad",
        medida:[            
            {nombre:"25cm x 20cm", precio:2000 }
        ],    
        image:'126.png',
        stock: 99,
        titulo:"Pesebre"
    },
    {
        id:145,
        categoria:"navidad",
        medida:[            
            {nombre:"26cm x 20cm", precio:1100 }
        ],    
        image:'127.png',
        stock: 99,
        titulo:"Pesebre"
    },
    {
        id:146,
        categoria:"navidad",
        medida:[            
            {nombre:"26cm x 24cm", precio:1100 }
        ],    
        image:'128.png',
        stock: 99,
        titulo:"Pesebre"
    },
    {
        id:147,
        categoria:"navidad",
        medida:[            
            {nombre:"15cm", precio:300 }
        ],    
        image:'130.png',
        stock: 99,
        titulo:"Palabas"
    },
    {
        id:148,
        categoria:"navidad",
        medida:[            
            {nombre:"26cm", precio:500 }
        ],    
        image:'131.png',
        stock: 99,
        titulo:"Palabas"
    },
    {
        id:149,
        categoria:"navidad",
        medida:[            
            {nombre:"11cm", precio:190 }
        ],    
        image:'132.png',
        stock: 99,
        titulo:"Palabas"
    },
    {
        id:150,
        categoria:"navidad",
        medida:[            
            {nombre:"13cm", precio:250 }
        ],    
        image:'133.png',
        stock: 99,
        titulo:"Palabas"
    },
    {
        id:151,
        categoria:"navidad",
        medida:[            
            {nombre:"10cm", precio:290 }
        ],    
        image:'134.png',
        stock: 99,
        titulo:"Palabas"
    },
    {
        id:152,
        categoria:"navidad",
        medida:[            
            {nombre:"16cm", precio:300 }
        ],    
        image:'135.png',
        stock: 99,
        titulo:"Palabas"
    },
    {
        id:153,
        categoria:"navidad",
        medida:[            
            {nombre:"14cm", precio:300 }
        ],    
        image:'136.png',
        stock: 99,
        titulo:"Palabas"
    },  
    {
        id:154,
        categoria:"navidad",
        medida:[            
            {nombre:"40cm de alto", precio:1100 }
        ],    
        image:'138.png',
        stock: 99,
        titulo:"Arbolito"
    },
    {
        id:155,
        categoria:"porta_celular",
        medida:[
            {nombre:"37cm de alto", precio:1880 }
        ],
        image:'139.png' ,
        stock: 99,
        titulo:"Porta tablet"
    },
    {
        id:156,
        categoria:"navidad",
        medida:[            
            {nombre:"50cm de alto", precio:1130 },
            {nombre:"60cm de alto", precio:1380 }
        ],    
        image:'140.png',
        stock: 99,
        titulo:"Arbolito"
    }
    
    
    





                             
]

export default products2