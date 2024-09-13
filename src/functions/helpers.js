// Function to get date from attribute from SSR PLUSH



const getDataFromPlush = (nameAttr = "", scriptEl = null) => {
    let script;
    if (!scriptEl) {
        script = document.querySelector("script[name='vue_shopping_cart']");
    } else {
        script = scriptEl
    }
    if (script) {
        return JSON.parse(script.getAttribute(nameAttr))
    } else
        return false
}

const getDataCartObject = (dataHTML) => {
    const [elementOfData] = cutDataXml(dataHTML, "#data-cart");
    if (elementOfData) {
        const dataCart = JSON.parse(elementOfData.innerText);
        // start validation data cart

        const hasWarning = dataCart?.cartrequest_products.some(product => product.cartproducts_status?.warning);
        if (hasWarning) {
            const productWithWarning = dataCart?.cartrequest_products.find(product => product.cartproducts_status?.warning);

            return {
                ...dataCart,
                statusError: true,
                errors: productWithWarning.cartproducts_status,
                emptyCart: false
            };
        }
        if (dataCart) {
            return {
                ...dataCart,
                statusError: false,
                emptyCart: false
            };
        } else {
            return {
                emptyCart: true
            }
        }

    }
};

const getEcommerce_token = () => {
    const input = document.querySelector("input[name='Ecommerce_token']");
    if (input)
        return input.value
    else return false
}
const cutDataXml = (textData, cutThisELements) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(textData, "text/html");
    const getShowMore = xmlDoc.querySelectorAll(`${cutThisELements}`);
    return getShowMore
};

const convertObjectToFormData = (obj) => {
    const form = new FormData();
    for (const key in obj) {
        const element = obj[key];
        form.append(key, element)

    }
    return form
}

const buildCartRequest = (arrayRequest, auth) => {
    const objRequest = {
        Ecommerce_token: auth
    };

    arrayRequest.forEach((element, index) => {
        objRequest[`CartAdd[${index}].CartAddVariantAddQty`] = element.cartproducts_variant_qty_in_cart
        objRequest[`CartAdd[${index}].CartAddProductID`] = element.cartproducts_product_id
        objRequest[`CartAdd[${index}].CartAddVariantID`] = element.cartproducts_variant_id
    })
    return convertObjectToFormData(objRequest)
}


const loadCssFile = () => {
    const scriptCart = document.querySelector("script[name='vue_shopping_cart']");
    if (scriptCart) {
        const cdnCssUrl = scriptCart.getAttribute("cssSrc");

        // Fetch the CSS file from the CDN
        fetch(cdnCssUrl)
            .then(response => response.text())
            .then(cssContent => {
                // Wrap the CSS content with style tags and apply !important to each rule
                const styleElement = document.createElement('style');

                styleElement.innerHTML = cssContent.replace(/;/g, ' !important;');
                document.body.appendChild(styleElement);
            })
            .catch(error => {
                console.error('Failed to load CDN CSS:', error);
            });
    }

}


export { getDataFromPlush, getEcommerce_token, cutDataXml, convertObjectToFormData, buildCartRequest, getDataCartObject, loadCssFile }