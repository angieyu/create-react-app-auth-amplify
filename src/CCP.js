import React from 'react';

export class CCP extends React.Component {
  constructor(props){
    super(props);
    this.containerDiv = React.createRef();
    this.state = {
      initialized: false,
      agent: null,
      contacts: {}
    }
  }

  componentWillUnmount = () => {
    window.connect && window.connect.core.terminate();
  };

  componentDidMount() {
    window.connect.core.initCCP(this.containerDiv.current, {
      ccpUrl: this.props.ccpUrl,
      region: this.props.region,
      loginPopup: false,
      softphone: {
        allowFramedSoftphone: true,
        disableRingtone: false
      }
    });
  }

  render() {
    return (
      <div className="containerDiv" ref={this.containerDiv} />
    )
  }

}
