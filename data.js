var APP_DATA = {
  "scenes": [
    {
      "id": "0-entre-extrieure",
      "name": "Entrée extérieure",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.13491190703591727,
        "pitch": 0.006817621904065874,
        "fov": 1.1136366381289047
      },
      "linkHotspots": [
        {
          "yaw": -0.06279522350344635,
          "pitch": 0.039771489821724515,
          "rotation": 6.283185307179586,
          "target": "1-entre-intrieure"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entre-intrieure",
      "name": "Entrée intérieure",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.063233234982917,
        "pitch": 0.002011990312787759,
        "fov": 1.1136366381289047
      },
      "linkHotspots": [
        {
          "yaw": 1.3439808812930298,
          "pitch": 0.1671204046801389,
          "rotation": 0,
          "target": "0-entre-extrieure"
        },
        {
          "yaw": -0.13662931462286032,
          "pitch": 0.10681687727493738,
          "rotation": 0,
          "target": "2-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.173917333167676,
        "pitch": 0.17442248699435403,
        "fov": 1.1136366381289047
      },
      "linkHotspots": [
        {
          "yaw": 3.078103297927303,
          "pitch": 0.39910708138627626,
          "rotation": 0,
          "target": "1-entre-intrieure"
        },
        {
          "yaw": 0.1579207580226285,
          "pitch": 0.17777437080630243,
          "rotation": 0.7853981633974483,
          "target": "3-couloir-1"
        },
        {
          "yaw": -0.43280004099996816,
          "pitch": 0.1757668625965607,
          "rotation": 5.497787143782138,
          "target": "14-sortie-siai"
        },
        {
          "yaw": 0.7934928417943734,
          "pitch": 0.006825838499208814,
          "rotation": 0,
          "target": "15-escalier-vers-tage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-couloir-1",
      "name": "Couloir 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7122711190729696,
          "pitch": 0.35212720467616343,
          "rotation": 0,
          "target": "2-hall"
        },
        {
          "yaw": -0.019388796868783587,
          "pitch": 0.1898897963985675,
          "rotation": 0,
          "target": "4-angle-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-angle-1",
      "name": "Angle 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0348038990716972,
          "pitch": 0.31223021174755416,
          "rotation": 0,
          "target": "3-couloir-1"
        },
        {
          "yaw": -0.049855795903411604,
          "pitch": 0.31973255668173906,
          "rotation": 0,
          "target": "5-zone-travaux"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-zone-travaux",
      "name": "Zone Travaux",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.7440107622494789,
        "pitch": 0.17268690581916246,
        "fov": 1.1136366381289047
      },
      "linkHotspots": [
        {
          "yaw": -2.8513005343374545,
          "pitch": 0.6532739548929491,
          "rotation": 0,
          "target": "4-angle-1"
        },
        {
          "yaw": -0.8680283980220604,
          "pitch": 0.12898699801632318,
          "rotation": 0,
          "target": "6-couloir-sies"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.36574822409448693,
          "pitch": -0.16742157179568906,
          "title": "Le coin des Travaux<br>",
          "text": "Pas un chat, ils doivent sûrement être sur chantier (ou au MyBeer ?)<br>"
        }
      ]
    },
    {
      "id": "6-couloir-sies",
      "name": "Couloir SIES",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.1127339168428616,
        "pitch": -0.020874442024641837,
        "fov": 1.1136366381289047
      },
      "linkHotspots": [
        {
          "yaw": 2.9380137851830863,
          "pitch": 0.44304123425701825,
          "rotation": 0,
          "target": "5-zone-travaux"
        },
        {
          "yaw": -0.06839409952273456,
          "pitch": 0.1736744280006164,
          "rotation": 0,
          "target": "7-sies"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.4488836492907398,
          "pitch": 0.14294293810809755,
          "title": "Protection visuelle<br>",
          "text": "Toujours se protéger le visage avec le casque Hydra lors de la lecture des mails<br>"
        }
      ]
    },
    {
      "id": "7-sies",
      "name": "SIES",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.22586676345012613,
        "pitch": 0.07041966094763197,
        "fov": 1.1136366381289047
      },
      "linkHotspots": [
        {
          "yaw": 2.8779879002938227,
          "pitch": 0.4993412769529648,
          "rotation": 0,
          "target": "6-couloir-sies"
        },
        {
          "yaw": -0.1727644120723948,
          "pitch": -0.04384731599838787,
          "rotation": 0,
          "target": "8-flchettes"
        },
        {
          "yaw": -1.842716707803934,
          "pitch": 0.2586621767943367,
          "rotation": 5.497787143782138,
          "target": "9-vers-siai"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.3910858607036829,
          "pitch": 0.007439227568816875,
          "title": "Protection mécanique<br>",
          "text": "Port du casque requis lorsque les chargés de Travaux viennent râler sur les schémas<br>"
        }
      ]
    },
    {
      "id": "8-flchettes",
      "name": "Fléchettes",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.033220713534746,
          "pitch": 0.4253052291858026,
          "rotation": 0,
          "target": "7-sies"
        },
        {
          "yaw": -2.5241550021291133,
          "pitch": 0.4199473208435798,
          "rotation": 0,
          "target": "9-vers-siai"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.39289012527766864,
          "pitch": 0.05795692929485341,
          "title": "Jeu de fléchettes<br>",
          "text": "De palpitantes batailles se déroulent à cet endroit lors des pauses du midi<br>"
        },
        {
          "yaw": -1.578225756320819,
          "pitch": 0.10901457535799253,
          "title": "Protection auditive<br>",
          "text": "Port du casque audio requis afin de se détendre après un énième VISA inutile<br>"
        }
      ]
    },
    {
      "id": "9-vers-siai",
      "name": "Vers SIAI",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2565238153320646,
          "pitch": 0.5721066555060332,
          "rotation": 7.0685834705770345,
          "target": "7-sies"
        },
        {
          "yaw": 2.439461106968257,
          "pitch": 0.3478267948158056,
          "rotation": 5.497787143782138,
          "target": "8-flchettes"
        },
        {
          "yaw": -0.1657536349682882,
          "pitch": 0.41658024452058484,
          "rotation": 0,
          "target": "10-siai-zone-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.14093782366379415,
          "pitch": 0.05559546856564879,
          "title": "L'Antre du SIAI<br>",
          "text": "Tellement fatigués du SIES, ils ont dès à présent décidé de nous limiter l'accès...<br>"
        }
      ]
    },
    {
      "id": "10-siai-zone-1",
      "name": "SIAI zone 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0040406461056683,
          "pitch": 0.31894794122359116,
          "rotation": 0,
          "target": "9-vers-siai"
        },
        {
          "yaw": -0.02927291153566358,
          "pitch": 0.30704431526830334,
          "rotation": 0,
          "target": "11-couloir-siai-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.066891877831919,
          "pitch": 0.14818495290434974,
          "title": "Carré VIP SIES<br>",
          "text": "Ici ça parle de courbes de disjoncteurs, de redresseurs dodécaphasés, d'Icc max et de fléchettes<br>"
        }
      ]
    },
    {
      "id": "11-couloir-siai-1",
      "name": "Couloir SIAI 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.11522837116575957,
          "pitch": 0.24723363038492074,
          "rotation": 0,
          "target": "12-angle-siai-1"
        },
        {
          "yaw": 3.0370712018506456,
          "pitch": 0.45509778755328867,
          "rotation": 0,
          "target": "10-siai-zone-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-angle-siai-1",
      "name": "Angle SIAI 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.605711338780008,
          "pitch": 0.24329423869814093,
          "rotation": 0,
          "target": "11-couloir-siai-1"
        },
        {
          "yaw": -0.07328515026910054,
          "pitch": 0.37017911788489144,
          "rotation": 0,
          "target": "13-couloir-siai-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-couloir-siai-2",
      "name": "Couloir SIAI 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0606876123602422,
          "pitch": 0.30906425175965424,
          "rotation": 7.0685834705770345,
          "target": "12-angle-siai-1"
        },
        {
          "yaw": -0.03390120814135855,
          "pitch": 0.3163699201588681,
          "rotation": 0,
          "target": "14-sortie-siai"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6590300541359078,
          "pitch": 0.03760162723633087,
          "title": "Salle du SIAI<br>",
          "text": "<div>Certaines choses obscures ont l'air de se tramer par ici...</div><div>Big Brother is watching you ?<br></div>"
        }
      ]
    },
    {
      "id": "14-sortie-siai",
      "name": "Sortie SIAI",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0818759279991266,
          "pitch": 0.45506553303851227,
          "rotation": 0,
          "target": "13-couloir-siai-2"
        },
        {
          "yaw": -0.10038460203451294,
          "pitch": 0.3423774870231142,
          "rotation": 0,
          "target": "2-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-escalier-vers-tage",
      "name": "Escalier vers étage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1088183728254597,
          "pitch": 0.8336614846786912,
          "rotation": 5.497787143782138,
          "target": "2-hall"
        },
        {
          "yaw": -0.8946572874078882,
          "pitch": -0.1616323056903184,
          "rotation": 5.497787143782138,
          "target": "16-etage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-etage",
      "name": "Etage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.10332816712915,
          "pitch": 0.8429911794300899,
          "rotation": 7.0685834705770345,
          "target": "15-escalier-vers-tage"
        },
        {
          "yaw": -1.5678480183718762,
          "pitch": 0.5511843364621516,
          "rotation": 6.283185307179586,
          "target": "17-coin-tage-1"
        },
        {
          "yaw": 0.44808317332115166,
          "pitch": 0.6203895402955588,
          "rotation": 5.497787143782138,
          "target": "28-entre-rfectoire"
        },
        {
          "yaw": 1.2741974902206188,
          "pitch": 0.6758399367105223,
          "rotation": 0.7853981633974483,
          "target": "27-couloir-tage-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-coin-tage-1",
      "name": "Coin étage 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.8326155853355779,
        "pitch": 0.2095997065538704,
        "fov": 1.1136366381289047
      },
      "linkHotspots": [
        {
          "yaw": 1.657876124306104,
          "pitch": 0.5651418602729876,
          "rotation": 0.7853981633974483,
          "target": "16-etage"
        },
        {
          "yaw": -0.024515658660750006,
          "pitch": 0.31538816963991323,
          "rotation": 5.497787143782138,
          "target": "18-couloir-tage-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.5430029772013363,
          "pitch": 0.06523777424581034,
          "title": "Petit coin réunion<br>",
          "text": "(ou rage room, à voir)<br>"
        }
      ]
    },
    {
      "id": "18-couloir-tage-1",
      "name": "Couloir étage 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0753618453898532,
          "pitch": 0.5826996530716748,
          "rotation": 0.7853981633974483,
          "target": "17-coin-tage-1"
        },
        {
          "yaw": -0.044557056353554,
          "pitch": 0.15606185035273334,
          "rotation": 0,
          "target": "19-coin-tage-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-coin-tage-2",
      "name": "Coin étage 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.090878408038515,
          "pitch": 0.3962599783810461,
          "rotation": 0,
          "target": "18-couloir-tage-1"
        },
        {
          "yaw": -0.029293813384940748,
          "pitch": 0.42085109180554525,
          "rotation": 0.7853981633974483,
          "target": "20-couloir-tage-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.471527874360417,
          "pitch": 0.15221495289455333,
          "title": "ON NE JUGE PAS<br>",
          "text": "Piètre performance de ma part afin de flouter les visages qui ne voulaient pas apparaître, je fais comme je peux<br>"
        },
        {
          "yaw": 2.44062521137357,
          "pitch": 0.24296871468346737,
          "title": "Title",
          "text": "Text"
        },
        {
          "yaw": 2.456803105298129,
          "pitch": 0.24696196115171531,
          "title": "Title",
          "text": "Text"
        },
        {
          "yaw": 2.434781423804621,
          "pitch": 0.2618615805237958,
          "title": "Title",
          "text": "Text"
        },
        {
          "yaw": 2.448436225724161,
          "pitch": 0.26619035226734766,
          "title": "Title",
          "text": "Text"
        },
        {
          "yaw": 2.44396003028507,
          "pitch": 0.25256704017999176,
          "title": "Title",
          "text": "Text"
        },
        {
          "yaw": 2.4285757110655286,
          "pitch": 0.23815936750687783,
          "title": "Title",
          "text": "Text"
        },
        {
          "yaw": 2.422050423474828,
          "pitch": 0.27199484659788986,
          "title": "Title",
          "text": "Text"
        },
        {
          "yaw": 2.4603369088948392,
          "pitch": 0.24820527077223353,
          "title": "Title",
          "text": "Text"
        },
        {
          "yaw": 2.4444565266612024,
          "pitch": 0.2810485241839018,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "20-couloir-tage-2",
      "name": "Couloir étage 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1000284687537274,
          "pitch": 0.5613036418052921,
          "rotation": 5.497787143782138,
          "target": "19-coin-tage-2"
        },
        {
          "yaw": -0.07773597160458934,
          "pitch": 0.06205011098945512,
          "rotation": 0,
          "target": "21-couloir-tage-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-couloir-tage-3",
      "name": "Couloir étage 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0488577811042408,
          "pitch": 0.3882688689181233,
          "rotation": 0,
          "target": "20-couloir-tage-2"
        },
        {
          "yaw": -0.08288490009861604,
          "pitch": 0.04591933850056229,
          "rotation": 5.497787143782138,
          "target": "22-coin-tage-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-coin-tage-3",
      "name": "Coin étage 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.2003227189465466,
        "pitch": 0.39356766062952175,
        "fov": 1.1136366381289047
      },
      "linkHotspots": [
        {
          "yaw": 2.7789111191213713,
          "pitch": 0.448630752368679,
          "rotation": 0,
          "target": "21-couloir-tage-3"
        },
        {
          "yaw": 1.2392048229708905,
          "pitch": 0.23354004115783056,
          "rotation": 0,
          "target": "23-coin-des-livrables"
        },
        {
          "yaw": -1.0259416907040304,
          "pitch": 0.4778220846620034,
          "rotation": 5.497787143782138,
          "target": "23-coin-des-livrables"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-coin-des-livrables",
      "name": "Coin des livrables",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.9076243579643091,
        "pitch": 0.12312077993989945,
        "fov": 1.1136366381289047
      },
      "linkHotspots": [
        {
          "yaw": -3.002001555395621,
          "pitch": 0.4581149775500144,
          "rotation": 0.7853981633974483,
          "target": "22-coin-tage-3"
        },
        {
          "yaw": 2.8410461005914325,
          "pitch": 0.5134725123511323,
          "rotation": 5.497787143782138,
          "target": "24-couloir-tage-3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7014297534640974,
          "pitch": 0.20405196704949446,
          "title": "Repaire des photocopieuses<br>",
          "text": "La légende raconte que jamais personne n'a réussi à les faire fonctionner du premier coup<br>"
        },
        {
          "yaw": -0.3416255909957897,
          "pitch": 0.19534736453933554,
          "title": "Coin du tête-à-tête<br>",
          "text": "LE coin dating de l'agence<br>"
        }
      ]
    },
    {
      "id": "24-couloir-tage-3",
      "name": "Couloir étage 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.0020399952296035195,
        "pitch": -0.17906625570989831,
        "fov": 1.1136366381289047
      },
      "linkHotspots": [
        {
          "yaw": 3.066557075589806,
          "pitch": 0.6730134318883483,
          "rotation": 0,
          "target": "23-coin-des-livrables"
        },
        {
          "yaw": -0.18639443958374358,
          "pitch": -0.1667512119318424,
          "rotation": 5.497787143782138,
          "target": "25-bureau-indus"
        },
        {
          "yaw": 0.01799341167046009,
          "pitch": -0.17147663332886331,
          "rotation": 1.5707963267948966,
          "target": "26-couloir-tage-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-bureau-indus",
      "name": "Bureau indus",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.053997535295288,
        "pitch": 0.3359665930878126,
        "fov": 1.1136366381289047
      },
      "linkHotspots": [
        {
          "yaw": -2.2771784271437596,
          "pitch": 0.3696362705699521,
          "rotation": 10.995574287564278,
          "target": "26-couloir-tage-4"
        },
        {
          "yaw": -2.113182439868215,
          "pitch": 0.19771668914129314,
          "rotation": 11.780972450961727,
          "target": "21-couloir-tage-3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3227945631467364,
          "pitch": 0.49843239514281024,
          "title": "<div>Réunion de fin de journée<br></div>",
          "text": "Une bougie orange leur permet d'éclairer la pièce<br>"
        }
      ]
    },
    {
      "id": "26-couloir-tage-4",
      "name": "Couloir étage 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.079989165923225,
          "pitch": 0.3531295047566019,
          "rotation": 0.7853981633974483,
          "target": "25-bureau-indus"
        },
        {
          "yaw": 2.972711928223424,
          "pitch": 0.502871866850958,
          "rotation": 10.995574287564278,
          "target": "24-couloir-tage-3"
        },
        {
          "yaw": -0.0072285299149488225,
          "pitch": 0.21067742500642872,
          "rotation": 0,
          "target": "27-couloir-tage-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-couloir-tage-5",
      "name": "Couloir étage 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.021079950705903627,
        "pitch": 0.180073132994643,
        "fov": 1.1136366381289047
      },
      "linkHotspots": [
        {
          "yaw": 3.0937146910716873,
          "pitch": 0.39943044542485495,
          "rotation": 0,
          "target": "26-couloir-tage-4"
        },
        {
          "yaw": 0.001361851815463666,
          "pitch": 0.4293901005481153,
          "rotation": 0,
          "target": "16-etage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-entre-rfectoire",
      "name": "Entrée réfectoire",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.9318946770673548,
        "pitch": 0.0336960042867247,
        "fov": 1.1136366381289047
      },
      "linkHotspots": [
        {
          "yaw": 1.293950711113137,
          "pitch": 0.47960223183890527,
          "rotation": 0.7853981633974483,
          "target": "16-etage"
        },
        {
          "yaw": -0.8109862353917059,
          "pitch": 0.3159796644283581,
          "rotation": 0.7853981633974483,
          "target": "29-rfectoire"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-rfectoire",
      "name": "Réfectoire",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.6801372303828694,
        "pitch": 0.2871919004352428,
        "fov": 1.1136366381289047
      },
      "linkHotspots": [
        {
          "yaw": 3.081036530025334,
          "pitch": 0.46048071139768076,
          "rotation": 5.497787143782138,
          "target": "28-entre-rfectoire"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.6117599939720986,
          "pitch": 0.04731686038537397,
          "title": "Cuisine",
          "text": "<div>C'est ici que les plus grands cuistots de l'agence s'échangent leurs recettes de tzatziki et de gratins d'aubergines</div><div>Etchebest n'a qu'à bien se tenir<br></div>"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
