<template>
  <span>
    <v-card width="500" class="text-center">
      <v-card-title>Login</v-card-title>
      <v-card-text class="d-flex flex-column justify-space-between">
        <v-text-field v-model="username" label="Username" />
        <v-btn :disabled="!username" @click="login" color="info">Login</v-btn>
      </v-card-text>
    </v-card>
  </span>
</template>

<script>
export default {
  name: 'LoginPage',
  data: () => ({
    username: ''
  }),
  methods: {
    login() {
      if (this.username) {
        this.$emit('login', this.username);
      }
    }
  }
};
</script>