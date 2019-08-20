<template>
  <div id="app">
    <nav>
      <router-link to="/">Login</router-link>&nbsp
      <router-link to="/home">Home</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
</style>
