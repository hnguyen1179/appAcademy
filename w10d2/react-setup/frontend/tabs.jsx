import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentIndex: 0};
    this.click = this.click.bind(this);
  }

  //define click handler here
  click(e) {
    e.preventDefault();
    console.log(e.target.getAttribute("id"));
    this.setState({
      currentIndex: e.target.getAttribute("id")
    });
  }

  render() {
    console.log(this.state.currentIndex);
    let {things} = this.props;
    return ( 
      <div>

      <header>
        <ul onClick={this.click}>
            {things.map((object, idx) => <li id={idx} key={idx}>{object.title} </li>)}
        </ul>
          <article>{things[this.state.currentIndex].content}</article>
      </header>
       
      </div>
    );
  }
}

export default Tabs;