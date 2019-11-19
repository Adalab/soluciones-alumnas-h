'use strict';

const items = [
  'Ada',
  1815,
  [
    'Informática',
    'Matemática',
    'Escritora'
  ],
  {
    mother: 'Anna Isabella',
    father: 'Lord Byron'
  }
];

for (let i = 0; i < items.length; i++) { 
  const item = items[i]
  const type = typeof item;

  let itemString = item;

  if (type === 'object') {
    itemString = JSON.stringify(item); // Convertir objeto a string
  }

  console.log(`El dato ${itemString} es de tipo ${type} y está en la posición ${i}.`);
}

