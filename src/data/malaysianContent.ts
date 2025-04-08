export const umrahStepByStepMS = [
  {
    id: 101,
    title: "Pengenalan kepada Umrah",
    description: "",
    details: "(1) Rukun Umrah adalah Niat, Tawaf, Sa'i dan Tahalul.\n(2) Umrah menghapuskan dosa yang dilakukan antara Umrah tersebut dengan Umrah sebelumnya.",
    ritualSections: [
      {
        id: "101-movement",
        title: "Pergerakan Fizikal",
        type: "movement",
        content: [
          {
            id: "101-m-1",
            text: "Bersenamlah setiap hari kerana sepanjang ibadat Umrah kita perlu berjalan kaki sekurang-kurangnya sejauh 4 km.",
            exceptions: []
          }
        ]
      },
      {
        id: "101-recital",
        title: "Bacaan",
        type: "recital",
        content: [
          {
            id: "101-r-1",
            text: "Membaca doa niat untuk melakukan Umrah: 'Labbayk Allahumma Umrah'",
            exceptions: []
          }
        ]
      },
      {
        id: "101-mind",
        title: "Fikiran & Niat",
        type: "mind",
        content: [
          {
            id: "101-mind-1",
            text: "Memahami bahawa Umrah adalah ibadah yang membersihkan dosa",
            exceptions: []
          },
          {
            id: "101-mind-2",
            text: "Berniat untuk melakukan Umrah semata-mata kerana Allah",
            exceptions: []
          },
          {
            id: "101-mind-3",
            text: "Bersiap sedia secara rohani untuk pengalaman yang mengubah hidup",
            exceptions: []
          }
        ]
      },
      {
        id: "101-adab",
        title: "Adab & Peraturan",
        type: "adab",
        content: [
          {
            id: "101-adab-1",
            text: "Mempelajari tentang sejarah dan signifikan Umrah sebelum berangkat",
            exceptions: [
              {
                type: "nas",
                description: "Rujuk buku-buku berkaitan Manasik Umrah yang diluluskan oleh pihak berkuasa agama"
              }
            ]
          },
          {
            id: "101-adab-2",
            text: "Menyelesaikan semua hutang dan tanggungjawab sebelum berangkat",
            exceptions: [
              {
                type: "jahil",
                description: "Jika tidak mengetahui tentang kepentingan menyelesaikan hutang, sila dapatkan nasihat daripada ulama"
              }
            ]
          }
        ]
      }
    ],
    officialResourceLink: "https://www.tabunghaji.gov.my/sites/default/kah/NOTA%20KAH%201446H%20_%20M10%20(1)_0.pdf"
  },
  {
    id: 102,
    title: "Miqat, Niat dan Ihram",
    description: "Ritual pertama Umrah - penyucian dan niat",
    details: "Ihram adalah keadaan suci yang mesti dimasuki seorang Muslim sebelum melakukan Umrah atau Haji. Sebelum memasuki keadaan Ihram, lelaki harus memotong kuku, menghilangkan bulu yang tidak diingini, melakukan ghusl (penyucian ritual seluruh badan), memakai wangian (sebelum Ihram sahaja), dan memakai dua helai kain tidak berjahit berwarna putih - satu dibalut di pinggang (izar) dan satu lagi disampirkan di bahu (rida). Wanita boleh memakai pakaian sederhana, lebih baik berwarna putih, bersih yang menutupi seluruh badan kecuali muka dan tangan, mengelakkan sebarang perhiasan. Di Miqat (titik sempadan yang ditetapkan), jemaah membuat niat (niyyah) untuk Umrah dan membaca Talbiyah.",
    ritualSections: [
      {
        id: "102-movement",
        title: "Pergerakan Fizikal",
        type: "movement",
        content: [
          {
            id: "102-m-1",
            text: "Lelaki: Memakai dua helai kain putih tidak berjahit",
            exceptions: [
              {
                type: "female",
                description: "Wanita: Memakai pakaian sederhana yang menutupi seluruh badan kecuali muka dan tangan"
              },
              {
                type: "handicapped",
                description: "Orang kurang upaya boleh memakai pakaian yang sesuai dengan keperluan mereka"
              }
            ]
          },
          {
            id: "102-m-2",
            text: "Mandi (ghusl) sebelum memakai pakaian ihram",
            exceptions: [
              {
                type: "sick",
                description: "Jika sakit, boleh hanya berwudhu atau tayammum"
              },
              {
                type: "daimulhadas",
                description: "Mereka yang mempunyai Daim al-Hadas boleh melakukan wudhu/ghusl dan terus memakai ihram"
              }
            ]
          }
        ]
      },
      {
        id: "102-recital",
        title: "Bacaan",
        type: "recital",
        content: [
          {
            id: "102-r-1",
            text: "Membaca niat: 'Labbayk Allahumma Umrah'",
            exceptions: []
          },
          {
            id: "102-r-2",
            text: "Membaca Talbiyah: 'Labbayk Allahumma labbayk, labbayk la sharika laka labbayk, innal-hamda wan-ni'mata laka wal-mulk, la sharika lak'",
            exceptions: [
              {
                type: "video",
                description: "Tonton video tentang cara mengucapkan Talbiyah dengan betul"
              }
            ]
          }
        ]
      },
      {
        id: "102-mind",
        title: "Fikiran & Niat",
        type: "mind",
        content: [
          {
            id: "102-mind-1",
            text: "Berniat dengan tulus untuk memasuki keadaan ihram semata-mata kerana Allah",
            exceptions: []
          },
          {
            id: "102-mind-2",
            text: "Bertekad untuk mematuhi larangan-larangan ihram",
            exceptions: []
          }
        ]
      },
      {
        id: "102-adab",
        title: "Adab & Peraturan",
        type: "adab",
        content: [
          {
            id: "102-adab-1",
            text: "Tidak memakai pakaian berjahit (untuk lelaki)",
            exceptions: [
              {
                type: "female",
                description: "Wanita boleh memakai pakaian biasa tetapi tidak boleh menutup muka"
              }
            ]
          },
          {
            id: "102-adab-2",
            text: "Tidak memakai wangian setelah memasuki ihram",
            exceptions: [
              {
                type: "taksengaja",
                description: "Jika tidak sengaja terkena wangian, bersihkan dengan segera"
              }
            ]
          },
          {
            id: "102-adab-3",
            text: "Tidak memotong kuku atau menghilangkan rambut",
            exceptions: []
          },
          {
            id: "102-adab-4",
            text: "Tidak menutup kepala (untuk lelaki)",
            exceptions: [
              {
                type: "female",
                description: "Wanita tidak boleh menutup muka tetapi harus menutup kepala"
              }
            ]
          }
        ]
      }
    ],
    officialResourceLink: "https://www.tabunghaji.gov.my/sites/default/kah/NOTA%20KAH%201446H%20_%20M10%20(1)_0.pdf"
  },
  {
    id: 104,
    title: "Tawaf Umrah",
    description: "Mengelilingi Kaabah tujuh kali",
    details: "Tawaf Umrah merupakan salah satu rukun utama dalam ibadah Umrah yang melibatkan mengelilingi Kaabah sebanyak tujuh kali.",
    tabSections: [
      {
        id: "before",
        title: "Sebelum",
        details: "Persiapan sebelum melakukan Tawaf Umrah adalah sangat penting untuk memastikan ibadah dilakukan dengan sempurna.",
        ritualSections: [
          {
            id: "104-before-movement",
            title: "Pergerakan Fizikal",
            type: "movement",
            content: [
              {
                id: "104-before-m-1",
                text: "Lelaki: Melakukan idhtiba (mendedahkan bahu kanan)",
                exceptions: [
                  {
                    type: "female",
                    description: "Wanita tidak perlu melakukan idhtiba"
                  }
                ]
              },
              {
                id: "104-before-m-2",
                text: "Berwudhu sebelum memulakan tawaf",
                exceptions: [
                  {
                    type: "daimulhadas",
                    description: "Mereka yang mempunyai Daim al-Hadas hendaklah berwudhu sebelum tawaf"
                  }
                ]
              }
            ]
          },
          {
            id: "104-before-mind",
            title: "Fikiran & Niat",
            type: "mind",
            content: [
              {
                id: "104-before-mind-1",
                text: "Berniat untuk melakukan tawaf Umrah",
                exceptions: []
              },
              {
                id: "104-before-mind-2",
                text: "Menumpukan perhatian kepada ibadah dan menjauhkan diri dari urusan duniawi",
                exceptions: []
              }
            ]
          }
        ]
      },
      {
        id: "during",
        title: "Cara Tawaf",
        details: "Tawaf dilakukan dengan mengelilingi Kaabah sebanyak tujuh pusingan dalam arah berlawanan jam, bermula dan berakhir di Hajar al-Aswad (Batu Hitam).",
        ritualSections: [
          {
            id: "104-during-movement",
            title: "Pergerakan Fizikal",
            type: "movement",
            content: [
              {
                id: "104-during-m-1",
                text: "Memulakan dari titik Hajar al-Aswad dengan menghadap Kaabah",
                exceptions: []
              },
              {
                id: "104-during-m-2",
                text: "Melakukan istilam (menyentuh atau mengisyaratkan) ke arah Hajar al-Aswad",
                exceptions: [
                  {
                    type: "info",
                    description: "Jika terlalu ramai, cukup dengan mengisyaratkan tangan ke arah Hajar al-Aswad dan mencium tangan"
                  }
                ]
              },
              {
                id: "104-during-m-3",
                text: "Mengelilingi Kaabah tujuh kali dalam arah berlawanan jam",
                exceptions: []
              },
              {
                id: "104-during-m-4",
                text: "Lelaki: Melakukan ramal (berjalan pantas) pada tiga pusingan pertama",
                exceptions: [
                  {
                    type: "female",
                    description: "Wanita berjalan seperti biasa"
                  },
                  {
                    type: "handicapped",
                    description: "Orang kurang upaya boleh berjalan mengikut kemampuan"
                  }
                ]
              }
            ]
          },
          {
            id: "104-during-recital",
            title: "Bacaan",
            type: "recital",
            content: [
              {
                id: "104-during-r-1",
                text: "Mengucapkan 'Bismillahi Allahu Akbar' setiap kali melewati Hajar al-Aswad",
                exceptions: []
              },
              {
                id: "104-during-r-2",
                text: "Membaca doa bebas sepanjang tawaf, terutama di antara Rukun Yamani dan Hajar al-Aswad",
                exceptions: []
              },
              {
                id: "104-during-r-3",
                text: "Membaca 'Rabbana atina fid-dunya hasanatan wa fil akhirati hasanatan wa qina 'adhaban-nar' di antara Rukun Yamani dan Hajar al-Aswad",
                exceptions: []
              }
            ]
          }
        ]
      },
      {
        id: "after",
        title: "Selepas",
        details: "Selepas menyelesaikan tujuh pusingan tawaf, terdapat beberapa amalan penting yang perlu dilakukan.",
        ritualSections: [
          {
            id: "104-after-checklist",
            title: "Muhasabah Checklist",
            type: "adab",
            content: [
              {
                id: "104-after-c-1",
                text: "Memastikan telah melengkapkan tujuh pusingan dengan sempurna",
                exceptions: []
              },
              {
                id: "104-after-c-2",
                text: "Memeriksa keadaan pakaian ihram masih dalam keadaan baik",
                exceptions: []
              }
            ]
          },
          {
            id: "104-after-movement",
            title: "Solat Di Belakang Maqam Ibrahim",
            type: "movement",
            content: [
              {
                id: "104-after-m-1",
                text: "Menuju ke Maqam Ibrahim selepas menyelesaikan tawaf",
                exceptions: []
              },
              {
                id: "104-after-m-2",
                text: "Melakukan solat dua rakaat di belakang Maqam Ibrahim",
                exceptions: [
                  {
                    type: "info",
                    description: "Jika tempat terlalu sesak, boleh solat di mana-mana tempat dalam Masjidil Haram"
                  }
                ]
              },
              {
                id: "104-after-m-3",
                text: "Membaca surah Al-Kafirun pada rakaat pertama dan surah Al-Ikhlas pada rakaat kedua",
                exceptions: []
              }
            ]
          },
          {
            id: "104-after-zamzam",
            title: "Minum Air Zamzam",
            type: "movement",
            content: [
              {
                id: "104-after-z-1",
                text: "Pergi ke telaga Zamzam selepas solat",
                exceptions: []
              },
              {
                id: "104-after-z-2",
                text: "Minum air Zamzam sambil berdiri menghadap kiblat",
                exceptions: []
              },
              {
                id: "104-after-z-3",
                text: "Membaca doa sebelum minum: 'Allahumma inni as'aluka 'ilman nafi'an, wa rizqan wasi'an, wa shifa'an min kulli da'",
                exceptions: []
              },
              {
                id: "104-after-z-4",
                text: "Minum air Zamzam dengan tiga nafas",
                exceptions: []
              }
            ]
          }
        ]
      }
    ],
    officialResourceLink: "https://www.tabunghaji.gov.my/sites/default/kah/NOTA%20KAH%201446H%20_%20M10%20(1)_0.pdf"
  },
  {
    id: 105,
    title: "Melakukan Sa'i",
    description: "Berjalan antara bukit Safa dan Marwah",
    details: "Sa'i adalah ritual dalam Umrah yang melibatkan berjalan atau berlari kecil antara bukit Safa dan Marwah sebanyak tujuh kali. Ritual ini mengenang perjuangan Siti Hajar yang mencari air untuk anaknya, Ismail. Sa'i dimulakan di bukit Safa dan berakhir di bukit Marwah. Perjalanan dari Safa ke Marwah dikira sebagai satu pusingan, dan dari Marwah ke Safa sebagai pusingan kedua.",
    ritualSections: [
      {
        id: "105-movement",
        title: "Pergerakan Fizikal",
        type: "movement",
        content: [
          {
            id: "105-m-1",
            text: "Memulakan Sa'i dari bukit Safa",
            exceptions: []
          },
          {
            id: "105-m-2",
            text: "Menghadap Ka'bah ketika berada di Safa dan Marwah",
            exceptions: []
          },
          {
            id: "105-m-3",
            text: "Berjalan dari Safa ke Marwah (satu pusingan) dan sebaliknya hingga genap tujuh pusingan",
            exceptions: []
          },
          {
            id: "105-m-4",
            text: "Lelaki: Berlari kecil di kawasan antara dua tiang hijau",
            exceptions: [
              {
                type: "female",
                description: "Wanita berjalan seperti biasa tanpa berlari"
              },
              {
                type: "handicapped",
                description: "Orang kurang upaya boleh menggunakan kerusi roda atau bantuan lain"
              }
            ]
          }
        ]
      },
      {
        id: "105-recital",
        title: "Bacaan",
        type: "recital",
        content: [
          {
            id: "105-r-1",
            text: "Membaca ayat: 'Innas-safa wal marwata min sha'a'irillah...' (Surah Al-Baqarah: 158) ketika mendekati Safa",
            exceptions: []
          },
          {
            id: "105-r-2",
            text: "Membaca takbir dan doa ketika di Safa dan Marwah: 'Allahu Akbar, Allahu Akbar, Allahu Akbar. La ilaha illallahu wahdahu la sharika lah, lahul mulku wa lahul hamdu, yuhyi wa yumit, wa huwa 'ala kulli shay'in qadir'",
            exceptions: []
          },
          {
            id: "105-r-3",
            text: "Berdoa semasa berjalan di antara Safa dan Marwah",
            exceptions: []
          }
        ]
      },
      {
        id: "105-mind",
        title: "Fikiran & Niat",
        type: "mind",
        content: [
          {
            id: "105-mind-1",
            text: "Mengenang pengorbanan Siti Hajar yang berlari mencari air untuk anaknya",
            exceptions: []
          },
          {
            id: "105-mind-2",
            text: "Merenungi konsep usaha dan tawakal dalam Islam",
            exceptions: []
          },
          {
            id: "105-mind-3",
            text: "Berdoa dengan khusyuk sepanjang perjalanan Sa'i",
            exceptions: []
          }
        ]
      },
      {
        id: "105-adab",
        title: "Adab & Peraturan",
        type: "adab",
        content: [
          {
            id: "105-adab-1",
            text: "Menjaga adab dan tingkah laku sepanjang melakukan Sa'i",
            exceptions: []
          },
          {
            id: "105-adab-2",
            text: "Mengelakkan perbualan yang tidak perlu semasa Sa'i",
            exceptions: []
          },
          {
            id: "105-adab-3",
            text: "Tetap dalam keadaan berwudhu (disunatkan, bukan wajib)",
            exceptions: [
              {
                type: "info",
                description: "Wudhu tidak diwajibkan untuk Sa'i, tetapi digalakkan"
              }
            ]
          }
        ]
      }
    ],
    officialResourceLink: "https://www.tabunghaji.gov.my/sites/default/kah/NOTA%20KAH%201446H%20_%20M10%20(1)_0.pdf"
  },
  {
    id: 106,
    title: "Mencukur atau Memotong Rambut",
    description: "Penyelesaian ritual Umrah dengan Tahallul",
    details: "Mencukur (halq) atau memendekkan (taqsir) rambut adalah ritual terakhir dalam Umrah. Ia menandakan tamatnya keadaan ihram dan kembali ke keadaan biasa (tahallul). Lelaki boleh memilih antara mencukur kepala sepenuhnya (afdal) atau memendekkan rambut, manakala wanita hanya perlu memotong sedikit dari hujung rambut.",
    ritualSections: [
      {
        id: "106-movement",
        title: "Pergerakan Fizikal",
        type: "movement",
        content: [
          {
            id: "106-m-1",
            text: "Lelaki: Mencukur habis seluruh kepala (afdal) atau memendekkan semua rambut",
            exceptions: [
              {
                type: "female",
                description: "Wanita: Memotong sedikit rambut (sekurang-kurangnya 1 cm) dari hujung rambut"
              }
            ]
          },
          {
            id: "106-m-2",
            text: "Memulakan dari sebelah kanan kepala",
            exceptions: []
          }
        ]
      },
      {
        id: "106-recital",
        title: "Bacaan",
        type: "recital",
        content: [
          {
            id: "106-r-1",
            text: "Membaca doa selepas mencukur/memotong rambut: 'Alhamdulillahi 'ala ma hadana'",
            exceptions: []
          }
        ]
      },
      {
        id: "106-mind",
        title: "Fikiran & Niat",
        type: "mind",
        content: [
          {
            id: "106-mind-1",
            text: "Menyedari bahawa ritual Umrah telah selesai",
            exceptions: []
          },
          {
            id: "106-mind-2",
            text: "Berniat untuk keluar dari keadaan ihram (tahallul)",
            exceptions: []
          },
          {
            id: "106-mind-3",
            text: "Bersyukur kepada Allah atas kesempatan dan kemampuan menyelesaikan Umrah",
            exceptions: []
          }
        ]
      },
      {
        id: "106-adab",
        title: "Adab & Peraturan",
        type: "adab",
        content: [
          {
            id: "106-adab-1",
            text: "Memastikan rambut dipotong/dicukur setelah Sa'i selesai",
            exceptions: []
          },
          {
            id: "106-adab-2",
            text: "Tidak memotong kuku sebelum memotong/mencukur rambut",
            exceptions: []
          },
          {
            id: "106-adab-3",
            text: "Selepas tahallul, semua larangan ihram tidak lagi berlaku",
            exceptions: []
          }
        ]
      }
    ],
    officialResourceLink: "https://www.tabunghaji.gov.my/sites/default/kah/NOTA%20KAH%201446H%20_%20M10%20(1)_0.pdf"
  }
];

export const umrahStepByStepEN = [
  {
    id: 101,
    title: "Introduction to Umrah",
    description: "Understanding the essence and significance of Umrah",
    details: "Umrah is often referred to as the 'minor pilgrimage' or 'lesser pilgrimage' in contrast to Hajj, the 'major pilgrimage'. Unlike Hajj, which has specific dates according to the Islamic lunar calendar, Umrah can be performed at any time during the year. The word 'Umrah' in Arabic means 'to visit a populated place.' It consists of four essential rituals: Ihram, Tawaf, Sa'i, and Halq or Taqsir. The reward for performing Umrah is expiation of sins committed between it and the previous Umrah.",
    ritualSections: [
      {
        id: "101-movement",
        title: "Physical Movements",
        type: "movement",
        content: [
          {
            id: "101-m-1",
            text: "No specific physical movements in the introduction, but mental and physical preparation is required before starting the journey",
            exceptions: []
          }
        ]
      },
      {
        id: "101-recital",
        title: "Recitations",
        type: "recital",
        content: [
          {
            id: "101-r-1",
            text: "Reciting the intention prayer for Umrah: 'Labbayk Allahumma Umrah'",
            exceptions: []
          }
        ]
      },
      {
        id: "101-mind",
        title: "Mind & Intentions",
        type: "mind",
        content: [
          {
            id: "101-mind-1",
            text: "Understanding that Umrah is an act of worship that cleanses sins",
            exceptions: []
          },
          {
            id: "101-mind-2",
            text: "Intending to perform Umrah solely for the sake of Allah",
            exceptions: []
          },
          {
            id: "101-mind-3",
            text: "Preparing spiritually for a life-changing experience",
            exceptions: []
          }
        ]
      },
      {
        id: "101-adab",
        title: "Etiquette & Rules",
        type: "adab",
        content: [
          {
            id: "101-adab-1",
            text: "Learning about the history and significance of Umrah before departure",
            exceptions: [
              {
                type: "nas",
                description: "Refer to books on Umrah rituals approved by religious authorities"
              }
            ]
          },
          {
            id: "101-adab-2",
            text: "Settling all debts and responsibilities before departure",
            exceptions: [
              {
                type: "jahil",
                description: "If unaware of the importance of settling debts, please seek advice from scholars"
              }
            ]
          }
        ]
      }
    ],
    officialResourceLink: "https://www.tabunghaji.gov.my/sites/default/kah/NOTA%20KAH%201446H%20_%20M10%20(1)_0.pdf"
  },
  {
    id: 102,
    title: "Entering Ihram State",
    description: "The first ritual of Umrah - purification and intention",
    details: "Ihram is the sacred state a Muslim must enter before performing Umrah or Hajj. Before entering the state of Ihram, men should trim their nails, remove unwanted hair, perform ghusl (full body ritual purification), apply perfume (before Ihram only), and wear two pieces of unstitched white cloth - one wrapped around the waist (izar) and the other draped over the shoulders (rida). Women can wear any modest, preferably white, clean clothes that cover the entire body except the face and hands, avoiding any display of adornment. At the Miqat (designated boundary points), the pilgrim makes the intention (niyyah) for Umrah and recites the Talbiyah.",
    ritualSections: [
      {
        id: "102-movement",
        title: "Physical Movements",
        type: "movement",
        content: [
          {
            id: "102-m-1",
            text: "Men: Wearing two pieces of unstitched white cloth",
            exceptions: [
              {
                type: "female",
                description: "Women: Wearing modest clothing that covers the entire body except face and hands"
              },
              {
                type: "handicapped",
                description: "People with disabilities may wear clothing suitable to their needs"
              }
            ]
          },
          {
            id: "102-m-2",
            text: "Bathing (ghusl) before wearing ihram garments",
            exceptions: [
              {
                type: "sick",
                description: "If sick, may perform only wudu or tayammum"
              },
              {
                type: "daimulhadas",
                description: "Those with Daim al-Hadas may perform wudu/ghusl and proceed to wear ihram"
              }
            ]
          }
        ]
      },
      {
        id: "102-recital",
        title: "Recitations",
        type: "recital",
        content: [
          {
            id: "102-r-1",
            text: "Reciting the intention: 'Labbayk Allahumma Umrah'",
            exceptions: []
          },
          {
            id: "102-r-2",
            text: "Reciting the Talbiyah: 'Labbayk Allahumma labbayk, labbayk la sharika laka labbayk, innal-hamda wan-ni'mata laka wal-mulk, la sharika lak'",
            exceptions: [
              {
                type: "video",
                description: "Watch a video on how to correctly pronounce the Talbiyah"
              }
            ]
          }
        ]
      },
      {
        id: "102-mind",
        title: "Mind & Intentions",
        type: "mind",
        content: [
          {
            id: "102-mind-1",
            text: "Sincerely intending to enter the state of ihram solely for the sake of Allah",
            exceptions: []
          },
          {
            id: "102-mind-2",
            text: "Committing to observe the restrictions of ihram",
            exceptions: []
          }
        ]
      },
      {
        id: "102-adab",
        title: "Etiquette & Rules",
        type: "adab",
        content: [
          {
            id: "102-adab-1",
            text: "Not wearing stitched clothing (for men)",
            exceptions: [
              {
                type: "female",
                description: "Women may wear regular modest clothing but should not cover their faces"
              }
            ]
          },
          {
            id: "102-adab-2",
            text: "Not applying perfume after entering ihram",
            exceptions: [
              {
                type: "taksengaja",
                description: "If accidentally exposed to perfume, clean it immediately"
              }
            ]
          },
          {
            id: "102-adab-3",
            text: "Not cutting nails or removing hair",
            exceptions: []
          },
          {
            id: "102-adab-4",
            text: "Not covering the head (for men)",
            exceptions: [
              {
                type: "female",
                description: "Women should not cover their faces but must cover their heads"
              }
            ]
          }
        ]
      }
    ],
    officialResourceLink: "https://www.tabunghaji.gov.my/sites/default/kah/NOTA%20KAH%201446H%20_%20M10%20(1)_0.pdf"
  }
];
