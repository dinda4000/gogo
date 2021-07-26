import { query } from '../../lib/db'

const handler = async (_, res) => {
    try {
      const results = await query(`
        SELECT * FROM user
    `)
  
      return res.json(results)
    } catch (e) {
      res.status(500).json({ message: e.message })
    }
  }
  
  export default handler