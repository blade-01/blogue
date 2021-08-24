<template>
  <div class="error">
    <h2>4<span class="color">0</span>4</h2>
    <p>Page Not Found!!!</p>
  </div>
</template>

<script>
  export default {
    name: 'Error',
  }
</script>

<style scoped>
.error {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.error h2 {
  font-size: 10rem;
}
.error p {
  font-size: 30px;
}
.error span {
  opacity: 0.7;
  animation: pulse 1.5s ease-in-out infinite;
}
@keyframes pulse {
  to {
    opacity: 1;
  }
} 
@media screen and (min-width: 1000px) {
  .error h2 {
    font-size: 12rem;
  }
}
</style>