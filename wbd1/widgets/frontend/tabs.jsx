import React from 'react';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentTab: 0};
        this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(event) {
        console.log('clicked')
        this.setState({currentTab: event.currentTarget.getAttribute('tab')})
    }

    render() {
        let { tabsContent } = this.props;
        let allTabs = tabsContent.map((tab, idx) => (
                <li key={idx}>
                    <header tab={tab.title} onClick={this.handleTabClick}>
                        <h1>{tab.title}</h1>
                    </header>
                </li>
            )
        )
        
        return (
            <ul className="tabs-main">
                {allTabs}
            </ul>
        );
    }
}

export default Tabs;