<template>
  <div id="filme">
    <div v-if="loading" class="container">
      <Loading />
    </div>
      <div v-else class="container">
        <h2>{{filme.nome}}</h2>
        <img :src="filme.foto" :alt="filme.nome">
        <h3>Sinopse</h3>
        <p>{{filme.sinopse}}</p>
        <div class="botoes"> 
          <router-link tag="button" to="/">Ver mais filmes</router-link>
          <button @click="salvarFilme">Favoritar</button>
          <button> <a :href="`https://youtube.com/results?search_query=${filme.nome}`" target="_blank">Trailer</a> </button>
        </div>
      </div>
  </div>
</template>

<script>
import api from '@/services/api';
import Loading from '@/components/Loading'

export default {
name: "Filme",
components: {
Loading
},
props: ['id'],
data(){
  return {
    filme: {},
    loading: true
  }
},
methods: {
async getFilme(){
  const response = await api.get(`?api=filmes/${this.id}`);
  this.filme = response.data;
  this.loading = false;
},
salvarFilme(){
  const MinhaLista = localStorage.getItem('myFilme');
  let filmes = JSON.parse(MinhaLista) || [];

  const hasFilme = filmes.some( (filme)=> filme.id === this.filme.id);
  if(hasFilme){
    alert('Você já favoritou este filme');

    return;
  }

  filmes.push(this.filme)
  localStorage.setItem('myFilme',JSON.stringify(filmes));
  alert('Filme salvo com sucesso');
}
},
created(){
  this.getFilme();
}
}

</script>

<style scoped>
.container{
        display: flex;
        justify-content: center;
        flex-direction: column;
        max-width: 900px;
        margin-top:40px
    }

    h2{
      color: #FFF;
      margin-bottom: 0px;
      background: brown;
      padding: 15px;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }

    .container img{
        width: 100%;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    button{
      margin-right: 5px;
      border-radius: 5px;
      margin-top: 15px;
      cursor: pointer;
      border:0;
      padding: 12px;
      font-size: 20px;
      transition: all 0.5s;
      outline: none;
    }
    button:hover{
      background: brown;
      color: #FFF;
    }

    a{
      text-decoration: none;
      color: #000;
      transition: all 0.5s;
    }

    a:hover{
      color: #FFF;
    }
    h3{
      margin: 15px 0;
    }
</style>