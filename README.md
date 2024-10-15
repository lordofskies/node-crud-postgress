# node-crud-postgress

//Node JS App with Crud and Postgress

1. HTTPS:
    Step 1: openssl genrsa -out project02.key 2048
    Step 2: openssl req -new -key project02.key -out project02.csr
    Step 3: openssl x509 -req -days 365 -in project02.csr -signkey project02.key -out project02.crt

2. Dotenv:
    Step 1: install cross-env
    Step 2: update run script to have the cross-env
    Step 3: create file respectively (.local, .production, .development, .test etc)