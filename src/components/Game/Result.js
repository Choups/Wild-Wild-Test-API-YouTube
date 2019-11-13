import React from 'react';

class Result extends React.Component {
  render() {
    return (
      <div className={this.props.toggle ? 'result-visible result-appear' : 'result-hidden'}>
        <div className="flex-column-data">
          <h3 className="result-title">{this.props.name}</h3>
          <div className="result-datas">
            <h5>{this.props.author}</h5>
            <h5>{this.props.year}</h5>
          </div>
        </div>
        <img src={this.props.picture + ''} alt="answer" className="result-image" />
      </div>
    );
  }
}

export default Result;
