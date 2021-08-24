<template>
  <div class="about">
    <div class="about-content box-shadow">
      <img src="../assets/img/blade.jpg" alt="author" />
      <p>Hey there 👋, I'm <span class="color">ANIMASHAUN TAOFIQ</span>, I created this blog to practice firebase usage. Chiao ✌</p>
    </div>
  </div>
</template>

<style scoped> 
  .about {
    margin: 5rem 0 0;
  }
  .about-content {
    position: relative;
    margin: 1rem 0.2rem;
    padding: 4rem 1rem 1rem;
    border-radius: 5px;
    text-align: center;
    line-height: 2;
  }
  .about-content span {
    font-weight: bold;
  }
  .about-content img {
    width: 80px;
    border-radius: 100%;
    border: solid 3px rgb(0, 71, 153);
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translate(-50%, 0%);
  }
  @media screen and (min-width: 1000px) {
    .about-content {
      width: 500px;
      margin: 1rem auto;
    }
  }
</style>