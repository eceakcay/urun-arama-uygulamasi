let urun1= {
    isim:"ACER Nitro5 ",
    kategori:"teknoloji",
    fiyat:23.499 
}
let urun2= {
    isim:"ACER Aspire3 ",
    kategori:"teknoloji",
    fiyat:12.950
}
let urun3= {
    isim:"ACER Nitro V 15 ",
    kategori:"teknoloji",
    fiyat:27.999 
}
let urun4= {
    isim:"LENOVO IdeaPad",
    kategori:"teknoloji",
    fiyat:14.298 
}
let urun5= {
    isim:" LENOVO IP Gaming 3",
    kategori:"teknoloji",
    fiyat:23.999
}
let urun6= {
    isim:" Apple Macbook Air M1",
    kategori:"teknoloji",
    fiyat:30.799
}

let urunler = [urun1,urun2,urun3,urun4,urun5,urun6];
let icerenUrunler =[];
let kullanıcıUrunIsmi= prompt("bir ürün ismi giriniz: ");

    // toUpperCase-->büyük harfe çevrilmek için kullanılır
    // includes-->bir değer giriliyo ve aramaya başlıyo sonucu
    // boolean veriyor

    icerenUrunleriDoldur(urunler);
    icerenUrunleriYazdir(icerenUrunler);


function icerenUrunleriDoldur(urunler){
    urunler.forEach(function(urun){
        if (urun.isim.toUpperCase().includes(kullanıcıUrunIsmi.toUpperCase(), 0)) {
            icerenUrunler.push(urun);
        }
    });
}

function icerenUrunleriYazdir(urunler){
    urunler.forEach(function(urun){
        console.log("-----------------------------------------------");
        console.log("|" + urun.isim + "|" + urun.fiyat + "|" + urun.kategori);
        console.log("----------------------------------------------");
    });
}

