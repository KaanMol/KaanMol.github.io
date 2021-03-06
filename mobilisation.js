const data = [
    {
        "gewricht": "Schouder",
        "active_mobilisation": [
            {
                "type": "Anteflexie",
                "exercises": [
                    {
                        "start": "De patiënt bevindt zich in stand met het gezicht naar de muur, de armen bevinden zich ontspannen naast de romp.",
                        "level": 0,
                        "steps": [
                            "Beide handen worden tegen de muur geplaatst",
                            "Gelijktijdig worden beide armen richting anteflexie bewogen waarbij de patiënt contact houdt met de muur."
                        ],
                        "warnings": [
                            "De stand van de WK dient tijdens de uitvoering dezelfde te blijven"
                        ]
                    },
                    {
                        "start": "De patiënt bevindt zich in ruglig met armen ontspannen naast de romp. Beide benen zijn gebogen, met de voeten plat op de ondergrond.",
                        "level": 1,
                        "steps": [
                            "Beide handen worden in elkaar gevouwen.",
                            "Beide armen worden gelijktijdig richting anteflexie bewogen, hierbij worden de armen in een zo groot mogelijke boog bewogen."
                        ],
                        "warnings": [
                            "De stand van de WK dient tijdens de uitvoering dezelfde te blijven om compensaties in de LWK te voorkomen.",
                            "De oefening kan ook uitgevoerd worden met een stok. De stok wordt in bovengreep vastgehouden en de handen bevinden zich op schouderbreedte."
                        ]
                    },
                    {
                        "start": "De patiënt bevindt zich in knieënstand voor een stoel met beide handen evenwijdig aan elkaar op de zitting geplaatst.",
                        "level": 2,
                        "steps": [
                            "De romp wordt in de richting van de ondergrond bewogen vanuit het sternum"
                        ],
                        "warnings": [
                            "De stand van de WK dient tijdens de uitvoering dezelfde te blijven om compensaties in de LWK te voorkomen"
                        ]
                    }
                ]
            },
            {
                "type": "Retroflexie",
                "exercises": [
                    {
                        "start": "De patiënt bevindt zich in stand met het gezicht naar de muur, de armen bevinden zich ontspannen naast de romp.",
                        "level": 0,
                        "steps": [
                            "Beide handen worden tegen de muur geplaatst",
                            "Gelijktijdig worden beide armen richting anteflexie bewogen waarbij de patiënt contact houdt met de muur."
                        ],
                        "warnings": [
                            "De stand van de WK dient tijdens de uitvoering dezelfde te blijven"
                        ]
                    },
                    {
                        "start": "De patiënt bevindt zich in ruglig met armen ontspannen naast de romp. Beide benen zijn gebogen, met de voeten plat op de ondergrond.",
                        "level": 1,
                        "steps": [
                            "Beide handen worden in elkaar gevouwen.",
                            "Beide armen worden gelijktijdig richting anteflexie bewogen, hierbij worden de armen in een zo groot mogelijke boog bewogen."
                        ],
                        "warnings": [
                            "De stand van de WK dient tijdens de uitvoering dezelfde te blijven om compensaties in de LWK te voorkomen.",
                            "De oefening kan ook uitgevoerd worden met een stok. De stok wordt in bovengreep vastgehouden en de handen bevinden zich op schouderbreedte."
                        ]
                    },
                    {
                        "start": "De patiënt bevindt zich in knieënstand voor een stoel met beide handen evenwijdig aan elkaar op de zitting geplaatst.",
                        "level": 2,
                        "steps": [
                            "De romp wordt in de richting van de ondergrond bewogen vanuit het sternum"
                        ],
                        "warnings": [
                            "De stand van de WK dient tijdens de uitvoering dezelfde te blijven om compensaties in de LWK te voorkomen"
                        ]
                    }
                ]
            }
        ]
    },
    {
        gewricht: "Elleboog"
    }
];

class Mobilisation {
    _element;
    constructor() {
        this._element = document.getElementById("art");
        for (let i = 0; i < data.length; i++) {
            const button = document.createElement("button");
            button.innerText = data[i].gewricht;

            this._element.appendChild(button);
        }
    }
};

(() => { new Mobilisation(); })();