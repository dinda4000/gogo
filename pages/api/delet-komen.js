import { query } from '../../lib/db'

const handler = async (req, res) => {
  const { id_komentar } = req.query
  try {
    if (!id_komentar) {
      return res.status(400).json({ message: '`id` required' })
    }
    if (typeof parseInt(id_komentar.toString()) !== 'number') {
      return res.status(400).json({ message: '`id` must be a number' })
    }
    const results = await query(
      `DELETE FROM komentar
      WHERE id_komentar = ?`,id_komentar
    )
    res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
