let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.pantun)}”`, m)
}
handler.help = ['Frase']
handler.tags = ['quotes']
handler.command = /^(Frase)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.pantun = [
" *FRASE:*\n\nHoy no hay frase\npero,\n *Leo y Nath Supremacy*",
" *FRASE:*\n\nDura no es la vida\nDura es la que te comes",
" *FRASE:*\n\*Pete no pete quetepe machete sorete soplete cumpete masteque suplete*",  
" *FRASE:*\n\n*͓̽l͓̽a͓̽ ͓̽n͓̽a͓̽l͓̽g͓̽e͓̽a͓̽ ͓̽y͓̽ ͓̽l͓̽e͓̽ ͓̽d͓̽a͓̽ ͓̽u͓̽n͓̽a͓̽ ͓̽r͓̽e͓̽l͓̽a͓̽c͓̽i͓̽ó͓̽n͓̽ ͓̽c͓̽o͓̽m͓̽p͓̽l͓̽e͓̽t͓̽a͓̽m͓̽e͓̽n͓̽t͓̽e͓̽ ͓̽e͓̽s͓̽t͓̽a͓̽b͓̽l͓̽e͓̽*͓̽",
" *FRASE:*\n\nCuando la vida te de limones\n𝓬𝓾𝓵𝓮𝓪𝓽𝓮 𝓾𝓷 𝓷𝓲ñ𝓸\ *nel hombre morado*",
" *FRASE:*\n\nY pensar que antes cazabamos mamuts.\n *attm:el wey que no puede cargar ni un garrafón*",
" *FRASE:*\n\n *En este mundo es follar o ser follado*",  
" *FRASE:*\n\nmi mama me dió la vida\npero la persona que le salio esta frase\nme dio ganas de vivirla.",
" *FRASE:*\n\nLa vida no fue echa para llorar\n la vida fue echa para culiarse perros callejeros\n *att: el pana*",
" *FRASE:*\n\n私の肛門のかゆみ、助けてください a no ya lo arregle",
" *FRASE:*\n\nNo existe dolor mas doloroso\nque el dolor que duele doliendo \nen el dolor doloroso que duele\n *att: el chico adolorid- dolor dolor me duele aaaaaaaaaa alaberga -se muere de tanto dolor doloroso que duele doliendo dolor a*", 
" *FRASE:*\n\nse venden empanadaaas,\nricas y calientes empanadaaas,\ntenemo de jamon, queso, pollo, compren hoy mismo su deliciosa empanadaaa.",
" *FRASE:*\n\npor favor, si alguien ve esto,\nsaquenme del sotano de Leo,\nsoy una persona real y me tiene secuestrado, usen el comando\n *.info para contactarse conmigo*",
" *FRASE:*\n\nAlbion online,\nes un MMORPG,\nno lineal.",
" *FRASE:*\n\nAYUDA GENTE SE ACTIVARON LAS MAYUSCULAS Y NO SE COMO SE QUITa a ya olvidenlo ya lo encontre.",
" *FRASE:*\n\nTUR,\nDAN,\nFUR GUO.\n *PUPURUPURUPURUPU TROLEO HERMANO*",
" *FRASE:*\n\nEsto fue hecho por la hermana del admin,\nsi ve esto,\nautomaticamente se vuelve gay.\n *tururu*",
" *FRASE:*\n\nGabi Braun,\nesta infravalorada y no se lo merece,\nArdanse fans de shingeki\n *que se pone aqui, perdon soy nuevo*",
" *FRASE:*\n\nAhora que te ha tocado esta frase oculta,\nDeberias agradecerle a Leo,\nPor perder valioso tiempo traduciendo y perfeccionando esto.\n *lo apreciaria con gusto*",
" *FRASE:*\n\nESTO ES UN LAVADO MENTAL,\nSAL A LA CALLE,\nY QUEMA A TODOS LOS GEIS QUE ENCUENTRES.",
" *FRASE:*\n\nLarga vida,\nA shrek,\njoder ese ogro es mi idolo.",
" *Puto:*\n\nEl,\nQue,\nLo,\n *Lea*",
" *FRASE:*\n\ncuando estes enojado,\nGolpea a un niño huerfano de la calle,\nQue es lo peor que puede hacer?\n *DECIRLE A SUS PADRES?*",
" *FRASE:*\n\nSaben quien lleva,\nmas de 3 meses sin drogarse?,\Exactamente.\n *DIEGO MARADONA*",
" *FRASE:*\n\nme gustan los muslos,\definitivamente es un problema si,\Pero quien tenga muslos,\n *AHORQUEME CON ELLOS*",
" *FRASE:*\n\nMe caga la gente,\nQue sela pasan diciendo sus estados de animo siempre,\nSon bien pendejas.\n *ESTADO: CACHONDO*",
" *FRASE:*\n\nMe desayune horny,\nAlmorze horny,\nCene Horny.\n *MORIRE HORNY?!*",
" *FRASE:*\n\nMorite,\nEres lo peor que me ha tocado aguantar,\nMalparido estorbo de la vida.\n *Bot modo nojado*",
" *FRASE:*\n\nMi perro se largo en cuanto abri la puerta,\n *Michelle, la italiana victima de abandono perrumascotal*",
" *FRASE:*\n\npara triunfar en la vida,\nnecesitas saber usar las 3 -S,\n1.Sexoooooo,\n2.Sexooooooooooo...\n3.Sexoooooooooooooo",
" *FRASE:*\n\nLevantate y camina,\nDespues de todo,\nAun tienes dos buenas piernas.\n *El Damo*",
" *FRASE:*\n\nHace un hermoso dia alla afuera,\nLos pajaros cantan las flores florecen,\nEn dias como estos,\nlos niños como tu...\n *DEBERIAN ARDER EN EL INFIERNO*",
" *FRASE:*\n\nSi la vida te da la espalda,\nMetele un dedo en el ojete.\n *Aiden 2021*",
" *FRASE:*\n\Yare Yare,\nDame un respiro,\nNo puedo escribir tan rapido,\nPor ese internet qlo que tienes.\n *Bot a Leo*",
" *FRASE:*\n\nNo voy a permitir que me exites de nuevo,\nViejo Sabroso,\n *El man que no sabe que frases poner aca*",
" *FRASE:*\n\nJoder esas tetas no dejan de mirarme,\nMe la follo?,\n Me la voy a cogeeeeeeer!,\n *Goku Momazos*",
" *FRASE:*\n\nMaldito seas Roshi,\nFollando con mi mujer de nuevo,\nLas costumbres jamas se pierden por lo que veo.\n *Krillin*",
" *FRASE:*\n\nCUANDO YO LA VI,\nDIJE SI ESA MUJER FUERA PARA MI,\nPERDONAME TE LO TENIA QUE DECIR,\nTA DURA.\n *DURA-DURA-DURA*",
" *FRASE:*\n\nContufisicaYtuquimica,\nYtambientuanatomia,\nlacervesaYeltequila,\ny tu boca con la mia.\n *YA NO PUEDO MAS*",
" *FRASE:*\n\nLa muchacha de los ojos tristes,\nVive sola y necesita amor.\nComo al aire necesita verme,\nComo al sol la necesito yo 💔.\n *Leo Bot triste*",
" *FRASE:*\n\nTOMA ESTO DIO!,\nNADIE PUEDE DEFLECTAR\nLOS 20 METROS DE RANGO,\nDE MI ESMERALD SPLASH!!.\n *Kakyoin Noriaki*",
" *FRASE:*\n\esta noche oscura,\nte tortura la locura\nprocura estar a mi altura\nAunque baja es tu estatura.\n *jaja mide 1.55 el pitufo*",
" *FRASE:*\n\nhoy no hay frase para ti\nel bot esta emperrado\nporque no te has visto jojos\nasi que dire tres palabras\n *MIRATE JOJOS CTM*",
" *FRASE:*\n\nSi ves esto,\nespero que estes pasando por un buen dia.\nSi tienes muchos problemas en tu vida, no permitas que nadie te haga sentir menos,\nrecuerda que todas las cosas pasan aunque no podamos evitarlo, y tu,\n *Eres la persona mas importante del mundo, sigue asi crack*",
]

