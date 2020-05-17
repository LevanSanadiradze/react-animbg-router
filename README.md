# react-animbg-router

> React custom router with background blocks animated during transitions

[![NPM](https://img.shields.io/npm/v/react-animbg-router.svg)](https://www.npmjs.com/package/react-animbg-router) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-animbg-router
```


```bash
yarn add react-animbg-router
```

## Usage

```jsx
import React, { Component } from 'react';

import Router from 'react-animbg-router';

//Example Pages
import Page1 from './Pages/1';
import Page2 from './Pages/2';

class Example extends Component {
    constructor(props) {
        super(props);

        //Define Backgrounds with their color and default positions.
        const backgroundObjs = [
            {
                Color: 'cyan',
                Position: {
                    Left: -10,
                    Top: 0,
                    Right: '110%',
                    Bottom: 0,
                }
            },
            {
                Color: 'blue',
                Position: {
                    Left: '110%',
                    Top: 100,
                    Right: -10,
                    Bottom: 100
                }
            },
        ];
        
        //Define pages, corresponding background target positions and transition duration
        const pages = [
            {
                Foreground: <Page1/>,
                BackgroundData: [
                    {
                        Id: 0,
                        Duration: 0.5,
                        targetPosition: {
                            Left: 500,
                            Top: 0,
                            Right: 50,
                            Bottom: 0
                        }
                    },
                    {
                        Id: 1,
                        Duration: 1.2,
                        targetPosition: {
                            Left: 300,
                            Top: 100,
                            Right: 300,
                            Bottom: 200
                        }
                    }
                ]
            },
            {
                Foreground: <Page2/>,
                BackgroundData: [
                    {
                        Id: 0,
                        Duration: 1,
                        targetPosition: {
                            Left: 10,
                            Top: 0,
                            Right: 50,
                            Bottom: 0
                        }
                    },
                    {
                        Id: 1,
                        Duration: 2,
                        targetPosition: {
                            Left: 800,
                            Top: 0,
                            Right: 0,
                            Bottom: 0
                        }
                    }
                ]
            }
        ];

        this.state = {
            RouterPages: pages,
            RouterBackgroundObjects: backgroundObjs,
            Pageid: 0
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                Pageid: 1
            });
        }, 3000);
    }

    render() {
        return (
            <Router 
                Pageid={ this.state.Pageid }
                Pages={ this.state.RouterPages }
                BackgroundObjects={ this.state.RouterBackgroundObjects }
            />
        );
    }
}
```

## License

MIT © [LevanSanadiradze](https://github.com/LevanSanadiradze)
