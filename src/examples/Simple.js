import axios from 'axios';
import React, { useDebugValue, useEffect, useState } from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'

const db = [
  {
    name: 'Ardak Alipova',
    url: 'https://cdn.discordapp.com/avatars/882986247818194955/126f20e4e5d96e36720861822aa5b478.webp?size=160',
    numberOfFans: 0
  },
  {
    name: 'Aldiyar Anuar',
    url: 'https://cdn.discordapp.com/avatars/666931849641328640/79a0547f474396f2e052972bff0cd7a3.webp?size=64',
    numberOfFans: 0
  },
  {
    name: 'Beknar Danabek',
    url: 'https://cdn.discordapp.com/avatars/733968402942656572/2151cefa1c7398f74690250850126977.webp?size=160',
    numberOfFans: 0
  },
  {
    name: 'Murat Tishkul',
    url: 'https://cdn.discordapp.com/avatars/973529657540481024/38a18153cdd7a4eb5bff6d5f6a8f06c7.webp?size=160',
    numberOfFans: 0
  },
  {
    name: 'Dalida Yerkuli',
    url: 'https://cdn.discordapp.com/avatars/768474953636511754/b17946d02c525e33b4cebc277b672d2f.webp?size=160',
    numberOfFans: 0
  }
]

function Simple () {
  const characters = db

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://facecrush-back.herokuapp.com/api/get-users").then((res) => {
      setUsers(res.data);
    })
  }, [])

  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    // if(direction == "right") {
    //   db.find(person => person.name == nameToDelete).numberOfFans += 1;
    // }
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div>
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
      <h1>Swipe right if you like the person below</h1>
      <div className='cardContainer'>
        {users.map((user) =>
          <TinderCard className='swipe' key={user.username} onSwipe={(dir) => swiped(dir, user.username)} onCardLeftScreen={() => outOfFrame(user.username)}>
            <div style={{ backgroundImage: 'url(' + "https://cdn.discordapp.com/avatars/666931849641328640/79a0547f474396f2e052972bff0cd7a3.webp?size=64"+ ')' }} className='card'>
              <h3>{user.username}</h3>
              {/* <h3> Fans: {user.likedUsers.length}</h3> */}
            </div>
          </TinderCard>
        )}
      </div>
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
    </div>
  )
}

export default Simple
