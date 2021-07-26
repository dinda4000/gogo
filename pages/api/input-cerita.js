//@ts-check
import { query } from '../../lib/db'

const handler = async (req, res) => {
  const { id_cerita,judul,gambar,cerita} = req.body
  try {
    if  (!id_cerita ||!judul ||!gambar||!cerita ) {
      return res
        .status(400)
        .json({ message: 'input harus di isi semua' })
    }

    const results = await query(
      `
      INSERT INTO cerita (id_cerita,judul,gambar,cerita)
      VALUES (?,?,?,?)`,[id_cerita,judul,gambar,cerita]
    );
    // await query.end;

    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
