const team1 = ['aa', 'bb', 'cc']
const team2 = ['a', 'b', 'c', 'd', 'e']

const teamSize = (team) =>
  team.length <= 4
    ? `Team size: ${team.length}`
    : 'Too many people in your team'

console.log(teamSize(team1))
console.log(teamSize(team2))
