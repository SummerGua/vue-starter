<script setup lang="ts">
import { reactive } from 'vue';
import { AddOne } from '@icon-park/vue-next';
import TreeFormItem from './TreeFormItem.vue';

const config = reactive([
  {
    id: 'afawr33rwefaw',
    label: 'key 1',
    value: '',
    children: [
      {
        id: 'afawr34rwefaw',
        label: 'value 1-1',
        value: '',
        children: [
          {
            id: 'afawr35rwefaw',
            label: '套件 1-1-1',
            value: '',
          },
        ],
      },
    ],
  },
]);

const addChildren = (item: any) => {
  item.push({
    id: 'afawr36rwefaw',
    label: 'key ?',
    value: '',
    children: [],
  });
};
</script>

<template>
  <div class="flex flex-col items-center gap-2">
    <div class="flex flex-col">
      <div
        class="flex gap-1 self-center mb-2 hover:cursor-pointer"
        @click="addChildren(config)"
      >
        <add-one theme="outline" size="24" fill="#333" />
        <p>add a key</p>
      </div>

      <tree-form-item
        :level="1"
        :max-level="3"
        v-for="item in config"
        :key="item.id"
        :form-item-config="item"
      >
      </tree-form-item>
    </div>
  </div>
</template>
