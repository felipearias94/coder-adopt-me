import { expect } from "chai";
import supertest from "supertest";

const requestAdoption = supertest("http://localhost:8080/api/adoptions");
const requestPets = supertest("http://localhost:8080/api/pets");
const userId = "67291ae74beb529135153da4";
const petId = "67291b684beb529135153da7";
let adoptionId;
let originalAdoptedStatus;

describe("Test Integrales de Adopciones", () => {
  before(async () => {
    const { body } = await requestPets.get(`/${petId}`);
    originalAdoptedStatus = body.payload.adopted;
  });

  it("[GET] /api/adptions - Debe devolver un array de adopciones", async () => {
    const { status, body } = await requestAdoption.get("/");

    adoptionId = body.payload[0]._id;

    expect(status).to.be.equal(200);
    expect(body.payload).to.be.an("array").with.length.greaterThan(0);
    expect(body.payload[0]).to.have.property("_id");
    expect(body.payload[0]).to.have.property("pet").that.is.an("string");
  });

  it("[GET] /api/adptions/:aid - Debe devolver una adopcion por su ID", async () => {
    const { status, body } = await requestAdoption.get(`/${adoptionId}`);

    expect(status).to.be.equal(200);
    expect(body.payload).to.be.an("object");
    expect(body.payload).to.have.property("_id").that.equals(adoptionId);
  });

  it("[POST] /api/adptions - Debe crear una adopcion", async () => {
    const { status, body } = await requestAdoption.post(`/${userId}/${petId}`);

    adoptionId = body.payload._id;

    expect(status).to.be.equal(201);
    expect(body.payload).to.be.an("object");
    expect(body.payload).to.have.property("first_name").that.equals("Felipe");
    expect(body.payload).to.have.property("last_name").that.equals("Arias");
    expect(body.payload)
      .to.have.property("pets")
      .that.is.an("array")
      .with.length.greaterThan(0);
  });

  after(async () => {
    await requestPets.put(`/${petId}`).send({ adopted: false });

    if (adoptionId) {
      const { status } = await requestAdoption.delete(`/${adoptionId}`);
      expect(status).to.equal(200);
    }
  });
});
