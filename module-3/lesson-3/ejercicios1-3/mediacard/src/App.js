import React from 'react';
import './styles/App.scss'; //Ejercicio 3: usar sass.

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    //Ejercicio 1: Sólo el <header> y el <main>.
    //Ejercicio 2: return sólo puede devolver un elemento madre, así que tenemos que meter el <header> y el <main> en constantes para luego usarlas dentro de otra constante que las contiene dentro de una madre <div> (en mi caso 2, por maquetación). Así return sólo devuelve ésta última constante.
    

      const appHeader = (
         <header className="header">
           <div className="image"></div>
           <div className="author">
              <h2>Alex Guerrero</h2>
              <p className="date">Viernes 13 de dieciembre de 2019</p>
           </div>
         </header>);
      
      const appMain = (
         <main>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Enim neque volutpat ac tincidunt vitae. Nisl nisi scelerisque eu ultrices. Ac tincidunt vitae semper quis lectus. Urna et pharetra pharetra massa massa ultricies mi. Volutpat ac tincidunt vitae semper quis lectus nulla at. Aliquam id diam maecenas ultricies mi. Amet consectetur adipiscing elit pellentesque habitant. Id leo in vitae turpis massa sed. Tellus at urna condimentum mattis pellentesque id. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Lorem sed risus ultricies tristique nulla aliquet enim. At erat pellentesque adipiscing commodo elit at imperdiet dui. Sed cras ornare arcu dui vivamus. Aenean sed adipiscing diam donec adipiscing tristique. Morbi enim nunc faucibus a pellentesque. Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Tempus imperdiet nulla malesuada pellentesque.</p>
          
          <div className="article-footer">
            <p className="more">Leer más...</p>
            <p className="likes">37 <i class="fas fa-heart"></i></p>
          </div>
         </main>
    );

    const appRoot = (
      <div className="app">
        <div className="card">
          {appHeader};
          {appMain};
        </div>
      </div>
    );

    return appRoot;
  }
}

export default App;