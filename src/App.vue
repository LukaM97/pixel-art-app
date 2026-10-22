<template>
  <div>
    <nav class="sticky top-0 z-50 bg-[brown] shadow-xl/90">
      <div class="flex gap-4 items-center">
        <div>
          <router-link :to="{ name: 'Home' }"><img class="w-[50px] h-[50px] m-2" src="@/assets/images/logo.png"></router-link>
        </div>
        <div class="flex gap-2">
          <div>
            <router-link :to="{ name: 'Home' }">Home</router-link>
          </div>
          <div>
            <router-link :to="{ name: 'Gallery' }">Gallery</router-link>
          </div>
          <div>
            <a>New</a>
          </div>
          <div>
            <a>Login</a>
          </div>
          <div>
            <a>Register</a>
          </div>
          <div>
            <a>Logout</a>
          </div>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>
<style scoped></style>