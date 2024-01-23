
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const formData = req.body;
    const apiKey = 'pat-na1-e36f4c28-95d6-4049-bd86-e974f2265890y';  // Replace with your actual API key

    try {
      // Send the data to HubSpot using the HubSpot API
      const response = await axios.post('https://api.hubapi.com/path/to/hubspot/endpoint', formData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          // Add any other required headers or authentication here
        },
      });

      // Handle the HubSpot API response as needed
      console.log(response.data);

      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}