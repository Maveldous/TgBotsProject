<template>
  <section class="form">
    <div class="form__wrapper">
      <h1 class="form__title">Создание бота</h1>
      <label for="nameInput">Название:</label>
      <input class="form__input" name="nameInput" type="text" />
      <label for="descriptionInput">Описание:</label>
      <input class="form__input" name="descriptionInput" type="text" />
      <inputimg class="inputimg" />
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import inputimg from "./inputImgComponent";

export default {
  name: "Map",
  data: function() {
    return {};
  },
  components: {
    inputimg
  },
  computed: {
    ...mapGetters(["MAIN_LANG", "GET_MAP_VISION"])
  }
};
</script>

<style lang="scss">
.form__title{
  font-size: rem(35);
  margin: 15px 0 35px;
}

.form__input{
  margin: 10px 0;
  border: 1px solid $neutral-regular;
  border-radius: 5px;
}

.inputimg {
  margin: 50px 0;
}
</style>
