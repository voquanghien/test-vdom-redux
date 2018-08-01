import { h, diff, patch, create } from "virtual-dom"

export default class vdomEx  {
    render (count, color) {
        return h(
            "div", 
            {
                id:"vdomex"
            },
            [
                h(
                    "div",
                    {
                        style: {
                            display: "block",
                            textAlign: "center",
                            height: (50 + count) + 'px',
                            width: (50 + count) + 'px',
                            lineHeight: (50 + count) + 'px',
                            border: "1px solid #000",
                            backgroundColor: color
                        }
                        
                    },
                    [String(count)]
                )
            ]
        )
    }
}