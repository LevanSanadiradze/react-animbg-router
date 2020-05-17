import React, { Component } from 'react';
import Router from 'react-animbg-router';

//Example Pages
import Page1 from './Pages/1';
import Page2 from './Pages/2';

export default class Index extends Component {
    constructor(props) {
        super(props);

        //Define Backgrounds with their color and default positions.
        const backgroundObjs = [
            {
                backgroundColor: 'cyan',
                left: '110%',
                right: '110%',
                top: 0,
                bottom: 0,
                height: '100%',
                zIndex: -100
            },
            {
                backgroundColor: 'black',
                left: '110%',
                top: 100,
                right: -10,
                bottom: 100,
                zIndex: -100
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
                        TargetStyle: {
                            left: 500,
                            right: 50,
                            top: 50,
                            height: '25%'
                        }
                    },
                    {
                        Id: 1,
                        Duration: 1.2,
                        TargetStyle: {
                            left: 300,
                            top: 100,
                            right: 300,
                            bottom: 200
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
                        TargetStyle: {
                            left: 10,
                            top: 0,
                            right: 50,
                            bottom: 0
                        }
                    },
                    {
                        Id: 1,
                        Duration: 2,
                        TargetStyle: {
                            left: 800,
                            top: 0,
                            right: 0,
                            bottom: 0
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