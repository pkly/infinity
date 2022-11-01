<script lang="ts">
import {defineComponent} from "vue";
import {MDBInput, MDBBtn} from "mdb-vue-ui-kit";
import _ from "lodash";

export default defineComponent({
  components: {MDBInput, MDBBtn},
  data() {
    return {
      username: '',
      password: '',
    };
  },
  emits: ['login'],
  methods: {
    submit() {
      console.log(this.password, this.username);

      fetch('http://localhost/infinity/login', {
        method: 'POST',
        body: JSON.stringify({username: this.username, password: this.password}),
        headers: [
            ['Content-Type', 'application/json']
        ]
      })
          .then((r) => r.json())
          .then((r) => {
            if (_.isUndefined(r.user)) {
              console.log("error");
            } else {
              this.$emit('login');
            }
          })
          .catch((e) => console.log(e));
    }
  }
});
</script>

<template>
  <form class="login-form">
    <h1 class="mb-5">Hello. Log in to continue.</h1>
    <MDBInput label="Username" v-model="username" class="mb-3"/>
    <MDBInput label="Password" v-model="password" type="password" class="mb-3"/>
    <MDBBtn color="primary" :onclick="submit">Submit</MDBBtn>
  </form>
</template>

<style lang="scss">
.login-form {
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;
}
</style>