<template>
    <div>
        <label :for="id">{{ field.templateOptions.label }}</label>
        <slot></slot>
        <p v-if="hasError" class="error">{{ errorMessage }}</p>
    </div>
</template>

<script>
  export default {
    name: "FieldWrapper",
    props: ['field', 'id', 'hasError', 'errorMessage']
  };
</script>

<style scoped>
    .error {
        background-color: lightpink;
    }
</style>
