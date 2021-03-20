<template>
  <main class="register__container">
    <section class="image_section" />

    <section class="form_section">
      <img src="../assets/logo.svg" alt="Electro team logo" class="logo" />
      <form @submit.prevent>
        <template v-if="!submitted">
          <fieldset>
            <legend>Besökare</legend>
            <div class="input__container">
              <div>
                <label v-show="false" for="visitor-firstname" class="form-label"
                  >Förnamn</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="visitor-firstname"
                  required
                  v-model="form.visitor.firstname"
                  name="visitor-firstname"
                  :placeholder="content.form.labels.firstname"
                />
              </div>

              <div>
                <label v-show="false" for="visitor-firstname" class="form-label"
                  >Efternamn</label
                >
                <input
                  class="form-control"
                  id="visitor-lastname"
                  required
                  v-model="form.visitor.lastname"
                  name="visitor-lastname"
                  :placeholder="content.form.labels.lastname"
                />
              </div>

              <div>
                <label v-show="false" for="visitor-firstname" class="form-label"
                  >Efternamn</label
                >
                <input
                  class="form-control"
                  id="visitor-lastname"
                  required
                  v-model="form.whoToVisit"
                  name="visitor-lastname"
                  :placeholder="content.form.labels.whoToVisit"
                  list="electro-team-employies"
                />

                <datalist id="electro-team-employies">
                  <option
                    v-for="employeeName in employees"
                    :value="employeeName"
                    :key="employeeName"
                  >
                  </option>
                </datalist>
              </div>
            </div>
          </fieldset>
          <button
            @click="onClickRegisterVisitor"
            class="btn btn-success register__button"
          >
            Registrera
          </button>
        </template>

        <div v-else>
          <h4>You submitted successfully!</h4>
          <button class="btn btn-success " @click="onClickRegisterNewVisitor">
            Add
          </button>
        </div>
      </form>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WiseNetWaveDataService from "@/services/WiseNetWaveDataService/WiseNetWaveDataService";
import { RegistrationType } from "@/services/WiseNetWaveDataService/RegistrationType";

type DataType = {
  form: RegistrationType;
  employees: string[];
  content: {
    form: {
      labels: {
        firstname: string;
        lastname: string;
        whoToVisit: string;
      };
    };
  };
};

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
        whoToVisit: ""
      },
      employees: [
        "Niclas Sjöstedt",
        "Erik Brengesjö",
        "Jonas Fritz",
        "Jan Byman",
        "Henrik Eskilsson",
        "Niclas Sjöstedt",
        "Madelene Krantz"
      ],
      content: {
        form: {
          labels: {
            firstname: "Förnamn",
            lastname: "Efternamn",
            whoToVisit: "Vem ska du besöka"
          }
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
.register__container {
  display: grid;
  grid-template-columns: auto 600px;

  .image_section {
    background: url("../assets/camera.jpg");
    background-size: cover;
    width: 100%;
    height: 100vh;
  }

  .form_section {
    padding-top: 32px;
    display: grid;
    grid-template-rows: 20% 80%;

    form {
      padding: 0 20%;

      legend {
        width: auto;
        padding: 0 10px; /* To give a bit of padding on the left and right */
      }

      .visit__section {
        margin-top: 16px;
      }

      .register__button {
        align-self: left;
        margin-top: 20px;
      }

      .input__container {
        display: grid;
        grid-auto-flow: rows;
        row-gap: 16px;
      }
    }

    .logo {
      width: 50%;
      align-self: center;
      justify-self: center;
    }
  }
}
</style>
