import type { NextApiRequest, NextApiResponse } from "next";
import { parseBody } from "next-sanity/webhook";

// Export the config from next-sanity to enable validating the request body signature properly
export { config } from "next-sanity/webhook";

type Slug = { current: string };
type Err = { message: string };

export default async function revalidate(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { isValidSignature, body } = await parseBody(
      req,
      process.env.SANITY_REVALIDATE_SECRET
    );

    if (!isValidSignature) {
      const message = "Invalid signature";
      return res.status(401).json({ message, isValidSignature, body });
    }

    const staleRoute = `/${(body?.slug as Slug)?.current}`;
    await res.revalidate(staleRoute);
    const message = `Updated route: ${staleRoute}`;
    return res.status(200).json({ message, body });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: (err as Err).message });
  }
}
