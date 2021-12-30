exports.Complete = (req, res)=>{
    res.json({
        data: [
            {
              id: 1,
              item_id: 1,
              is_completed: true,
              checklist_id: 1
            },
            {
              id: 2,
              item_id: 2,
              is_completed: true,
              checklist_id: 1
            },
            {
              id: 3,
              item_id: 3,
              is_completed: true,
              checklist_id: 1
            },
            {
              id: 4,
              item_id: 4,
              is_completed: true,
              checklist_id: 1
            }
        ]
    });
}

exports.InComplete = (req, res)=>{
    res.json({
        data: [
            {
              id: 1,
              item_id: 1,
              is_completed: false,
              checklist_id: 1
            },
            {
              id: 2,
              item_id: 2,
              is_completed: false,
              checklist_id: 1
            },
            {
              id: 3,
              item_id: 3,
              is_completed: false,
              checklist_id: 1
            },
            {
              id: 4,
              item_id: 4,
              is_completed: false,
              checklist_id: 1
            }
          ]
    });
}

exports.GetChecklistAllItems = (req, res)=>{
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
              created_at: "2018-01-25T07:50:14+00:00",
              items: [
                {
                  id: "1",
                  name: "Sample",
                  user_id: "1",
                  is_completed: false,
                  due: null,
                  urgency: 0,
                  checklist_id: 13,
                  assignee_id: 123,
                  task_id: "123",
                  completed_at: null,
                  last_update_by: null,
                  update_at: null,
                  created_at: "2018-01-25T07:50:14+00:00"
                },
                {
                  id: "2",
                  name: "Sample 2",
                  user_id: "1",
                  is_completed: false,
                  due: null,
                  urgency: 0,
                  checklist_id: 13,
                  assignee_id: 123,
                  task_id: "123",
                  completed_at: null,
                  last_update_by: null,
                  update_at: null,
                  created_at: "2018-01-25T07:50:14+00:00"
                }
              ]
            },
            links: {
              self: "https://dev-kong.command-api.kw.com/checklists/50127"
            }
        }
    });
}

exports.CreateItems = (req, res)=>{
    res.json({
        data: {
            type: "checklists",
            id: req.params.checklistId,
            attributes: {
              description: "Example Item.",
              is_completed: false,
              completed_at: null,
              due: null,
              urgency: 0,
              updated_by: null,
              updated_at: null,
              created_at: "2018-01-25T07:50:14+00:00"
            },
            links: {
              self: "https://dev-kong.command-api.kw.com/checklists/50127"
            }
        }
    });
}

exports.GetById = (req, res)=>{
    res.json({
        data: {
            type: "checklists",
            id: req.params.checklistId,
            attributes: {
              description: "Need to verify this guy house.",
              is_completed: false,
              completed_at: null,
              due: "2019-01-19T18:34:51+00:00",
              urgency: 2,
              updated_by: null,
              created_by: 556396,
              checklist_id: 1547,
              assignee_id: 123,
              task_id: "123",
              deleted_at: null,
              created_at: "2019-04-12T16:50:47+00:00",
              updated_at: "2019-04-12T16:50:47+00:00"
            },
            links: {
              self: "https://dev-kong.command-api.kw.com/checklists/50127"
            }
        }
    });
}

exports.UpdateItem = (req, res)=>{
    res.json({
        data: {
            type: "checklists",
            id: req.params.checklistId,
            attributes: {
              description: "Example Item.",
              is_completed: false,
              due: null,
              urgency: 0,
              assignee_id: 123,
              completed_at: null,
              updated_by: null,
              updated_at: null,
              created_at: "2018-01-25T07:50:14+00:00"
            },
            links: {
              self: "https://dev-kong.command-api.kw.com/checklists/50127"
            }
        }
    });
}

exports.DeleteItem = (req, res)=>{
    res.status(200).json({
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

exports.UpdateBulk = (req, res)=>{
    res.json({
        data: [
            {
              id: "1",
              action: "update",
              status: 200
            },
            {
              id: "2",
              action: "update",
              status: 404
            },
            {
              id: "3",
              action: "update",
              status: 403
            }
        ]
    });
}

exports.GetSummaries = (req, res)=>{
    res.json({
        data: {
            today: 0,
            past_due: 0,
            this_week: 2,
            past_week: 0,
            this_month: 2,
            past_month: 0,
            total: 2
        }
    });
}

exports.GetAllItems = (req, res)=>{
    res.json({
        query: req.query,
        meta: {
            count: 10,
            total: 105
          },
          data: [
            {
              type: "items",
              id: "14517",
              attributes: {
                description: "1item",
                is_completed: false,
                completed_at: null,
                completed_by: null,
                due: "2019-07-31T09:34:00+00:00",
                urgency: 1,
                updated_by: null,
                created_by: 556397,
                checklist_id: 5756,
                assignee_id: 556396,
                task_id: null,
                deleted_at: null,
                created_at: "2019-07-25T09:34:08+00:00",
                updated_at: "2019-07-25T09:34:08+00:00"
              },
              links: {
                self: "https://qa-kong.command-api.kw.com/checklist/items/14517"
              }
            },
            {
              type: "items",
              id: "13299",
              attributes: {
                description: "Second Item",
                is_completed: false,
                completed_at: null,
                completed_by: null,
                due: "2019-07-29T19:50:00+00:00",
                urgency: 4,
                updated_by: null,
                created_by: 556396,
                checklist_id: 5257,
                assignee_id: 556396,
                task_id: null,
                deleted_at: null,
                created_at: "2019-07-23T19:50:32+00:00",
                updated_at: "2019-07-23T19:50:32+00:00"
              },
              links: {
                self: "https://qa-kong.command-api.kw.com/checklist/items/13299"
              }
            },
            {
              type: "items",
              id: "9154",
              attributes: {
                description: "2",
                is_completed: false,
                completed_at: null,
                completed_by: null,
                due: "2019-07-29T13:48:00+00:00",
                urgency: 0,
                updated_by: 556396,
                created_by: 556396,
                checklist_id: 4039,
                assignee_id: 556396,
                task_id: null,
                deleted_at: null,
                created_at: "2019-07-04T08:13:11+00:00",
                updated_at: "2019-07-25T13:48:33+00:00"
              },
              links: {
                self: "https://qa-kong.command-api.kw.com/checklist/items/9154"
              }
            },
            {
              type: "items",
              id: "13300",
              attributes: {
                description: "third",
                is_completed: false,
                completed_at: null,
                completed_by: null,
                due: "2019-07-28T19:51:00+00:00",
                urgency: 5,
                updated_by: 556396,
                created_by: 556396,
                checklist_id: 5257,
                assignee_id: 556396,
                task_id: null,
                deleted_at: null,
                created_at: "2019-07-23T19:50:59+00:00",
                updated_at: "2019-07-23T19:51:06+00:00"
              },
              links: {
                self: "https://qa-kong.command-api.kw.com/checklist/items/13300"
              }
            }
          ],
          links: {
            first: "https://qa-kong.command-api.kw.com/checklist/items?filter[due][between]=2019-01-04T17:00:00.000,2019-10-11T16:59:59.5959&filter[assignee_id][is]=556396&filter[is_completed][is]=0&sort=-due&page[limit]=10&page[offset]=0",
            last: "https://qa-kong.command-api.kw.com/checklist/items?filter[due][between]=2019-01-04T17:00:00.000,2019-10-11T16:59:59.5959&filter[assignee_id][is]=556396&filter[is_completed][is]=0&sort=-due&page[limit]=10&page[offset]=100",
            next: "https://qa-kong.command-api.kw.com/checklist/items?filter[due][between]=2019-01-04T17:00:00.000,2019-10-11T16:59:59.5959&filter[assignee_id][is]=556396&filter[is_completed][is]=0&sort=-due&page[limit]=10&page[offset]=10",
            prev: null
        }
    });
}