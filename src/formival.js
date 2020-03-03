import Vue from 'vue';
import Formival from 'formival';
import SimpleInput from "@/components/SimpleInput";
import FieldWrapper from "@/components/FieldWrapper";

Vue.use(Formival);

const types = [
  {
    name: 'input',
    component: SimpleInput,
    wrappers: ['field-wrapper']
  }
];

const wrappers = [
  {
    name: 'field-wrapper',
    component: FieldWrapper
  }
];

const validationMessages = {
  required: "{{field.templateOptions.label}} is required",
  email: "{{value}} is not a valid email address"
};

const formival = new Formival({
  types,
  wrappers,
  validationMessages
});

export default formival;
