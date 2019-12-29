import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';
import Auto from './auto';

const names = [
    'Abba',
    'Barney',
    'Barbara',
    'Jeff',
    'Jenny',
    'Sarah',
    'Sally',
    'Xander'
];

const tabsContent = [
    { title: "ONE", content: "WTF1" },
    { title: "TWO", content: "WTF2" },
    { title: "THREE", content: "WTF3" }
]


class Root extends React.Component {
    render() { 
        return (
            <div className="root">
                <Clock />
                <Weather />
                <div className="interactive-widgets">
                    <Tabs tabsContent={tabsContent} />
                    <Auto names={names} />
                </div>
            </div>
        );
    }
}

export default Root;