function customRender(reactElement, container){
/*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)

*/

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children

    for (const props in reactElement) {
        if (props === 'children') continue; 
        domElement.setAttribute(props, reactElement.props[props])
         }

         container.appendChild(domElement)
}




const reactElement = {
    type: 'a',
    props: {
         href: 'https://google.com',
         target: '_blank'
    },
    Children: 'click me to vist again'
}


const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)