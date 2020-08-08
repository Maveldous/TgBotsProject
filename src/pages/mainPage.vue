<template>
  <main class="main">
    <div class="main__wrapper">
      <router-link :to="{name: 'form', params: { info: false, index: -1}}" >
        <button class="main__botBtn">
          Создать бота
        </button>
      </router-link>
      <article
        v-for="(item, index) in GET_DATA"
        :key="index"
        class="main__botItem"
        @click="openEdit(item, index)"
      >
        <p class="main__botItem-title">{{ item.name }}</p>
        <button @click.stop="deleteElem(index)" class="main__botItem-btn">Удалить</button>
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
    ...mapActions(["DELETE_DATA_ELEM"]),
    openEdit(value, index){
      this.$router.push({ name: 'form', params: { info: value, index: index } })
    },
    deleteElem(index){
      this.DELETE_DATA_ELEM(index)
    }
  }
};
</script>

<style scoped lang="scss">
.main {
  &__wrapper {
    width: 50%;
    margin: 0 auto;
    @media(max-width: 450px){
      &{
        width: 80%;
      }
    }
  }
  &__botBtn {
    width: 60%;
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
    width: 30%;
    word-wrap: break-word;
  }
}
</style>
