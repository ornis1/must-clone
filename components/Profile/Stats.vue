<template lang="pug">
.list
  .list-item.ma-3.mt-0(v-for='item in items', :key='item.id')
    .list-item__title {{ item.count }}
    .list-item__subtitle {{ item.label }}
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import faker from 'faker'

interface Item {
  id: number
  count: number
  label: string
}

@Component({})
export default class UserStats extends Vue {
  items: Item[] = [
    {
      id: faker.random.number(),
      count: faker.random.number(200),
      label: 'Место',
    },
    {
      id: faker.random.number(),
      count: faker.random.number(200),
      label: 'Посмотрю',
    },
    {
      id: faker.random.number(),
      count: faker.random.number(200),
      label: 'Просмотрены',
    },
    {
      id: faker.random.number(),
      count: faker.random.number(200),
      label: 'Сериалы',
    },
  ]
}
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  align-items: center;
  line-height: 1.2;

  &-item {
    font-weight: 700;
    text-align: center;

    &__title {
      font-size: calc(15rem / 16);
      color: $text-dark;
    }

    &__subtitle {
      font-size: calc(13rem / 16);
      color: $text-lightgrey;
    }

    &:first-child {
      position: relative;
      padding: 0 20px;

      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        display: block;
        width: 20px;
        height: 40px;
        background: url('https://mustapp.com/static/images/laurels.svg');
        background-size: 40px;
        background-repeat: no-repeat;
      }

      &::before {
        left: -10px;
        margin-top: -20px;
        background-position: top left;
      }

      &::after {
        right: -10px;
        margin-top: -20px;
        background-position: top right;
      }
    }
  }
}
</style>
