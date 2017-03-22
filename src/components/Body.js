import React, { Component } from 'react';
import Article from './Article';

export default class Body extends Component {
  render() {
    const intro = [
        'I am learning Full Stack Web Development with a focus on the Front End using Javascript and React. I have recently completed my B.S. degree in Information Technology and am currently attending a self-paced Full Stack Web Development certificate program.',
        'The foundation of my technical skills consists of a deep understanding of the fundamental Front-end web technologies including HTML, JavaScript, and CSS.',
        'I have used a wide variety of JavaScript libraries and frameworks in my projects including JQuery, React, and Redux. I am well-versed in CSS libraries and preprocessors like Bootstrap and SASS. I have used many build automation tools such as npm, Gulp, and Webpack. I almost exclusively employ version control using Git, GitHub, and the GitHub Flow branching method.'
    ];

    const prompts = [
      { header: 'let', text: [
        'Lorem',
        'Ipsum',
        'Dolor'
      ]},
      { header: 'const', text: [
        'Lorem',
        'Ipsum',
        'Dolor'
      ]},
      { header: 'ES6 Classes', text: [
        'Lorem',
        'Ipsum',
        'Dolor'
      ]},
      { header: 'import/export', text: [
        'Lorem',
        'Ipsum',
        'Dolor'
      ]},
      { header: 'JSX', text: [
        'Lorem',
        'Ipsum',
        'Dolor'
      ]},
      { header: 'this.props', text: [
        'Lorem',
        'Ipsum',
        'Dolor'
      ]}
    ];

    return (
      <div className="Body">        
        <section>
          <h2>About Me</h2>
          <Article text={intro} />
        </section>

        <section>
          <h2>Feynman Writing Prompts</h2>

          { prompts.map((e,i) =>
            <Article key={i} header={e.header} text={e.text} />
          )}



        </section>
      </div>
    );
  }
}
