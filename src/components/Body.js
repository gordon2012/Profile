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
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac tristique est. Pellentesque tortor justo, maximus quis purus a, lobortis fermentum ipsum. Sed sed commodo nulla. Aliquam faucibus egestas metus, eu interdum nisi suscipit sollicitudin. Duis imperdiet augue est, sed laoreet lacus mollis id. Curabitur id auctor odio.',
        'Nam et congue nibh, nec aliquam dui. Aliquam accumsan, enim ut ultricies venenatis, urna metus ultricies orci, eu accumsan urna leo ultrices urna. Proin quis diam ac sapien tempor viverra id nec tortor. Nunc tempor massa metus, non egestas elit facilisis a. Donec quis luctus turpis. Aliquam eleifend.',
      ]},
      { header: 'const', text: [
        'Cras tempor ex tortor, vitae aliquam lectus pulvinar eget. Suspendisse posuere accumsan nulla. Pellentesque non neque id nisi iaculis sodales. Vivamus eleifend vestibulum placerat. Sed tincidunt vestibulum mauris eu molestie. Donec euismod lectus in vehicula iaculis. Mauris ut nisl purus. Curabitur ac risus quis erat pellentesque euismod. Donec.'
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
