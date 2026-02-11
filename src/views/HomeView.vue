<script setup>
import { RouterLink } from 'vue-router'
import { CalendarIcon, MapPinIcon, UserGroupIcon, ShoppingBagIcon } from '@heroicons/vue/24/outline'
import { ref, computed, onMounted } from 'vue'

// 旅行開始日
const tripDate = new Date('2026-02-26')

// 残り日数
const daysLeft = ref(0)

const calculateDaysLeft = () => {
  const today = new Date()
  const diff = tripDate.getTime() - today.getTime()
  const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24))

  daysLeft.value = diffDays
}

const countdownMessage = computed(() => {
  if (daysLeft.value > 0) {
    return `あと ${daysLeft.value} 日！`
  } else if (daysLeft.value === 0) {
    return '今日出発！'
  } else {
    return 'お疲れ様でした！'
  }
})

// コンポーネントがマウントされたら計算
onMounted(() => {
  calculateDaysLeft()
})
</script>

<template>
  <div>
    <!-- ヒーローセクション -->
    <div
      class="relative max-h-screen h-96 bg-cover bg-center"
      style="background-image: url('./public/back.jpg')"
    >
      <div class="absolute top-20 m-6 font-bold">
        <h1 class="text-2xl md:text-4xl p-2 ps-4 bg-white shadow-xl text-gray-900 mb-2">
          前田研究室ゼミ旅行 2025
        </h1>
        <p class="md:text-xl inline-block text-emerald-700 p-1 pe-2 ps-4 bg-white shadow-xl">
          1泊2日の伊豆旅行
        </p>
        <br />

        <p class="md:text-xl inline-block text-white m-3">{{ countdownMessage }}</p>
      </div>
    </div>

    <!-- 旅行概要 -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-800 mb-6">旅行の概要</h2>
          <div class="grid md:grid-cols-3 gap-6 text-left">
            <div class="bg-emerald-50 p-4 md:p-6 rounded-3xl">
              <div class="flex items-center gap-2">
                <CalendarIcon class="w-10 h-10 text-emerald-600 mb-1" />
                <h3 class="font-bold text-lg mb-2 text-emerald-900">日程</h3>
              </div>

              <p class="text-gray-800 font-semibold">2026/2/26(木) - 27(金)</p>
            </div>

            <div class="bg-emerald-50 p-4 md:p-6 rounded-3xl">
              <div class="flex items-center gap-2">
                <MapPinIcon class="w-10 h-10 text-emerald-600 mb-1" />
                <h3 class="font-bold text-lg mb-2 text-emerald-900">目的地</h3>
              </div>

              <p class="text-gray-800 font-semibold">静岡県伊東市</p>
            </div>

            <div class="bg-emerald-50 p-4 md:p-6 rounded-3xl">
              <div class="flex items-center gap-2">
                <UserGroupIcon class="w-10 h-10 text-emerald-600 mb-1" />
                <h3 class="font-bold text-lg mb-2 text-emerald-900">参加者</h3>
              </div>

              <p class="text-gray-800 font-semibold">M2 3名 / M1 6名 / B4 2名</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 熱海の魅力 -->
    <section class="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">熱海の魅力</h2>

        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <!-- 温泉 -->
          <div class="bg-white rounded-3xl shadow-sm overflow-hidden">
            <img src="/onsen.jpg" alt="温泉" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-2xl font-bold text-emerald-700 mb-3">名湯・熱海温泉</h3>
              <p class="text-gray-700 leading-relaxed">
                1500年以上の歴史を誇る熱海温泉。日頃の疲れを癒やし、
                みんなでゆったりとした時間を過ごしましょう。 効能豊かな温泉でリフレッシュ！
              </p>
            </div>
          </div>

          <!-- バラ園 -->
          <div class="bg-white rounded-3xl shadow-sm overflow-hidden">
            <img src="/rose.jpg" alt="バラ園" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-2xl font-bold text-emerald-700 mb-3">アカオハーブ&ローズガーデン</h3>
              <p class="text-gray-700 leading-relaxed">
                相模湾を一望できる絶景ガーデン。 四季折々の花々が咲き誇る12のテーマガーデンで、
                写真映え間違いなし！インスタ映えスポット多数。
              </p>
            </div>
          </div>

          <!-- 海鮮グルメ -->
          <div class="bg-white rounded-3xl shadow-sm overflow-hidden">
            <img src="/fish.jpg" alt="海鮮" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-2xl font-bold text-emerald-700 mb-3">新鮮な海の幸</h3>
              <p class="text-gray-700 leading-relaxed">
                熱海港で水揚げされた新鮮な海鮮料理に舌鼓。
                金目鯛の煮付けやお刺身など、海の幸を堪能できます。 夜は宴会で盛り上がりましょう！
              </p>
            </div>
          </div>

          <!-- 街歩き -->
          <div class="bg-white rounded-3xl shadow-sm overflow-hidden">
            <img src="/shopping.jpg" alt="街並み" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-2xl font-bold text-emerald-700 mb-3">レトロな温泉街</h3>
              <p class="text-gray-700 leading-relaxed">
                熱海銀座商店街や仲見世通りで食べ歩きやお土産探し。
                昭和レトロな雰囲気が残る温泉街を散策して、 思い出に残る時間を過ごしましょう。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTAセクション -->
    <section class="py-16 bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-6">詳細を確認しましょう</h2>
        <p class="text-xl mb-8">詳しいスケジュールや宿泊場所をチェックしよう！</p>
        <div class="flex flex-wrap gap-4 justify-center">
          <RouterLink
            to="/schedule"
            class="bg-white text-emerald-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
          >
            <CalendarIcon class="inline w-6 h-6 mr-2" /> スケジュールを見る
          </RouterLink>
          <RouterLink
            to="/pension"
            class="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
          >
            <ShoppingBagIcon class="inline w-6 h-6 mr-2" /> 宿泊場所を見る
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
