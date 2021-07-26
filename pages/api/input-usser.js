//@ts-check
import { query } from '../../lib/db'

const handler = async (req, res) => {
  const { nama,tanggal_lahir,jenis_kelamin,username,password} = req.body
  try {
    if  (!nama||!tanggal_lahir ||!jenis_kelamin||!username ||!password ) {
      return res
        .status(400)
        .json({ message: 'input harus di isi semua' })
    }

    const results = await query(
      `
      INSERT INTO user (nama,tanggal_lahir,jenis_kelamin,username,password)
      VALUES (?,?,?,?,?)`,[nama,tanggal_lahir,jenis_kelamin,username,password]
    );
    // await query.end;

    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
