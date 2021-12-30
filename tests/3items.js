const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

chai.use(chaiHttp);
chai.should();

const authorization = 'Bearer 12345678';

describe("ITEMS", () => {
	it("Complete item(s)", (done) => {
		chai.request(app)
		.post(`/checklists/complete`)
		.set("Authorization", authorization)
		.set('content-type', 'application/json')
        .send({
            data: [
              {
                item_id: 1
              },
              {
                item_id: 2
              },
              {
                item_id: 3
              },
              {
                item_id: 4
              }
            ]
        })
		.end((err, res) => {
			res.should.have.status(200);
			res.body.should.be.a('object');
			done();
		});
	});
	it("Incomplete item(s)", (done) => {
		chai.request(app)
		.post(`/checklists/incomplete`)
		.set("Authorization", authorization)
		.set('content-type', 'application/json')
        .send({
            data: [
              {
                item_id: 1
              },
              {
                item_id: 2
              },
              {
                item_id: 3
              },
              {
                item_id: 4
              }
            ]
        })
		.end((err, res) => {
			res.should.have.status(200);
			res.body.should.be.a('object');
			done();
		});
	});
    it("Get all items by given {checklistId}", (done) => {
        const id = "123";
		chai.request(app)
		.get(`/checklists/${id}/items`)
		.set("Authorization", authorization)
		.end((err, res) => {
			res.should.have.status(200);
			res.body.should.be.a('object');
			done();
		});
	});
    it("Create item by given checklistId", (done) => {
		chai.request(app)
		.post(`/checklists/incomplete`)
		.set("Authorization", authorization)
		.set('content-type', 'application/json')
        .send({
            data: {
              attribute: {
                description: "Need to verify this guy house.",
                due: "2019-01-19 18:34:51",
                urgency: "2",
                assignee_id: 123
              }
            }
        })
		.end((err, res) => {
			res.should.have.status(200);
			res.body.should.be.a('object');
			done();
		});
	});
    it("Get checklist item by given {checklistId} and {itemId}", (done) => {
        const cheklistId = "123";
        const itemId = "123";
		chai.request(app)
		.get(`/checklists/${cheklistId}/items/${itemId}`)
		.set("Authorization", authorization)
		.end((err, res) => {
			res.should.have.status(200);
			res.body.should.be.a('object');
			done();
		});
	});
    it("Edit Checklist Item on given {checklistId} and {itemId}", (done) => {
        const cheklistId = "123";
        const itemId = "123";
		chai.request(app)
		.patch(`/checklists/${cheklistId}/items/${itemId}`)
		.set("Authorization", authorization)
		.set('content-type', 'application/json')
        .send({
            data: {
              attribute: {
                description: "Need to verify this guy house.",
                due: "2019-01-19 18:34:51",
                urgency: "2",
                assignee_id: 123
              }
            }
        })
		.end((err, res) => {
			res.should.have.status(200);
			res.body.should.be.a('object');
			done();
		});
	});
    it("Delete checklist item by given {checklistId} and {itemId}", (done) => {
		const cheklistId = "123";
        const itemId = "123";
		chai.request(app)
		.delete(`/checklists/${cheklistId}/items/${itemId}`)
		.set("Authorization", authorization)
		.end((err, res) => {
			res.should.have.status(200);
			res.body.should.be.a('object');
			done();
		});
	});
    it("Update bulk checklist", (done) => {
		const cheklistId = "123";
		chai.request(app)
		.post(`/checklists/${cheklistId}/items/_bulk`)
		.set("Authorization", authorization)
		.set('content-type', 'application/json')
        .send({
            data: [
              {
                id: "64",
                action: "update",
                attributes: {
                  description: "",
                  due: "2019-01-19 18:34:51",
                  urgency: "2"
                }
              },
              {
                id: "205",
                action: "update",
                attributes: {
                  description: "{{data.attributes.description}}",
                  due: "2019-01-19 18:34:51",
                  urgency: "2"
                }
              }
            ]
        })
		.end((err, res) => {
			res.should.have.status(200);
			res.body.should.be.a('object');
			done();
		});
	});
    it("Count summary of checklists item", (done) => {
		chai.request(app)
		.get(`/checklists/items/summaries`)
		.set("Authorization", authorization)
		.end((err, res) => {
			res.should.have.status(200);
			res.body.should.be.a('object');
			done();
		});
	});
    it("Get all items", (done) => {
		chai.request(app)
		.get(`/checklists/items`)
		.set("Authorization", authorization)
		.end((err, res) => {
			res.should.have.status(200);
			res.body.should.be.a('object');
			done();
		});
	});
});