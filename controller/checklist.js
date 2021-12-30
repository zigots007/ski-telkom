exports.GetAllChecklist = (req, res)=>{
    res.json({
        meta: {
            count: 10,
            total: 100
          },
          links: {
            first: "https://kong.command-api.kw.com/api/v1/checklists?page[limit]=10&page[offset]=0",
            last: "https://kong.command-api.kw.com/api/v1/checklists?page[limit]=10&page[offset]=10",
            next: "https://kong.command-api.kw.com/api/v1/checklists?page[limit]=10&page[offset]=10",
            prev: "null"
          },
          data: [
            {
              type: "checklists",
              id: "1",
              attributes: {
                object_domain: "contact",
                object_id: "1",
                description: "Need to verify this guy house.",
                is_completed: false,
                due: null,
                task_id: 1,
                urgency: null,
                completed_at: null,
                last_update_by: null,
                update_at: null,
                created_at: "2018-01-25T07:50:14+00:00"
              },
              links: {
                self: "https://kong.command-api.kw.com/api/v1/checklists/1/"
              }
            }
        ]
    });
}

exports.GetById = (req, res)=>{
	if(req.query.include && req.query.include != 'items'){
		res.status(404).json({
			status: "404",
			error: "Not Found"
		});
	}
	else {
		res.json({
			data: {
				type: "checklists",
				id: req.params.checklistId,
				attributes: {
				  object_domain: "contact",
				  object_id: "1",
				  description: "Need to verify this guy house.",
				  is_completed: false,
				  due: null,
				  urgency: 0,
				  completed_at: null,
				  last_update_by: null,
				  update_at: null,
				  created_at: "2018-01-25T07:50:14+00:00"
				},
				links: {
				  self: "https://dev-kong.command-api.kw.com/checklists/50127"
				}
			}
		});
	}
    
}

exports.UpdateChecklist = (req, res)=>{
    res.json({
        data: {
            type: "checklists",
            id: req.params.checklistId,
            attributes: {
              object_domain: "contact",
              object_id: "1",
              description: "Need to verify this guy house.",
              is_completed: false,
              due: null,
              urgency: 0,
              completed_at: null,
              last_update_by: null,
              update_at: null,
              created_at: "2018-01-25T07:50:14+00:00"
            },
            links: {
              self: "https://dev-kong.command-api.kw.com/checklists/50127"
            }
          }
    });
}

exports.DeleteChecklist = (req, res)=>{
    res.status(204).end();
}

exports.CreateChecklist = (req, res)=>{
    res.status(201).json({
        data: {
            type: "checklists",
            id: "1547",
            attributes: {
              object_domain: "contact",
              object_id: "1",
              task_id: "123",
              description: "Need to verify this guy house.",
              is_completed: false,
              due: "2019-01-19T18:34:51+00:00",
              urgency: "2",
              completed_at: null,
              updated_by: null,
              created_by: 556396,
              created_at: "2019-04-12T14:13:42+00:00",
              updated_at: "2019-04-12T14:13:42+00:00"
            },
            links: {
              self: "http://localhost:8000/api/v1/checklists/1547"
            }
          }
    });
}