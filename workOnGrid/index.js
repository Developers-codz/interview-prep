// Input:
const json = { 
  type: 'div', 
  props: { id: 'hello', class: "foo" }, 
  children: [
    {type:'h1', children: 'HELLO' },
    {type:'p', children: [{type:'span', props: {class: "bar" }, children: 'World' }] }
  ]
};

// JSONtoHTML(json);

// Output:
// <div id="hello" class="foo">
//   <h1>HELLO</h1>
//   <p>
//      <span class="bar">World</span>
//   </p>
// </div>


function htmlParser(json) {
    const el = document.createElement(json.type);
    if(json.props) {
       Object.keys(json.props).map((key, i) => {
            el.setAttribute(key, json.props[key])
       })
    }

    if(typeof json.children === "string") {
        el.innerText = json.children
    } else {
      json.children.map(child => {
        el.appendChild(htmlParser(child))
      })
    }
    return el
}


console.log(htmlParser(json));












