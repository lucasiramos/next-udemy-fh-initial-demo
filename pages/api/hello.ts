import { NextApiRequest, NextApiResponse } from "next";

type TipoDeDatoMiResponse = {
  name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<TipoDeDatoMiResponse>) {
  res.status(200).json({ name: 'John Doe' })
}