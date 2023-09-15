<template>
  <div>
    <link rel="stylesheet" href="../assets-admin/css/styles.min.css" />
    <body>
      <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
      <Sidebar/>
        <div class="body-wrapper">
          <header class="app-header" style="margin-top: 8px;">
            <nav class="navbar navbar-expand-lg navbar-light">
              <ul class="navbar-nav">
                <li class="nav-item d-block d-xl-none">
                  <a class="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" href="javascript:void(0)">
                    <i class="ti ti-menu-2"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-icon-hover" href="javascript:void(0)">
                    <i class="ti ti-bell-ringing"></i>
                    <div class="notification bg-primary rounded-circle"></div>
                  </a>
                </li>
              </ul>
              <div class="navbar-collapse justify-content-end px-0" id="navbarNav">
                <div style="color: #212529; font-weight: 700;">
                  Admin Dashboard
                </div>
              </div>
            </nav>
          </header>
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12 d-flex align-items-stretch">
                <div class="card w-100">
                  <div class="card-body p-4">
                    <div class="registros mb-2">
                      <form @submit.prevent="getEmployeeByEmail" class="d-flex" role="Email">
                        <input class="form-control me-2" type="search" placeholder="Email" aria-label="Search" v-model="email">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                        <button @click="getEmployees" class="btn btn-outline-danger mx-2" type="button">All</button>
                      </form>

                      <form @submit.prevent="getEmployeeByEmail" class="d-flex" role="Email">
                        <input class="form-control me-2" type="number" placeholder="Salaray Range - Min" aria-label="Search" v-model="min">
                        <input class="form-control me-2" type="number" placeholder="Salary Range - Max" aria-label="Search" v-model="max">
                        <button :disabled="min > max || (min == 0 && max == 0)" @click="getEmployeesBySalaryRange" class="btn btn-outline-success" type="button">Fetch</button>
                        <button @click="getEmployees" class="btn btn-outline-danger mx-2" type="button">All</button>
                      </form>
                      <a type="button" class="btn btn-light" style="background-color: rgb(143 1 1); color:white;" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Register Employee
                      </a>
                      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content" style="">
                            <div class="modal-header" style="padding: 1rem 2rem;">
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form @submit.prevent="registerEmployee" action="">
                              <div class="modal-body">
                                <div>
                                  <h2 style="text-align-last: start; margin-left: 5%;">Employee Information</h2>
                                </div>
                                <div class="formulario">
                                  <div
                                    style="display: flex; flex-direction: column; align-items: flex-start; width: 40%; margin: 0% 5%;">
                                    <label for="form-label">Name</label>
                                    <input type="text" class="form-control" placeholder="" style="margin-bottom: 20px; width: 100%;" v-model="employee.name"/>
                                  </div>
                                  <div style="display: flex; flex-direction: column; align-items: flex-start; width: 45%;">
                                    <label for="form-label">Email</label>
                                    <input type="email" class="form-control" placeholder="" style="margin-bottom: 20px; width: 100%;" v-model="employee.email"/>
                                  </div>
                                </div>
                                <div class="formulario">
                                  <div
                                    style="display: flex; flex-direction: column; align-items: flex-start; width: 40%; margin: 0% 5%;">
                                    <label for="form-label">Phone</label>
                                    <input type="text" class="form-control" placeholder="" style="margin-bottom: 20px; width: 100%;" v-model="employee.phone"/>
                                  </div>
                                  <div style="display: flex; flex-direction: column; align-items: flex-start; width: 45%;">
                                    <label for="form-label">Address</label>
                                    <input type="text" class="form-control" placeholder="" style="margin-bottom: 20px; width: 100%;" v-model="employee.address"/>
                                  </div>
                                </div>
                                <div class="formulario">
                                  <div
                                    style="display: flex; flex-direction: column; align-items: flex-start; width: 40%; margin: 0% 5%;">
                                    <label for="form-label">Position</label>
                                    <input type="text" class="form-control" placeholder="" style="margin-bottom: 20px; width: 100%;" v-model="employee.position"/>
                                  </div>
                                  <div style="display: flex; flex-direction: column; align-items: flex-start; width: 45%;">
                                    <label for="form-label">Salary</label>
                                    <input type="number" class="form-control" placeholder="" style="margin-bottom: 20px; width: 100%;" v-model="employee.salary"/>
                                  </div>
                                </div>
                                <br>
                                <hr>
                                <br>
                                <div>
                                  <h2 style="text-align-last: start; margin-left: 5%;">Skills</h2>
                                </div>
                                <div class="formulario">
                                  <div class="mx-4" v-for="skill in this.skills" :key="skill.id">
                                    <input type="checkbox" id="" :value="skill.skill_id" v-model="this.employee.skills_ids">
                                    <label for="">{{ skill.name }}</label>
                                  </div>
                                </div>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-danger" style="background-color: red;" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary" style="background-color: blue;">Save changes</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div class="modal fade" id="viewModal" tabindex="-1" aria-labelledby="viewModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content" style="">
                            <div class="modal-header" style="padding: 1rem 2rem;">
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div>

                              <h3>Employee Details</h3>
                              <br>

                              <h4>Name</h4>
                              <h6>{{ employee.name }}</h6>
                              <br>

                              <h4>Email</h4>
                              <h6>{{ employee.email }}</h6>
                              <br>
                              
                              <h4>Phone</h4>
                              <h6>{{ employee.phone }}</h6>
                              <br>
                              
                              <h4>Address</h4>
                              <h6>{{ employee.address }}</h6>
                              <br>

                              <h4>Position</h4>
                              <h6>{{ employee.position }}</h6>
                              <br>
                              
                              <h4>Salary</h4>
                              <h6>{{ employee.salary }}</h6>
                              <br>

                              <h4>Skills</h4>
                              <h6 v-for="skill in employee.skills" :key="skill.id">
                                {{ skill.name }}
                              </h6>
                              <br>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr style="color: rgb(153, 159, 161); margin-top: -3px;">
                    <div class="table-responsive">
                      <table class="table text-nowrap mb-0 align-middle">
                        <thead class="text-dark fs-4">
                          <tr>
                            <th class="border-bottom-0">
                              <h6 class="fw-semibold mb-0">Name</h6>
                            </th>
                            <th class="border-bottom-0">
                              <h6 class="fw-semibold mb-0">Email</h6>
                            </th>
                            <th class="border-bottom-0">
                              <h6 class="fw-semibold mb-0">Position</h6>
                            </th>
                            <th class="border-bottom-0">
                              <h6 class="fw-semibold mb-0">Salary</h6>
                            </th>
                            <th class="border-bottom-0">
                              <h6 class="fw-semibold mb-0">Actions</h6>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="employee in this.employees" :key="employee.id">
                            <td>{{ employee.name }}</td>
                            <td>{{ employee.email }}</td>
                            <td>{{ employee.position }}</td>
                            <td>${{ employee.salary }}</td>
                            <td>
                                <a @click="getEmployeeDetails(employee.employee_id)" type="button" class="btn btn-light" style="background-color: rgb(143 1 1); color:white;" data-bs-toggle="modal" data-bs-target="#viewModal">
                                Details
                                </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<style scoped>
* {
  font-family: 'DM Sans', sans-serif;
}

.formulario {
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
}

.formulario-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 40%;
  margin: 0% 5%;
}

.registros {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;

}
</style>

<script>
import Sidebar from '@/components/admin/Sidebar.vue';
import 
{ 
  getAllEmployees, 
  getOneEmployeeDetails, 
  getOneEmployeeByEmail, 
  registerOneEmployee, 
  getAllEmployeesBySalaryRange 
} from '@/axios/employees/client';
import { getAllSkills } from '@/axios/skills/client';
export default{
  components: {
    Sidebar,
  },
  data(){
    return {

      employees: [],

      employee: {
        name: '',
        email: '',
        phone: '',
        address: '',
        position: '',
        salary: '',
        skills_ids: []
      },

      skills: [],

      email: '',

      min: null,

      max: null
    }
  },
  methods: {
    async getEmployees() {
      this.employees = await getAllEmployees();
      this.email = '';
      this.min = '';
      this.max = '';
    },
    async getEmployeeDetails(id) {
      this.employee = await getOneEmployeeDetails(id);
    },
    async getEmployeeByEmail() {
      this.employees = await getOneEmployeeByEmail(this.email);
    },
    async getEmployeesBySalaryRange() {
      this.employees = await getAllEmployeesBySalaryRange(this.min, this.max);
    },
    async registerEmployee(){
      await registerOneEmployee(this.employee)
    },
    async getSkills() {
      this.skills = await getAllSkills();
    },
  },
  mounted() {
    this.getEmployees();
    this.getSkills();
  }
};

</script>