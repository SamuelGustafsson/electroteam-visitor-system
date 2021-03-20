<template>
  <main class="container">
    <section class="image_section"></section>
    <div class="submit-form">
      <div v-if="!submitted">
        <div class="form-group">
          <label for="visitor-firstname">Visitor firstname</label>
          <input
            type="text"
            class="form-control"
            id="visitor-firstname"
            required
            v-model="form.visitor.firstname"
            name="visitor-firstname"
          />
        </div>

        <div class="form-group">
          <label for="visitor-lastname">Visitor lastname</label>
          <input
            class="form-control"
            id="visitor-lastname"
            required
            v-model="form.visitor.lastname"
            name="visitor-lastname"
          />
        </div>

        <button @click="onClickRegisterVisitor" class="btn btn-success">
          Registrera
        </button>
      </div>

      <div v-else>
        <h4>You submitted successfully!</h4>
        <button class="btn btn-success" @click="onClickRegisterNewVisitor">
          Add
        </button>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WiseNetWaveDataService from "@/services/WiseNetWaveDataService/WiseNetWaveDataService";
import { RegistrationType } from "@/services/WiseNetWaveDataService/RegistrationType";

type DataType = { form: RegistrationType };

export default defineComponent({
  name: "Home",
  components: {},
  data(): DataType {
    return {
      form: {
        visitor: {
          firstname: "",
          lastname: ""
        },
        whoToVisit: {
          firstname: "Niclas",
          lastname: "Sjöstedt"
        }
      }
    };
  },
  methods: {
    onClickRegisterVisitor() {
      const { visitor, whoToVisit } = this.form;
      WiseNetWaveDataService.create({
        visitor,
        whoToVisit
      } as RegistrationType);
    }
  }
});
</script>

<style lang="scss" scoped>
.container {
  background-color: red;
  width: 100%;
  .image_section {
    background: url("../assets/camera.jpg");
    background-size: cover;
    width: 200px;
    height: 200px;
  }
}
</style>
