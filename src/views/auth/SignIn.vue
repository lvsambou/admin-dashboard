<template>
  <div class="container" 
  :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}">

    <RequestAccount />

    <div class="login">
      <img src="@/assets/DCHQ.svg" v-if="isDarkMode" />

      <img src="@/assets/DCHQ-dark.svg" v-show="!isDarkMode" />

      <H4 
        :class="{'light-text' : isDarkMode, 'dark-text': !isDarkMode}"
      >
      Sign into Dashboard
      </H4>

      <input 
      type="email" 
      placeholder="Email" 
      :class="{'light-field': isDarkMode, 'dark-field' : !isDarkMode}" 
       />
      <input 
      type="passeword" 
      placeholder="Password" 
      :class="{'light-field': isDarkMode, 'dark-field' : !isDarkMode}" 
      />

      <button>Sign In</button><br />
      <router-link 
      to="/recover" 
      :class="{'light-link': isDarkMode, 'dark-link': !isDarkMode}"
      >
      Frogot your password ?
      </router-link>
      <theme-switch />
    </div>

  </div>
</template>

<script>
import RequestAccount from '@/components/RequestAccount.vue';
import ThemeSwitch from '@/components/ThemeSwitch.vue';
export default {
  components: { 
    RequestAccount,
    ThemeSwitch 
  },
  name: "SignIn",
  computed: {
      isDarkMode() {
          return this.$store.getters.isDarkMode;
      }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
}
.login {
  width: 400px;
}
</style>
