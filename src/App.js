import './App.css';
import { Component } from 'react';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';

class App extends Component{
  state = {
    busca:'',
    odas: []
  }

  componentDidMount(){
    this.carregaODAs();
  }

  carregaODAs(){
    const{busca} = this.state;
    fetch('http://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(response => response.json())
    .then(odas => this.setState({odas}))
    console.log([busca])
  }

  buscaODA = (evento) => {
    this.setState({busca: evento.target.value});
    this.carregaODAs()
  }

  render(){
    const {busca, odas} = this.state;
      return (
        <section>
          <Navbar
            busca={this.state.busca}
            buscaODA={this.buscaODA}
            />
          <div className='lista'>
          <p> {odas.length} odas</p>
          {odas.map(oda => (
          <div key={oda._id}>
          <h1 class="descricao"> nome: {oda.nome} </h1>
          <p> usuario: {oda.usuario}</p>
          <p > descrição: {oda.descricao} </p>
          <p class="descricao"> data inclusão: {oda.data_inclusao} </p>
          <p > palavra chave: {oda.palavras_chave} </p>
          </div>
            ))}
            </div>
            <Footer />
          </section>
      );
  }
}

export default App;
