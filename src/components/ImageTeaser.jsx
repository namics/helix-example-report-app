const React = require('react');

class ImageTeaser extends React.Component {
  render() {
    return (
      <div>
        <h4>ImageTeaser</h4>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    );
  }
}

module.exports = ImageTeaser;