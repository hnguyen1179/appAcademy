import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentIndex: 0};
    this.click = this.click.bind(this);
  }

  click(e) {
    e.preventDefault();
    console.log('shit');
    this.setState({
      currentIndex: e.target.getAttribute("id")
    });
  }

  render() {
    console.log(this.state.currentIndex);
    let {things} = this.props;

    return ( 
      <div className="tab-root">
        <h1 id="tab-label">Tabs</h1>
        <header className="tab-main">
          <ul className="tab-header" onClick={this.click}>
              {things.map((object, idx) => <li id={idx} key={idx}>{object.title} </li>)}
          </ul>
        </header>

        <article className="tab-content"> 
          {things[this.state.currentIndex].content}
        </article>
      </div>
    );
  }
}

export default Tabs;