<template>
  <div class="container">
    <!-- <Header /> -->
    <h2>Team</h2>
    <div class="cards">
      <transition
         appear appear-active-class="animate__animated animate__flipInX"
      >
      <a href="" class="card card-1"
        :class="{'light-card': !isDarkMode, 'dark-card': isDarkMode}"
      ></a>
      </transition>
      <transition
         appear appear-active-class="animate__animated animate__flipInX"
      >
      <a href="" class="card card-2"
        :class="{'light-card': !isDarkMode, 'dark-card': isDarkMode}"
      ></a>
      </transition>
      <transition
         appear appear-active-class="animate__animated animate__flipInX"
      >
      <a href="" class="card card-3"
        :class="{'light-card': !isDarkMode, 'dark-card': isDarkMode}"
      ></a>
      </transition>
      <transition
         appear appear-active-class="animate__animated animate__flipInX"
      >
      <a href="" class="card card-4"
        :class="{'light-card': !isDarkMode, 'dark-card': isDarkMode}"
      ></a>
      </transition>
      <transition
         appear appear-active-class="animate__animated animate__flipInX"
      >
      <a href="" class="card card-5"
        :class="{'light-card': !isDarkMode, 'dark-card': isDarkMode}"
      ></a>
      </transition>
    </div>
  </div>
</template>

<script>
// import Header from '@/components/Header.vue';
  export default {
  // components: { Header },
    name: "Team",
    computed: {
      isDarkMode() {
          return this.$store.getters.isDarkMode;
      }
    }
  };
</script>

<style lang="scss" scoped>
h2 {
  @include heading-2;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: space-evenly;
}

.card {
  width: 100%;
  max-width: 300px;
  height: 400px;
  border-radius: 10px;
  margin: 20px;
}

.card-1 {
  animation-delay: 0.5s;
}
.card-2 {
  animation-delay: 1s;
}
.card-3 {
  animation-delay: 1.5s;
}
.card-4 {
  animation-delay: 2s;
}
.card-5 {
  animation-delay: 2.5s;
}

.light-card {
  background: $white;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);

  &:hover {
    box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.35);
  }
}
.dark-card {
  background: $super-dark-blue;
  box-shadow: 0px 20px 40px rgba(255, 255, 255, 0.15);

  &:hover {
    box-shadow: 0px 30px 60px rgba(255, 255, 255, 0.35);
  } 
}
</style>
