<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    title="Modal Title"
    @visible-change="handleVisibleChange"
  >
    <div class="pt-3px pr-3px">
      <BasicForm @register="registerForm" :model="model" />
    </div>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, nextTick } from 'vue';
  import { useModalInner } from '@/components/Modal';
  import { BasicForm, FormSchema, useForm } from '@/components/Form/index';
  const schemas: FormSchema[] = [
    {
      field: 'field1',
      component: 'NInput',
      label: '字段1',
      giProps: {
        span: 24,
      },
      defaultValue: '111',
    },
    {
      field: 'field2',
      component: 'NInput',
      label: '字段2',
      giProps: {
        span: 24,
      },
    },
  ];
  export default defineComponent({
    components: { BasicForm },
    props: {
      userData: { type: Object },
    },
    setup(props) {
      const modelRef = ref({});
      const [
        registerForm,
        {
          // setFieldsValue,
          // setProps
        },
      ] = useForm({
        labelWidth: 120,
        schemas,
        showActionButtonGroup: false,
        giProps: {
          span: 24,
        },
      });

      const [register] = useModalInner((data) => {
        data && onDataReceive(data);
      });

      function onDataReceive(data) {
        console.log('Data Received', data);
        // 方式1;
        // setFieldsValue({
        //   field2: data.data,
        //   field1: data.info,
        // });

        // // 方式2
        modelRef.value = { field2: data.data, field1: data.info };

        // setProps({
        //   model:{ field2: data.data, field1: data.info }
        // })
      }

      function handleVisibleChange(v) {
        v && props.userData && nextTick(() => onDataReceive(props.userData));
      }

      return { register, schemas, registerForm, model: modelRef, handleVisibleChange };
    },
  });
</script>
