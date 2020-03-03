<template>
    <input :value="value" :id="id" :type="inputType"
           @change="$emit('touched')"
           @focus="$emit('reset')"
           @input="$emit('input', $event.target.value)">
</template>

<script>
  export default {
    name: "SimpleInput",
    props: ['value', 'field', 'id'],
    computed: {
      inputType() {
        return this.field.templateOptions.type || 'text';
      }
    }
  };
</script>
