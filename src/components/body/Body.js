import React from 'react'
import './Body.scss'
import add from './add.svg'
import minus from './minus.svg'
import Details from './details/Details'
import Cameras from './cameras/Cameras'
import Pictures from './pictures/Pictures'
import Scrolldrag from './scrolldrag/Scrolldrag'
import Timeline from './timeline/Timeline'
import Selectibles from './selectibles/Selectibles'

const Body = ({onMouseMove,onMouseUp,onMouseDown,ShowMeDets,ShowMePic,ShowMeCam,concaveSm,convexSm,slider,setisScrolling,setstartY,setscrollTop,setY,setwalk,isScrolling,startY,scrollTop,Y,walk,scroll,fullScreen,HowManyPics,WichPic,CAM,ROVER,SeePage,manifest,cams,photo,nextPic,prevPic,functionCam,updateDay,ShowDay,ScrollDays,updateYearMinus,updateYearPlus,updateMonth,date,Year,Months,Dayzzz}) => {
    
    return (
        <div className="Body-all">

            <div className="Body-main">

                <Selectibles
                    ShowMeDets={ShowMeDets}
                    ShowMePic={ShowMePic}
                    ShowMeCam={ShowMeCam}
                    add={add}
                />

                { SeePage==='Dets' ? <Details manifest={manifest} /> : null }

                { SeePage==='Pic' ? <Pictures fullScreen={fullScreen} ROVER={ROVER} date={date} CAM={CAM} HowManyPics={HowManyPics} WichPic={WichPic} photo={photo} prevPic={prevPic} nextPic={nextPic} /> : null }

                { SeePage==='Cam' ? <Cameras cams={cams} functionCam={functionCam} /> : null }


                <Scrolldrag
                    Dayzzz={Dayzzz}
                    ScrollDays={ScrollDays}
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
                    scroll={scroll}
                    updateDay={updateDay}
                    ShowDay={ShowDay}
                    onMouseDown={onMouseDown}
                    onMouseUp={onMouseUp}
                    onMouseMove={onMouseMove}
                />

            </div>

            <Timeline
                Year={Year}
                updateYearMinus={updateYearMinus}
                updateYearPlus={updateYearPlus}
                updateMonth={updateMonth}
                date={date}
                concaveSm={concaveSm}
                convexSm={convexSm}
                minus={minus}
                add={add}
                Months={Months}
            />

        </div>
    )
}

export default Body