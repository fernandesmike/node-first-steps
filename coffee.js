const coffee = ["Kopiko", "Great Taste White", "Blanca"];
const price = ["18", "15", "20"];

// Exports contents outside this module
// By default, if no exports are being defined. When you require this module from another module, this module will
// only return an empty object
module.exports = {
  coffee,
  price,
};
