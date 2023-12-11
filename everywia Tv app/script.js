let searchBtn = document.getElementById('search-btn')
let searchBar = document.getElementById('search-bar')
let channels = document.querySelectorAll('.channel')
let result = document.getElementById('result')
let clearBtn = document.getElementById('cancel-search')
let alert = document.getElementById('alert')
let mainImage = document.getElementById('bg-image')
let liveVideo = document.getElementById('liveVideo')
let display = document.getElementById('tv-display')
let liveSource;
// liveVideo.src = "https://www.youtube.com/embed/-XhUzKIxCY4?si=DjbeGeocFIsejREk"

//  function for search button
searchBtn.addEventListener("click",()=>{
    channels.forEach(channel =>{     
        if (channel.value.toLowerCase().includes(searchBar.value.toLowerCase())){
            result.appendChild(channel.parentNode)
            alert.innerHTML = ""
            searchBar.innerHTML = ""
        }
    })
})
// to clear search
clearBtn.addEventListener("click", ()=>{
    location.reload()
})
// click functions for all channels
channels.forEach(channel =>{
    channel.addEventListener("click",()=>{
        // This is where the function of each channel is handled
        // This is for newscentral
        if (channel.value == 'Newscentral'){
            // put the link in the live source
          liveSource = "https://www.youtube.com/embed/yUCI5SxQckw?si=-2TTMOK4AQvt0ipS;controls=0"
          mainImage.style.display = 'none'
          liveVideo.style.display = 'block'
          liveVideo.src = liveSource
          window.scrollTo(0, 0);
        }
        
        if (channel.value == 'Plus TV Africa'){
        // The link of the live goes in the live source
        liveSource = "https://www.youtube.com/embed/cOLuf8t1-bQ?si=1biYXcxwZ0fmVUDp" 
        mainImage.style.display = 'none'
        liveVideo.style.display = 'block'
        liveVideo.src = liveSource
        window.scrollTo(0, 0);
        }
        
        if (channel.value == 'Arise News'){
        // The link of the live goes in the live source
        liveSource = "https://www.youtube.com/embed/MmJpuxHcz0I?si=hFAR2-VEjt240Cu7" 
        mainImage.style.display = 'none'
        liveVideo.style.display = 'block'
        liveVideo.src = liveSource
        window.scrollTo(0, 0);
        }
        // Just make sure the channel.value equals the name of the channel
        if (channel.value == 'Tv360nigeria'){
            // The link of the live goes in the live source
            liveSource = "https://www.youtube.com/embed/m8TsKiKB4Ko?si=7AA9urRKg9YKiM3y" 
            mainImage.style.display = 'none'
            liveVideo.style.display = 'block'
            liveVideo.src = liveSource
            window.scrollTo(0, 0);
          }
        //   This is the third one. You should get it from here
        // Clear the explanation comments when you are done
        if (channel.value == 'Channels Tv'){
            // The link of the live goes in the live source
            liveSource = src="https://www.youtube.com/embed/ENHYOYm-kUE?si=W02P3_i18_4kmjg4" 
            mainImage.style.display = 'none'
            liveVideo.style.display = 'block'
            liveVideo.src = liveSource
            window.scrollTo(0, 0);
          }
          
          
          if (channel.value == 'AIT'){
          // The link of the live goes in the live source
          liveSource = src="https://www.youtube.com/embed/rHK7_QZqBR0?si=5WCDfM7nkTOJ9ptm" 
          mainImage.style.display = 'none'
          liveVideo.style.display = 'block'
          liveVideo.src = liveSource
          window.scrollTo(0, 0);
          }
          
          
          
          if (channel.value == 'Trust TV'){
          // The link of the live goes in the live source
          liveSource = src="https://youtube.com/embed/ADn24ZJvMMQ" 
          mainImage.style.display = 'none'
          liveVideo.style.display = 'block'
          liveVideo.src = liveSource
          window.scrollTo(0, 0);
          }
          
          
          if (channel.value == 'NTA'){
          // The link of the live goes in the live source
          liveSource = src="https://www.youtube.com/embed/C3ecUb1MaYg?si=3JljKJsuQ2b4uAZp&amp;controls=0" 
          mainImage.style.display = 'none'
          liveVideo.style.display = 'block'
          liveVideo.src = liveSource
          window.scrollTo(0, 0);
          }
          
          https://www.youtube.com/live/VVNchT_PnxY?si=9pr35hQUdR4vapIw
          
          if (channel.value == 'SILVERBIRDNEWS24'){
          // The link of the live goes in the live source
          liveSource = src="https://www.youtube.com/embed/VVNchT_PnxY?si=9pr35hQUdR4vapIw" 
          mainImage.style.display = 'none'
          liveVideo.style.display = 'block'
          liveVideo.src = liveSource
          window.scrollTo(0, 0);
          }
          
          if (channel.value == 'Joynews tv'){
          // The link of the live goes in the live source
          liveSource = src="https://www.youtube.com/embed/adyytzZzoT8?si=wH05U8EpNbfYEPzh" 
          mainImage.style.display = 'none'
          liveVideo.style.display = 'block'
          liveVideo.src = liveSource
          window.scrollTo(0, 0);
          }
          
          
          if (channel.value == 'DW news'){
          // The link of the live goes in the live source
          liveSource = src="https://www.youtube.com/embed/pqabxBKzZ6M?si=LHkrSZv5nKjDmRtL" 
          mainImage.style.display = 'none'
          liveVideo.style.display = 'block'
          liveVideo.src = liveSource
          window.scrollTo(0, 0);
          }
          
          if (channel.value == 'France 24'){
          // The link of the live goes in the live source
          liveSource = src="https://www.youtube.com/embed/tkDUSYHoKxE?si=5LSuCGrwoji69kb0" 
          mainImage.style.display = 'none'
          liveVideo.style.display = 'block'
          liveVideo.src = liveSource
          window.scrollTo(0, 0);
          }
          
          if (channel.value == 'AfricaNews'){
          // The link of the live goes in the live source
          liveSource = src="https://youtube.com/embed/NQjabLGdP5g" 
          mainImage.style.display = 'none'
          liveVideo.style.display = 'block'
          liveVideo.src = liveSource
          window.scrollTo(0, 0);
          }
          
          if (channel.value == 'tvcnews'){
          // The link of the live goes in the live source
          liveSource = src="https://www.youtube.com/embed/izb2puyGJkI?si=ZzKIzujhltnZHJUD" 
          mainImage.style.display = 'none'
          liveVideo.style.display = 'block'
          liveVideo.src = liveSource
          window.scrollTo(0, 0);
          }
          
          if (channel.value == 'ALJAZEERA'){
          // The link of the live goes in the live source
          liveSource = src="https://youtube.com/embed/gCNeDWCI0vo" 
          mainImage.style.display = 'none'
          liveVideo.style.display = 'block'
          liveVideo.src = liveSource
          window.scrollTo(0, 0);
          }
          
          
          if (channel.value == 'EuroNews'){
          // The link of the live goes in the live source
          liveSource = src="https://youtube.com/embed/pykpO5kQJ98" 
          mainImage.style.display = 'none'
          liveVideo.style.display = 'block'
          liveVideo.src = liveSource
          window.scrollTo(0, 0);
          }
          
          
          if (channel.value == 'Skynews'){
          // The link of the live goes in the live source
          liveSource = src="https://www.youtube.com/embed/9Auq9mYxFEE?si=gJ9rzwYcmhyAD710" 
          mainImage.style.display = 'none'
          liveVideo.style.display = 'block'
          liveVideo.src = liveSource
          window.scrollTo(0, 0);
          }
          
          if (channel.value == 'CBS news'){
          // The link of the live goes in the live source
          liveSource = src="https://www.youtube.com/embed/aulewcMIag0?si=GRKCvQFPR6WFDIUV" 
          mainImage.style.display = 'none'
          liveVideo.style.display = 'block'
          liveVideo.src = liveSource
          window.scrollTo(0, 0);
          }
         
    })
})
