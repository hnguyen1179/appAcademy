import React from 'react';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentTab: "0"};
        this.handleTabClick = this.handleTabClick.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleTabClick(event) {
        this.setState({currentTab: event.currentTarget.getAttribute('tab')})
    }

    handleMouseEnter(event) {
        event.currentTarget.style.color = "red";
        event.currentTarget.style.backgroundColor = "black";
    }
    handleMouseLeave(event) {
        event.currentTarget.style.color = "coral";
        event.currentTarget.style.backgroundColor = "cornsilk";
    }

    render() {
        let { tabsContent } = this.props;
        let { currentTab } = this.state;

        let allTabs = tabsContent.map((tab, idx) => (
                <li className={ currentTab === idx.toString() ? "selected" : "unselected" } key={idx} tab={idx} onClick={this.handleTabClick} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                    <header >
                        <h1>{tab.title}</h1>
                    </header>
                </li>
            )
        )        

        let content = tabsContent[this.state.currentTab].content;
        
        return (
            <div className="tabs-main">
                <ul className="tabs-main-headers">
                    {allTabs}
                </ul>
                <div className="tabs-main-content"> 
                    <h3>
                        {content} 
                    </h3>
                </div>
            </div>
        );
    }
}

export default Tabs;