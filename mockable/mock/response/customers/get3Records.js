
const response = `
[
  {
      "id": 1,
      "birthday": "1980-09-12T15:00:00Z",
      "email": "cornelia_bryant@example.com",
      "firstName": "Cornelia",
      "lastName": "Bryant"
  },
  {
      "id": 2,
      "birthday": "1991-03-20T15:00:00Z",
      "email": "ann_miles@example.com",
      "firstName": "Ann",
      "lastName": "Miles"
  },
  {
      "id": 3,
      "birthday": "1985-07-06T15:00:00Z",
      "email": "rosalie_curtis@example.com",
      "firstName": "Rosalie",
      "lastName": "Curtis"
  }
]
`

const isMatched = (condition) => {
  const { path } = condition
  return /^\/customers.*[^(/\d)]?/.test(path)
}

export default {
  isMatched,
  response: { data: JSON.parse(response) }
}
