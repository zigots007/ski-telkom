const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

chai.use(chaiHttp);
chai.should();

const authorization = 'Bearer 12345678';

describe("HISTORY", () => {
	it("Get checklist History", (done) => {
		chai.request(app)
		.get(`/checklists/histories`)
		.set("Authorization", authorization)
		.end((err, res) => {
			res.should.have.status(200);
			res.body.should.be.a('object');
			done();
		});
	});
	it("Get checklist History By Id", (done) => {
		const id = 123;
		chai.request(app)
		.get(`/checklists/histories/${id}`)
		.set("Authorization", authorization)
		.end((err, res) => {
			res.should.have.status(200);
			res.body.should.be.a('object');
			done();
		});
	});
});