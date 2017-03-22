import React, { Component } from 'react';

export default class Article extends Component {
  render() {
    return (
      <article className="Article">
        { this.props.header && <h3>{this.props.header}</h3> }
        { this.props.text && this.props.text.map((t,i) =>
            <p key={i}>{t}</p>
        )}
      </article>
    );
  }
}
