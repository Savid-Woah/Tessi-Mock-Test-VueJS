
export const goTo = (router, url, uuid) => {

    return router.push({ path: url, query: { u: `${uuid}` } });
}