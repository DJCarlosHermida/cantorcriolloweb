const players = new Set()

export function registerAudioPlayer(element) {
  players.add(element)
  return () => players.delete(element)
}

export function pauseOtherAudioPlayers(current) {
  players.forEach((element) => {
    if (element !== current && !element.paused) {
      element.pause()
    }
  })
}
