// goi mot api
// const userAction = async () => {
//   const response = await fetch('http://example.com/movies.json');
//   const myJson = await response.json();
// }
const obj = [
  {
    "_id": "595deeb655bea40236aea364",
    "index": 0,
    "picture": "http://placehold.it/32x32",
    "age": 38,
    "eyeColor": "brown",
    "name": "Tara Rosario",
    "gender": "female",
    "company": "ORBAXTER",
    "email": "tararosario@orbaxter.com",
    "phone": "+1 (928) 562-2672",
    "address": "820 Ross Street, Delwood, Wyoming, 6632",
    "about": "Eiusmod pariatur laboris magna excepteur officia aliqua aliqua officia ea sunt veniam ex velit. Cillum fugiat eiusmod magna laborum exercitation eu ex qui occaecat ea. Non nulla consequat qui minim laborum consectetur mollit occaecat qui do non dolore eu ad. Voluptate voluptate eiusmod veniam aliqua Lorem sint minim. Ex ex nulla eu ut est minim consectetur in ex aliqua ut nostrud ea labore.\r\n"
  },
  {
    "_id": "595deeb6e4f86637144a6454",
    "index": 1,
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "eyeColor": "blue",
    "name": "Jacqueline Clements",
    "gender": "female",
    "company": "DARWINIUM",
    "email": "jacquelineclements@darwinium.com",
    "phone": "+1 (877) 599-3863",
    "address": "425 Hinsdale Street, Soudan, Tennessee, 230",
    "about": "Aliqua incididunt fugiat quis officia Lorem nisi et ad laboris ut. Voluptate nulla tempor minim dolor non esse eiusmod enim labore. Et amet cupidatat amet dolor excepteur eu. Dolor id enim dolore proident.\r\n"
  },
  {
    "_id": "595deeb6e139686c3a4ceefd",
    "index": 2,
    "picture": "http://placehold.it/32x32",
    "age": 22,
    "eyeColor": "blue",
    "name": "Robles Roy",
    "gender": "male",
    "company": "PHARMEX",
    "email": "roblesroy@pharmex.com",
    "phone": "+1 (800) 440-2148",
    "address": "291 Crescent Street, Wilsonia, Missouri, 3048",
    "about": "Mollit amet esse voluptate ut. In officia exercitation tempor anim nisi. Aliquip do amet nostrud ex dolor id non irure dolore aliqua ullamco ullamco mollit. Duis culpa eu mollit nostrud aliquip nostrud commodo est incididunt sit magna. Ex tempor magna commodo sint consectetur amet eiusmod incididunt laboris ex consequat. Non laborum occaecat aliqua eu adipisicing ea incididunt fugiat dolore anim occaecat cillum officia. Aliqua labore ut eiusmod occaecat proident deserunt occaecat.\r\n"
  },
  {
    "_id": "595deeb60da07bff8ca858a7",
    "index": 3,
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "eyeColor": "brown",
    "name": "West Dunn",
    "gender": "male",
    "company": "PIGZART",
    "email": "westdunn@pigzart.com",
    "phone": "+1 (833) 446-3490",
    "address": "917 Martense Street, Ivanhoe, Mississippi, 6217",
    "about": "Cillum reprehenderit minim exercitation ex dolor elit. Consequat ut aliqua dolore ipsum magna est incididunt commodo quis dolor cupidatat. Elit ea veniam ipsum ad irure. Ullamco nostrud aute qui voluptate eiusmod do tempor nulla sint. Sint qui occaecat non excepteur proident aliqua. Aliqua tempor consectetur consectetur nisi quis sunt. Enim ea non amet proident minim sint ipsum et commodo elit anim cupidatat mollit.\r\n"
  },
  {
    "_id": "595deeb65292df6bc213a76e",
    "index": 4,
    "picture": "http://placehold.it/32x32",
    "age": 23,
    "eyeColor": "blue",
    "name": "Dolly Fuentes",
    "gender": "female",
    "company": "TERRAGEN",
    "email": "dollyfuentes@terragen.com",
    "phone": "+1 (923) 577-3316",
    "address": "686 Nova Court, Chilton, Minnesota, 5247",
    "about": "Nostrud ad ipsum enim in in qui aliquip fugiat. Consectetur cupidatat anim qui dolore mollit quis et adipisicing in aliqua. Amet tempor occaecat nostrud labore. Pariatur minim ut nisi voluptate commodo laboris eu fugiat consequat voluptate. Non ut voluptate veniam fugiat ullamco. Laborum amet ex excepteur occaecat aliquip esse sunt id et Lorem.\r\n"
  }
];
for(let i = 0; i< obj[i].length-1; i++){

  for ( key in obj[i] ) {
        str =  key.toUpperCase() + " :  " + obj[i].key +"<br>";
        document.getElementById("card").innerHTML += str;
    } 
}