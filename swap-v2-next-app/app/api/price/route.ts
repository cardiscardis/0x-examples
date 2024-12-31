import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  //To get a 0x API key, follow the instructions here:
  //https://0x.org/docs/introduction/getting-started
  const ZEROEX_API_KEY="a52e1666-252b-48ae-90fc-dd42f1c34595"

  try {
    const res = await fetch(
      `https://api.0x.org/swap/permit2/price?${searchParams}`,
      {
        headers: {
          "0x-api-key": ZEROEX_API_KEY as string,
          "0x-version": "v2",
        },
      }
    );
    const data = await res.json();

    console.log(
      "price api",
      `https://api.0x.org/swap/permit2/price?${searchParams}`
    );

    console.log("price data", data);

    return Response.json(data);
  } catch (error) {
    console.log(error);
  }
}
