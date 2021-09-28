# Chainlink External Adapter for balance_project

A template to be used as an example for new [External Adapters](https://github.com/smartcontractkit/external-adapters-js)

(please fill out with corresponding information)

An example adapter description

### Environment Variables

| Required? |  Name   |                                                        Description                                                         | Options | Defaults to |
| :-------: | :-----: | :------------------------------------------------------------------------------------------------------------------------: | :-----: | :---------: |
|           | API_KEY | An API key that can be obtained from the data provider's dashboard (add a ✅ in `Required?` if this parameter is required) |         |             |

---

### Input Parameters

| Required? |   Name   |     Description     |              Options              | Defaults to |
| :-------: | :------: | :-----------------: | :-------------------------------: | :---------: |
|      ✅     | method | The endpoint to use | sum, minimum, maximum |   example   |

---

## balance_project Endpoint

An example endpoint description

### Input Params

| Required? |            Name            |               Description                |       Options       | Defaults to |
| :-------: | :------------------------: | :--------------------------------------: | :-----------------: | :---------: |
|    ✅     | `method`  |   The type of method you are requesting from the data    | `sum`, `maximum`, `minimum` |             |


### Sample Input

```json
{
  "id": "1",
  "data": {
    "method": "sum",
  }
}
```

### Sample Output

```json
{
  "jobRunID": "278c97ffadb54a5bbb93cfec5f7b5503",
  "data": {
    "result": 77777.77,
  },
  "statusCode": 200
}
```
