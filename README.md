# Pair Programmer API Server

This API is a back-end of the project https://github.com/lucas3K/PairPrograming

## Documentation

### Product Register Upload

- Request Route: https://pair-programming-api.herokuapp.com/products/register/upload/?key=XXXXXXXXXXXXXXXX
- Request Method: **POST**
- Request Format: **JSON**
- Request Format Fields: **{ "input_name" : "input_value", }**
- **Parameter Key**: Password to access the route and send the request to the server

### List of Registered Products

- Request Route: https://pair-programming-api.herokuapp.com/products/list/?key=XXXXXXXXXXXXXXXX
- Request Method: **GET**
- **Parameter Key**: Password to access the route and get the list of products

### Get One Registered Product By ID

- Request Route: https://pair-programming-api.herokuapp.com/products/list/?key=XXXXXXXXXXXXXXXX&product_id=YYYYYYYYYYYYYYYYYYYYYYYY
- Request Method: **GET**
- **Parameter key**: Password to access the route and get the list of products
- **Parameter product_id**: Parameter to filter the list of products and get the correct item

## Dependencies

- dotenv
- express
- mongoose
- multer
- cors

## Contributors

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/paulpessoa">
        <img src="https://avatars.githubusercontent.com/u/74559558" width="100px;" alt="Foto do Paul Pessoa no GitHub"/><br>
        <sub>
          <b>Paul Pessoa</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/jeancarlospaula">
        <img src="https://avatars.githubusercontent.com/u/79765050" width="100px;" alt="Foto do Jean Carlos no GitHub"/><br>
        <sub>
          <b>Jean Carlos</b>
        </sub>
      </a><br>
    </td>
    <td align="center">
      <a href="https://github.com/VicenteCarlos">
        <img src="https://avatars.githubusercontent.com/u/81314892" width="100px;" alt="Foto do Vicente Carlos no GitHub"/><br>
        <sub>
          <b>Vicente Carlos</b>
        </sub>
      </a><br>
    </td>
    <td align="center">
      <a href="https://github.com/lucas3K">
        <img src="https://avatars.githubusercontent.com/u/87881833" width="100px;" alt="Foto do Lucas no GitHub"/><br>
        <sub>
          <b>Lucas</b>
        </sub>
      </a><br>
    </td>
    <td align="center">
      <a href="https://github.com/GabrielGostinskideOliveira">
        <img src="https://avatars.githubusercontent.com/u/79949494" width="100px;" alt="Foto do Gabriel Gostinski no Github"/><br>
        <sub>
          <b>Gabriel Gostinski</b>
        </sub>
      </a><br>
    </td>
