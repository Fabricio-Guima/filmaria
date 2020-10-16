<template>
  <div id="erro">
    <h2>Epa Epa, vai com calma ae amigão!</h2>
    <h3>A página que você quer acessar não existe.</h3>
      <img src="@/assets/sonic.gif" alt="" width="300">
     <h2>Error 404</h2> 
  </div>
</template>

<script>
export default {
name: "Erro"
}
</script>

<style scoped>
  #erro{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
  }
  h2{
    margin-top: 40px;
  }
</style>