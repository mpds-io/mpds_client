define({ "api": [
  {
    "type": "get",
    "url": "/download/facet",
    "title": "download-facet",
    "description": "<p>Download the data satisfying the given aspect or a combination of aspects. Only the data of the same kind (<em>e.g.</em> crystalline structures or physical properties) can be requested; mixing of different data kinds in the response is not supported.</p>",
    "name": "Download_Facet",
    "group": "Download",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Key",
            "description": "<p>API key obtained via the <a href=\"https://mpds.io/#modal/menu\">MPDS Platform GUI</a></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example for curl:",
          "content": "curl -X GET -H \"Key:a_long_and_secret_string\" https://api.mpds.io/v0/download/facet",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "q",
            "description": "<p>A serialized JSON object containing any reasonable combination of 8 search aspects: <strong>physical properties</strong>, <strong>chemical elements</strong>, <strong>materials classes</strong>, <strong>crystal system</strong>, <strong>chemical formula</strong>, <strong>publication author</strong>, <strong>prototype system</strong>, <strong>space group</strong>. They are defined with the object properties <strong>props</strong>, <strong>elements</strong>, <strong>classes</strong>, <strong>lattices</strong>, <strong>formulae</strong>, <strong>authors</strong>, <strong>protos</strong> and <strong>sgs</strong>, correspondingly. An object property <strong>props</strong> is compulsory (in contrast to others), since it determines the kind of the desired data (<em>e.g.</em> crystalline structures or physical properties).</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "allowedValues": [
              "10",
              "100",
              "500",
              "1000"
            ],
            "optional": false,
            "field": "pagesize",
            "defaultValue": "10",
            "description": "<p>The number of hits per page (pagination).</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>The page number, in the selected or default pagination. Counts from 0. Defaults to the first page, which has number 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "json",
              "cif"
            ],
            "optional": false,
            "field": "fmt",
            "defaultValue": "json",
            "description": "<p>Output data format (<strong>cif</strong> is only valid for structural properties i.e. S-entries).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of **q** (crystalline structures):",
          "content": "{\"elements\":\"Sr-Ti-O\",\"classes\":\"perovskite, conductor\",\"sgs\":\"Pm-3m\",\"props\":\"structural properties\"}",
          "type": "json"
        },
        {
          "title": "Example of **q** (physical properties):",
          "content": "{\"elements\":\"Zr\",\"classes\":\"oxide\",\"props\":\"thermal expansion\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Response",
            "description": "<p>in <strong>json</strong> format, containing the following properties: <strong>out</strong> (list i.e. array of entries), <strong>npages</strong> (number of pages in the selected or default pagination), <strong>page</strong> (current page number), <strong>count</strong> (total number of hits), and <strong>error</strong> (should be none).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful response with two entries:",
          "content": "{\"error\": null, \"out\":[{\"entry_one_properties\":\"entry_one_values\"}, {\"entry_two_properties\":\"entry_two_values\"}], \"npages\": 1, \"page\": 0, \"count\": 2}",
          "type": "json"
        },
        {
          "title": "Successful response (nothing found):",
          "content": "{\"error\": null, \"out\":[], \"npages\": 0, \"count\": 0, \"page\": 0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Response",
            "description": "<p>with an <strong>error</strong> property.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "Responses",
            "description": "<p>with the status codes <em>400</em> (wrong parameters) or <em>403</em> (forbidden) may have no JSON body. Generally, checking the response status code should be always done first.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "codebase/api/app_download/__init__.py",
    "groupTitle": "Download"
  }
] });
