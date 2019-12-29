import React from 'react';

class Auto extends React.Component {
    constructor(props) {
        super(props)
        this.state = {inputVal: ""};
        this.renderInputChange = this.renderInputChange.bind(this);
    }

    matches() {
        const { names } = this.props;
        const { inputVal } = this.state;
        let filteredNames = names.slice();

        if (inputVal.length === 0) return names;

        return filteredNames.filter( name => {
                name = name.toLowerCase();

                if (inputVal.length > name.length) return false;

                for (let i = 0; i < inputVal.length; i++) {
                    if (name[i] !== inputVal[i]) return false;
                }

                return true;
            }
        )
    }

    renderInputChange(event) {
        this.setState({inputVal: event.target.value.toLowerCase()})
    }

    render() {
        let { inputVal } = this.state;
        let filteredNames = this.matches();

        return (
            <label> Name Search: 
                <input type="text" value={inputVal} onChange={this.renderInputChange}/>
                <ul>
                    {
                        filteredNames.map( (name, idx) => (
                            <li key={idx}> {name} </li>
                            )
                        )
                    }
                </ul>
            </label>
        )
    }
}

export default Auto;