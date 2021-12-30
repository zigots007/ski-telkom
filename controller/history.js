exports.GetListHistory = (req, res)=>{
    res.json({
        meta: {
            count: 1,
            total: 1
          },
          data: [
            {
              type: "history",
              id: "270",
              attributes: {
                loggable_type: "items",
                loggable_id: 791,
                action: "assign",
                kwuid: 556396,
                value: "123",
                created_at: "2019-04-26T15:10:32+00:00",
                updated_at: "2019-04-26T15:10:32+00:00"
              },
              links: {
                self: "http://localhost:8000/api/v1/history/270"
              }
            }
          ],
          links: {
            first: "http://localhost:8000/api/v1/history?page[limit]=10&page[offset]=0",
            last: "http://localhost:8000/api/v1/history?page[limit]=10&page[offset]=0",
            next: null,
            prev: null
          }
    });
}

exports.GetById = (req, res)=>{
    res.json({
        data: {
            type: "history",
            id: req.params.historyId,
            attributes: {
              loggable_type: "items",
              loggable_id: 133,
              action: "assign",
              kwuid: 556396,
              value: "123",
              created_at: "2019-04-26T16:46:56+00:00",
              updated_at: "2019-04-26T16:46:56+00:00"
            },
            links: {
              self: "http://localhost:8000/api/v1/history/54"
            }
          }
    });
}