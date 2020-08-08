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
// import { mapGetters } from "vuex";

export default {
  name: "Map",
  data: function() {
    return {
      dragAndDropCapable: false,
      files: []
    };
  },
  props: ['value'],
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
      for (let i = 0; i < this.files.length; i++) {
        let reader = new FileReader();
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
  created(){

  },
  mounted() {
    if(this.value) {
      this.files = this.value
      this.getImagePreviews()
    }
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
        "dragover",
        function(e) {
          e.srcElement.classList.add('hover')
        }.bind(this)
      );
       this.$refs.fileform.addEventListener(
        "dragleave",
        function(e) {
          e.srcElement.classList.remove('hover')
        }.bind(this)
      );
      this.$refs.fileform.addEventListener(
        "drop",
        function(e) {
          e.srcElement.classList.remove('hover')
          for (let i = 0; i < e.dataTransfer.files.length; i++) {
            this.files.push(e.dataTransfer.files[i]);
          }
          this.getImagePreviews();
        }.bind(this)
      );
    }
  },
  beforeDestroy(){
    this.$refs.fileform.removeEventListener('drag', function(e){e},false);
    this.$refs.fileform.removeEventListener('dragstart', function(e){e},false);
    this.$refs.fileform.removeEventListener('dragend', function(e){e},false);
    this.$refs.fileform.removeEventListener('dragover', function(e){e},false);
    this.$refs.fileform.removeEventListener('dragenter', function(e){e},false);
    this.$refs.fileform.removeEventListener('dragleave', function(e){e},false);
    this.$refs.fileform.removeEventListener('drop', function(e){e},false);
  }
};
</script>

<style lang="scss">

#file-drag-drop{
  width: 100%;
}

.fileform {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  height: 200px;
  border: 1px dashed $neutral-regular;
  &.hover{
    background: $neutral-secondary;
  }
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
