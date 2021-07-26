import { db } from'../../../lib/db'

const handler = async (req,res) => {
    const {id} = req.query
    try{
        const results = await db.query(`
            SELECT * FROM cerita
            WHERE id = ?
        `,[id]); await db.end
        
        return res.json(results)
    }catch(e){
        res.status(500).json({message: e.message})
    }
}
export default handler