import boom from './boom.wav'
import clap from './clap.wav'
import hi_hat from './hihat.wav'
import kick_drum from './kick.wav'
import open_hat from './openhat.wav'
import ride from './ride.wav'
import snare_drum from './snare.wav'
import tink from './tink.wav'
import tom from './tom.wav'

export const instruments = [
  {
    boom: {
      name: 'boom',
      sound: boom,
      keyCode: 81,
      letter: 'Q',
      id: 0
    }
  },
  {
    clap: {
      name: 'clap',
      sound: clap,
      keyCode: 87,
      letter: 'W',
      id: 1
    }
  },
  {
    hi_hat: {
      name: 'hi_hat',
      sound: hi_hat,
      keyCode: 69,
      letter: 'E',
      id: 2
    }
  },
  {
    kick_drum: {
      name: 'kick_drum',
      sound: kick_drum,
      keyCode: 82,
      letter: 'R',
      id: 3
    }
  },
  {
    open_hat: {
      name: 'open_hat',
      sound: open_hat,
      keyCode: 84,
      letter: 'T',
      id: 4
    }
  },
  {
    ride: {
      name: 'ride',
      sound: ride,
      keyCode: 89,
      letter: 'Y',
      id: 5
    }
  },
  {
    snare_drum: {
      name: 'snare_drum',
      sound: snare_drum,
      keyCode: 85,
      letter: 'U',
      id: 6
    }
  },
  {
    tink: {
      name: 'tink',
      sound: tink,
      keyCode: 73,
      letter: 'I',
      id: 7
    }
  },
  {
    tom: {
      name: 'tom',
      sound: tom,
      keyCode: 79,
      letter: 'O',
      id: 8
    }
  }
]
