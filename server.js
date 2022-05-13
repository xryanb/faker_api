
const express = require("express");
const app = express();
const PORT = 8000;
const { faker } = require('@faker-js/faker');


// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


//new class user
const createUser = () => {
    const newFake = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password:faker.internet.password()
        // id:faker.database.mongodbObjectId()
    };
    return newFake;
};
    
const newFakeUser = createUser();
console.log(newFakeUser);

//new class company
const createCompany = () => {
    const newCompany = {
     // id:faker.database.mongodbObjectId()
        CompanyName: faker.company.companyName(),
        address:{
            street:faker.address.streetAddress(),
            city:faker.address.city(),
            state:faker.address.state(),
            zipCode:faker.address.zipCode(),
            country:faker.address.country()
        }
    };
    return newCompany;
};
    
const newFakeCompany = createCompany();
console.log(newFakeCompany);
//test
app.get("/api", (req, res) => {
    res.json({ message: "Hello World test1" });
});

//new user route
app.get("/api/users/new", (req, res) => {
    res.json({user:createUser()});
});


//new company route
app.get('/api/companies/new', (req,res) =>{
    res.json({company:createCompany()});

})

app.get('/api/user/company', (req,res) =>{
    res.json({user:createUser(),
        company:createCompany()
    })
});






app.post("/api/faker", (req, res) => {
        // req.body will contain the form data from Postman or from React
        console.log(req.body);
        // we can push it into the users array for now...
        // later on this will be inserted into a database
        users.push(req.body);
        // we always need to respond with something
        res.json( { status: "ok" } );
    });
    


// this needs to be below the other code blocks
app.listen( PORT, () => console.log(`Listening on port: ${PORT}`) );
