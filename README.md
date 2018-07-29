# React-animation-loaders

- A small tiny library for react loaders 

## Installing
```
npm i --save react-animation-loaders
```

## Usage

- Importing the Component

```js
import React from "react";
import { First, Second, Third, Fourth } from "react-animation-loaders";

const App = () => (
<First />
)

```
## Props
- Every component have it's own props as it shown below: 

| Prop        | Description     | 
| ------------- |:-------------| 
| **dot1Color**      | Specify the color for the first dot. | 
| **dot2Color**      | Specify the color for the Second dot.      |  
| **dot3Color** | Specify the color for the Third dot.     |   
| **dot4Color**      | Specify the color for the Fourth dot(`Specified for the Fourth Component`). | 
| **dotWidth**      | Specify the width for Dot component.      |  
| **dotHeight** |Specify the Height for Dot component.     |   
| **wrapperWidth**      | Specify the width for Wrapper component. | 
| **wrapperHeight**      | Specify the height for Wrapper component.     |  


## Examples

```js
const App = () => (
  <First />
)
```
![alt text](https://github.com/awnigharbia/react-animation-loaders/blob/master/demos/1.gif "First component")


```js
const App = () => (
  <Second />
)
```
![alt text](https://github.com/awnigharbia/react-animation-loaders/blob/master/demos/2.gif "Second component")

```js
const App = () => (
  <Third />
)
```
![alt text](https://github.com/awnigharbia/react-animation-loaders/blob/master/demos/3.gif "Third component")

```js
const App = () => (
  <Fourth />
)
```
![alt text](https://github.com/awnigharbia/react-animation-loaders/blob/master/demos/4.gif "Fourth component")
