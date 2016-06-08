/**
 * Created by lingzi on 2015/12/20.
 */
var properties = {
    gold:10000,
    fireFlag:true,
    fishesCategory: [
        {
            className: "shark1",
            width: 502,
            height: 216,
            rotateDegree: 3,
            generateWeight: 5,
            beCatchedWeight:2,
            swingParams: [-34, -304, -574, -844, -1114, -1384, -1654, -1924],
            price:100
        },
        {
            className: "fish1",
            width: 56,
            height: 40,
            rotateDegree: 2,
            generateWeight: 200,
            beCatchedWeight:10,
            swingParams: [3, -35, -72, -109],
            price:1
        },
        {
            className: "fish2",
            width: 75,
            height: 62,
            rotateDegree: 2,
            generateWeight: 50,
            beCatchedWeight:9,
            swingParams: [0, -64, -126, -191],
            price:4
        },
        {
            className: "fish3",
            width: 72,
            height: 54,
            rotateDegree: 2,
            generateWeight: 50,
            beCatchedWeight:8,
            swingParams: [0, -55, -111, -167],
            price:8
        },
        {
            className: "fish4",
            width: 80,
            height: 54,
            rotateDegree: 2,
            generateWeight: 100,
            beCatchedWeight:7,
            swingParams: [1,-58,-117,-176],
            price:10
        },
        {
            className: "fish5",
            width: 120,
            height: 93,
            rotateDegree: 2,
            generateWeight: 100,
            beCatchedWeight:6,
            swingParams: [-16, -139, -260, -382],
            price:20
        },
        /*{
         className: "fish6",
         width: 101,
         height: 89,
         rotateDegree: 2,
         generateWeight: 50,
         beCatchedWeight:6,
         swingParams: [-17, -139, -261, -383, -383, -261, -139, -17, -1016, -1143, -1270, -1397]
         },*/
        {
            className: "fish10",
            width: 175,
            height:185,
            rotateDegree: 2,
            generateWeight: 10,
            beCatchedWeight:5,
            swingParams: [0, -187, -373, -558, -745, -933],
            price:60
        }
    ],

    cannonsCategory:[
        {
            className:"cannon1",
            width:74,
            height:70,
            cannonImgArr:[0,-74,-148,-222,-293],
            consumeGold:1
        },
        {
            className:"cannon2",
            width:74,
            height:71,
            cannonImgArr:[0,-76,-153,-227,-302],
            consumeGold:2
        },
        {
            className:"cannon3",
            width:74,
            height:73,
            cannonImgArr:[0,-75,-152,-225,-302],
            consumeGold:3
        },
        {
            className:"cannon4",
            width:74,
            height:79,
            cannonImgArr:[0,-82,-168,-247,-330],
            consumeGold:4
        },
        {
            className:"cannon5",
            width:74,
            height:79,
            cannonImgArr:[0,-87,-173,-255,-339],
            consumeGold:5
        },
        {
            className:"cannon6",
            width:74,
            height:84,
            cannonImgArr:[0,-91,-184,-269,-359],
            consumeGold:6
        },
        {
            className:"cannon7",
            width:74,
            height:90,
            cannonImgArr:[0,-95,-192,-280,-373],
            consumeGold:7
        }
    ],

    bulletsCategory:[
        {
            className:"bullet1",
            width:24,
            height:26,
            speed:25,
            getFishChances:1
        },
        {
            className:"bullet2",
            width:25,
            height:29,
            speed:25,
            getFishChances:2

        },
        {
            className:"bullet3",
            width:27,
            height:31,
            speed:25,
            getFishChances:3

        },
        {
            className:"bullet4",
            width:29,
            height:33,
            speed:25,
            getFishChances:4

        },
        {
            className:"bullet5",
            width:30,
            height:34,
            speed:25,
            getFishChances:5

        },
        {
            className:"bullet6",
            width:31,
            height:35,
            speed:25,
            getFishChances:6

        },
        {
            className:"bullet7",
            width:32,
            height:38,
            speed:25,
            getFishChances:7

        }
    ],

    websCategory:[
        {
            width:116,
            height:118
        },
        {
            width:137,
            height:142
        },
        {
            width:156,
            height:162
        },
        {
            width:180,
            height:174
        },
        {
            width:163,
            height:155
        },
        {
            width:191,
            height:181
        },
        {
            width:242,
            height:244
        }
    ],

    coinText:{
        width:36,
        height:50,
        speed:5
    },

    numberImgPositionYArr:[-218,-194,-170,-146,-122,-98,-74,-50,-26,-2],
    coinTextImgPositionXArr:[1,-37,-72,-108,-143,-179,-216,-252,-289,-324,-359],

    cannonCenter:{
        x:562,
        y:583
    },
    fishes: [],
    bullets:[],
    cannon:undefined,
    cannonNumber:0,
    MaxCannonNumber:6
};