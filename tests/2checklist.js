const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

chai.use(chaiHttp);
chai.should();

const authorization = 'Bearer 12345678';

describe("CHECKLISTS", () => {
	it("Get checklist by given checklistId", (done) => {
		const id = 123;
		chai.request(app)
		.get(`/checklists/${id}`)
		.set("Authorization", authorization)
		.end((err, res) => {
			res.should.have.status(200);
			res.body.should.be.a('object');
			done();
		});
	});
	it("Update checklist by given checklistId", (done) => {
		const id = 123;
		chai.request(app)
		.patch(`/checklists/${id}`)
		.set("Authorization", authorization)
		.set('content-type', 'application/json')
		.send({
			data: {
			  type: "checklists",
			  id: 1,
			  attributes: {
				object_domain: "contact",
				object_id: "1",
				description: "Need to verify this guy house.",
				is_completed: false,
				completed_at: null,
				created_at: "2018-01-25T07:50:14+00:00"
			  },
			  links: {
				self: "https://dev-kong.command-api.kw.com/checklists/50127"
			  }
			}
		})
		.end((err, res) => {
			res.should.have.status(200);
			res.body.should.be.a('object');
			done();
		});
	});
	it("Delete checklist by given checklistId", (done) => {
		const id = 123;
		chai.request(app)
		.delete(`/checklists/${id}`)
		.set("Authorization", authorization)
		.end((err, res) => {
			res.should.have.status(204);
			done();
		});
	});
	it("This creates a Checklist object.", (done) => {
		chai.request(app)
		.post(`/checklists`)
		.set("Authorization", authorization)
		.set('content-type', 'application/json')
		.send({
			data: {
			  attributes: {
				object_domain: "contact",
				object_id: "1",
				due: "2019-01-25T07:50:14+00:00",
				urgency: 1,
				description: "Need to verify this guy house.",
				items: [
				  "Visit his house",
				  "Capture a photo",
				  "Meet him on the house"
				],
				task_id: "123"
			  }
			}
		})
		.end((err, res) => {
			res.should.have.status(201);
			res.body.should.be.a('object');
			done();
		});
	});
	it("Get list of checklists.", (done) => {
		chai.request(app)
		.get(`/checklists`)
		.set("Authorization", authorization)
		.end((err, res) => {
			res.should.have.status(200);
			res.body.should.be.a('object');
			done();
		});
	});
});