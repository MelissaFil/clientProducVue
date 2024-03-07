<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
          <img class="" src="imagens/data-stone.png" alt="Logo da data stone">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/clientes" class="nav-link">Clientes</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/produtos" class="nav-link">Produtos</router-link>
        </li>
     
      </ul>

    </div>
  </div>
</nav>
<router-view/>
</template>

<style>
@media (max-width: 768px) {
  .navbar-brand  {
    width: 30%; 
  }
  .navbar-brand  img{
    width: 130%; 
  }
}
</style>
