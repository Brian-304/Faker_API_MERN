const express = require('express')
const app = express() // doesn't have to be called app
const PORT = 1337;

const { faker } = require("@faker-js/faker")

app.listen(PORT, () => console.log(`server is running on ${PORT} and is listening for requests to respond to`))


const createUser = () => {
    const newFakeUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.random.numeric(3)

    };
    return newFakeUser;
};

//route for new user
app.get("/api/newFakeuser/new", (req, res) => {
    const newFakeUser = createUser();
    console.log(newFakeUser);
    res.json(newFakeUser)
});


const createCompany = () => {
    const newFakeCompany = {
        _id: faker.random.numeric(3),
        name: faker.company.companyName(),
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()

    };
    return newFakeCompany;
};

//route for new company
app.get("/api/newFakeCompany/new", (req, res) => {
    const newFakeCompany = createCompany();
    console.log(newFakeCompany);
    res.json(newFakeCompany)
})

const newFakeCompany = createCompany();
console.log(newFakeCompany);

app.get("/api/newFakeuser/newFakeCompany", (req, res) => {
    const userCompany = {
        user: createUser(),
        company: createCompany()
    }
    console.log(userCompany);
    res.json(userCompany)
})
