import express from 'express';
import fetch from 'node-fetch';
import bodyParser from 'body-parser';

const app = express();

// Parse JSON bodies
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.get('/app/api/v1/youtube', async (req, res) => {
    try {
        const { channelId } = req.body; 
        const response = await fetch(`https://aiotube.deta.dev/channel/%40${channelId}/uploads`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch data from the external API');
        }
        
        const data = await response.json();
        console.log(data);
        
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
