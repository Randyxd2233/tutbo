
global.rpg = {
	
  role(level) {
    level = parseInt(level)
    if (isNaN(level)) return { name: '', level: '' }
    
    const role = [
      { name: "Novato", level: 0 }, { name: "Medio", level: 4 }, 
      { name: "Semi-medio", level: 8 }, { name: "Aprendiendo", level: 12 }, 
      { name: "Master", level: 16 }, { name: "Guardian", level: 20 }, 
      { name: "Super-master", level: 24 }, { name: "Hero", level: 28 }, 
      { name: "Semi-nitro", level: 32 }, { name: "Nitro", level: 36 },
      { name: "Semi-turbo", level: 48 }, { name: "turbo", level: 52 }, 
      { name: "Super-turbo", level: 56 }, { name: "Super-turbo-nitro", level: 60 }, 
      { name: "TURBO-NITRO", level: 100 }
    ];

    return role.reverse().find(role => level >= role.level)
  }
}
