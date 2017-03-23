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
        'The let keyword, introduced in ES6, is one of the replacement keywords for var. While var is function scoped and the declaration is hoisted to the top of the function, let is block scoped and the declaration remains in place. A common use case for let is in for loops.'
      ]},
      { header: 'const', text: [
        'Also new with ES6, the const keyword is block scoped like the let keyword, in addition to not being permitted to change. Any attempt to change it will throw an exception.'
      ]},
      { header: 'ES6 Classes', text: [
        'In ES6, the new class keyword is a form of syntactic sugar over an object\'s prototype, facilitating the use of constructors and inheritance, and to create instance objects.'
      ]},
      { header: 'import/export', text: [
        'Many competing forms of the Module design pattern have been created for JavaScript in which source code can be stored in multiple files and be brought together as needed. This is known as dependency injection.',
        'In ES6, a winner has been declared in the form of import/export. The export keyword is used to define a module to be later used. The import keyword is used to load that module in.'
      ]},
      { header: 'JSX', text: [
        'JSX stands for Javascript Syntax eXtension, and is the most common way to write React components. It gets translated by Babel to React.CreateElement calls and is further syntactic sugar over standard ES6. This is the reason why the React object must be imported into component files, even though it does not appear to be used.',
        'Do not forget to always have one root component with children components inside, as having multiple components as the root element is not valid.'
      ]},
      { header: 'this.props', text: [
        'In React, this.props refers to a component\'s props or properties. They are similar to an HTML element\'s attributes in how they are passed. A special case is this.props.children, which represents all the children elements passed in between the component\'s opening and closing tags.'
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
