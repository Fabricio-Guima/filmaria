<template>
<div id="home">
    <div v-if="loading" class="lista-filmes">
        <Loading />
    </div>
    <div v-else class="lista-filmes">
        <article v-for="filme in filmes" :key="filme.id" class="filme">
            <strong>{{filme.nome}}</strong>
            <img :src="filme.foto" :alt="filme.nome">
            <router-link :to="`/filme/${filme.id}`">Acessar</router-link>
        </article>
    </div>

</div>
</template>

<script>
// @ is an alias to /src
import api from '@/services/api';
import Loading from '@/components/Loading';

export default {

    name: 'Home',
    components: {
        Loading

    },

    data() {
        return {
            filmes: [],
            loading: true
        }
    },
    methods: {
        //pegar todos os filmes
        async getFilmes() {
            const response = await api.get('?api=filmes');
            this.filmes = response.data;
            this.loading = false;
        }
    },
    created() {
        this.getFilmes()
    }
}
</script>

<style scoped>
#home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 800px;
}

.lista-filmes {
    margin: 15px;
}

.lista-filmes article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    margin: 15px;
    padding: 15px;
    border-radius: 5px;
}

.lista-filmes strong {
    padding-bottom: 15px;
    font-size: 20px;
}

img {
    max-height: 350px;
    width: 900px;
}

.lista-filmes article a {
    text-decoration: none;
    color: #FFF;
    font-size: 25px;
    background-color: brown;
    width: 100%;
    height: 40px;
    margin-top: -30px;
    text-align: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    transition: all 0.3s;
}

.lista-filmes article a:hover {
    background-color: #DC143C;

}
</style>
