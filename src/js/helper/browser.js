export const getUrlParam = (paramName) => {

    const currentUrl = window.location.href;
    const params = new URLSearchParams(new URL(currentUrl).search);
    const urlParam = params.get(paramName);
    return urlParam;
}