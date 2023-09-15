<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary customizado">
      <div class="container-fluid">
        <div class="home-content" style="
          border-width: 0.5px;
          border-radius: 40px;
          height: 32px;
          box-shadow: rgba(0, 0, 0, 0.196) 0px 1px 2px;
          " >
            <i class='bx bx-menu' style="
            font-size: 25px;"> <span style="
            font-size: 15px;
            position: relative;
          
            top: -5px;">Categorias</span></i>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
           <ul class="navbar-nav mx-2 mb-2 mb-lg-0"  >
          <!--   <li class="nav-item mx-2" >
              <a class="nav-link" href="#">Domicilios</a>
            </li> -->
         <!--    <li class="nav-item" >
              <a class="nav-link mx-2" href="#">Domicilios</a>
            </li> -->
            <li class="nav-item">
              <a class="nav-link btn btn-light boton" href="#"><i class="fa fa-solid fa-map-marker"> </i> Atlantico • Barranquilla
              </a>
            </li>
          </ul> 
          <input class="form-control mx-4 buscador" type="search" placeholder="Search" aria-label="Search">
          <router-link to="/Carrito">
              <ul class="navbar-nav mb-2 mb-lg-0" >
                <li class="nav-item">
                  <a class="nav-link btn btn-light boton2" href="#"> <i class="fa fa-shopping-cart"> </i> Carrito </a>
                </li>
              </ul>
          </router-link>
        </div>
      </div>
    </nav>
    </div>
</template>

<style scoped>

.linkr{
  text-decoration: none;
}
.banner-titulo{
color: white;
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 359px;
    width: 80%;
}

.banner{
  background-image: url('../../public/assets/img/mallplaza.jpg');
  width: 100%;
  height: 320px;
  background-size:cover ;
  background-blend-mode: darken;
    background-color: #000000be;
    text-align: -webkit-center;

}
.image-container {
  position: relative;
  display: flex;
}

.restaurante {
  display: flex;
  width: 96%;
  flex-direction: row;
  justify-content: space-between;
  font-family: 'DM Sans', sans-serif;

}

.badge1 {
  position: absolute;
  top: 8px;
  /* Ajusta la posición vertical de la insignia */
  right: 90px;
  /* Ajusta la posición horizontal de la insignia */
  z-index: 3;
  width: 60px;
  height: 20px;
  font-size: 10px;
  padding-top: 5px;
  background-color: white !important;
  color: rgb(231, 0, 0);
  font-family: 'DM Sans', sans-serif;
}

.badge2 {
  position: absolute;
  top: 10px;
  /* Ajusta la posición vertical de la insignia */
  right: 90px;
  /* Ajusta la posición horizontal de la insignia */
  z-index: 3;
  width: 60px;
  height: 20px;
  font-size: 10px;
  padding-top: 5px;
  background-color: white !important;
  color: rgb(22, 112, 0);
  font-family: 'DM Sans', sans-serif;
}

a {
  font-size: 14px;
}

.boton {
  background-color: rgb(212 212 212 / 43%);
  color: rgb(0, 0, 0);
  border-radius: 29px;
  width: 220px;
  /* height: 36px; */
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 2px;
}

.card-parrafo {
  font-size: 12px;

}

.boton2 {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  border-radius: 29px;
  width: 100px;
  /* height: 36px; */
  padding-top: 4px;
  padding-bottom: 4px;
}

.buscador {
  border-radius: 20px;
  width: 30%;
}

h1,
p,
a,
h4,
h2,
h3,
h6,
h5,
li,
ul,
span {
  font-family: 'DM Sans', sans-serif;
}

p {
  color: black;
}

.card-main {
  background-color: rgb(255, 255, 255);
  width: 80%;
  display: flex !important;
  border-radius: 8px;
  height: 120px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
}

.card-direccion {
  color: gray !important;
  font-size: 10px;
}

.titulo {
  display: flex;
  margin-left: 8%;
  font-weight: 600;
}

.card-titulo {
  display: flex;
  margin-left: 2%;
  margin-top: 2%;
  flex-direction: column;
  align-items: flex-start;
  text-align: initial;
  width: 100%;
}

.card-img {
  width: 160px;
  border-radius: 8px 0px 0px 8px;

}

.main {
  display: flex;
  justify-content: center;
}

.estrella {
  color: black;
  font-size: 13px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;

}

.hora {
  color: rgb(90, 90, 90);
  font-size: 10px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
}

.calificacion {
  font-size: 12px;
  color: rgb(255, 225, 0);
  margin-top: 6px;
}
/* navbar sidebar*/
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 260px;
  background: #ffff;
  z-index: 100;
  transition: all 0.5s ease;
 box-shadow: 0 10px 14px rgba(0, 0, 0, 0.1);
}
.sidebar.close {
  width: 78px;
}
.sidebar .logo-details {
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
}
.sidebar .logo-details i {
  font-size: 30px;
  color: #000000;
  height: 50px;
  min-width: 65px;
  text-align: center;
  line-height: 50px;
}
.sidebar .logo-details .logo_name {
  font-size: 22px;
  color: #000000;
  font-weight: 600;
  transition: 0.3s ease;
  transition-delay: 0.1s;
}
.sidebar.close .logo-details .logo_name {
  transition-delay: 0s;
  opacity: 0;
  pointer-events: none;
}
.sidebar .nav-links {
  height: 100%;
  padding: 30px 0 150px 0;
  overflow: auto;
}
.sidebar.close .nav-links {
  overflow: visible;
}
.sidebar .nav-links::-webkit-scrollbar {
  display: none;
}
.sidebar .nav-links li {
  position: relative;
  list-style: none;
  transition: all 0.4s ease;
}
.sidebar .nav-links li:hover {
  background: #f3f1f6;
}
.sidebar .sub-menu li:hover {
  background: none;
  color: #000000;
}
.sidebar .nav-links li .icon-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sidebar.close .nav-links li .icon-link {
  display: block;
}
.sidebar .nav-links li i {
  height: 50px;
  min-width: 65px;
  text-align: center;
  line-height: 50px;
  color: #000000;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.sidebar .nav-links li.showMenu i.arrow {
  transform: rotate(-180deg);
}
.sidebar.close .nav-links i.arrow {
  display: none;
}
.sidebar .nav-links li a {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.sidebar .nav-links li a .link_name {
  font-size: 15px;
  font-weight: 200;
  color: #000000;
  transition: all 0.4s ease;
}
.sidebar.close .nav-links li a .link_name {
  opacity: 0;
  pointer-events: none;
}
.sidebar .nav-links li .sub-menu {
  padding: 6px 6px 14px 80px;
  margin-top: 0px;
  background: #fff;
  display: none;
}
.sidebar .nav-links li.showMenu .sub-menu {
  display: block;
}
.sidebar .nav-links li .sub-menu a {
  color: #000000;
  font-size: 15px;
  padding: 5px 0;
  white-space: nowrap;
  opacity: 0.6;
  transition: all 0.3s ease;
}
.sidebar .nav-links li .sub-menu a:hover {
  opacity: 1;
}
.sidebar.close .nav-links li .sub-menu {
  position: absolute;
  left: 100%;
  top: -10px;
  margin-top: 0;
  padding: 10px 20px;
  border-radius: 0 6px 6px 0;
  opacity: 0;
  display: block;
  pointer-events: none;
  transition: 0s;
}
.sidebar.close .nav-links li:hover .sub-menu {
  top: 0;
  opacity: 1;
  pointer-events: auto;
  transition: all 0.4s ease;
}
.sidebar .nav-links li .sub-menu .link_name {
  display: none;
}
.sidebar.close .nav-links li .sub-menu .link_name {
  font-size: 18px;
  opacity: 1;
  display: block;
}
.sidebar .nav-links li .sub-menu.blank {
  opacity: 1;
  pointer-events: auto;
  padding: 3px 20px 6px 16px;
  opacity: 0;
  pointer-events: none;
}
.sidebar .nav-links li:hover .sub-menu.blank {
  top: 50%;
  transform: translateY(-50%);
}
.sidebar .profile-details {
  position: fixed;
  bottom: 0;
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f3f1f6;
  padding: 12px 0;
  transition: all 0.5s ease;
}
.sidebar.close .profile-details {
  background: none;
}
.sidebar.close .profile-details {
  width: 78px;
}
.sidebar .profile-details .profile-content {
  display: flex;
  align-items: center;
}
.sidebar .profile-details img {
  height: 52px;
  width: 52px;
  object-fit: cover;
  border-radius: 25px;
  margin: 0 14px 0 12px;
  background: #1d1b31;
  box-shadow: 4px 2px 4px rgba(0, 0, 0, 0.213);
}

.sidebar .profile-details .profile_name,
.sidebar .profile-details .job {
  color: #000000;
  font-size: 18px;
  font-weight: 500;
  white-space: nowrap;
  transition: all 5s ease;
}
.sidebar.close .profile-details i,
.sidebar.close .profile-details .profile_name,
.sidebar.close .profile-details .job {
  display: none;
}
.sidebar .profile-details .job {
  font-size: 12px;
}
.home-section {
  position: relative;
  background: #ffffff;
  height: 100vh;
  left: 260px;
  width: calc(100% - 260px);
  transition: all 0.5s ease;
}
.sidebar.close ~ .home-section {
  left: 78px;
  width: calc(100% - 78px);
}
.home-section .home-content {
  height: 60px;
  display: flex;
  align-items: center;
}
.home-section .home-content .bx-menu,
.home-section .home-content .text {
  color: #000000;
  font-size: 35px;
}
.home-section .home-content .bx-menu {
  margin: 0 15px;
  cursor: pointer;
}
.home-section .home-content .text {
  font-size: 26px;
  font-weight: 600;
}
@media (max-width: 500px) {
  .sidebar.close .nav-links li .sub-menu {
    display: none;
  }
  .sidebar {
    width: 78px;
  }
  .sidebar.close {
    width: 0;
  }
  .home-section {
    left: 78px;
    width: calc(100% - 78px);
    z-index: 100;
  }
  .sidebar.close ~ .home-section {
    width: 100%;
    left: 0;
  }
}
.customizado{
 box-shadow: 0 0px 14px rgba(0, 0, 0, 0.1);
 position: fixed;
 width: 100%;
 z-index: 10;
 background-color: #fff !important;
 top: 0;
height: 60px;
}
</style>