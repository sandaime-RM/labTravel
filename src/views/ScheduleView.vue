<script setup>
import { ref } from 'vue'

// タブで選択中の日
const activeDay = ref(1)
</script>

<template>
  <!-- ヘッダー -->
  <div class="text-center p-6">
    <h1
      class="text-2xl font-semibold text-gray-800 border-b-2 border-dotted border-gray-800/30 inline-block py-1 px-3"
    >
      スケジュール
    </h1>
  </div>

  <div class="container mx-auto mt-8 pb-8 px-4">
    <!-- 切り替え用タブ（1日目 / 2日目） -->
    <div class="grid grid-cols-2 max-w-lg mx-auto">
      <button
        @click="activeDay = 1"
        :class="[
          'px-6 py-2 rounded-t-3xl font-semibold text-lg',
          activeDay === 1
            ? 'bg-emerald-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
        ]"
      >
        <div>1日目</div>
        <div class="text-xs font-normal">（2月22日）</div>
      </button>
      <button
        @click="activeDay = 2"
        :class="[
          'px-6 py-2 rounded-t-3xl font-semibold text-lg',
          activeDay === 2
            ? 'bg-emerald-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
        ]"
      >
        2日目
        <div class="text-xs font-normal">（2月23日）</div>
      </button>
    </div>

    <!-- スケジュール内容 -->
    <div class="bg-white rounded-b-3xl sm:rounded-3xl p-6 max-w-4xl mx-auto">
      <div v-if="activeDay === 1">
        <h2 class="text-2xl font-bold mb-2 text-emerald-800">1日目</h2>

        <div
          class="py-4 sm:flex justify-between border-b-2 border-dotted border-emerald-500/50 mb-4"
        >
          <div>
            <h4 class="text-emerald-800/80 text-2xl">8:00 - 10:00</h4>
            <h3 class="font-semibold text-gray-800 text-lg">各自熱海駅まで移動</h3>
            <p class="text-gray-700 text-sm leading-5.5 ms-2">
              公共交通機関を利用して熱海駅まで各自で移動します。
            </p>
          </div>
          <img
            src="/public/odoriko.jpg"
            alt="踊り子号"
            class="w-full max-w-72 h-36 m-2 object-cover rounded-3xl shadow border-4 border-emerald-600"
          />
        </div>

        <div
          class="py-4 sm:flex justify-between border-b-2 border-dotted border-emerald-500/50 mb-4"
        >
          <div>
            <h4 class="text-emerald-800/80 text-2xl">10:00 - 13:00</h4>
            <h3 class="font-semibold text-gray-800 text-lg">熱海観光</h3>
            <p class="text-gray-700 text-sm leading-5.5 ms-2">詳細未定</p>
          </div>
          <img
            src="/public/boat.jpg"
            alt="遊覧船"
            class="w-full max-w-72 h-36 m-2 object-cover rounded-3xl shadow border-4 border-emerald-600"
          />
        </div>

        <div
          class="py-4 sm:flex justify-between border-b-2 border-dotted border-emerald-500/50 mb-4"
        >
          <div>
            <h4 class="text-emerald-800/80 text-2xl">13:00 - 14:00</h4>
            <h3 class="font-semibold text-gray-800 text-lg">昼食</h3>
            <p class="text-gray-700 text-sm leading-5.5 ms-2">
              熱海周辺？の飲食店でみんなで昼食の予定。
            </p>
          </div>
          <img
            src="/public/lunch.jpg"
            alt="昼食"
            class="w-full max-w-72 h-36 m-2 object-cover rounded-3xl shadow border-4 border-emerald-600"
          />
        </div>

        <div
          class="py-4 sm:flex justify-between border-b-2 border-dotted border-emerald-500/50 mb-4"
        >
          <div>
            <h4 class="text-emerald-800/80 text-2xl">14:00 - 15:30</h4>
            <h3 class="font-semibold text-gray-800 text-lg">食材の買い物</h3>
            <p class="text-gray-700 text-sm leading-5.5 ms-2">
              夕食と朝食のために宿泊場所周辺のスーパーで買い物
            </p>
          </div>
          <img
            src="/public/market.jpg"
            alt="スーパー"
            class="w-full max-w-72 h-36 m-2 object-cover rounded-3xl shadow border-4 border-emerald-600"
          />
        </div>

        <div
          class="py-4 sm:flex justify-between border-b-2 border-dotted border-emerald-500/50 mb-4"
        >
          <div>
            <h4 class="text-emerald-800/80 text-2xl">16:00 - 18:00</h4>
            <h3 class="font-semibold text-gray-800 text-lg">休憩と夕食準備</h3>
            <p class="text-gray-700 text-sm leading-5.5 ms-2">
              宿泊場所に着いたら、ゆっくり休んだり遊んだりしつつ、夕食の準備を行います。
            </p>
          </div>
          <img
            src="/public/kitchen.jpeg"
            alt="キッチン"
            class="w-full max-w-72 h-36 m-2 object-cover rounded-3xl shadow border-4 border-emerald-600"
          />
        </div>

        <div
          class="py-4 sm:flex justify-between border-b-2 border-dotted border-emerald-500/50 mb-4"
        >
          <div>
            <h4 class="text-emerald-800/80 text-2xl">18:00 - 20:00</h4>
            <h3 class="font-semibold text-gray-800 text-lg">夕食</h3>
            <p class="text-gray-700 text-sm leading-5.5 ms-2">宿泊場所で夕食を取ります。</p>
          </div>
          <img
            src="/public/room5.jpeg"
            alt="バーカウンター"
            class="w-full max-w-72 h-36 m-2 object-cover rounded-3xl shadow border-4 border-emerald-600"
          />
        </div>
      </div>
      <div v-else>
        <h2 class="text-2xl font-bold mb-2 text-emerald-800">2日目</h2>

        <div
          class="py-4 sm:flex justify-between border-b-2 border-dotted border-emerald-500/50 mb-4"
        >
          <div>
            <h4 class="text-emerald-800/80 text-2xl">9:00 - 10:00</h4>
            <h3 class="font-semibold text-gray-800 text-lg">朝食</h3>
            <p class="text-gray-700 text-sm leading-5.5 ms-2">宿泊先で朝食をとります。</p>
          </div>
          <img
            src="/public/room5.jpeg"
            alt="踊り子号"
            class="w-full max-w-72 h-36 m-2 object-cover rounded-3xl shadow border-4 border-emerald-600"
          />
        </div>

        <div
          class="py-4 sm:flex justify-between border-b-2 border-dotted border-emerald-500/50 mb-4"
        >
          <div>
            <h4 class="text-emerald-800/80 text-2xl">11:00以降</h4>
            <h3 class="font-semibold text-gray-800 text-lg">自由行動</h3>
            <p class="text-gray-700 text-sm leading-5.5 ms-2">
              グループに分かれて観光や食事など自由行動の予定です。解散も各自で行います。
            </p>
          </div>
          <img
            src="/public/odoriko.jpg"
            alt="踊り子号"
            class="w-full max-w-72 h-36 m-2 object-cover rounded-3xl shadow border-4 border-emerald-600"
          />
        </div>
      </div>
    </div>
  </div>
</template>
