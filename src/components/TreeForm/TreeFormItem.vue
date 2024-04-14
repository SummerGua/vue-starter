<script setup lang="ts">
import { AddOne } from '@icon-park/vue-next';

const option = defineProps<{
  formItemConfig: {
    value: string;
    children?: any[];
    [item: string]: any;
  };
  level: number;
  maxLevel: number;
}>();

const addChildren = (item: any) => {
  if (!(option.level <= option.maxLevel)) {
    return;
  }
  item.children.push({
    id: 'afawr36r4wefaw',
    label: 'key xxx',
    value: '',
    children: [],
  });
};
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-center gap-1">
      <slot></slot>
      <input
        :placeholder="option.formItemConfig.label"
        v-model="option.formItemConfig.value"
        class="border-2 border-black"
        type="text"
        size="10"
      />
      <div v-if="option.level <= option.maxLevel">
        <div
          class="flex gap-1 border-dotted border-2 border-black hover:cursor-pointer"
          @click="addChildren(option.formItemConfig)"
          v-if="option.formItemConfig.children"
        >
          <add-one theme="outline" size="24" fill="#333" />
          <p>add a child</p>
        </div>
      </div>
    </div>

    <div>
      <div class="flex flex-col">
        <TreeFormItem
          v-for="item in option.formItemConfig.children"
          :key="item.id"
          :formItemConfig="item"
          :level="option.level + 1"
          :max-level="option.maxLevel"
        >
          <div class="mr-2">
            <span v-for="i in option.level" :key="i" class="h-7">--</span>
            <span>></span>
          </div>
        </TreeFormItem>
      </div>
    </div>
  </div>
</template>
