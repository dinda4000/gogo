import { query } from '../../lib/db'

const handler = async (req, res) => {
  const { id_cerita } = req.query
  try {
    if (!id_cerita) {
      return res.status(400).json({ message: '`id_cerita` required' })
    }
    if (typeof parseInt(id_cerita.toString()) !== 'number') {
      return res.status(400).json({ message: '`id_cerita` must be a number' })
    }
    const results = await query(
      `DELETE FROM cerita
      WHERE id_cerita = ?`,id_cerita
    )
    res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
