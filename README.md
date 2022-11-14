
# PlotiHub

PlotiHub aims to be the leading open-source property management software in Kenya


## Demo

[Frontend demo](https://plotihub-v2.vercel.app/)


## API Reference

#### Get all properties

```http
  GET /api/properties
```
#### Get properties

```http
  GET /api/properties/${id}
```
For more endpoints please check documantation.



## Documentation

[API Documentation](https://documenter.getpostman.com/view/14609137/2s8YmEz6Js)


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Installation

Clone the project using Git

```bash
  git clone git@github.com:PlotiHub/plotihub.git
  cd plotihub
```
```bash
  npm install --prefix client
  npm start --prefix client
```  
```bash
  rails db:create
  rails db:migrate db:seed
  rails s
``` 
## Tech Stack

**Client:** React, Material UI

**Server:** Ruby on Rails, PostgreSQL

