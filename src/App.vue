<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="onSubmit" novalidate autocomplete="off">
      <formival-form v-model="loginDTO" :validation="$v.loginDTO" :fields="fields"/>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
  import {required, minLength, email} from "vuelidate/lib/validators";

export default {
  name: 'App',
  data() {
    return {
      loginDTO: {
        email: 'me@daz.is',
        password: ''
      },
      fields: [
        {
          key: 'email',
          type: 'input',
          templateOptions: {
            label: 'Email',
            type: 'email'
          }
        },
        {
          key: 'password',
          type: 'input',
          templateOptions: {
            label: 'Password',
            type: 'password',
            description: 'Please enter your password here'
          }
        }
      ]
    }
  },
  validations: {
    loginDTO: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8)
      }
    }
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log('check the form for errors');
        return;
      }
      console.log('submitted', this.loginDTO);
    }
  }
}
</script>
