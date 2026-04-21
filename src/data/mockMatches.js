// Simulates API response for WrestleMania 42 matches
export const mockMatches = [
  {
    id: 1,
    title: "WWE Championship: Roman Reigns vs. Cody Rhodes",
    matchType: "Championship Match",
    winner: "Cody Rhodes",
    duration: "28:45",
    rating: "⭐⭐⭐⭐⭐",
    description: "The American Nightmare finally conquers the Tribal Chief in an epic main event showdown under the Las Vegas lights.",
    image: "🏆",
    highlights: ["Spear through the announce table", "Cross Rhodes finisher", "Emotional post-match celebration"]
  },
  {
    id: 2,
    title: "Women's World Title: Rhea Ripley vs. Becky Lynch",
    matchType: "Championship Match",
    winner: "Rhea Ripley",
    duration: "22:18",
    rating: "⭐⭐⭐⭐⭐",
    description: "The Eradicator defends her title against The Man in a brutal, hard-hitting classic.",
    image: "👑",
    highlights: ["Riptide counter", "Dis-Arm-Her attempt", "Crowd chants 'This is awesome!'"]
  },
  {
    id: 3,
    title: "Intercontinental Title Ladder Match",
    matchType: "Ladder Match",
    winner: "Gunther",
    duration: "19:32",
    rating: "⭐⭐⭐⭐",
    description: "Six superstars risk it all as ladders climb toward championship gold in Vegas.",
    image: "🪜",
    highlights: ["Triple powerbomb through ladder", "Diving splash from top rope", "Gunther's chop fest"]
  },
  {
    id: 4,
    title: "Tag Team Turmoil: The Usos vs. The Judgment Day",
    matchType: "Tag Team Match",
    winner: "The Usos",
    duration: "16:45",
    rating: "⭐⭐⭐⭐",
    description: "Bloodline loyalty meets dark ambition in this high-flying tag team spectacle.",
    image: "🤝",
    highlights: ["Double superkick", "1D finisher", "Post-match tension with Solo Sikoa"]
  },
  {
    id: 5,
    title: "United States Open Challenge",
    matchType: "Open Challenge",
    winner: "Logan Paul",
    duration: "14:20",
    rating: "⭐⭐⭐",
    description: "The influencer defends his title against a mystery opponent in a surprise-filled bout.",
    image: "🇺🇸",
    highlights: ["Surprise entrant reveal", "Viral moment replay", "Controversial finish"]
  }
]

// Simulate API delay
export const fetchMatches = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockMatches)
    }, 800)
  })
}

export const fetchMatchById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const match = mockMatches.find(m => m.id === parseInt(id))
      resolve(match || null)
    }, 500)
  })
}