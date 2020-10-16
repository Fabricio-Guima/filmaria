<template>
  <div id="meus-filmes">
      <h1>Meus favoritos</h1>
      <span v-if="filmes.length <= 0" >Você não possui filmes favoritos :(</span>

      <ul>
        <li v-for=" filme in filmes" :key="filme.id">
          <span>{{filme.nome}}</span>
          <div>
            <router-link tag="button" :to="`/filme/${filme.id}`">Ver detalhes</router-link>
            <button @click="excluirFilme(filme.id)">Excluir</button>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
name: "MeusFilmes",
data(){
  return {
    filmes: []
  }
},
methods:{
  excluirFilme(id){
    let filtroFilmes = this.filmes.filter(filme => {
      return (filme.id !== id);
    });

    return this.filmes = filtroFilmes;
  }
},
created(){
  const minhaLista = localStorage.getItem('myFilme');
  this.filmes = JSON.parse(minhaLista) || [];
},
watch:{
  filmes(){
    localStorage.setItem('myFilme', JSON.stringify(this.filmes))
  }
}
}
</script>

<style scoped>
h1{
  margin-top: 40px
}
#meus-filmes{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

ul {
  padding: 0;
  margin-top: 40px;
}

ul li {
  padding: 0;
  list-style: none;
  min-width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
span {
  font-size: 1.5rem;
}

button {
  margin-left: 10px;
}
</style>