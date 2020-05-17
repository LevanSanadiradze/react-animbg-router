import React, { Component } from 'react';
import Router from 'react-animbg-router';
import Page1 from './Pages/1';
import Page2 from './Pages/2';

export default class Index extends Component {
    constructor(props) {
        super(props);

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
            },
            {
                Foreground: <Page1/>,
                BackgroundData: [
                    {
                        Id: 0,
                        Duration: 0.5,
                        targetPosition: {
                            Left: 200,
                            Top: 200,
                            Right: 200,
                            Bottom: 0
                        }
                    },
                    {
                        Id: 1,
                        Duration: 2,
                        targetPosition: {
                            Left: 500,
                            Top: 100,
                            Right: 0,
                            Bottom: 200
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
        }, 5000);
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