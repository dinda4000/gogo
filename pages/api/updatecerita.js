//@ts-check

import { query } from '../../lib/db'

const handler = async (req, res) => {
    const { id_cerita,judul,gambar,cerita} = req.body
    try {
        if  (!id_cerita ||!judul ||!gambar ||!cerita) {
            return res
        .status(400)
        .json({ message: 'input harus di isi semua' })
    }

    const results = await query(
      `
      UPDATE cerita
      SET  id_cerita = ?,judul = ?,gambar = ?,cerita = ?
      WHERE id_cerita = ?`, [id_cerita,judul,gambar,cerita,id_cerita]
    );
    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler