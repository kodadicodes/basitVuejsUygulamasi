// Vue.js uygulamasını oluşturuyoruz
const app = Vue.createApp({
    // Uygulamanın görünümünü belirleyen şablon
    template: `
    <h2>Başlık: {{baslik}}</h2>
    <h3>İçerik: {{icerik}}</h3>
    <p>Yorum sayısı: {{yorumSayisi}}</p>
    <button v-on:click="ekle()">Ekle</button>
    <span>{{yazi}}</span>
    `,
    // Uygulamanın verilerini tanımlıyoruz
    data() {
        return {
            baslik: "Vue.js", // Başlık olarak "Vue.js" kullanılıyor
            icerik: "Vue 3", // İçerik olarak "Vue 3" kullanılıyor
            yorumSayisi: 0, // Yorum sayısı başlangıçta 0
            yazi: "Yorum eklemek için tıklayın" // Başlangıçta görünen metin
        }
    },
    // Uygulamanın metotlarını tanımlıyoruz
    methods:{
        ekle(){
            this.yorumSayisi++; // Yorum sayısını bir artırıyoruz
            this.yazi= `${this.yorumSayisi} tane yorum var` // Yorum sayısını metne ekliyoruz
        }
    },
});

// Oluşturulan Vue.js uygulamasını, 'id' özelliği "app" olan bir HTML elementine monte ediyoruz
app.mount("#app");

/*
Vue.createApp({...}): Bu işlev, Vue.js uygulamasını başlatır. İçerisine bir nesne alır ve bu nesne Vue uygulamasının konfigürasyonunu içerir. Bu örnekte, nesne bir template, data ve methods özelliği içerir.

template: Bu özellik, uygulamanın nasıl görüneceğini belirler. Bu durumda, uygulama bir başlık, içerik, yorum sayısı, bir buton ve bir metin içerir. {{...}} ifadeleri, data nesnesinin özelliklerinin değerlerini gösterir. v-on:click="ekle()" ifadesi, butona tıklandığında ekle metodunun çağrılmasını sağlar.

data: Bu özellik, uygulamanın durumunu (state) yönetmek için kullanılır. data bir fonksiyon olmalı ve bir nesne döndürmelidir. Bu nesne, uygulamanın durumunu temsil eder ve Vue.js tarafından izlenir. Bu nesnenin özellikleri, Vue.js uygulamasının şablonunda ve diğer yerlerinde kullanılabilir.

methods: Bu özellik, uygulamanın metotlarını tanımlar. Metotlar, kullanıcıların uygulamayla etkileşim kurabilmesi için kullanılır. Bu örnekte, ekle adında bir metot tanımlanmıştır. Bu metot, yorum sayısını bir artırır ve metni günceller.

app.mount("#app"): Bu işlev, oluşturulan Vue.js uygulamasını belirli bir HTML elementine monte eder. Bu örnekte, uygulama id özelliği “app” olan bir HTML elementine monte edilir.
*/