<!-- TOC -->

- [React + Vite](#react--vite)
  - [components package coverages](#components-package-coverages)
    - [Main.jsx](#mainjsx)
    - [App.jsx](#appjsx)
    - [HelloDemo.jsx](#hellodemojsx)
    - [Hello.jsx](#hellojsx)
    - [PropsDestructureArray.jsx](#propsdestructurearrayjsx)
    - [PropsObject.jsx](#propsobjectjsx)
    - [FruitsArray.jsx](#fruitsarrayjsx)
    - [FruitsObject.jsx](#fruitsobjectjsx)
    - [UseStateCount.jsx](#usestatecountjsx)
    - [UseStateObject.jsx](#usestateobjectjsx)
    - [UseStateArray.jsx](#usestatearrayjsx)
- [Other refferences](#other-refferences)
- [React](#react)
- [React Basics](#react-basics)
  - [Component](#component)
    - [Stateless / Dumb / Presentational / functional component](#stateless--dumb--presentational--functional-component)
    - [Stateful / Smart / Container / class component](#stateful--smart--container--class-component)
    - [JSX - JavaScript XML allows us to write HTML.](#jsx---javascript-xml-allows-us-to-write-html)
    - [Fragments \<\>\</\> (empty tag in react)](#fragments--empty-tag-in-react)
    - [Hooks (2018)](#hooks-2018)
      - [All state explained Youtube link](#all-state-explained-youtube-link)
    - [Props](#props)
    - [State](#state)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

## components package coverages

### Main.jsx

- Takes all the imported components from App.jsx and renders accordingly.

### App.jsx

- Import all the necessary components needs to be loaded on the start up.

### [HelloDemo.jsx](./src/components/HelloDemo.jsx)

- Passing a variable inside the tag.
- Writing JavaScript expressions.
- calling a function from a html tag
- Wrapping using fragment component like empty tag `<></>`

### [Hello.jsx](./src/components/Hello.jsx)

- Using conditional operation or ternary operation.
- passing the props as a parameter inside the function.

### [PropsDestructureArray.jsx](./src/components/PropsDestructureArray.jsx)

- Destructuring the props values.
- appending css styles declaring inside the variable.

### [PropsObject.jsx](./src/components/PropsObject.jsx)

- Getting the props values directly in parameter.

### [FruitsArray.jsx](./src/components/FruitsArray.jsx)

- Array and iterating using map.

### [FruitsObject.jsx](./src/components/FruitsObject.jsx)

- Objects and iterating inside the object using map and listed inside html tag.
- Iterating the object and passing inside the component.

### [UseStateCount.jsx](./src/components/UseStateCount.jsx)

- Event Handler using function and arrow function
- Type 1 - using useState inside the tag using arrow function and counting its own values.
- Type 2 - using useState inside the tag using arrow function. Getting a copy of its own value and doing the operation.
- Type 3 - Calling the implicit return function for one line operation.
- Increament the values by 5.
- Using another state and doing calculations.

### [UseStateObject.jsx](./src/components/UseStateObject.jsx)

- Writing function inside the tag and arrow function inside the tag.
- **For single input** - Inputs won't be shown inside the input tag until we explicitly write the funtion for it.
- **For dual input** - UseState using object. Handling form from submit using preventDefault(). Merging changes manually using spead operator to take the copy of input.

### [UseStateArray.jsx](./src/components/UseStateArray.jsx)

- UseState using array. Passing objects inside the array

---

# React Basics

## Component

- Client side rendering
- Component describe a part of user interface.
- They are usable and nested inside other components.
- Easy to build mobile applications using react native. No need to learn, java, Kotlin or swift.

_Two types_

- Stateless functional component
- Stateful class component

### Stateless / Dumb / Presentational / functional component

- JavaScript functions that return HTML that describes UI
- Previously App.js was using class. Now changed to funtion.
- Name of the component should always start with capital case. eg - `function App() {}`

```mermaid
graph LR

A[Properties(props)] -- JavaScript Function --> B[HTML (JSX)]
```

- Use functional component as much as possible
- Advantages are
  - Absence of `this` keyword used in class component
  - Solution without using `state`
  - Mainly responsible for the UI.

### Stateful / Smart / Container / class component

- ES6 classes that extends Component class from react library.
- This must contain render() method to render HTML.

```mermaid
graph LR

A[Properties(props)] -- ES6 class --> B[HTML (JSX)]
```

- Advantages are
  - Feature rich
  - Maintatin their own private data - `state`
  - Complex UI logic
  - Provide lifecycle hooks

### JSX - JavaScript XML allows us to write HTML.

- Jsx stands for the javascript xml which allows to write the HTML inside the js.

### Fragments <><other tags /></> (empty tag in react)

- In react when we want to wrap a tags, but we dont want to use div or other tags. In that case we can use fragments.

### Hooks (2018)

- Hooks lets us to use state and other react features without writing a class

#### [All state explained Youtube link](https://youtu.be/LlvBzyy-558?si=xJkO8Ht4vvhTVYLc)

- useState
- useEffect
- useContext
  > useEffect vs useState &rarr; https://stackoverflow.com/a/53243516/11962586
- useMemo
- useCallback
  > useEffect vs useCallback vs useMemo &rarr; https://stackoverflow.com/a/56910429/11962586
- useReducer
- useNavigate
- useParam
- useRef
- useLayoutEffect
- useImperativeHandle
- useDebugValue

### Props

- Props are immutable.
- Props are passed to the component from outside component, so it is immutable.
- We can pass strings, arrays, functions from one component to other component, emojis etc.
- Props are like parameters passed to a function.

### State

> **What is a state?**

- States is an object which holds the information which controls the behaviour of the component.
- State is like a local variable declared inside function body, so state is mutable.
- State are mutable, i.e, values can be changed.

> **Why use State?**

- Props are immutable.
- Values can change dynamically inside state where it is called inside.
- State variable can be string, boolean, object or an array.

> **Rules of State / Hooks**

- State should be declared inside the body of the component. Never out side the react component. Check Message.jsx for refferance.
- Do not call hook / state inside the loops, conditions or nested functions.
- Only call hooks from react functions not just any regular js function.
- State/Hooks does not automaticaly merge the objects.

---

---

---

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

codevolution - from video 44
code-stoic - from video 23

code-stoic - 41 - [link](https://youtu.be/B1UNrmvGyPs?si=Nx5LSXnDZ8FI1dcE)
codevolution - 49(useEffect) - [link](https://youtu.be/06Y6aJzTmXY?si=VCRkbF7eBcLELacg)
