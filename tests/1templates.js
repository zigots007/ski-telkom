const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

chai.use(chaiHttp);
chai.should();

const authorization = 'Bearer 12345678';

describe("TEMPLATES", () => {
	it("List all checklists templates", (done) => {
		chai.request(app)
		.get('/checklists/templates')
		.set("Authorization", authorization)
		.end((err, res) => {
			res.should.have.status(200);
			res.body.should.be.a('object');
			done();
		});
	});
	it("Create checklist template", (done) => {
		chai.request(app)
		.post('/checklists/templates')
		.set("Authorization", authorization)
		.set('content-type', 'application/json')
		.send({
			data: {
				attributes: {
					name: "foo template",
					checklist: {
					description: "my checklist",
					due_interval: 3,
					due_unit: "hour"
					},
					items: [
					{
						description: "my foo item",
						urgency: 2,
						due_interval: 40,
						due_unit: "minute"
					},
					{
						description: "my bar item",
						urgency: 3,
						due_interval: 30,
						due_unit: "minute"
					}
					]
				}
			}
		})
		.end((err, res) => {
			res.should.have.status(201);
			res.body.should.be.a('object');
			done();
		});
	});
	it("Get checklist template by given templateId", (done) => {
		const id = 123;
		chai.request(app)
		.get(`/checklists/templates/${id}`)
		.set("Authorization", authorization)
		.set('content-type', 'application/json')
		.end((err, res) => {
			res.should.have.status(200);
			res.body.should.be.a('object');
			done();
		});
	});
	it("Edit Checklist Template by given templateId", (done) => {
		const id = 123;
		chai.request(app)
		.patch(`/checklists/templates/${id}`)
		.set("Authorization", authorization)
		.set('content-type', 'application/json')
		.send({
			data: {
			  name: "foo template",
			  checklist: {
				description: "my checklist",
				due_interval: 3,
				due_unit: "hour"
			  },
			  items: [
				{
				  description: "my foo item",
				  urgency: 2,
				  due_interval: 40,
				  due_unit: "minute"
				},
				{
				  description: "my bar item",
				  urgency: 3,
				  due_interval: 30,
				  due_unit: "minute"
				}
			  ]
			}
		  })
		.end((err, res) => {
			res.should.have.status(200);
			res.body.should.be.a('object');
			done();
		});
	});
	it("Delete checklist template by given {templateId}", (done) => {
		const id = 123;
		chai.request(app)
		.delete(`/checklists/templates/${id}`)
		.set("Authorization", authorization)
		.end((err, res) => {
			res.should.have.status(204);
			done();
		});
	});
	it("Assign bulk checklists template by given templateId to many domains", (done) => {
		const id = 123;
		chai.request(app)
		.post(`/checklists/templates/${id}/assigns`)
		.set("Authorization", authorization)
		.set('content-type', 'application/json')
		.send({
			data: [
			  {
				attributes: {
				  object_id: 1,
				  object_domain: "deals"
				}
			  },
			  {
				attributes: {
				  object_id: 2,
				  object_domain: "deals"
				}
			  },
			  {
				attributes: {
				  object_id: 3,
				  object_domain: "deals"
				}
			  }
			]
		})
		.end((err, res) => {
			res.should.have.status(201);
			res.body.should.be.a('object');
			done();
		});
	});
});