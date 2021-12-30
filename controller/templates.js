exports.ListAllCheckList = function(req, res){
	res.json({
        query: req.query,
        meta: {
          count: 10,
          total: 100
        },
        links: {
          first: "https://kong.command-api.kw.com/api/v1/checklists/templates?page[limit]=10&page[offset]=0",
          last: "https://kong.command-api.kw.com/api/v1/checklists/templates?page[limit]=10&page[offset]=10",
          next: "https://kong.command-api.kw.com/api/v1/checklists/templates?page[limit]=10&page[offset]=10",
          prev: "null"
        },
        data: [
          {
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
        ]
    });
}

exports.CreateChecklist = function(req, res){
    res.status(201).json({
        data:{
            id:1,
            attributes:req.body.data
        }
    });
}

exports.GetChecklistTemplate = function(req, res){
	res.json({
        data: {
			type: "templates",
			id: req.params.templateId,
			attributes: {
			  name: "foo template",
			  items: [
				{
				  urgency: 2,
				  due_unit: "minute",
				  description: "my foo item",
				  due_interval: 40
				},
				{
				  urgency: 3,
				  due_unit: "minute",
				  description: "my bar item",
				  due_interval: 30
				}
			  ],
			  checklist: {
				due_unit: "hour",
				description: "my checklist",
				due_interval: 3
			  }
			},
			links: {
			  self: "http://localhost:8000/api/v1/templates/2"
			}
		  }
    });
}

exports.UpdateCheklist = (req, res)=>{
	res.json({
		data: {
			id: req.params.templateId,
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
	});
}

exports.DeleteChecklist = function(req, res){
    res.status(204).end()
    // res.json({
    //     msg:"Sukses menghapus "+req.params.templateId
    // })
}

exports.Assigns = (req, res)=>{
	res.status(201).json({
		meta: {
			count: 3,
			total: 3
		  },
		  data: [
			{
			  type: "checklists",
			  id: "509",
			  attributes: {
				object_domain: "deals",
				object_id: 1,
				description: "my checklist",
				is_completed: false,
				due: "2019-02-16T03:07:10+00:00",
				urgency: 0,
				completed_at: null,
				updated_by: null,
				created_by: 556396,
				created_at: "2019-02-16T00:07:10+00:00",
				updated_at: "2019-02-16T00:07:10+00:00"
			  },
			  links: {
				self: "http://localhost:8000/api/v1/checklists/509"
			  },
			  relationships: {
				items: {
				  links: {
					self: "http://localhost:8000/api/v1/checklists/509/relationships/items",
					related: "http://localhost:8000/api/v1/checklists/509/items"
				  },
				  data: [
					{
					  type: "items",
					  id: "839"
					},
					{
					  type: "items",
					  id: "840"
					}
				  ]
				}
			  }
			},
			{
			  type: "checklists",
			  id: "510",
			  attributes: {
				object_domain: "deals",
				object_id: 2,
				description: "my checklist",
				is_completed: false,
				due: "2019-02-16T03:07:10+00:00",
				urgency: 0,
				completed_at: null,
				updated_by: null,
				created_by: 556396,
				created_at: "2019-02-16T00:07:10+00:00",
				updated_at: "2019-02-16T00:07:10+00:00"
			  },
			  links: {
				self: "http://localhost:8000/api/v1/checklists/510"
			  },
			  relationships: {
				items: {
				  links: {
					self: "http://localhost:8000/api/v1/checklists/510/relationships/items",
					related: "http://localhost:8000/api/v1/checklists/510/items"
				  },
				  data: [
					{
					  type: "items",
					  id: "841"
					},
					{
					  type: "items",
					  id: "842"
					}
				  ]
				}
			  }
			},
			{
			  type: "checklists",
			  id: "511",
			  attributes: {
				object_domain: "deals",
				object_id: 3,
				description: "my checklist",
				is_completed: false,
				due: "2019-02-16T03:07:10+00:00",
				urgency: 0,
				completed_at: null,
				updated_by: null,
				created_by: 556396,
				created_at: "2019-02-16T00:07:10+00:00",
				updated_at: "2019-02-16T00:07:10+00:00"
			  },
			  links: {
				self: "http://localhost:8000/api/v1/checklists/511"
			  },
			  relationships: {
				items: {
				  links: {
					self: "http://localhost:8000/api/v1/checklists/511/relationships/items",
					related: "http://localhost:8000/api/v1/checklists/511/items"
				  },
				  data: [
					{
					  type: "items",
					  id: "843"
					},
					{
					  type: "items",
					  id: "844"
					}
				  ]
				}
			  }
			}
		  ],
		  included: [
			{
			  type: "items",
			  id: "839",
			  attributes: {
				description: "my foo item",
				is_completed: false,
				completed_at: null,
				due: "2019-02-16T00:47:10+00:00",
				urgency: 2,
				updated_by: null,
				user_id: 556396,
				checklist_id: 509,
				deleted_at: null,
				created_at: "2019-02-16T00:07:10+00:00",
				updated_at: "2019-02-16T00:07:10+00:00"
			  },
			  links: {
				self: "http://localhost:8000/api/v1/items/839"
			  }
			},
			{
			  type: "items",
			  id: "840",
			  attributes: {
				description: "my bar item",
				is_completed: false,
				completed_at: null,
				due: "2019-02-16T00:37:10+00:00",
				urgency: 3,
				updated_by: null,
				user_id: 556396,
				checklist_id: 509,
				deleted_at: null,
				created_at: "2019-02-16T00:07:10+00:00",
				updated_at: "2019-02-16T00:07:10+00:00"
			  },
			  links: {
				self: "http://localhost:8000/api/v1/items/840"
			  }
			},
			{
			  type: "items",
			  id: "841",
			  attributes: {
				description: "my foo item",
				is_completed: false,
				completed_at: null,
				due: "2019-02-16T00:47:10+00:00",
				urgency: 2,
				updated_by: null,
				user_id: 556396,
				checklist_id: 510,
				deleted_at: null,
				created_at: "2019-02-16T00:07:10+00:00",
				updated_at: "2019-02-16T00:07:10+00:00"
			  },
			  links: {
				self: "http://localhost:8000/api/v1/items/841"
			  }
			},
			{
			  type: "items",
			  id: "842",
			  attributes: {
				description: "my bar item",
				is_completed: false,
				completed_at: null,
				due: "2019-02-16T00:37:10+00:00",
				urgency: 3,
				updated_by: null,
				user_id: 556396,
				checklist_id: 510,
				deleted_at: null,
				created_at: "2019-02-16T00:07:10+00:00",
				updated_at: "2019-02-16T00:07:10+00:00"
			  },
			  links: {
				self: "http://localhost:8000/api/v1/items/842"
			  }
			},
			{
			  type: "items",
			  id: "843",
			  attributes: {
				description: "my foo item",
				is_completed: false,
				completed_at: null,
				due: "2019-02-16T00:47:10+00:00",
				urgency: 2,
				updated_by: null,
				user_id: 556396,
				checklist_id: 511,
				deleted_at: null,
				created_at: "2019-02-16T00:07:10+00:00",
				updated_at: "2019-02-16T00:07:10+00:00"
			  },
			  links: {
				self: "http://localhost:8000/api/v1/items/843"
			  }
			},
			{
			  type: "items",
			  id: "844",
			  attributes: {
				description: "my bar item",
				is_completed: false,
				completed_at: null,
				due: "2019-02-16T00:37:10+00:00",
				urgency: 3,
				updated_by: null,
				user_id: 556396,
				checklist_id: 511,
				deleted_at: null,
				created_at: "2019-02-16T00:07:10+00:00",
				updated_at: "2019-02-16T00:07:10+00:00"
			  },
			  links: {
				self: "http://localhost:8000/api/v1/items/844"
			  }
			}
		]
	});
}