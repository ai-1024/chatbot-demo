import { respData, respErr } from "@/lib/resp";

export async function POST(req: Request) {
  try {
    const { msg } = await req.json();

    return respData("receive：" + msg);
  } catch (e) {
    return respErr("test failed");
  }
}
