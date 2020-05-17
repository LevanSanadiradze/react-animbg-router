import React, { Component, Fragment } from 'react';
import BackgroundObject from './BackgroundObject';

export default class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            CurrentPageId: null,
            CurrentPage: null,
            BackgroundsData: props.BackgroundObjects,
            PagesData: props.Pages
        };
    }

    componentDidMount() {
        this.checkPageChange();
    }

    getBackgroundObjects = (objs) => {
        return objs.map((e, i) => {
            return (
                <BackgroundObject
                    key={ "Router_BackgrounObjects_" + i }
                    Color={ e.Color }
                    Top={ e.Position.Top }
                    Bottom={ e.Position.Bottom }
                    Left={ e.Position.Left }
                    Right={ e.Position.Right }
                    TransitionDuration={ e.TransitionDuration }
                />
            );
        });
    }

    componentDidUpdate() {
        this.checkPageChange();
    }

    checkPageChange = () => {
        if(this.props.Pageid != this.state.CurrentPageId) {
            this.changePage(this.props.Pageid);
        }
    }

    changePage = (newid) => {

        const newpage = this.state.PagesData[newid];
        const newBgData = this.state.BackgroundsData;

        newpage.BackgroundData.forEach((e) => {
            newBgData[e.Id].Position = e.targetPosition;
            newBgData[e.Id].TransitionDuration = e.Duration;
        });

        this.setState({
            BackgroundsData: newBgData,
            CurrentPage: newpage.Foreground,
            CurrentPageId: newid
        });
    }

    render() {
        return (
            <Fragment>
                { this.getBackgroundObjects(this.state.BackgroundsData) }
                { this.state.CurrentPage }
            </Fragment>
        );
    }
}