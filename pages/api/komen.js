//@ts-check
import { query } from '../../lib/db'

const handler = async (req, res) => {
  const { id_komentar,komentar} = req.body
  try {
    if  (!id_komentar ||!komentar) {
      return res
        .status(400)
        .json({ message: 'input harus di isi semua' })
    }

    const results = await query(
      `
      INSERT INTO komentar (id_komentar,komentar)
      VALUES (?,?)`,[id_komentar,komentar]
    );
    // await query.end;

    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
