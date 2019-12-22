import React from 'react';
import RandomMurray from './Ejercicio4ymedio-RandomMurray';
import ReloadButton from './Ejercicio4ymedio-ReloadButton';

class MurrayList extends React.Component {
  constructor(props) {
    super(props);

    // nos aseguramos de que este callback se ejecute siempre sobre el componente enlazándolo a la instancia con "bind"
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.forceUpdate(); // se ejecutará el método `render()` de MurrayList, que hará a su vez que se ejecute de nuevo el método `render()` de los hijos
  }

  render() {
    const handleClick = this.handleClick;

    return (
      <section className="section-murrays">
        <h1>All <del>Cats</del> Murrays Are Beautiful</h1>
        <ul className="section-murrays_list">
          <li><RandomMurray /></li>
          <li><RandomMurray /></li>
          <li><RandomMurray /></li>
        </ul>
        {/* pasamos handleClick al hijo como prop */}
        <ReloadButton actionToPerform={ handleClick } label="More murrays"/>
      </section>
    );
  }
}

export default MurrayList;