<template>
  <section class="form">
    <div class="form__wrapper">
      <h1 class="form__title">{{information ? 'Редактирование бота' : 'Создание бота'}}</h1>
      <label for="nameInput">Название:</label>
      <input class="form__input" name="nameInput" type="text" :value="information.name" />
      <label for="descriptionInput">Описание:</label>
      <input class="form__input" name="descriptionInput" type="text" :value="information.description" />
      <inputimg :value="information.img" ref="inputIMG" class="inputimg" />
      <label for="dateInput">Дата:</label>
      <Datepicker 
        name="dateInput" 
        class="form__input"
        @selected="dateGet"
        :value="information.date"
        :bootstrap-styling="true" />
      <button @click="pushArr" class="form__btn">Сохранить</button>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import inputimg from "./inputImgComponent";
import Datepicker from 'vuejs-datepicker';

export default {
  name: "Map",
  data: function() {
    return {
      date: '',
    };
  },
  components: {
    inputimg,
    Datepicker
  },
  props: ['info'],
  mounted(){
    
  },
  methods: {
    ...mapActions([
      'ADD_DATA_ELEM'
    ]),
    dateGet(event){
      this.date = event;
    },
    pushArr: function(){
      let name = document.querySelectorAll('.form__input')[0].value;
      let description = document.querySelectorAll('.form__input')[1].value;
      let img = this.$refs.inputIMG.files;
      let date = this.date;
      this.ADD_DATA_ELEM(
        {
          name: name,
          description: description,
          img: img,
          date: date
        }
      )
      this.$router.push('/')
    }
  },
  computed: {
    ...mapGetters(['GET_DATA']),
    information(){
      if(this.info) return this.info
      else return false
    }
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
