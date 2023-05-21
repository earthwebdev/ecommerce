import {Category} from "@/models/Category";
import {mongooseConnect} from "@/lib/mongoose";
import {getServerSession} from "next-auth";
import {authOptions, isAdminRequest} from "@/pages/api/auth/[...nextauth]";
export default async function handler(req, res) {
    await mongooseConnect();
    await isAdminRequest(req,res);
    const { id } = req.query;
    const { method } = req;
    //console.log(req.query, req.method);
    //res.json(`${method}`);
    if (method === "DELETE") {
      //res.end(`Category: ${id}`);
      const resp = await Category.deleteOne({ _id: id });
      res.json(resp);
    }
  }