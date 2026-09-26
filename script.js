/* =====================================
   ELEMENT
===================================== */

const envelope =
    document.getElementById("envelope");

const openBtn =
    document.getElementById("openBtn");

const opening =
    document.getElementById("opening");

const music =
    document.getElementById("music");

const musicBtn =
    document.getElementById("musicBtn");

const typingText =
    document.getElementById("typingText");

const cursor =
    document.getElementById("cursor");

const signature =
    document.getElementById("signature");

const heartsContainer =
    document.querySelector(".hearts");



/* =====================================
   STATUS
===================================== */

let musicPlaying = false;

let cardOpened = false;

let typingStarted = false;



/* =====================================
   ISI SURAT
===================================== */

const letterText = `Happy 22nd Birthday, Elis! 💗

Hari ini adalah hari spesial untuk seseorang
yang sangat berharga.

Di umurmu yang ke-22 ini, aku berharap
semoga semua hal baik selalu datang
ke dalam hidupmu.

Semoga kamu selalu diberikan kesehatan,
kebahagiaan, dan kekuatan untuk melewati
setiap perjalanan yang ada di depan.

Semoga semua impian yang sedang kamu kejar
pelan-pelan bisa menjadi kenyataan.

Dan kalau suatu hari semuanya terasa berat,
semoga kamu selalu ingat bahwa kamu sudah
berhasil melewati banyak hal sampai sejauh ini.

Jadi jangan terlalu keras kepada dirimu sendiri.

Nikmati setiap prosesnya.

Nikmati setiap cerita.

Nikmati setiap momen kecil yang mungkin
suatu hari nanti akan menjadi kenangan indah.

More happiness.
More beautiful memories.
More reasons to smile.

And most importantly...

I hope you always stay as wonderful
as the person you are today.

Happy Birthday, Elis. 🌷

Semoga tahun ini menjadi salah satu
bab paling indah dalam hidupmu.`;


/* =====================================
   OPEN CARD
===================================== */

function openCard() {

    /*
       Jangan jalankan dua kali
    */

    if (cardOpened) {

        return;

    }


    cardOpened = true;


    /*
       Buka amplop
    */

    envelope.classList.add("opened");


    /*
       Putar musik
    */

    music.play()
        .then(function () {

            musicPlaying = true;

            musicBtn.textContent = "🔊";

        })
        .catch(function () {

            musicBtn.textContent = "🎵";

        });


    /*
       Setelah surat keluar,
       hilangkan halaman pembuka.
    */

    setTimeout(function () {

        opening.classList.add("hide");

    }, 2300);


    /*
       Mulai mengetik setelah
       kartu muncul.
    */

    setTimeout(function () {

        startTyping();

    }, 3200);

}



/* =====================================
   BUTTON OPEN
===================================== */

openBtn.addEventListener(
    "click",
    openCard
);



/* =====================================
   CLICK ENVELOPE
===================================== */

envelope.addEventListener(
    "click",
    openCard
);



/* =====================================
   TYPING EFFECT
===================================== */

let typingIndex = 0;


/*
   Kecepatan mengetik.

   25 = cepat
   35 = normal
   50 = lambat
*/

const typingSpeed = 35;



function startTyping() {

    /*
       Jangan mulai dua kali
    */

    if (typingStarted) {

        return;

    }


    typingStarted = true;


    typingIndex = 0;


    typingText.textContent = "";


    cursor.style.display =
        "inline-block";


    typeNextCharacter();

}



/* =====================================
   TYPE CHARACTER
===================================== */

function typeNextCharacter() {

    /*
       Masih ada huruf?
    */

    if (
        typingIndex <
        letterText.length
    ) {


        /*
           Tambahkan satu karakter
        */

        typingText.textContent +=
            letterText.charAt(
                typingIndex
            );


        typingIndex++;


        /*
           Ketik karakter berikutnya
        */

        setTimeout(
            typeNextCharacter,
            typingSpeed
        );


    } else {


        /*
           Surat selesai
        */

        cursor.style.display =
            "none";


        /*
           Tampilkan tanda tangan
        */

        setTimeout(
            function () {

                signature.classList.add(
                    "show"
                );

            },
            600
        );

    }

}



/* =====================================
   MUSIC BUTTON
===================================== */

musicBtn.addEventListener(
    "click",
    function () {

        /*
           Kalau sedang bermain,
           pause.
        */

        if (musicPlaying) {

            music.pause();

            musicPlaying = false;

            musicBtn.textContent =
                "🎵";


        } else {


            /*
               Kalau pause,
               play lagi.
            */

            music.play()
                .then(function () {

                    musicPlaying =
                        true;

                    musicBtn.textContent =
                        "🔊";

                })
                .catch(function () {

                    console.log(
                        "Musik tidak dapat diputar."
                    );

                });

        }

    }
);



/* =====================================
   FLOATING HEARTS
===================================== */

function createHeart() {

    const heart =
        document.createElement(
            "div"
        );


    heart.classList.add(
        "heart"
    );


    const heartTypes = [
        "♡",
        "♥",
        "❤",
        "💕",
        "💗"
    ];


    const randomHeart =
        heartTypes[
            Math.floor(
                Math.random() *
                heartTypes.length
            )
        ];


    heart.textContent =
        randomHeart;


    /*
       Posisi horizontal random
    */

    heart.style.left =
        Math.random() * 100 + "%";


    /*
       Ukuran random
    */

    heart.style.fontSize =
        12 +
        Math.random() * 22 +
        "px";


    /*
       Kecepatan random
    */

    heart.style.animationDuration =
        5 +
        Math.random() * 7 +
        "s";


    heartsContainer.appendChild(
        heart
    );


    /*
       Hapus setelah selesai
    */

    setTimeout(
        function () {

            heart.remove();

        },
        12000
    );

}



/* Buat hati setiap 700ms */

setInterval(
    createHeart,
    700
);