<template>
    <div>
        <aside class="left-sidebar" style="background: linear-gradient(45deg, #860808, black);">
          <!-- Sidebar scroll-->
          <div>
            <div class="brand-logo d-flex align-items-center justify-content-between" style="margin-top: 25px;">
              <a href="#" class="text-nowrap logo-img">
                <h4 style="color:white">Developers S.A.S</h4>
              </a>
              <div class="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
                <i class="ti ti-x fs-8"></i>
              </div>
            </div>
            <!-- Sidebar navigation-->
            <nav class="sidebar-nav scroll-sidebar" data-simplebar="">
              <ul id="sidebarnav">
                <li class="nav-small-cap" style="color:white">
                  <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
                  <span class="hide-menu" style="color:white">Home</span>
                </li>
                <li class="sidebar-item">
                  <a class="sidebar-link" href="#" aria-expanded="false">
                    <span>
                      <i style="color: #ffffff;" class="ti ti-layout-dashboard"></i>
                    </span>
                    <span class="hide-menu" style="color:white">Dashboard</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
    </div>
</template>

<style scoped>
li, span{
  color:white;
  
}
</style>