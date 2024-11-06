import { expect } from "chai";
import supertest from "supertest";
import mongoose from "mongoose";

const request = supertest("http://localhost:8080/api/adoptions");
const userId = "67291ae74beb529135153da4";
const petId = "67291b684beb529135153da7";

describe("Test Integrales de Adopciones", () => {
  it("[GET] /api/adptions - Debe devolver un array de adopciones", async () => {
    const { status, body } = await request.get("/");
    expect(status).to.be.equal(200);
    expect(body.payload).to.be.an("array");
  });

  it("[GET] /api/adptions/:aid - Debe devolver una adopcion por su id", async () => {
    const { status, body } = await request.get("/67291ae74beb529135153da4");

    expect(status).to.be.equal(200);
    expect(body.payload).to.be.an("object");
    expect(body.payload.first_name).to.be.equal("Felipe");
    expect(body.payload.last_name).to.be.equal("Arias");
    expect(body.payload.pets).to.be.an("array").with.length.greaterThan(0);
  });

  it("[POST] /api/adptions - Debe crear una adopcion", async () => {
    const { status, body } = await request.post(`/${userId}/${petId}`);

    expect(status).to.be.equal(201);
    expect(body.payload).to.be.an("object");
    expect(body.payload.first_name).to.be.equal("Felipe");
    expect(body.payload.last_name).to.be.equal("Arias");
    expect(body.payload.pets).to.be.an("array").with.length.greaterThan(0);
  });

  after(() => {
    mongoose.disconnect();
  });
});
