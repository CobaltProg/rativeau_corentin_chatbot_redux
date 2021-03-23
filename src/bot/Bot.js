const BOTS = {

  "1":{
    name: 'Octane',
    type: 'Runner',
    avatar: 'octane.jpg',
    description: "By the time you see me coming, I’ll be going and you’ll be gone.",
    options: {
      "Bonjour": 'Hola amigo!',
      "Punchline": "The rain ain't as fast as me.",
      "Bots":"Scooting and looting, amigo."
    }
  }, 
    "2":{
    name: 'Lifeline',
    avatar: 'lifeline.jpg',
    type: 'Heal',
    description: "It’s time to impress.",
    options: {
      "Bonjour": 'Hey !',
      "Au revoir": "Au revoir !",
      "Punchline": "Everyone forgets me but i can heal you easy",
      "Bots": "If you're with me, I'm with you."
    }
  },
    "3":{
    name: 'Horizon',
    avatar: 'horizon.jpg',
    type: 'DPS',
    description: 'Violence for science',
    options: {
      "Bonjour": 'Cmon little Newtie, weve got work to do.',
      "Punchline": "Everyone forgets to look up. You lot are so… terrestrial.",
      "Bots":"Time for bold action!"
    },
    }
  }


export const BotList = (id,messageToAnswer) => {
  
  return BOTS[id].options[messageToAnswer] ? {id: id, msg: BOTS[id].options[messageToAnswer]} : {id: id, msg: BOTS[id].options.error} ;
}