sequenceDiagram
    participant browser
    participant server

     browser->>server: GET
     https://studies.cs.helsinki.fi/exampleapp/spa
     activate server
     server-->>browser: Single page app
     deactivate server

     browser->>server: GET
     https://studies.cs.helsinki.fi/exampleapp/main.css
     activate server
     server-->>browser: css file
     deactivate server

     browser->>server: GET
     https://studies.cs.helsinki.fi/exampleapp/spa.js
     activate server
     server-->>browser: js-file
     deactivate server:

     browser->>server: GET
     https://studies.cs.helsinki.fi/exampleapp/data.json
     activate server
     server-->>browser: [
    {
        "content": "hehe",
        "date": "2023-08-14T00:09:51.952Z"
    }...]
    deactivate server
