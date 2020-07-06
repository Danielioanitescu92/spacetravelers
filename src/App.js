import React, { useState, useEffect } from 'react';
import logo from './nothing.png'
import scroll from './scroll.png'
import './App.scss'
import Header from './components/header/Header'
import Body from './components/body/Body'
import Footer from './components/footer/Footer'
import FullScreen from './components/fullscreen/FullScreen'
import Flip from './components/flip/Flip'

function App() {
  const [ Months, setMonths ] = useState([])
  const [ Year, setYear ] = useState(new Date().toISOString().slice(0,4))
  const [ IndexMonth, setIndexMonth ] = useState(new Date().toISOString().slice(5,7))
  const [ DATE, setDATE ] = useState('2019-1-1')
  const [ ThisDay, setThisDay ] = useState('')
  const [ photo, setPhoto ] = useState([])
  const [ CAM, setCAM ] = useState('FHAZ')
  const [ ROVER, setROVER ] = useState('curiosity')
  const [ Dayzzz, setDayzzz ] = useState([])
  const [ ShowDay, setShowDay ] = useState('1')
  const [ X,setX ] = useState('0')
  const [ manifest, setManifest ] = useState({})
  const [ cams, setCams ] = useState([])
  const [ SeePage, setSeePage ] = useState('Pic')
  const [ HowManyPics, setHowManyPics ] = useState([])
  const [ WichPic, setWichPic ] = useState()
  const [ fullScr, setfullScr ] = useState(false)
  const [ isScrolling, setisScrolling ] = useState(false)
  const [ startY, setstartY ] = useState(0)
  const [ scrollTop, setscrollTop ] = useState(0)
  const [ Y, setY ] = useState(0)
  const [ walk, setwalk ] = useState(0)
  const [ Cri, setCri ] = useState(true)
  const [ Opo, setOpo ] = useState(false)
  const [ Spi, setSpi ] = useState(false)
  
  // NASA API KEY
  const API_KEY = 'lGuUaRVhz5ipMKSmXdg9f7BbcWdXkK0vac06gTH4'

  // array with months to go in Months
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Noi','Dec' ]

  // array with days of selected month
  let dazdaz = []

  // Slider for days ul
  const slider = document.getElementById("Body-details-parent")

  // on page load
  useEffect(() => {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${ROVER}/photos?earth_date=${DATE}&camera=${CAM}&api_key=${API_KEY}`)
    .then(resp => resp.json())
    .then(data => {
      setPhoto(data.photos[X])
    })
    setDATE(new Date().toISOString().slice(0,10))
    setYear(new Date().toISOString().slice(0,4))
    setMonths(months)
    setDayzzz(dazdaz)
    setThisDay('2')
  }, [])

  // when DATE, PHOTO INDEX, CAM and ROVER is changed
  useEffect(() => {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/manifests/${ROVER}?api_key=${API_KEY}`)
    .then(resp => resp.json())
    .then(data => {
      setManifest(data.photo_manifest)
      setCams(data.photo_manifest.photos[0].cameras)
    })
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${ROVER}/photos?earth_date=${DATE}&camera=${CAM}&api_key=${API_KEY}`)
    .then(resp => resp.json())
    .then(data => {
      setPhoto(data.photos[X])
      setHowManyPics(data.photos)
      setWichPic(X+1)
    })
  }, [DATE, X, CAM, ROVER])

  // change Month
  const updateMonth = e => {
    
    // get index of each months (1-12)
    months.forEach((value, i) => {
      const ind = i + 1
      
      // get number of days in SELECTED month  
      const getDayzInMonth = function(month,year) {
        return new Date(year, month, 0).getDate()
      }

      // on click on a month you get the nr of days of that month
      if (e.target.id === value) {
        const thiDay = getDayzInMonth(ind, parseInt(Year))

        setThisDay(thiDay)
        setIndexMonth(ind)

        // based on the number in thiDays, create an array with that number of days (wich will refresh on each Month click)
        // map this array to display days of the month in a list 
        for ( let i = 1; i <= thiDay; i++ ) {
          dazdaz.push(i)
        }

        // set date based on a variable
        setShowDay('1')
        setDATE(parseInt(Year)+'-'+ind+'-'+'1')
        setDayzzz(dazdaz)
        setX('0')
        setisScrolling(0)
        setstartY(0)
        setscrollTop(0)
        setY(0)
        setwalk(0)
        slider.scrollTop = 0
      }
    })
  }



  // update year - 1
  const updateYearMinus = () => {
    setYear(parseInt(Year)-1)
    setDATE(parseInt(Year)-1+'-'+IndexMonth+'-'+'1')
    setX('0')
    setisScrolling(0)
    setstartY(0)
    setscrollTop(0)
    setY(0)
    setwalk(0)
    slider.scrollTop = 0
  }


  
  // update year + 1
  const updateYearPlus = () => {
    setYear(parseInt(Year)+1)
    setDATE(parseInt(Year)+1+'-'+IndexMonth+'-'+'1')
    setX('0')
    setisScrolling(0)
    setstartY(0)
    setscrollTop(0)
    setY(0)
    setwalk(0)
    slider.scrollTop = 0
  }



  // ScrollDays
  const ScrollDays = () => {
    const ul = document.getElementById("Body-details-parent");
    const topOfUl = ul.scrollTop
    const theDay = Math.ceil(topOfUl/50)
    if (theDay < 1) {
      setShowDay('1')
    } else {
      setShowDay(theDay)
    }
  }



  // Click on Scrolled Day
  const updateDay = () => {
    setDATE(parseInt(Year)+'-'+IndexMonth+'-'+parseInt(ShowDay))
    setX('0')
  }



  // Click on PREV PIC
  const prevPic = () => {
    setX(parseInt(X)-1)
  }



  // Click on NEXT PIC
  const nextPic = () => {
    setX(parseInt(X)+1)
  }



  // Change CAM
  const functionCam = e => {
    setCAM(e.target.id);
    setX('0')
  }



  // Change ROVER
  const functionRover = e => {
    setROVER(e.target.id)
    setX('0')
    if (e.target.id === "curiosity") {
      setCri(true)
      setOpo(false)
      setSpi(false)
    } else if (e.target.id === "opportunity") {
      setCri(false)
      setOpo(true)
      setSpi(false)
    } else if (e.target.id === "spirit") {
      setCri(false)
      setOpo(false)
      setSpi(true)
    }
  }


  
  // Body buttons
  const ShowMeDets = () => {
      setSeePage('Dets')
  }
  const ShowMePic = () => {
      setSeePage('Pic')
  }
  const ShowMeCam = () => {
      setSeePage('Cam')
  }

  const concaveSm = e => {
      e.currentTarget.className = 'concaveSm'
  }

  const convexSm = e => {
      e.currentTarget.className = 'convexSm'
  }


  // Fullscreen Pic on click
  const fullScreen = () => setfullScr(true)

  
  // Picture not found
  const alternative = () => logo


  // Mouse click functions

  const onMouseDown = e => {
    e.currentTarget.className = 'Scroll-active'
    setisScrolling(true)
    setstartY(e.pageY - slider.offsetTop)
    setscrollTop(slider.scrollTop)
  }

  const onMouseUp = e => {
    e.currentTarget.className = ''
    document.getElementById('Body-details-days').className = ''
    document.getElementById('Body-days').className = ''
    setisScrolling(false)
  }

  const onMouseMove = e => {
    if(isScrolling) {
        e.currentTarget.className = 'Scroll-active'
        setY(e.pageY - slider.offsetTop)
        setwalk(Y - startY)
        slider.scrollTop = scrollTop - walk
    }
  }

  return (
    <div className="App">

      { fullScr ? <FullScreen photo={photo} setfullScr={setfullScr} /> : null }
      
      <Flip />

      <Header
        functionRover={functionRover}
        Cri={Cri}
        Opo={Opo}
        Spi={Spi}
      />

      <Body
        photo={photo ? photo.img_src : alternative()}
        date={DATE}
        updateYearMinus={updateYearMinus}
        updateYearPlus={updateYearPlus}
        updateMonth={updateMonth}
        updateDay={updateDay}
        Year={Year}
        Months={Months}
        ThisDay={ThisDay}
        Dayzzz={Dayzzz}
        ScrollDays={ScrollDays}
        ShowDay={ShowDay}
        prevPic={prevPic}
        nextPic={nextPic}
        manifest={manifest}
        cams={cams}
        SeePage={SeePage}
        setSeePage={setSeePage}
        functionCam={functionCam}
        ROVER={ROVER}
        CAM={CAM}
        WichPic={WichPic}
        HowManyPics={HowManyPics.length}
        fullScreen={fullScreen}
        scroll={scroll}
        isScrolling={isScrolling}
        startY={startY}
        scrollTop={scrollTop}
        Y={Y}
        walk={walk}
        setisScrolling={setisScrolling}
        setstartY={setstartY}
        setscrollTop={setscrollTop}
        setY={setY}
        setwalk={setwalk}
        slider={slider}
        ShowMeDets={ShowMeDets}
        ShowMePic={ShowMePic}
        ShowMeCam={ShowMeCam}
        concaveSm={concaveSm}
        convexSm={convexSm}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}        
      />

      <Footer />

    </div>
  );
}

export default App;