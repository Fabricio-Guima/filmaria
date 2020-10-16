<template>
<header id="header">
    <router-link to="/" exact>Home</router-link>
    <router-link tag="button" to="/salvos" exact class="meusFilmes">Favoritos</router-link>
    
</header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
#header{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: brown;

}
#header a {
  text-decoration: none;
  cursor: pointer;
  color: #fff;
  font-size: 1.9rem;
}

button {
  cursor: pointer;
  border: 0;
  background: #fff;
  padding: 5px 15px;
  outline: none;
  border-radius: 5px;
  font-weight: bold;
}
</style>
