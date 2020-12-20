import tippy from "tippy.js";

const doHtmlTooltips = () => {
    const htmlTooltips = document.querySelectorAll(`[data-tip-html]`)

    if (htmlTooltips && htmlTooltips.length > 0
    ) {
        htmlTooltips.forEach(el => {
            tippy(el, {
                content: el.dataset.tipHtml,
                allowHTML: true,
                arrow: false,
            }).popper.classList.add('tip-html')
        })
    }
}

const doSimpleTooltips = () => {
    const tooltips = document.querySelectorAll(`[data-tip]`)

    if (tooltips && tooltips.length > 0) {
        tooltips.forEach(el => {
            tippy(el, {
                content: el.dataset.tip,
            }).popper.classList.add('tip-plain')
            console.dir(el._tippy)
        })
    }
}

export default () => {
    doHtmlTooltips()
    doSimpleTooltips()
}
