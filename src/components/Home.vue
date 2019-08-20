<template>
  <div class="home">
    <h2>{{title}}</h2>
    <p>Hello! {{username}}</p>
    <div class="empList">
      <form @submit.prevent="addEmployee">
        <input
          type="text"
          placeholder="Enter Employee Name"
          v-model="employee"
          v-validate="'min:5'"
          name="employee"
        />
        <span class="alert" v-if="errors.has('employee')">{{ errors.first('employee') }}</span>
      </form>
      {{employee}}
      <ul>
        <li v-for="(d,i) in employees" :key="i">
          {{i}}. {{d.employee}}
          <a class="closebutton" v-on:click="remove(i)">X</a>
        </li>
      </ul>

      <p v-if="employees.length < 1" v-bind:class="{ alert:showAlert }">No Employes</p>
      <p v-else v-bind:class="{ alert:showAlert }">Total Employees: {{employees.length}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: this.$route.params.name,
      employee: "",
      title: "home",
      employees: [
        {
          id: 1,
          employee: "Gaye",
          salary: 678
        },
        {
          id: 2,
          employee: "Grata",
          salary: 238
        },
        {
          id: 3,
          employee: "Dane",
          salary: 870
        },
        {
          id: 4,
          employee: "Vinnie",
          salary: 311
        },
        {
          id: 5,
          employee: "Waly",
          salary: 810
        },
        {
          id: 6,
          employee: "Lew",
          salary: 907
        },
        {
          id: 7,
          employee: "Hatti",
          salary: 912
        },
        {
          id: 8,
          employee: "Gaelan",
          salary: 87
        },
        {
          id: 9,
          employee: "Adelind",
          salary: 382
        },
        {
          id: 10,
          employee: "Theo",
          salary: 752
        }
      ],
      showAlert: true
    };
  },
  methods: {
    addEmployee() {
      this.$validator.validateAll().then(valid => {
        if (valid) {
          let a = { employee: this.employee };
          this.employees.push(a);
          this.employee = "";
        } else {
          alert("something went wrong!");
        }
      });
    },
    remove(i) {
      if (confirm(`confirm?`)) {
        this.employees.splice(i, 1);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.alert {
  background-color: red;
  color: white;
}

.closebutton {
  align-content: flex-end;
}
</style>
