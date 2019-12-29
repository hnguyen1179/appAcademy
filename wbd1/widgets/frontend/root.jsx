import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';

class Root extends React.Component {
    render() { 
        const tabsContent = [
                             {title: "ONE", content: "WTF1"}, 
                             {title: "TWO", content: "WTF2"}, 
                             {title: "THREE", content: "WTF3"}
                            ]

        return (
            <div className="root">
                <Clock />
                <Weather />
                <div className="interactive-widgets">
                    <Tabs tabsContent={tabsContent} />
                </div>
            </div>
        );
    }
}

export default Root;