import React, { Component, Fragment } from 'react';
import BackgroundObject from './BackgroundObject';

export default class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            CurrentPageId: null,
            CurrentPage: null,
            BackgroundsData: this.convertBgObjsToBgData(props.BackgroundObjects),
            PagesData: props.Pages
        };
    }

    convertBgObjsToBgData = (p) => {
        const data = [];

        p.forEach((e) => {
            data.push({
                Style: e
            });
        });

        return data;
    }

    componentDidMount() {
        this.checkPageChange();
    }

    componentDidUpdate() {
        this.checkPageChange();
    }

    getBackgroundComponents = () => {
        return this.state.BackgroundsData.map((e, i) => {
            return (
                <BackgroundObject
                    key={ "Router_BackgrounObjects_" + i }
                    style={ e.Style }
                    TransitionDuration={ e.TransitionDuration }
                />
            );
        });
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
            newBgData[e.Id].Style = {...newBgData[e.Id].Style, ...e.TargetStyle};
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
                { this.getBackgroundComponents() }
                { this.state.CurrentPage }
            </Fragment>
        );
    }
}