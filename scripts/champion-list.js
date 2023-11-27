const championList = [
    {
        champion: "Aatrox",
        hint: "2022 World Finals MVP"
    },
    {
        champion: "Ahri",
        hint: "Miyeon"
    },
    {
        champion: "Akali",
        hint: "In more than one music groups"
    },
    {
        champion: "Akshan",
        hint: "Infinite spin"
    },
    {
        champion: "Alistar",
        hint: "W Q is the bread and butter combo"
    },
    {
        champion: "Amumu",
        hint: "Cries"
    },
    {
        champion: "Anivia",
        hint: "Flying Ice"
    },
    {
        champion: "Annie",
        hint: "9"
    },
    {
        champion: "Aphelios",
        hint: "Only has 2 abilities"
    },
    {
        champion: "Ashe",
        hint: "Frost bow"
    },
    {
        champion: "AurelionSol", // no spaces for now
        hint: "Space"
    },
    {
        champion: "Azir",
        hint: "Faker"
    },
    {
        champion: "Bard",
        hint: "Caretaker"
    },
    {
        champion: "Belveth",
        hint: "Zerg rush"
    },
    {
        champion: "Blitzcrank",
        hint: "Beep Boop"
    },
    {
        champion: "Brand",
        hint: "Fire"
    },
    {
        champion: "Braum",
        hint: "Door"
    },
    {
        champion: "Briar",
        hint: "Feet"
    },
    {
        champion: "Caitlyn",
        hint: "Cupcake"
    },
    {
        champion: "Camille",
        hint: "Chogath R"
    },
    {
        champion: "Cassiopeia",
        hint: "Hiss"
    },
    {
        champion: "Chogath",
        hint: "Nom Nom Nom"
    },
    {
        champion: "Corki",
        hint: "Lima Oscar Lima"
    },
    {
        champion: "Darius",
        hint: "Dunkin Donuts"
    },
    {
        champion: "Diana",
        hint: "Cresent Moon"
    },
    {
        champion: "DrMundo",
        hint: "Does not have a PHD"
    },
    {
        champion: "Draven",
        hint: "Tyler1"
    },
    {
        champion: "Ekko",
        hint: "Firelight"
    },
    {
        champion: "Elise",
        hint: "Australia"
    },
    {
        champion: "Evelynn",
        hint: "Please buy pink wards"
    },
    {
        champion: "Ezreal",
        hint: "Museum"
    },
    {
        champion: "Fiddlesticks",
        hint: "Horror game"
    },
    {
        champion: "Fiora",
        hint: "French"
    },
    {
        champion: "Fizz",
        hint: "Trident"
    },
    {
        champion: "Galio",
        hint: "Statue"
    },
    {
        champion: "Gangplank",
        hint: "Was dead but came back"
    },
    {
        champion: "Garen",
        hint: "Most likely in a bush"
    },
    {
        champion: "Gnar",
        hint: "Gets angry"
    },
    {
        champion: "Gragas",
        hint: "Belly"
    },
    {
        champion: "Graves",
        hint: "Hang on, I'm reloading"
    },
    {
        champion: "Gwen",
        hint: "Doll"
    },
    {
        champion: "Hecarim",
        hint: "Dantes"
    },
    {
        champion: "Heimerdinger",
        hint: "Scientist"
    },
    {
        champion: "Illaoi",
        hint: "Insert a questionable word regarding the limbs of an octopus"
    },
    {
        champion: "Irelia",
        hint: "Full build with 900 gold"
    },
    {
        champion: "Ivern",
        hint: "Can't hurt the friends"
    },
    {
        champion: "Janna",
        hint: "At 2.59 a minute"
    },
    {
        champion: "Jarvan",
        hint: "Flag"
    },
    {
        champion: "Jax",
        hint: "CS2"
    },
    {
        champion: "Jayce",
        hint: "Tomorrow"
    },
    {
        champion: "Jhin",
        hint: "4"
    },
    {
        champion: "Jinx",
        hint: "Powder"
    },
    {
        champion: "Ksante",
        hint: "WOW! League of Legends!"
    },
    {
        champion: "Kaisa",
        hint: "AD AP Hybrid"
    },
    {
        champion: "Kalista",
        hint: "Hop Hop Hop"
    },
    {
        champion: "Karma",
        hint: "Why does r q hurt so much?"
    },
    {
        champion: "Karthus",
        hint: "Dead screaming"
    },
    {
        champion: "Kassadin",
        hint: "Void dad"
    },
    {
        champion: "Katarina",
        hint: "Knives, a lot of them"
    },
    {
        champion: "Kayle",
        hint: "Level 16 god"
    },
    {
        champion: "Kayn",
        hint: "Bipolar"
    },
    {
        champion: "Kennen",
        hint: "Pikachu"
    },
    {
        champion: "Khazix",
        hint: "Evolution"
    },
    {
        champion: "Kindred",
        hint: "Mark"
    },
    {
        champion: "Kled",
        hint: "Is on some type of substance"
    },
    {
        champion: "Kogmaw",
        hint: "Kamikaza"
    },
    {
        champion: "Leblanc",
        hint: "There are 2 of them"
    },
    {
        champion: "Leesin",
        hint: "ArrowTron"
    },
    {
        champion: "Leona",
        hint: "Sun"
    },
    {
        champion: "Lillia",
        hint: "Bambi"
    },
    {
        champion: "Lissandra",
        hint: "Ice witch"
    },
    {
        champion: "Lucian",
        hint: "Guns blazing"
    },
    {
        champion: "Lulu",
        hint: "That tasted purple"
    },
    {
        champion: "Lux",
        hint: "Riot games money printer"
    },
    {
        champion: "Malphite",
        hint: "Rock"
    },
    {
        champion: "Malzahar",
        hint: "QSS tax"
    },
    {
        champion: "Maokai",
        hint: "Throws babies"
    },
    {
        champion: "MasterYi",
        hint: "I WAS IN ALPHA"
    },
    {
        champion: "Milio",
        hint: "Messi"
    },
    {
        champion: "Miss Fortune",
        hint: "Pirate"
    },
    {
        champion: "Mordekaiser",
        hint: "You stuck here with me"
    },
    {
        champion: "Morgana",
        hint: "I can't move"
    },
    {
        champion: "Naafiri",
        hint: "Who let the dogs out"
    },
    {
        champion: "Nami",
        hint: "Sashimi"
    },
    {
        champion: "Nasus",
        hint: "Dawg"
    },
    {
        champion: "Nautilus",
        hint: "Dies a lot"
    },
    {
        champion: "Neeko",
        hint: "Count minions please"
    },
    {
        champion: "Nidalee",
        hint: "Cougar lady"
    },
    {
        champion: "Nilah",
        hint: "Whip"
    },
    {
        champion: "Nocturne",
        hint: "Paranoia"
    },
    {
        champion: "NunuandWillump", // maybe add some stuff to make use of this
        hint: "Kesha"
    },
    {
        champion: "Olaf",
        hint: "Axe man"
    },
    {
        champion: "Orianna",
        hint: "Ball"
    },
    {
        champion: "Ornn",
        hint: "Makes stuff"
    },
    {
        champion: "Pantheon",
        hint: "Always wanted to be a baker"
    },
    {
        champion: "Poppy",
        hint: "Hammer"
    },
    {
        champion: "Pyke",
        hint: "G2"
    },
    {
        champion: "Qiyana",
        hint: "Elements"
    },
    {
        champion: "Quinn",
        hint: "Flies around"
    },
    {
        champion: "Rakan",
        hint: "Grand entrance"
    },
    {
        champion: "Rammus",
        hint: "Turtle"
    },
    {
        champion: "RekSai",
        hint: "Is a female"
    },
    {
        champion: "Rell",
        hint: "Legs don't work properly"
    },
    {
        champion: "Reneta",
        hint: "Now I can kill my teammates"
    },
    {
        champion: "Renekton",
        hint: "Croc"
    },
    {
        champion: "Rengar",
        hint: "I got the eyes on me"
    },
    {
        champion: "Riven",
        hint: "Q AA Q AA Q AA"
    },
    {
        champion: "Rumble",
        hint: "Gurren Lagann"
    },
    {
        champion: "Ryze",
        hint: "Blue"
    },
    {
        champion: "Samira",
        hint: "S+"
    },
    {
        champion: "Sejuani",
        hint: "Hog Ridaaa"
    },
    {
        champion: "Senna",
        hint: "Wife"
    },
    {
        champion: "Seraphine",
        hint: "Skarner hates you"
    },
    {
        champion: "Sett",
        hint: "Fister"
    },
    {
        champion: "Shaco",
        hint: "Ronald Mcdonald"
    },
    {
        champion: "Shen",
        hint: "Tanky Ninja"
    },
    {
        champion: "Shyvana",
        hint: "Kills Dragons"
    },
    {
        champion: "Singed",
        hint: "Gas Gas Gas"
    },
    {
        champion: "Sion",
        hint: "Solo Bolo"
    },
    {
        champion: "Sivir",
        hint: "The game won't end until I have 500 cs"
    },
    {
        champion: "Skarner",
        hint: "Stinger"
    },
    {
        champion: "Sona",
        hint: "Guitar Hero"
    },
    {
        champion: "Soraka",
        hint: "Ambulance"
    },
    {
        champion: "Swain",
        hint: "Old Bird"
    },
    {
        champion: "Sylas",
        hint: "Chained"
    },
    {
        champion: "Syndra",
        hint: "Balls"
    },
    {
        champion: "TahmKench",
        hint: "Frog or Fish?"
    },
    {
        champion: "Taliyah",
        hint: "Throws rocks"
    },
    {
        champion: "Talon",
        hint: "Parkour"
    },
    {
        champion: "Taric",
        hint: "Ezreal's Boyfriend"
    },
    {
        champion: "Teemo",
        hint: "Satan"
    },
    {
        champion: "Thresh",
        hint: "Click on the ___"
    },
    {
        champion: "Tristana",
        hint: "Goomba Stomp"
    },
    {
        champion: "Trundle",
        hint: "Pillar"
    },
    {
        champion: "Trynamere",
        hint: "Doesn't die"
    },
    {
        champion: "TwistedFate",
        hint: "Cards"
    },
    {
        champion: "Twitch",
        hint: "Rat"
    },
    {
        champion: "Udyr",
        hint: "JoJo's"
    },
    {
        champion: "Urgot",
        hint: "Shoots really fast"
    },
    {
        champion: "Varus",
        hint: "Gumayusi Baron"
    },
    {
        champion: "Vayne",
        hint: "Is Boosted"
    },
    {
        champion: "Veigar",
        hint: "Stacks AP"
    },
    {
        champion: "VelKoz",
        hint: "Big Eye"
    },
    {
        champion: "Vex",
        hint: "Emo Poppy"
    },
    {
        champion: "Vi",
        hint: "Loves Caitlyn"
    },
    {
        champion: "Viego",
        hint: "Ruined"
    },
    {
        champion: "Viktor",
        hint: "Glorious Evolution"
    },
    {
        champion: "Vladimir",
        hint: "Blood"
    },
    {
        champion: "Volibear",
        hint: "Bear"
    },
    {
        champion: "Warwick",
        hint: "Vander?"
    },
    {
        champion: "Wukong",
        hint: "Monke"
    },
    {
        champion: "Xayah",
        hint: "Feathers"
    },
    {
        champion: "Xerath",
        hint: "Electric Thing"
    },
    {
        champion: "Xin Zhao",
        hint: "Lance"
    },
    {
        champion: "Yasuo",
        hint: "Shit 1"
    },
    {
        champion: "Yone",
        hint: "Shit 2"
    },
    {
        champion: "Yorick",
        hint: "Digs Graves"
    },
    {
        champion: "Yuumi",
        hint: "Book"
    },
    {
        champion: "Zac",
        hint: "Goo"
    },
    {
        champion: "Zed",
        hint: "XY_"
    },
    {
        champion: "Zeri",
        hint: "Neon"
    },
    {
        champion: "Ziggs",
        hint: "Bye Bye Towers"
    },
    {
        champion: "Zilean",
        hint: "Time"
    },
    {
        champion: "Zoe",
        hint: "Loves Ezreal"
    },
    {
        champion: "Zyra",
        hint: "Plants"
    }
];