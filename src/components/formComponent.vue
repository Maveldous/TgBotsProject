<template>
  <section class="form">
    <div class="form__wrapper">
      <h1 class="form__title">Создание бота</h1>
      <label for="nameInput">Название:</label>
      <input class="form__input" name="nameInput" type="text" />
      <label for="descriptionInput">Описание:</label>
      <input class="form__input" name="descriptionInput" type="text" />
      <inputimg class="inputimg" />
      <label for="dateInput">Дата:</label>
      <Datepicker 
        name="dateInput" 
        class="form__input" 
        :bootstrap-styling="true" />
      <button class="form__btn">Сохранить</button>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import inputimg from "./inputImgComponent";
import Datepicker from 'vuejs-datepicker';

export default {
  name: "Map",
  data: function() {
    return {};
  },
  components: {
    inputimg,
    Datepicker
  },
  computed: {
    ...mapGetters(["MAIN_LANG", "GET_MAP_VISION"])
  }
};
</script>

<style lang="scss">

.form__wrapper {
  width: 50%;
  margin: 140px auto;
  border: 2px solid $neutral-primary;
  display: flex;
  flex-direction: column;
  align-items: center;
}

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

.form__btn{
  border: 1px solid $neutral-regular;
  border-radius: 5px;
  height: 50px;
  margin: 20px 0;
  &:active {
    background: $success-color;
  }
}

</style>
