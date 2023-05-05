import multer from 'multer';
import { NextApiRequest, NextApiResponse } from 'next/types';
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

const storage = multer.memoryStorage();
const upload = multer({ storage });
const myUploadMiddleware = upload.array('file');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export interface ICloudinaryUploadResponse {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: Date;
  tags: any[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  folder: string;
  api_key: string;
}

function runMiddleware(req: Request, res: NextApiResponse, fn: Function) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: unknown) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req: Request, res: NextApiResponse) {
  await runMiddleware(req, res, myUploadMiddleware);

  let result = [];
  for (const file of (req as any).files) {
    try {
      const b64 = Buffer.from(file.buffer).toString('base64');
      let dataURI = 'data:' + file.mimetype + ';base64,' + b64;

      const response: ICloudinaryUploadResponse = await cloudinary.uploader.upload(dataURI, {
        folder: 'next-codewars',
      });
      result.push(response.secure_url);
    } catch (error) {
      res.status(400).json(error);
      return;
    }
  }
  res.status(200).json({ message: 'Upload successfull', images: result });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
