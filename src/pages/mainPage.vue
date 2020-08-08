<template>
  <main class="main">
    <div class="main__wrapper">
      <router-link :to="{name: 'form', params: { info: ''}}" >
        <button class="main__botBtn">
          Создать бота
        </button>
      </router-link>
      <article
        v-for="(item, index) in GET_DATA"
        :key="index"
        class="main__botItem"
        @click="openEdit(item)"
      >
        <p class="main__botItem-title">{{ item.name }}</p>
        <button @click.stop="notsome" class="main__botItem-btn">Удалить</button>
      </article>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Header",
  data: function() {
    return {};
  },
  computed: {
    ...mapGetters(["GET_DATA"])
  },
  methods: {
    ...mapActions(["TOGGLE_STATE_TRUE"]),
    openEdit(value){
      this.$router.push({ name: 'form', params: { info: value } })
    },
    notsome(){
      console.log('notsome');
    }
  }
};
</script>

<style scoped lang="scss">
.main {
  &__wrapper {
    width: 50%;
    margin: 0 auto;
  }
  &__botBtn {
    width: 400px;
    height: 100px;
    display: block;
    margin: 10px auto;
    border: 1px solid $neutral-secondary;
    border-radius: 5px;
    &:active {
      background: $success-color;
    }
  }
  &__botItem {
    height: 100px;
    border: 1px solid $neutral-regular;
    margin: 10px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  &__botItem-btn {
    height: 50%;
    border: 1px solid rgb(255, 0, 0);
    background: $danger-color;
    border-radius: 5px;
  }
  &__botItem-title {
    border-bottom: 1px solid #000;
  }
}
</style>
