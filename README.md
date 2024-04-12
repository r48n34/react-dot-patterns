# react-dot-patterns  
Generate DOM base dots patterns.  

<a href="https://www.npmjs.com/package/react-dot-patterns"> <img src="https://img.shields.io/npm/v/react-dot-patterns" /> </a>

![https://github.com/r48n34/react-dot-patterns](/assert/shapes.png)


### Setup / Install:
``` bash
npm i react-dot-patterns
yarn add react-dot-patterns
```

### Basic Usage:
```jsx
import { Dots } from "react-dot-patterns"

function ContactUs() {
    return (
        <>
            <Dots col={5} row={5}/>
        </>
    )
}

export default ContactUs
```

### Params for <Dots /> (All are Optional props)

| Name                      |  Type                | Default   | Description                                               | 
| ------------------------- | ----------------     | --------- | --------------------------------------------------------- | 
| col                       | number               | 3         | Columns object count                                      | 
| row                       | number               | 3         | Rows object count                                         | 
| size                      | number               | 20        | Object size                                               |   
| rotate                    | number               | 0         | Rotate angle numbers                                      |   
| margin                    | number               | 5         | Object margin size                                        |   
| color                     | string               | "#bbb"    | color string code                                         |   
| style                     | React.CSSProperties  | {}        | React CSSProperties object                                |   
| item                      | JSX.Element          | null      | Replace the original dot with your own elements           |   
| onItemClick               | Function             | () => {}  | Will callback a (x,y) that user clicked to regarding item |   

### Full Usage:
```jsx
import { Dots } from "react-dot-patterns"

function ContactUs() {
    return (
        <>
            <Dots
                col={3}
                row={3}
                size={20}
                rotate={0}
                margin={5}
                color={"#bbb"}
                item={null}
                style={{}}
                onItemClick={(i, j) => console.log(i, j, "clicked")}
            />
        </>
    )
}

export default ContactUs
```

### Custom item
Input a `JSX.Element` to item for generate regarding patterns.   

```jsx
import { Dots } from "react-dot-patterns"
import { Icon12Hours } from '@tabler/icons-react';

function ContactUs() {
    return (
        <>
            <Dots
                col={3}
                row={3}
                item={<Icon12Hours />}
            />
        </>
    )
}

export default ContactUs
```

### license
MIT