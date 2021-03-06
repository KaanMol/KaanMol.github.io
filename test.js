// class Test {
//     _element; 
    

//     constructor() {
//         this._element = document.getElementById("test");
//     }
// };

// let test;

// (() => { test = new Test() })();

const data = [
    // Batch 0

    {
        "name": "Trapezius pars descendens",
        "origin": [
            "os occipitale",
            "via het lig. nuchae aan de processus spinosi C1 tot en met C7"
        ],
        "insertion": [
            "Laterale derde deel clavicula"
        ],
        "function": [
            "Trekt de scapula naar boven en draait deze naar buiten",
            "Neight het hoofd naar de ipsilaterale zijde en draait het naar de contralaterale zijde"
        ]
    },
    {
        "name": "Trapezius pars transversa",
        "origin": [
            "processus spinosi T1 tot en met T4"
        ],
        "insertion": [
            "acromion"
        ],
        "function": [
            "Verschuift het scapula naar mediaal"
        ]
    },
    {
        "name": "Trapezius pars ascendens",
        "origin": [
            "processus spinosi T5 tot en met T12"
        ],
        "insertion": [
            "spina scapulae"
        ],
        "function": [
            "Verschuift het scapula naar mediocaudaal"
        ]
    },
    {
        "name": "Rhomboideus minor",
        "origin": [
            "processus spinosi C6 en C7"
        ],
        "insertion": [
            "Margo medialis (*boven* de spina scapulae)"
        ],
        "function": [
            "Fixatie van de scapula",
            "Trekt de scapula naar craniaal-mediaal"
        ]
    },
    {
        "name": "Rhomboideus major",
        "origin": [
            "processus spinosi T1 en T4"
        ],
        "insertion": [
            "Margo medialis (*onder* de spina scapulae)"
        ],
        "function": [
            "Fixatie van de scapula",
            "Trekt de scapula naar craniaal-mediaal"
        ]
    },
    {
        "name": "Levator scapulae",
        "origin": [
            "processus transversi C1 tot en met C4"
        ],
        "insertion": [
            "Angulus superior"
        ],
        "function": [
            "Trekt de scapula naar craniaal-mediaal",
            "Draait de angulus inferior naar mediaal"
        ]
    },
    {
        "name": "Serratus anterior pars superior",
        "origin": [
            "Costae 1 tot en met Costae 9"
        ],
        "insertion": [
            "Angulus superior"
        ],
        "function": [
            "Verschuiven van de scapula naar ventro-lateraal",
            "Heffen van de ribben bij gefixeerde schoudergordel (hulpademhalingsspier)",
            "Terugvoeren van de geheven arm (werkt antagonistisch t.o.v. pars inferior)"
        ]
    },
    {
        "name": "Serratus anterior pars intermedia",
        "origin": [
            "Costae 1 tot en met Costae 9"
        ],
        "insertion": [
            "Margo medialis"
        ],
        "function": [
            "Verschuiven van de scapula naar ventro-lateraal",
            "Heffen van de ribben bij gefixeerde schoudergordel (hulpademhalingsspier)"
        ]
    },
    {
        "name": "Serratus anterior pars inferior",
        "origin": [
            "Costae 1 tot en met Costae 9"
        ],
        "insertion": [
            "Margo medialis",
            "Angulus inferior"
        ],
        "function": [
            "Verschuiven van de scapula naar ventro-lateraal",
            "Heffen van de ribben bij gefixeerde schoudergordel (hulpademhalingsspier)",
            "Draaien van de scapula en zwenken van de angulus inferior naar lateraal-ventraal (maakt heffen arm boven 90 graden mogelijk)"
        ]
    },
    {
        "name": "Pectoralis major pars clavicularis",
        "origin": [
            "mediale helft van de clavicula"
        ],
        "insertion": [
            "Crista tuberculi majoris van de humerus"
        ],
        "function": [
            "Adductie en endorotatie (geheel)",
            "Anteversie",
            "Hulpademhalingsspier bij gefixeerde schoudergordel"
        ]
    },
    {
        "name": "Pectoralis major pars sternocostalis",
        "origin": [
            "Costae 2 tot en met costae 6"
        ],
        "insertion": [
            "Crista tuberculi majoris van de humerus"
        ],
        "function": [
            "Adductie en endorotatie (geheel)",
            "Anteversie",
            "Hulpademhalingsspier bij gefixeerde schoudergordel"
        ]
    },

    //Batch 1

    {
        "name": "Pectoralis major pars abdominalis",
        "origin": [
            "Lamina anterior van de rectusschede"
        ],
        "insertion": [
            "Crista tuberculi majoris van de humerus"
        ],
        "function": [
            "Adductie en endorotatie (geheel)",
            "Hulpademhalingsspier bij gefixeerde schoudergordel"
        ]
    },
    {
        "name": "Pectoralis minor",
        "origin": [
            "Costae 3 tot en met costae 5"
        ],
        "insertion": [
            "Processus Coracoideus van de scapula"
        ],
        "function": [
            "Laten zakken van de scapula; daarbij verplaats de angulus inferior naar dorso-mediaal",
            "Hulpademhalingsspier"
        ]
    },
    {
        "name": "Latissimus dorsi pars vertebalis",
        "origin": [
            "Processus spinosi T5 tot en met T12",
            "Via de fascia thoracolumbalis van de processus spinosi van alle Lumbale wervels en van het os sacrum"
        ],
        "insertion": [
            "Crista tuberculi minoris van de humerus"
        ],
        "function": [
            "Endorotatie",
            "Adductie",
            "Retroversie",
            "Hulpademhalingsspier (uitademing, 'hoestspier')"
        ]
    },
    {
        "name": "Latissimus dorsi pars iliaca",
        "origin": [
            "Achterste derde deel van de crista iliaca"
        ],
        "insertion": [
            "Crista tuberculi minoris van de humerus"
        ],
        "function": [
            "Endorotatie",
            "Adductie",
            "Retroversie",
            "Hulpademhalingsspier (uitademing, 'hoestspier')"
        ]
    },
    {
        "name": "Latissimus dorsi pars costalis",
        "origin": [
            "Costae 9 tot en met 12"
        ],
        "insertion": [
            "Crista tuberculi minoris van de humerus"
        ],
        "function": [
            "Endorotatie",
            "Adductie",
            "Retroversie",
            "Hulpademhalingsspier (uitademing, 'hoestspier')"
        ]
    },
    {
        "name": "Latissimus dorsi pars scapularis",
        "origin": [
            "Angulus inferior"
        ],
        "insertion": [
            "Crista tuberculi minoris van de humerus"
        ],
        "function": [
            "Endorotatie",
            "Adductie",
            "Retroversie",
            "Hulpademhalingsspier (uitademing, 'hoestspier')"
        ]
    },
    {
        "name": "Supraspinatus",
        "origin": [
            "Fossa supraspinata van de scapula"
        ],
        "insertion": [
            "Tuberculum majus van de humerus"
        ],
        "function": [
            "Abductie"
        ]
    },
    {
        "name": "Infraspinatus",
        "origin": [
            "Fossa infraspinata van de scapula"
        ],
        "insertion": [
            "Tuberculum majus van de humerus"
        ],
        "function": [
            "Exorotatie"
        ]
    },
    {
        "name": "Teres minor",
        "origin": [
            "Margo lateralis van de scapula"
        ],
        "insertion": [
            "Tuberculum majus van de humerus"
        ],
        "function": [
            "Exorotatie",
            "Zwakke adductie"
        ]
    },
    {
        "name": "Subscapularis",
        "origin": [
            "Fossa subscapularis van de scapula"
        ],
        "insertion": [
            "Tuberculum minus van de humerus"
        ],
        "function": [
            "Endorotatie"
        ]
    },

    //Batch 2

    {
        "name": "Deltoideus pars clavicularis",
        "origin": [
            "Lateraal derde deel van de clavicula"
        ],
        "insertion": [
            "Tuberositas deltoidea van de humerus"
        ],
        "function": [
            "Anteversie",
            "Endorotatie",
            "Adductie"
        ]
    },
    {
        "name": "Deltoideus pars acromialis",
        "origin": [
            "Acromion"
        ],
        "insertion": [
            "Tuberositas deltoidea van de humerus"
        ],
        "function": [
            "Abductie"
        ]
    },
    {
        "name": "Deltoideus pars spinalis",
        "origin": [
            "Spina scapulae"
        ],
        "insertion": [
            "Tuberositas deltoidea van de humerus"
        ],
        "function": [
            "Retroversie",
            "Exorotatie",
            "Adductie"
        ]
    },
    {
        "name": "Biceps branchii caput longum",
        "origin": [
            "Tuberculum supraglenoidale van de scapula"
        ],
        "insertion": [
            "Tuberositas radii",
            "Lacertus fibrosus"
        ],
        "function": [
            "Flexie in het elleboogbewricht",
            "Supinatie (bij een gebogen elleboog)",
            "Abductie in het schoudergewricht",
            "Endorotatie in het schoudergewricht",
            "Anteversie in het schoudergewricht"
        ]
    },
    {
        "name": "Biceps branchii caput brevis",
        "origin": [
            "Processus coracoideus van de scapula"
        ],
        "insertion": [
            "Tuberositas radii",
            "Lacertus fibrosus"
        ],
        "function": [
            "Flexie in het elleboogbewricht",
            "Supinatie (bij een gebogen elleboog)",
            "Anteversie in het schoudergewricht"
        ]
    },
    {
        "name": "Triceps branchii caput longum",
        "origin": [
            "Tuberculum infraglenoidale van de scapula"
        ],
        "insertion": [
            "Olecranon"
        ],
        "function": [
            "Extensie van het ellebooggewricht",
            "Retroversie in het schoudergewricht",
            "Adductie in het schoudergewricht"
        ]
    },
    {
        "name": "Triceps branchii caput mediale",
        "origin": [
            "Achtervlak van de humerus, distaal van de sulcus nervus radialis"
        ],
        "insertion": [
            "Olecranon"
        ],
        "function": [
            "Extensie van het ellebooggewricht"
        ]
    },
    {
        "name": "Triceps branchii caput laterale",
        "origin": [
            "Achtervlak van de humerus, proximaal van de sulcus nervus radialis"
        ],
        "insertion": [
            "Olecranon"
        ],
        "function": [
            "Extensie van het ellebooggewricht"
        ]
    },
    {
        "name": "Coracobrachialis",
        "origin": [
            "Processus coracoideus van de scapula"
        ],
        "insertion": [
            "Humerus (in het verlende van de crista tuberculi minor)"
        ],
        "function": [
            "Anteversie",
            "Adductie",
            "Endorotatie"
        ]
    },
    {
        "name": "Brachialis",
        "origin": [
            "Distale helft van het voorvlak van de humerus"
        ],
        "insertion": [
            "Tuberositas ulnae"
        ],
        "function": [
            "Flexie in het ellebooggewricht"
        ]
    },

    // Batch 3

    {
        "name": "Brachioradialis",
        "origin": [
            "Laterale zijde van de distale humerus"
        ],
        "insertion": [
            "Processus styloideus radii"
        ],
        "function": [
            "Flexie in het ellebooggewricht",
            "Semi-pronatiestand in de radio-ulnaire gewrichten"
        ]
    },
    {
        "name": "Supinator",
        "origin": [
            "Olecranon van de ulna",
            "Epicondylus lateralis",
            "Lig. collaterale radiale",
            "Lig. anulare radii"
        ],
        "insertion": [
            "Radius (tussen de tuberositas radii en de aanhechting van de m. pronator teres)"
        ],
        "function": [
            "Supinatie in de radio-ulnaire gewrichten"
        ]
    },
    {
        "name": "Extensor carpi radialis longus",
        "origin": [
            "Laterale zijde van de distale humerus"
        ],
        "insertion": [
            "Dorsale basis van het os metacarpi 2"
        ],
        "function": [
            "Zwakke buiger van het ellebooggewricht",
            "Dorsaalflexie",
            "Radiaal deviatie"
        ]
    },
    {
        "name": "Extensor carpi radialis brevis",
        "origin": [
            "Epicondylus lateralis van de humerus"
        ],
        "insertion": [
            "Dorsale basis van het os metacarpi 3"
        ],
        "function": [
            "Zwakke buiger van het ellebooggewricht",
            "Dorsaalflexie",
            "Radiaal deviatie"
        ]
    },
    {
        "name": "Extensor digitorum",
        "origin": [
            "Caput commune (epicondylus van de humerus)"
        ],
        "insertion": [
            "Dorsale aponeurose van de 2e tot en met 5e vinger"
        ],
        "function": [
            "Extensie van de 2e tot en met 5e vinger",
            "Spreiden van de 2e tot en met 5e vinger",
            "Dorsaalflexie"
        ]
    },
    {
        "name": "Flexor carpi radialis",
        "origin": [
            "Epicondylus medialis van de humerus"
        ],
        "insertion": [
            "Basis van het os metacarpi 2 (soms daarnaast ook 3)"
        ],
        "function": [
            "Radiaal deviatie",
            "Flexie van de handgewrichten"
        ]
    },
    {
        "name": "Flexor digitorum superficialis caput humerale",
        "origin": [
            "Epicondylus medialis van de humerus"
        ],
        "insertion": [
            "Aan de zijkanten van de middenkootjes van de 2e tot en met 5e vinger"
        ],
        "function": [
            "Zwakker buiger van het ellebooggewricht",
            "Flexie van de basis en middengewrichten van de 2e tot en met 5e vinger"
        ]
    },
    {
        "name": "Flexor digitorum superficialis caput ulnare",
        "origin": [
            "Processus coranoideus van de ulna"
        ],
        "insertion": [
            "Aan de zijkanten van de middenkootjes van de 2e tot en met 5e vinger"
        ],
        "function": [
            "Zwakker buiger van het ellebooggewricht",
            "Flexie van de basis en middengewrichten van de 2e tot en met 5e vinger"
        ]
    },
    {
        "name": "Flexor digitorum superficialis caput radiale",
        "origin": [
            "Distaal van de tuberositas radii"
        ],
        "insertion": [
            "Aan de zijkanten van de middenkootjes van de 2e tot en met 5e vinger"
        ],
        "function": [
            "Zwakker buiger van het ellebooggewricht",
            "Flexie van de basis en middengewrichten van de 2e tot en met 5e vinger"
        ]
    },
    {
        "name": "Flexor digitorum profundus",
        "origin": [
            "Proximale 2/3 van de buigzijde van de ulna en aangrenzende membrana interossea"
        ],
        "insertion": [
            "Palmaire zijde van de eindkootjes 2 tot en met 5"
        ],
        "function": [
            "Flexie van de basis-, midden- en eindgewrichten van de 2e tot en met 5e vinger"
        ]
    },

    // Batch 4

    {
        "name": "Palmaris longus",
        "origin": [
            "Epicondylus medialis van de humerus"
        ],
        "insertion": [
            "Palmaire aponeurose"
        ],
        "function": [
            "Zwakker buiger van het ellebooggewricht",
            "Palmairflexie",
            "Spannen van de palmaire aponeurose"
        ]
    },
    {
        "name": "Pronator teres caput humerale",
        "origin": [
            "Epicondylus medialis van de humerus"
        ],
        "insertion": [
            "Facies lateralis radii"
        ],
        "function": [
            "Zwakker buiger van het ellebooggewricht",
            "Pronatie in de radio-ulnaire gewrichten"
        ]
    },
    {
        "name": "Pronator teres caput ulnare",
        "origin": [
            "Processus coranoideus van de ulna"
        ],
        "insertion": [
            "Facies lateralis radii"
        ],
        "function": [
            "Zwakker buiger van het ellebooggewricht",
            "Pronatie in de radio-ulnaire gewrichten"
        ]
    },
    {
        "name": "Pronator quadratus",
        "origin": [
            "Distale kwart van de voorzijde van de ulna"
        ],
        "insertion": [
            "Distale kwart van de voorzijde van de radius"
        ],
        "function": [
            "Pronatie",
            "Borgt het distale radio-ulnaire gewricht"
        ]
    },
    {
        "name": "Abductor pollicis brevis",
        "origin": [
            "Os scaphoideum",
            "Retinaculum musculorum flexorum"
        ],
        "insertion": [
            "Basis van de proximale falanx van de duim"
        ],
        "function": [
            "Abductie van het duimzadelgewricht",
            "Extensie van het duimbasisgewricht"
        ]
    },
    {
        "name": "Abductor pollicis longus",
        "origin": [
            "Dorsale zijde van de radius en ulna",
            "Membrana interossea"
        ],
        "insertion": [
            "Basis van het os metacarpi 1"
        ],
        "function": [
            "Radiaal deviatie",
            "Abductie van het duimzadelgewricht",
            "Helpt bij supinatie"
        ]
    },
    {
        "name": "Extensor pollicis brevis",
        "origin": [
            "Dorsale zijde van de radius en membrana interossea"
        ],
        "insertion": [
            "Basis van de proximale falanx van de duim"
        ],
        "function": [
            "Radiaal deviatie",
            "Extensie van het basis- en eindgewricht van de duim",
            "Helpt bij supinatie"
        ]
    },
    {
        "name": "Extensor pollicis longus",
        "origin": [
            "Dorsale zijde van de ulna en membrana interossea"
        ],
        "insertion": [
            "Basis van de distale falanx van de duim"
        ],
        "function": [
            "Radiaal deviatie",
            "Extensie van het basis- en eindgewricht van de duim",
            "Dorsaleflexie",
            "Adductie in het duimzadelgewricht",
            "Helpt bij supinatie"
        ]
    },
    {
        "name": "Flexor pollicis brevis caput superficiale",
        "origin": [
            "Retinaculum musculorum flexorum"
        ],
        "insertion": [
            "Basis van de proximale falanx van de duim"
        ],
        "function": [
            "Flexie in het basisduimgewricht"
        ]
    },
    {
        "name": "Flexor pollicis brevis caput profundum",
        "origin": [
            "Os capitatum",
            "Os trapezium"
        ],
        "insertion": [
            "Basis van de proximale falanx van de duim"
        ],
        "function": [
            "Flexie in het basisduimgewricht"
        ]
    },

    // Batch 5

    {
        "name": "Flexor pollicis longus",
        "origin": [
            "Middengedeelte van het voorvlak van de radius"
        ],
        "insertion": [
            "Palmaire zijde van het eindkootje van de duim"
        ],
        "function": [
            "Radiaal deviatie",
            "Palmairflexie",
            "Flexie van het basis- en eindgewricht van de duim"
        ]
    },
    {
        "name": "Adductor pollicis caput transversum",
        "origin": [
            "Palmair vlak van het 3e middenhandsbeentje"
        ],
        "insertion": [
            "Basis van de proximale falanx van de duim"
        ],
        "function": [
            "Flexie van het basisduimgewricht",
            "Adductie in het duimzadelgewricht"
        ]
    },
    {
        "name": "Adductor pollicis caput obliquum",
        "origin": [
            "Os capitatum",
            "Basis van het os metacarpi 2"
        ],
        "insertion": [
            "Basis van de proximale falanx van de duim"
        ],
        "function": [
            "Flexie van het basisduimgewricht",
            "Adductie in het duimzadelgewricht"
        ]
    },
    



    {
        "name": "Tensor fasciae latae",
        "origin": [
            "Spina iliaca anterior superior"
        ],
        "insertion": [
            "Tractus iliotibialis"
        ],
        "function": [
            "Spant de fascia lata aan",
            "Abductie in het heupgewricht",
            "Flexie in het heupgewricht",
            "Endorotatie in het heupgewricht"
        ]
    },
    {
        "name": "Gluteus maximus craniale vezels",
        "origin": [
            "Zijgedeelte van de facies dorsalis van het os sacrum",
            "Achterste deel van de facies glutea van het os ilium",
            "Fascia thoracolumbalis en met diepe vezels aan het lig. sacrotuberale"
        ],
        "insertion": [
            "Tractus iliotibialis"
        ],
        "function": [
            "Extensie in het heupgewricht",
            "Exorotatie in het heupgewricht",
            "Stabiliseert het heupgewricht zowel in het sagittale als ook in het frontale vlak",
            "Abductie"
        ]
    },
    {
        "name": "Gluteus maximus caudale vezels",
        "origin": [
            "Zijgedeelte van de facies dorsalis van het os sacrum",
            "Achterste deel van de facies glutea van het os ilium",
            "Fascia thoracolumbalis en met diepe vezels aan het lig. sacrotuberale"
        ],
        "insertion": [
            "Tuberositas glutea"
        ],
        "function": [
            "Extensie in het heupgewricht",
            "Exorotatie in het heupgewricht",
            "Stabiliseert het heupgewricht zowel in het sagittale als ook in het frontale vlak",
            "Adductie"
        ]
    },
    {
        "name": "Gluteus medius",
        "origin": [
            "Facies glutea van het os ilium"
        ],
        "insertion": [
            "Lateraal vlak van de trochantor major van het femur"
        ],
        "function": [
            "Abductie",
            "Stabilisatie van het bekken in het frontale vlak",
            "Flexie in het voorste deel",
            "Endorotatie in het voorste deel",
            "Extensie in het achterste deel",
            "Exorotatie in het achterste deel"
        ]
    },
    {
        "name": "Gluteus minimus",
        "origin": [
            "Facies glutea van het os ilium"
        ],
        "insertion": [
            "Mediaal vlak van de trochantor major van het femur"
        ],
        "function": [
            "Abductie",
            "Stabilisatie van het bekken in het frontale vlak",
            "Flexie in het voorste deel",
            "Endorotatie in het voorste deel",
            "Extensie in het achterste deel",
            "Exorotatie in het achterste deel"
        ]
    },
    {
        "name": "Pectineus",
        "origin": [
            "Pecten ossis pubis"
        ],
        "insertion": [
            "Linea pectinea",
            "Proximale linea aspera van het femur"
        ],
        "function": [
            "Adductie in het heupgewricht",
            "Exorotatie in het heupgewricht",
            "Lichte flexie in het heupgewricht",
            "Stabilisatie van het bekken in het frontale en het sagittale vlak"
        ]
    },
    {
        "name": "Adductor longus",
        "origin": [
            "r. superior van het os pubis",
            "voorzijde van de symfyse"
        ],
        "insertion": [
            "Linea aspera: labium mediale in het middelste derde deel van het femur"
        ],
        "function": [
            "Adductie in het heupgewricht",
            "Flexie (tot 70 graden) in het heupgewricht (extensie vanaf 80 graden buiging)",
            "Stabilisatie van het bekken in het frontale en het sagittale vlak"
        ]
    },

    // Batch 6

    {
        "name": "Gracilis",
        "origin": [
            "R. inferior van het os pubis onder de symfyse"
        ],
        "insertion": [
            "Mediaal van de tuberositas tibiae in de 'pes anserinus superficialis'"
        ],
        "function": [
            "Adductie in het heupgewricht",
            "Flexie in het heupgewricht",
            "Flexie in het kniegewricht",
            "Endorotatie in het kniegewricht"
        ]
    },
    {
        "name": "Adductor brevis",
        "origin": [
            "R. inferior van het os pubis"
        ],
        "insertion": [
            "Linea aspera: labium mediale in het bovenste derde deel van het femur"
        ],
        "function": [
            "Adductie in het heupgewricht",
            "Flexie (tot 70 graden) in het heupgewricht",
            "Stabilisatie van het bekken in het frontale en het sagittale vlak"
        ]
    },
    {
        "name": "Adductor magnus",
        "origin": [
            "r. inferior van het os pubis",
            "r. ossis ischii",
            "tuber ischiadicum"
        ],
        "insertion": [
            "Epicondylus medialis van het femur",
            "Labium mediale van het linea aspera"
        ],
        "function": [
            "Exorotatie in het heupgewricht",
            "Adductie in het heupgewricht",
            "Extensie in het heupgewricht",
            "Stabilisatie van het bekken in het sagittale en frontale vlak"
        ]
    },
    {
        "name": "Gemellus superior",
        "origin": [
            "Spina ischiadica van het os ischii"
        ],
        "insertion": [
            "Samen met de aanhechtingspees van de m. obturatorius internus in de fossa trochanterica"
        ],
        "function": [
            "Exorotatie in het heupgewricht",
            "Adductie in het heupgewricht",
            "Extensie in het heupgewricht"
        ]
    },
    {
        "name": "Obturatorius internus",
        "origin": [
            "Binnenzijde van de membrana obturatoria en de benige rand ervan"
        ],
        "insertion": [
            "Fossa trochanterica van het femur"
        ],
        "function": [
            "Exorotatie in het heupgewricht",
            "Adductie in het heupgewricht",
            "Extensie in het heupgewricht"
        ]
    },
    {
        "name": "Obturatorius externus",
        "origin": [
            "Buitenzijde van de membrana obturatoria en aangrenzende botten"
        ],
        "insertion": [
            "Fossa trochanterica van het femur"
        ],
        "function": [
            "Exorotatie in het heupgewricht",
            "Adductie in het heupgewricht",
            "Stabilisatie van het bekken in het sagittale vlak"
        ]
    },
    {
        "name": "Quadratus femoris",
        "origin": [
            "Laterale rand van het tuber ischiadicum van het os ischii"
        ],
        "insertion": [
            "Crista intertrochanterica van het femur"
        ],
        "function": [
            "Exorotatie in het heupgewricht",
            "Adductie in het heupgewricht"
        ]
    },
    {
        "name": "Iliacus",
        "origin": [
            "Fossa iliaca"
        ],
        "insertion": [
            "Gezamelijk als m. iliopsoas aan de trochantor minor van het femur"
        ],
        "function": [
            "Flexie in het heupgewricht",
            "Exorotatie in het heupgewricht",
            "Lendenwervelkolom: Bij eenzijdige contractie laterale flexie naar de ipsilaterale zijde",
            "Lendenwervelkolom: Bij tweezijdige contractie oprichten van de romp uit rugligging"
        ]
    },
    {
        "name": "Psoas major oppervlakkig laag",
        "origin": [
            "Zijvlakken van de lichamen T12 tot en met L4 evenals de bijbehorende disci intervertebralis"
        ],
        "insertion": [
            "Gezamelijk als m. iliopsoas aan de trochantor minor van het femur"
        ],
        "function": [
            "Flexie in het heupgewricht",
            "Exorotatie in het heupgewricht",
            "Lendenwervelkolom: Bij eenzijdige contractie laterale flexie naar de ipsilaterale zijde",
            "Lendenwervelkolom: Bij tweezijdige contractie oprichten van de romp uit rugligging"
        ]
    },
    {
        "name": "Psoas major diepe laag",
        "origin": [
            "Proccessus transversii van de L1 tot en met L5"
        ],
        "insertion": [
            "Gezamelijk als m. iliopsoas aan de trochantor minor van het femur"
        ],
        "function": [
            "Flexie in het heupgewricht",
            "Exorotatie in het heupgewricht",
            "Lendenwervelkolom: Bij eenzijdige contractie laterale flexie naar de ipsilaterale zijde",
            "Lendenwervelkolom: Bij tweezijdige contractie oprichten van de romp uit rugligging"
        ]
    },

    // Batch 7
    // {
    //     "name": "Psoas major diepe laag",
    //     "origin": [
    //         "Proccessus costarii van de L1 tot en met L5"
    //     ],
    //     "insertion": [
    //         "Gezamelijk als m. iliopsoas aan de trochantor minor van het femur"
    //     ],
    //     "function": [
    //         "Flexie in het heupgewricht",
    //         "Exorotatie in het heupgewricht",
    //         "Lendenwervelkolom: Bij eenzijdige contractie laterale flexie naar de ipsilaterale zijde",
    //         "Lendenwervelkolom: Bij tweezijdige contractie oprichten van de romp uit rugligging"
    //     ]
    // },
    {
        "name": "Sartorius",
        "origin": [
            "Spina iliaca anterior superior"
        ],
        "insertion": [
            "Mediaal van de tuberositas tibiae aan de 'pes anserinus superficialis'"
        ],
        "function": [
            "Flexie in het heupgewricht",
            "Abductie in het heupgewricht",
            "Exorotatie in het heupgewricht",
            "Flexie in het kniegewricht",
            "Endorotatie in het kniegewricht"
        ]
    },
    //Quadriceps femoris
    {
        "name": "Rectus femoris",
        "origin": [
            "Spina iliaca anterior inferior",
            "Dak van de heupkom"
        ],
        "insertion": [
            "Via het lig. patellae aan de tuberositas tibiae"
        ],
        "function": [
            "Flexie in het heupgewricht",
            "Extensie in het kniegewricht"
        ]
    },
    {
        "name": "Vastus lateralis",
        "origin": [
            "Labium laterale van de linea aspera",
            "Lateraal vlak van de trochantor major"
        ],
        "insertion": [
            "Via het lig. patellae aan de tuberositas tibiae",
            "via de patella als ligamentum patellae aan de tuberositas tibiae"
        ],
        "function": [
            "Extensie in het kniegewricht"
        ]
    },
    {
        "name": "Vastus medialis",
        "origin": [
            "Labium mediale van de linea aspera",
            "Distale deel van de linea intertrochanterica"
        ],
        "insertion": [
            "Via het lig. patellae aan de tuberositas tibiae",
            "Via de patella als ligamentum patellae aan de tuberositas tibiae",
        ],
        "function": [
            "Extensie in het kniegewricht"
        ]
    },
    {
        "name": "Semimembranosus",
        "origin": [
            "Tuber ischiadicum"
        ],
        "insertion": [
            "Pes anserinus profundus"
        ],
        "function": [
            "Extensie in het heupgewricht",
            "Stabilisatie van het bekken in het sagittale vlak",
            "Flexie in het kniegewricht",
            "Endorotatie in het kniegewricht"
        ]
    },
    {
        "name": "Semitendinosus",
        "origin": [
            "Tuber ischiadicum",
            "Lig. sacrotuberale"
        ],
        "insertion": [
            "Mediaal van de tuberositas tibiae in de pes anserinus superficialis"
        ],
        "function": [
            "Extensie in het heupgewricht",
            "Stabilisatie van het bekken in het sagittale vlak",
            "Flexie in het kniegewricht",
            "Endorotatie in het kniegewricht"
        ]
    },
    {
        "name": "Biceps femoris caput longum",
        "origin": [
            "tuber ischiadicum",
            "Lig. sacrotuberale"
        ],
        "insertion": [
            "Caput fibulae"
        ],
        "function": [
            "Extensie in het heupgewricht",
            "Stabilisatie van het bekken in het sagittale vlak",
            "Flexie in het kniegewricht",
            "Endorotatie in het kniegewricht"
        ]
    },
    {
        "name": "Biceps femoris caput breve",
        "origin": [
            "Labium laterale van de linea aspera in het middelste derde deel van het femur"
        ],
        "insertion": [
            "Caput fibulae"
        ],
        "function": [
            "Flexie in het kniegewricht",
            "Endorotatie in het kniegewricht"
        ]
    },
    //Triceps surae
    {
        "name": "Gastrocnemius",
        "origin": [
            "Caput mediale: epicondylus medialis femoris",
            "Caput laterale: epicondylus lateralis femoris"
        ],
        "insertion": [
            "Via de achillespees (tendo calcaneus) aan het tuber calcanei"
        ],
        "function": [
            "Plantaire flexie in het bovenste spronggewricht",
            "Inversie in het onderste spronggewricht",
            "Flexie in het kniegewricht"
        ]
    },

    // Batch 8

    {
        "name": "Soleus",
        "origin": [
            "Dorsale zijde van het caput en collum fibulae",
            "Via de arcus tendineus aan de linea musculi solei van de tibia bevestigd"
        ],
        "insertion": [
            "Via de achillespees (tendo calcaneus) aan het tuber calcanei"
        ],
        "function": [
            "Plantaire flexie in het bovenste spronggewricht",
            "Inversie in het onderste spronggewricht"
        ]
    },
    {
        "name": "Plantaris",
        "origin": [
            "Proximaal van het caput laterale van de gastrocnemius"
        ],
        "insertion": [
            "Via de achillespees aan het tuber calcanei"
        ],
        "function": [
            "Endorotatie van de voet",
            "Flexie van de knie"
        ]
    },
    {
        "name": "Tibialis posterior",
        "origin": [
            "Membrana interossea cruris",
            "Aangrenzende randen van tibia en fibula"
        ],
        "insertion": [
            "Tuberositas ossis navicularis",
            "Ossa cuneiformia mediale, intermedium en laterale",
            "bases van de ossa metatarsi 2 tot en met 5"
        ],
        "function": [
            "Plantaire flexie in het bovenste spronggewricht",
            "Inversie in het onderste spronggewricht"
        ]
    },
    {
        "name": "Flexor digitorum longus",
        "origin": [
            "Middelste derde deel van de facies posterior van de tibia"
        ],
        "insertion": [
            "Bases van de eindfalangen 2 tot en met 5"
        ],
        "function": [
            "Plantaire flexie in het bovenste spronggewricht",
            "Inversie in het onderste spronggewricht",
            "Plantaire flexie in de basis-, midden- en eindgewrichten van de digiti pedis 2 tot en met 5"
        ]
    },
    {
        "name": "Flexor digitorum brevis",
        "origin": [
            "Mediaal uitsteeksel van het tuber calcanei",
            "Plantaire aponeurose"
        ],
        "insertion": [
            "Aan de zijkanten van de middenfalangen van de 2e tot en met 5e teen"
        ],
        "function": [
            "Plantaire flexie in de basis- en middengewrichten van de digiti pedis 2 tot en met 5"
        ]
    },
    {
        "name": "Flexor hallucis longus",
        "origin": [
            "Distale tweederde deel van de facies posterior fibulae, aangrenzende membrana interossea cruris"
        ],
        "insertion": [
            "Basis van de eindfalanx van de grote teen"
        ],
        "function": [
            "Plantaire flexie in het bovenste spronggewricht",
            "Inversie in het onderste spronggewricht",
            "Plantaire flexie in de basis- en eindgewrichten van de grote teen"
        ]
    },
    {
        "name": "Tibialis anterior",
        "origin": [
            "Bovenste tweederde deel van de facies lateralis tibiae",
            "Membrana interossea cruris",
            "Bovenste deel van de fascia cruris superficialis"
        ],
        "insertion": [
            "Mediaal en plantair oppervlak van het os cuneiforme mediale",
            "Mediale basis van het os metatarsi 1"
        ],
        "function": [
            "Dorsale flexie in het bovenste spronggewricht",
            "Eversie in het onderste spronggewricht",
            "Extensie in de basis-, midden- en eindgewrichten van de 2e tot en met 5e teen"
        ]
    },
    {
        "name": "Extensor hallucis longus",
        "origin": [
            "Middelste derde deel van de facies medialis fibulae",
            "Membrana interossea cruris"
        ],
        "insertion": [
            "Dorsale aponeurose van de grote teen",
            "Basis van de eindfalanx"
        ],
        "function": [
            "Dorsale flexie in het bovenste spronggewricht",
            "Ondersteunt zowel de eversie als inversie, afhankelijk van de uitgangspositie van de voet",
            "Extensie in de basis- en eindgewrichten van de grote teen"
        ]
    },
    {
        "name": "Extensor digitorum longus",
        "origin": [
            "Condylus lateralis tibiae",
            "Caput fibulae",
            "Margo anterior fibulae",
            "Membrana interrossea cruris"
        ],
        "insertion": [
            "Via vier deelpezen aan de dorsale aponeurose van de 2e tot en met 5e teen",
            "Basis van de distale falanx van de 2e tot en met 5e teen"
        ],
        "function": [
            "Dorsale flexie in het bovenste spronggewricht",
            "Eversie in het onderste spronggewricht",
            "Extensie in de basis-, midden- en eindgewrichten van de 2e tot en met 5e teen"
        ]
    },
    {
        "name": "Extensor digitorum brevis",
        "origin": [
            "Dorsaal vlak van de calcaneus"
        ],
        "insertion": [
            "Dorsale aponeurose van de 2e tot en met 4e teen",
            "Bases van de middenfalangen 2 tot en met 4"
        ],
        "function": [
            "Dorsale flexie in de basis en middengewrichten van de tenen 2 tot en met 4"
        ]
    },

    // Batch 9

    {
        "name": "Fibularis longus",
        "origin": [
            "Caput fibulae",
            "Proximale tweederde deel van de facies lateralis fibulae"
        ],
        "insertion": [
            "Plantair vlak van het os cuneiforme mediale",
            "Basis van het os metatarsi 1"
        ],
        "function": [
            "Plantaire flexie in het bovenste spronggewricht",
            "Eversie in het onderste spronggewricht"
        ]
    },
    {
        "name": "Fibularis brevis",
        "origin": [
            "Distale helft van de facies lateralis fibulae",
            "Gedeeltelijk aan de septa intermuscularia"
        ],
        "insertion": [
            "Tuberositas ossis metatarsi 5"
        ],
        "function": [
            "Plantaire flexie in het bovenste spronggewricht",
            "Eversie in het onderste spronggewricht"
        ]
    },

    {
        "name": "Teres major",
        "origin": [
            "Angulus inferior van de scapula"
        ],
        "insertion": [
            "Crista tuberculi minoris van de humerus"
        ],
        "function": [
            "Endorotatie",
            "Adductie",
            "Retroversie"
        ]
    },
    {
        "name": "Piriformis",
        "origin": [
            "Facies pelvina van het os sacrum"
        ],
        "insertion": [
            "Punt van de trochantor major van het femur"
        ],
        "function": [
            "Exorotatie in het heupgewricht",
            "Abductie in het heupgewricht",
            "Extensie in het heupgewricht",
            "Stabilisatie in het heupgewricht"
        ]
    },
    {
        "name": "Gemellus inferior",
        "origin": [
            "Tuber ischiadicum van het os ischii"
        ],
        "insertion": [
            "Samen met de aanhechtingspees van de m. obturatorius internus in de fossa trochanterica"
        ],
        "function": [
            "Exorotatie in het heupgewricht",
            "Adductie in het heupgewricht",
            "Extensie in het heupgewricht"
        ]
    },
    {
        "name": "Vastus intermedius",
        "origin": [
            "Voorzijde van de femurschacht"
        ],
        "insertion": [
            "Via het lig. patellae aan de tuberositas tibiae"
        ],
        "function": [
            "Extensie in het kniegewricht"
        ]
    },
    {
        "name": "Extensor carpi ulnaris",
        "origin": [
            "Caput commune (epicondylus medialis van de humerus)",
            "Caput ulnare (dorsale zijde van de ulna)"
        ],
        "insertion": [
            "Basis van het os metacarpi 5"
        ],
        "function": [
            "Dorsaalflexie",
            "Ulnair deviatie"
        ]
    },
];

(() => {
    const container = document.getElementById("muscles");
    
    for (let muscle = 0; muscle < data.length; muscle++) {
        const card = document.createElement("div");
        card.classList.add("card");
        
        const nameLabel = document.createElement("div");
        nameLabel.classList.add("label");
        nameLabel.innerText = "Naam";
        
        const nameList = document.createElement("ul");
        const nameItem = document.createElement("li");
        nameItem.innerHTML = data[muscle].name;
        nameList.appendChild(nameItem);

        const originLabel = document.createElement("div");
        originLabel.classList.add("label");
        originLabel.innerText = "Origo";

        const originList = document.createElement("ul");
        for (let origin = 0; origin < data[muscle].origin.length; origin++) {
            const originItem = document.createElement("li");
            originItem.innerHTML = data[muscle].origin[origin];
            originList.appendChild(originItem);
        }
        
        const insertionLabel = document.createElement("div");
        insertionLabel.classList.add("label");
        insertionLabel.innerText = "Insertie";

        const insertionList = document.createElement("ul");
        for (let insertion = 0; insertion < data[muscle].insertion.length; insertion++) {
            const insertionItem = document.createElement("li");
            insertionItem.innerHTML = data[muscle].insertion[insertion];
            insertionList.appendChild(insertionItem);
        }
        
        const functionLabel = document.createElement("div");
        functionLabel.classList.add("label");
        functionLabel.innerText = "Functie";

        const functionList = document.createElement("ul");
        for (let f = 0; f < data[muscle].function.length; f++) {
            const functionItem = document.createElement("li");
            functionItem.innerHTML = data[muscle].function[f];
            functionList.appendChild(functionItem);
        }
       

        card.appendChild(nameLabel);
        card.appendChild(nameList);

        card.appendChild(originLabel);
        card.appendChild(originList);

        card.appendChild(insertionLabel);
        card.appendChild(insertionList);

        card.appendChild(functionLabel);
        card.appendChild(functionList);

        if (muscle % 10 === 0) {
            let title = document.createElement("div");
            title.classList.add("title");
            title.innerText = `Groep ${muscle * 0.1 + 1}`;
            container.appendChild(title);
        }

        container.appendChild(card);
    }
})();