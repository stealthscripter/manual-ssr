const { readFileSync } = require("fs");
const { createServer } = require("http");
const { parse } = require("url");
const { renderToString } = require("react-dom/server")
const htmlTemplate = readFileSync(`${__dirname}/index.html`, "utf8");

const React = require("react")



const ssrItems = [
    { id: 1, name: 'item 1' },
    { id: 2, name: 'item 2' },
    { id: 3, name: 'item 3' },
    { id: 4, name: 'item 4' },
    { id: 5, name: 'item 5' },
]


const Home = () => {
    return(
        <div>
            <h1>Test SSR Items</h1>
            <ul>
                {ssrItems.map((item) => (
                    <li key={item.id}>{item.name}</li>))}
            </ul>
        </div>
    )
}

const server = createServer((req, res) => {
    const pathName = parse(req.url, true).pathname;
    if (pathName === "/") {
        const renderedHtml = renderToString(<Home />)
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.end(renderedHtml);
    }
    else if (pathName === "/test") {
        res.end("Test");
    }
    else {
        res.end("Not Found");
    }

})
server.listen(8000, () => console.log("listinging for requestes ports on 8000 "))
