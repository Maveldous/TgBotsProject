<template>
  <div id="file-drag-drop">
    <form class="fileform" ref="fileform">
      <span class="drop-files">Перетащите картинку сюда</span>
    </form>
    <div v-for="(file, key) in files" :key="key + 'image'" class="file-listing">
      <img class="preview" v-bind:ref="'preview' + parseInt(key)" />
      {{ file.name }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Map",
  data: function() {
    return {
      dragAndDropCapable: false,
      files: []
    };
  },
  methods: {
    determineDragAndDropCapable() {
      var div = document.createElement("div");
      return (
        ("draggable" in div || ("ondragstart" in div && "ondrop" in div)) &&
        "FormData" in window &&
        "FileReader" in window
      );
    },
    getImagePreviews() {
      let reader = new FileReader();
      for (let i = 0; i < this.files.length; i++) {
        reader.addEventListener(
          "load",
          function() {
            this.$refs["preview" + parseInt(i)][0].src = reader.result;
          }.bind(this),
          false
        );
        reader.readAsDataURL(this.files[i]);
      }
    }
  },
  mounted() {
    this.dragAndDropCapable = this.determineDragAndDropCapable();
    if (this.dragAndDropCapable) {
      [
        "drag",
        "dragstart",
        "dragend",
        "dragover",
        "dragenter",
        "dragleave",
        "drop"
      ].forEach(
        function(evt) {
          this.$refs.fileform.addEventListener(
            evt,
            function(e) {
              e.preventDefault();
              e.stopPropagation();
            }.bind(this),
            false
          );
        }.bind(this)
      );
      this.$refs.fileform.addEventListener(
        "drop",
        function(e) {
          for (let i = 0; i < e.dataTransfer.files.length; i++) {
            this.files.push(e.dataTransfer.files[i]);
          }
          this.getImagePreviews();
        }.bind(this)
      );
    }
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

.fileform {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 200px;
  border: 1px dashed $neutral-regular;
}

.drop-files {
}

div.file-listing {
  width: 400px;
  margin: auto;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
div.file-listing img {
  height: 100px;
}
</style>
