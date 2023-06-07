'use strict';

/*
//? HTML DE CLASSI BU KOMUT İLE SEÇERİZ
console.log(document.querySelector('.message').textContent);  //! BU KOMUT html de ki message classının içindeki mesajı konsola yazdırır
                                                             //! Text content Komudu ise classı komut ile çıkarmaz sadece mesajı çıkarır


//? BURADA İSE SEÇTİĞİMİZ CLASSI DEĞİŞTİRİRİZ
document.querySelector('.message').textContent ='Tebrikler Doğru Sayıyı Buldunuz';       //! Bu komut .message classındaki yazıyı Tebrikler Doğru Sayıyı Buldunuz olarak değiştirir
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 40;

//? BURADA İSE SEÇTİĞİMİZ CLASSI OKUTURUZ VERİYİ OKUR
document.querySelector('.guess').value = 23;            //! Bu komut input kutusuna 23 sayısını yazdırır
console.log(document.querySelector('.guess').value);         //! bu komut ise konsola inputtaki sayıyı yazdırır
 
*/

//? Burada ise tıklama olaylarını yönetiriz (Yani buttona tıklayınca olucakları)
const secretNumber =Math.trunc(Math.random() * 20); //! Bu komut 0 ila 200 arası random sayı verir    
let score = 100;
let highscore = 0 ;


document.querySelector('.check').addEventListener('click', function(){      //! bu komut butona tıklayınca girdiğimiz sayıyı konsola kaydeder                     
    const guess = Number (document.querySelector('.guess').value);                         //! Bu komut ise yukarıdaki komutla aynıdır ama konsol yerine değişkene kaydeder   ve  strign değerini number olarak değiştirdikl
    console.log(guess, typeof guess);
    
    //İnputta bir sayı olmayınca
    if(!guess) {                                                     //! Bu komut ise inputa bir değer girmeyince çıkıcak olan mesaj
        document.querySelector('.message').textContent ='🛑 Lütfen Bir Sayı Giriniz... 🛑';  
    } 

    //OYUNCU KAZANDIĞINDA ÇALIŞAN KOMUT
    else if (guess === secretNumber) {                            //! Tahmin  ettiğimiz sayı ile gizli sayı doğru çıkarsa çalışacakss olan komut
        document.querySelector('.message').textContent ='🎉🎉 Tebrikler Doğru Sayıyı Buldunuz 🎉🎉'; 
        score = score + 20;                                         //! Burada ise her girdiğimiz yanlış tahminde 20 puan artacak
        document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor="rgb(96, 179, 71)";         //! Bu komut ise doğru tahminde bulununca arka planı yeşil yapar
        document.querySelector('.number').style.width='55rem';                           //! Bu komut ise doğru tahminde bulununca number kutusunu genişletir
        document.querySelector('.number').style.height='30rem';                          //! Bu komut ise doğru tahminde bulununca number kutusunu yükseltir
        document.querySelector('.h1').style.top='35%';  //! Bu komut ise doğru tahminde bulununca h1 etiketini yukarıya taşır
        document.querySelector('.number').textContent='Tebrikler Doğru Sayıyı Buldunuz' ; //! Bu komut ise doğru tahminde bulununca number kutusunu Bu mesajı yazar
        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;           //! score yüksek skora eşite yüksek skora yazars
        }
    } 
    
    //OYUNCUNUN GİRDİĞİ SAYI GİZLİ SAYIDAN BÜYÜK İSE ÇALIŞACAK KOMUT
    else if (guess > secretNumber) {                              //! Tahmin ettiğimiz sayı Gizli sayıdan Büyük ise çalışacak komut 
        document.querySelector('.message').textContent ='📈 Çok YÜKSEK !';
        score = score - 10;                                         //! Burada ise her girdiğimiz yanlış tahminde 10 puan silenecek
        document.querySelector('.score').textContent = score;
    } 

    //OYUNCUNUN GİRDİĞİ SAYI GİZLİ SAYIDAN KÜÇÜK İSE ÇALIŞACAK KOMUT
    else if (guess < secretNumber) {                              //! Tahmin ettiğimiz sayı Gizli sayıdan Küçük İse Çalışcak komut
        document.querySelector('.message').textContent ='📉 Çok DÜŞÜK !';
        score = score - 10;                                         //! Burada ise her girdiğimiz yanlış tahminde 10 puan silenecek
        document.querySelector('.score').textContent = score;       //! Burada score classını güncellenen score ile değişecek yani yanlış bildiğimizde çıkartılmış sayı ile gözükecek
    }
});

document.querySelector('.again').addEventListener('click', function(){     //! tekrar deneyin tuşuna basınca eski haline dönmesi için
    document.querySelector('body').style.backgroundColor="#222";
    document.querySelector('.number').style.width='19rem';
    document.querySelector('.number').style.height='12rem'; 
    document.querySelector('.message').textContent = 'Tahmin etmeye Başlayınız';
    document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
})

