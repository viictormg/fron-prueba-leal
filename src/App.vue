<template>
  <div>
    <div class="py-2 px-4 bg-yellow-500" >
      <ul class="flex">
        <li class="mr-6">
          <a class="text-black hover:text-white" href="/">Tienda</a>
        </li>
        <li class="mr-6">
          <a class="text-black hover:text-white" href="/points">Mis puntos</a>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>
