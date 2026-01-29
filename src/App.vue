<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- ヘッダー・ナビゲーション -->
    <header class="bg-emerald-600 text-white shadow-lg">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-bold">ゼミ旅行2025</h1>

          <!-- デスクトップメニュー -->
          <div class="hidden md:flex gap-6">
            <RouterLink to="/" class="hover:text-emerald-200 transition">ホーム</RouterLink>
            <RouterLink to="/schedule" class="hover:text-emerald-200 transition"
              >スケジュール</RouterLink
            >
            <RouterLink to="/pension" class="hover:text-emerald-200 transition"
              >宿泊場所</RouterLink
            >
          </div>

          <!-- ハンバーガーボタン（スマホ） -->
          <button
            @click="toggleMenu"
            class="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="メニュー"
          >
            <span
              class="block w-6 h-0.5 bg-white transition-all"
              :class="{ 'rotate-45 translate-y-2': isMenuOpen }"
            ></span>
            <span
              class="block w-6 h-0.5 bg-white transition-all"
              :class="{ 'opacity-0': isMenuOpen }"
            ></span>
            <span
              class="block w-6 h-0.5 bg-white transition-all"
              :class="{ '-rotate-45 -translate-y-2': isMenuOpen }"
            ></span>
          </button>
        </div>

        <!-- スマホメニュー -->
        <div v-show="isMenuOpen" class="md:hidden mt-4 flex flex-col gap-3 pb-2">
          <RouterLink to="/" @click="closeMenu" class="hover:text-emerald-200 transition py-2"
            >ホーム</RouterLink
          >
          <RouterLink
            to="/schedule"
            @click="closeMenu"
            class="hover:text-emerald-200 transition py-2"
            >スケジュール</RouterLink
          >
          <RouterLink
            to="/pension"
            @click="closeMenu"
            class="hover:text-emerald-200 transition py-2"
            >宿泊場所</RouterLink
          >
        </div>
      </nav>
    </header>

    <!-- ページコンテンツ -->
    <main class="container mx-auto">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
