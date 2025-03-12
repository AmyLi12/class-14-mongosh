use('app')

db.snacks.drop()
db.createCollection('space')
db.createCollection('snacks')

db.snacks.insertOne({
    name: "Froot Loops",
    calories: 200,
    price: 5.60
})

db.snacks.insertMany([{
    name: "Snickers",
    calories: 325,
    price: 2.99
},
{
    name: "Starburst",
    calories: 750,
    price: 3.99
}])
