# Chainlink External Adapter for balance_project

## Testing the adapter's endpoints with curl commands (sum, maximum, minimum)

##### to retrieve sum of all account balances --> 

curl -X POST -H "content-type:application/json" "http://localhost:8080/" --data '{ "id": 0, "data": { "method": "sum" } }'

##### to retrieve maximum account id and balance --> 

curl -X POST -H "content-type:application/json" "http://localhost:8080/" --data '{ "id": 0, "data": { "method": "maximum" } }'

##### to retrieve maximum account id and balance --> 

curl -X POST -H "content-type:application/json" "http://localhost:8080/" --data '{ "id": 0, "data": { "method": "minimum" } }'





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
