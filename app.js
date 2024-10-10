 nodejs-week3
import knex from 'knex';
import express from 'express';

const knexInstance = knex({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "my-secret-pw",
    database: process.env.DB_NAME || "hyf_node_week3_warmup",
    multipleStatements: true,
  },
});

import express from 'express';
import fs from 'fs';  
main
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

 nodejs-week3
const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);

const allowedSort = ['first_name', 'last_name', 'email', 'phone', 'id'];

contactsAPIRouter.get("/", async (req, res) => {
  let query = knexInstance.select("*").from("contacts");

  if ("sort" in req.query) {
    const [column, direction] = req.query.sort.toString().split(" ");
    const sortColumn = column;
    const sortDirection = direction && direction.toUpperCase() === 'DESC' ? 'DESC' : 'ASC'; 

    if (allowedSort.includes(sortColumn)) {
      query = query.orderBy(sortColumn, sortDirection);
    } else {
      return res.status(400).json({ error: "Invalid sort parameters" });
    }
  }

  console.log("SQL", query.toSQL().sql);

  try {
    const data = await query;
    res.json({ data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Specify the location of the JSON file
const documentsFilePath = './documents.json';

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.get('/search', (req, res) => {
    const query = req.query.q;

    fs.readFile(documentsFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read documents file.' });
        }

        const documents = JSON.parse(data);

        if (!query) {
            return res.status(200).json(documents); 
        }

        const filteredDocuments = documents.filter(doc => {
            return Object.values(doc).some(value =>
                String(value).toLowerCase().includes(query.toLowerCase())
            );
        });

        return res.status(200).json(filteredDocuments);
    });
});

app.get('/documents/:id', (req, res) => {
    const documentId = parseInt(req.params.id);

    if (isNaN(documentId)) {
        return res.status(400).json({ error: 'Invalid document ID.' });
    }

    fs.readFile(documentsFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read documents file.' });
        }

        const documents = JSON.parse(data);
        const document = documents.find(doc => doc.id === documentId);

        if (!document) {
            return res.status(404).json({ error: 'Document not found' });
        }

        return res.status(200).json(document);
    });
});

app.post('/search', (req, res) => {
    const query = req.query.q;
    const fields = req.body.fields;

    if (query && fields) {
        return res.status(400).json({ error: 'Cannot provide both query parameter and fields in the body.' });
    }

    if (fields && typeof fields !== 'object') {
        return res.status(400).json({ error: 'Fields must be an object.' });
    }

    if (query === '') {
        return res.status(400).json({ error: 'Query parameter cannot be empty.' });
    }

    if (fields && Object.keys(fields).length === 0) {
        return res.status(400).json({ error: 'Fields object cannot be empty.' });
    }

    fs.readFile(documentsFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read documents file.' });
        }

        const documents = JSON.parse(data);

        if (query) {
            const filteredDocuments = documents.filter(doc => {
                return Object.values(doc).some(value =>
                    String(value).toLowerCase().includes(query.toLowerCase())
                );
            });
            return res.status(200).json(filteredDocuments);
        }

        if (fields) {
            const filteredDocuments = documents.filter(doc => {
                return Object.keys(fields).every(field => {
                    return String(doc[field]).toLowerCase() === String(fields[field]).toLowerCase();
                });
            });
            return res.status(200).json(filteredDocuments);
        }

        return res.status(200).json(documents);
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

 main
