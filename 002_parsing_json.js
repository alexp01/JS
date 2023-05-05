let text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

let parsed_json =  JSON.parse(text);

console.log(parsed_json["employees"][2]);
// will print : { firstName: 'Peter', lastName: 'Jones' }

console.log(parsed_json["employees"][2]["lastName"]);
// will print : 'Jones'
