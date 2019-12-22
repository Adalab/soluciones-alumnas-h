import React from 'react';

class ReloadButton extends React.Component {
  render() {
    const actionToPerform = this.props.actionToPerform;
    const label = this.props.label || 'More';

    return (
      // Registramos el escuchador que recibimos por props. ¡Lifting hecho!
      <button onClick={actionToPerform}>{label}</button>
    );
  }
}

export default ReloadButton;