export const Navbar=({busca, buscaODA})=>{
  var logo=require('./img/logo.png');
    return(
        <html>
        <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"></link>
            <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet"></link>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
        </head>
        <body>
        <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
      <p><img src={logo} class="d-inline-block"></img>BocaWeb</p>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            
           
           
          </ul>
          <form class="d-flex" role="search">
            <input name="busca" class="form-control me-2" type="text" placeholder="Qual ODA deseja buscar?" value={busca} aria-label="Search" onChange={buscaODA}></input>
            <button class="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>

        </body>
        </html>
    )
}
