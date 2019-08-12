import * as React from 'react';

interface IAppProps {
  library: any;
}

interface IAppStates {
  display: string;
}

export default class App extends React.Component<IAppProps, IAppStates> {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none'
    }
  }
  componentDidMount() {
    console.log(this.props.library);
  }

  onCreate = () => {
    this.props.library('.kotlin-code-2', {
      onChange: (code) => { console.log(code) }
    });
    this.setState({ display: 'block' });
  }

  render() {
    const { display } = this.state;
    return (<div>
      <button onClick={this.onCreate}>Create Example</button>
      <div className="kotlin-code-2" style={{ display }}>
        <code className="hljs langu/age-text">
          {`
          import cat.Cat
          fun main(args: Array<String>) {
            //sampleStart
            val cat = Cat("Kitty")
            println(cat.name)
            //sampleEnd
          }
          `}
        </code>
        <textarea className="hidden-dependency" defaultValue={`
          package cat
          class Cat(val name: String)
        `} />
      </div>
    </div>);
  }
}
