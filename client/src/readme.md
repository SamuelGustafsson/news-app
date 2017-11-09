Anropa api:et på följande sätt:
GET http://localhost:3000/api/ => listar de 10 första nyheterna
GET http://localhost:3000/api/?page=2 => listar nyheter 11-20
GET http://localhost:3000/api/?page=3 => listar nyheter 21-30
GET http://localhost:3000/api/?tag=Tag 1 => listar de 10 första nyheter som är taggade med "Tag 1"
GET http://localhost:3000/api/?tag=Tag 1&page=2 => listar de följande 10 nyheterna som är taggade med "Tag 1"