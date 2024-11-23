// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import initializeConnection from "../../utils/EO_Connection";

export default async function handler(req, res) {
  try {
    const connection = await initializeConnection();
    const collections = await connection.listCollections();
    res.status(200).json(collections);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
