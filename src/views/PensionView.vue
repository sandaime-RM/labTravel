<template>
  <div class="pension-container">
    <div class="pension-header">
      <h1>{{ pensionData.name }}</h1>
      <a
        :href="pensionData.airbnbLink"
        target="_blank"
        rel="noopener noreferrer"
        class="airbnb-link"
      >
        Airbnbで見る
      </a>
    </div>

    <div class="pension-content">
      <!-- 画像ギャラリー -->
      <div class="image-gallery">
        <div class="main-image">
          <img :src="pensionData.images[currentImageIndex]" :alt="pensionData.name" />
        </div>
        <div class="thumbnail-list">
          <div
            v-for="(image, index) in pensionData.images"
            :key="index"
            class="thumbnail"
            :class="{ active: currentImageIndex === index }"
            @click="currentImageIndex = index"
          >
            <img :src="image" :alt="`${pensionData.name} ${index + 1}`" />
          </div>
        </div>
      </div>

      <!-- 基本情報 -->
      <div class="info-section">
        <div class="price-card">
          <h2>料金</h2>
          <div class="price">
            <span class="amount">¥{{ pensionData.pricePerPerson.toLocaleString() }}</span>
            <span class="unit">/ 1人</span>
          </div>
          <div class="price-details">
            <p>{{ pensionData.nights }}泊 × {{ pensionData.guests }}人</p>
            <p class="total-price">合計: ¥{{ totalPrice.toLocaleString() }}</p>
          </div>
        </div>

        <div class="details-card">
          <h2>宿泊詳細</h2>
          <div class="detail-item">
            <span class="icon">📍</span>
            <div>
              <strong>所在地</strong>
              <p>{{ pensionData.location }}</p>
            </div>
          </div>
          <div class="detail-item">
            <span class="icon">🛏️</span>
            <div>
              <strong>定員</strong>
              <p>{{ pensionData.capacity }}人</p>
            </div>
          </div>
          <div class="detail-item">
            <span class="icon">🏠</span>
            <div>
              <strong>部屋タイプ</strong>
              <p>{{ pensionData.roomType }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 設備 -->
      <div class="amenities-section">
        <h2>設備・アメニティ</h2>
        <div class="amenities-grid">
          <div v-for="amenity in pensionData.amenities" :key="amenity.name" class="amenity-item">
            <span class="amenity-icon">{{ amenity.icon }}</span>
            <span class="amenity-name">{{ amenity.name }}</span>
          </div>
        </div>
      </div>

      <!-- 説明 -->
      <div class="description-section">
        <h2>宿泊施設について</h2>
        <p>{{ pensionData.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentImageIndex = ref(0)

// サンプルデータ（実際のデータに置き換えてください）
const pensionData = ref({
  name: '静岡県伊東のまるまる貸切の一軒家',
  airbnbLink: 'https://www.airbnb.jp/rooms/1238834196542853928', // 実際のAirbnbリンクを設定
  location: '静岡県伊東市',
  pricePerPerson: 7176,
  nights: 1,
  guests: 14,
  capacity: 21,
  roomType: '一軒家まるごと',
  description:
    '本館1階には手軽に入れる温泉風呂が2か所。広いデッキガーデンには大人数が入れる、パラソル、ゆったりとしたガーデンソファやBBQセット、焚き火も揃っています。デッキガーデンを奥にあるデッキ階段を上ると、別棟に大温泉があります。天気のいい日中も、夜の時間も伊東の開放的な非日常をお楽しみください。カラオケ、漫画、各種ゲーム類(PS4、麻雀卓、囲碁など)があり、雨天の時でも快適にお過ごし頂けます。',
  images: ['room1.jpeg', 'room2.jpeg', 'room3.jpeg', 'room4.jpeg'],
  amenities: [
    { name: 'WiFi', icon: '📶' },
    { name: 'キッチン', icon: '🍳' },
    { name: '駐車場', icon: '🚗' },
    { name: 'エアコン', icon: '🌡' },
    { name: 'テレビ', icon: '📺' },
    { name: '洗濯機', icon: '🧺' },
    { name: 'バスタブ', icon: '🛁' },
    { name: 'バルコニー', icon: '🌄' },
    { name: 'BBQグリル', icon: '🍖' },
  ],
})

const totalPrice = computed(() => {
  return pensionData.value.pricePerPerson * pensionData.value.guests * pensionData.value.nights
})
</script>

<style scoped>
.pension-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.pension-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e0e0e0;
}

.pension-header h1 {
  font-size: 2rem;
  color: #333;
  margin: 0;
}

.airbnb-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #ff5a5f;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.3s;
  cursor: pointer;
}

.airbnb-link:hover {
  background: #e0484d;
}

.airbnb-icon {
  width: 24px;
  height: 24px;
  fill: white;
}

.pension-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* 画像ギャラリー */
.image-gallery {
  width: 100%;
}

.main-image {
  width: 100%;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumbnail-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
}

.thumbnail {
  height: 100px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 3px solid transparent;
  transition: all 0.3s;
}

.thumbnail:hover {
  transform: scale(1.05);
}

.thumbnail.active {
  border-color: #ff5a5f;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 情報セクション */
.info-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.price-card,
.details-card {
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.price-card h2,
.details-card h2 {
  margin-top: 0;
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.price {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.price .amount {
  font-size: 2.5rem;
  font-weight: bold;
  color: #ff5a5f;
}

.price .unit {
  font-size: 1.2rem;
  color: #666;
}

.price-details {
  border-top: 1px solid #ddd;
  padding-top: 1rem;
}

.price-details p {
  margin: 0.5rem 0;
  color: #666;
}

.total-price {
  font-weight: bold;
  font-size: 1.2rem;
  color: #333 !important;
}

.detail-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.detail-item:last-child {
  margin-bottom: 0;
}

.detail-item .icon {
  font-size: 1.5rem;
}

.detail-item strong {
  display: block;
  color: #333;
  margin-bottom: 0.25rem;
}

.detail-item p {
  margin: 0;
  color: #666;
}

/* 設備 */
.amenities-section {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.amenities-section h2 {
  margin-top: 0;
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.amenities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.amenity-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 2px;
  background: #fff;
  border-radius: 8px;
  transition: transform 0.2s;
}

.amenity-icon {
  font-size: 1.5rem;
}

.amenity-name {
  color: #555;
  font-weight: 500;
}

/* 説明 */
.description-section {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.description-section h2 {
  margin-top: 0;
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.description-section p {
  line-height: 1.8;
  color: #555;
  font-size: 1.1rem;
}

/* レスポンシブ */
@media (max-width: 768px) {
  .pension-container {
    padding: 1rem;
  }

  .pension-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .pension-header h1 {
    font-size: 1.5rem;
  }

  .main-image {
    height: 300px;
  }

  .info-section {
    grid-template-columns: 1fr;
  }

  .amenities-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
}
</style>
