import {sendRedirect} from "h3";

export default defineEventHandler(async (event) => {
    // @ts-ignore
    const redir = await LINKAGES.get(event.req.url);
    if (redir === null) {
        return await sendRedirect(event, "/broken-link")
    }
    return await sendRedirect(event, redir)
})