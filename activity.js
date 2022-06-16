const products = [
    {
      productId: 1,
      name: "headphones",
      category: 1,
      price: 100,
    },
    {
      productId: 2,
      name: "Shoes Nike",
      category: 2,
      price: 300,
    },
    {
      productId: 3,
      name: "hamburger",
      category: 3,
      price: 10,
    },
    {
      productId: 4,
      name: "Fries",
      category: 3,
      price: 5,
    },
    {
      productId: 5,
      name: "Sandwich",
      category: 3,
      price: 10,
    },
    {
      productId: 6,
      name: "laptop",
      category: 1,
      price: 100,
    },
    {
      productId: 7,
      name: "keyboard",
      category: 1,
      price: 50,
    },
    {
      productId: 8,
      name: "t-shirt",
      category: 2,
      price: 16,
    },
  ];
  
  const categories = [
    { id: 1, name: "Electronic" },
    { id: 2, name: "Clothes" },
    { id: 3, name: "Food" }
  ];
  
  export const discountsHolyDays = [
    { category: 1, discountApply: true, value: 10 },
    { category: 2, discountApply: false, value: 0 },
    { category: 3, discountApply: true, value: 30 },
  ];
  
  //// Activity
  
  // cada solución debe de crearse con metodo que retorne el resultado esperado de cada punto
  // y su llamda del metodo con un console.log donde muestre la información
  
  /// 1 - ¿Cuál es el promedio de valor de cada tipo de producto?
    function promedio(products){
      let sum = products.reduce((acu, element) => { return acu += element.price},0);
      let prom = sum / products.length;
      return prom;
    }
    console.log(promedio(products));

  /// 2 - ¿Cuál es el producto más costoso de cada categoria?
  
  const resultMap = products.map((val) => {
    return {category: val.category,price: val.price};
  });

  function OrganizarPorCategorias(resultMap, category){
    let filterCategories = resultMap.filter((val) => {
      return val.category === category
    });
    return filterCategories;
  }

  function precioMasAlto(mapFilter){
    let filter = mapFilter.reduce((acu, element) => { 
      if(acu < element.price){
        acu = element.price
      }
      return acu
    },0);

    return filter;
  }

  //1 ->
  //2 -> ******* Organizar por categorias auto ********
  //3 ->

  const categorie1 = OrganizarPorCategorias(resultMap,1);
  const categori21 = OrganizarPorCategorias(resultMap,2);
  const categorie3 = OrganizarPorCategorias(resultMap,3);

  console.log(precioMasAlto(categorie1));
  console.log(precioMasAlto(categori21));
  console.log(precioMasAlto(categorie3));


    
  /// 3 - ¿Exite algún producto de tipo Electronico que cueste $100?  
    function buscarPrecio(precio, precioCategorie) {
        return precioCategorie.find(element => element.price == precio);
      }

      console.log(buscarPrecio(100,OrganizarPorCategorias(resultMap, 1)));
  
  /// 4 - Obtener todos los productos que en nombre tengan las letra S. 
    const resultMap2 = products.map((val) => {
      return {name: val.name};
    });

    resultMap2.forEach(element => {
      console.log(element);
      if (element.name.includes("s")) {
        console.log(element.name); 
      }
    });
    
  /// 5 - Crear un arreglo de objetos con la siguiente información: { productId: 7 ,nameProduct: 'keyboard', category: 'Electronic', discount: '10', applyDiscount: true}
    const productsN = [
      {
        productId: 7,
        nameProduct: 'keyboard',
        category: 'Electronic',
        discount: '10',
        applyDiscount: true
      }
    ];
  /// 6. Crear un arreglo de objetos con la siguiente información: { productId: 7, priceWithDiscount: 45}
    const productsNe = [
      {
        productId: 7,
        priceWithDiscount: 45
      }
    ]
   // 7. Agregar los siguientes productos, y crear un arreglo con el resultado, ejemplo: [{id: 9, status: 'succes', id:10: status: 'error': message: 'error message'}];
   // errors: duplicated keys
  
  const newProducts = [
      {
          id: 9,
          name: 'Tucson',
          typeOfProcuct: 'Car',
          discount: 10,
      },     {
          id: 10,
          name: 'Jeep',
          typeOfProcuct: 'Car',
          discount: 10,
      },  {
          id: 10,
          name: 'Screen',
          typeOfProcuct: 'Electronic'
      },{
          id: 1,
          name: 'Mouse',
          typeOfProcuct: 'Electronic'
      }
  ]

  function duplicadoId(products, id) {
    let error = false;
    if (products.find(element => element.productId === id)) {
      error = true;
    }
    return error;
  }
  const result = [];
  newProducts.forEach(element => {
    if (duplicadoId(products, element.id)) {
      console.log(element);
      result.push({id: element.id,status: 'error',message: 'duplicated keys'});
    }else{
        products.push(element);
        result.push({id: element.id, status: 'succes'});
    }
  });

  console.log(products)
  console.log(result);

  // *** 