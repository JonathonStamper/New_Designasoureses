import initializeConnection from "../../utils/EO_Connection";

export default async function handler(req, res){
    if(req.method != 'POST') return

    try {
        const connection = await initializeConnection();
        const builder = await connection.buildProcess();
        
        console.log(req.body); // For debugging
        
        const { id, coords, dates, bands } = req.body; // Extract data from request body
        
        const datacube = builder.load_collection(id, coords, dates, bands);

        // Return the datacube result or an empty object if it's null
        return res.status(200).json(datacube || {});
    }

    catch (error) {
        console.error("API Error:", error); // Log for debugging
        return res.status(500).json({error: error.message})
    }
    

}