sequenceDiagram
participant browser
participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: { message: "note created" }
    deactivate server


    Note right of browser: The browser executes the javascript code form the server that fetches the JSON file and renders the notes
