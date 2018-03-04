# Homework Event API

A simple event api made following the homework instructions.

### How to run

1. Clone the repo

2. Run `yarn install`

3. Setup your database in `config/config.json`

4. Run `yarn sequelize db:migrate` & `yarn sequelize db:seed:all`

5. Run `yarn start` or `yarn dev`

### RESTful routes

|**URI**|**VERB**|**ACTION**|
|-------------|-----------|----------|
| /events     | GET       | index    |
| /events     | POST      | create   |
| /events/:id | GET       | show     |
| /events/:id | PATCH/PUT | update   |
| /events/:id | DELETE    | destroy  |

### Events

The events have 4 properties:

1. title
2. startDate
3. endDate
4. description

Start & end dates should be formatted as `YYYY-MM-DD`