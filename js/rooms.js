var rooms = {
    "a1": {
        "description": "You find yourself in a strange place. It is dark in here and strangely warm. You wait for your eyes to adjust to the darkness, and you can see two doors, one to the south and one to the east.",
        "directions": {
            "south": "b1",
            "east": "a2"
        },
        "items": {
            "sword": "You see a shimmering light in a bush" // 
        }

    },
    "a2": {
        "description": "You enter into a chapel. There are pews arranged in front of an altar. Stained glass windows go up and down the aisle, but the ceiling is very low so the windows are rather unimpressive. The altar has a large banner behind it with the image of a strange god you do not recognize. To the west is a wooden door.",
        "directions": {
            "west": "a1",
        }
    },
    "a3": {
        "description": "You arrive to the lighthouse and walk up to the door. A strange old lady\
     opens the door. What do you do?",
        "directions": {
            "south": "clearing1"
        },
        "npcs": {
            "old lady": "The old lady emits a strange noise and attacks you"
        }
    },
    "a4": {
        "description": "You arrive to another clearing, there are some trolls roasting some mysterious meat\
     They haven't seen you yet. What do you do?",
        "directions": {
            "west": "clearing1"
        }
    },
    "b1": {
        "description": "You see a river and there is a bridge to the <b>west</b>",
        "directions": {
            "east": "start",
            "west": "bridge2"
        }
    },
    "b2": {
        "description": "You try to cross the bridge but a troll jumps out and bites your leg!",
        "directions": {
            "east": "bridge1"
        }
    }
}
