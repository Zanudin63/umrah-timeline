
import { useState, useRef } from 'react';
import { ChecklistItem } from './HotelChecklist';

export function useAudio(checklistItems: ChecklistItem[]) {
  const [isCountdownPlaying, setIsCountdownPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const handleStartCountdown = () => {
    if (isCountdownPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setIsCountdownPlaying(false);
    } else {
      if ('speechSynthesis' in window) {
        let fullText = "Senarai semak untuk persiapan umrah:\n";
        
        checklistItems.forEach(item => {
          fullText += `${item.label}: ${item.description}. `;
          
          if (item.id === 'pakaian' && item.hasTabs) {
            fullText += "Untuk lelaki: Pakailah 2 kain ihram dengan kemas agar tidak mendedahkan Aurat di antara pusat dan lutut, walaupun ketika melangkah kaki. Pakailah talipinggang jika perlu. Pakailah selipar yang patuh-ihram. ";
            fullText += "Untuk wanita: Pastikan Pakaian menututp Aurat dengan sempurna tanpa menututp muka. Pakailah tali yg menahan pangkal lengan baju daripada menggelongsor ke bawah jika tangan di angkat. Pakai setokin yg cukup tebal lagi tidak mudah tanggal sekalipun dipijak orang. Dilarang memakai sunglass yang terlalu besar. Pastikan tiada seutas rambut sekalipun yang terlepas keluar. ";
            fullText += "Untuk OKU: Panduan pakaian khusus untuk Orang Kurang Upaya semasa menunaikan ibadah. ";
            fullText += "Untuk pesakit-pesakit Najis Berkekalan (Da-imul Hadas) lelaki dan perempuan: (1) 30 minit sebelum turun ke MasjidilHaram, selepas mensucikan najis haid atau tahi atau kencing, pakailah pampers untuk mengelakkan pencemaran najis di lantai masjid nanti. (2) Bawalah beberapa helai pampers yang baru sebagai gantian. ";
          }
          
          if (item.id === 'pengenalandiri' && item.hasTabs) {
            fullText += "Identiti: Salinan Passport termasuk Salinan Visa. Lanyard Kad Jemaah. Beg Travel. Kad Hotel. Nombor Talipon Hotel. Nombor Talipon Mutawif. Nombor Talipon Waris. ";
            fullText += "Sekiranya terpisah daripada kumpulan jemaah, pastinya sukar dikenali oleh pehak penguasa. ";
            fullText += "Nota: Catatan penting berkaitan pengenalan diri semasa menunaikan ibadah. ";
          }
        });
        
        const utterance = new SpeechSynthesisUtterance(fullText);
        utterance.lang = 'ms-MY';
        speechSynthesis.speak(utterance);
      }
      setIsCountdownPlaying(true);
      
      setTimeout(() => {
        setIsCountdownPlaying(false);
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
        }
      }, 30000);
    }
  };

  return {
    isCountdownPlaying,
    handleStartCountdown,
    audioRef
  };
}
