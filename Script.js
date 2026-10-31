function siguientePantalla(id){

    document
    .querySelectorAll(".pantalla")
    .forEach(p =>
        p.classList.remove("activa")
    );

    document
    .getElementById(id)
    .classList.add("activa");
}

function iniciarCuenta(){

    let tiempo = 10;

    let intervalo = setInterval(() => {

        document.getElementById(
            "contador"
        ).innerText = tiempo;

        tiempo--;

        if(tiempo < 0){

            clearInterval(intervalo);

            siguientePantalla(
                "pregunta"
            );
        }

    },1000);
}

let escala = 1;

let preguntas = [

"¿Estás completamente segura? 🥺",

"¿Y si lo piensas una vez más? ❤️",

"Creo que elegiste el botón equivocado 😂",

"Mira que hice todo esto pensando en ti 🥹",

"Mi código detectó una posible equivocación 👀",

"Revisando sentimientos nuevamente... ❤️",

"Entonces... ¿Puedo ser tu novia? 💖"

];

let indice = 0;

function rechazar(){

    document.getElementById(
        "textoPregunta"
    ).innerText =
    preguntas[
        Math.min(
            indice,
            preguntas.length - 1
        )
    ];

    indice++;

    escala += 0.15;

    document.getElementById(
        "btnSi"
    ).style.transform =
    `scale(${escala})`;

    let botonNo =
    document.getElementById(
        "btnNo"
    );

    let ancho =
        window.innerWidth - 200;

    let alto =
        window.innerHeight - 120;

    botonNo.style.position =
        "fixed";

    botonNo.style.left =
        Math.random()*ancho+"px";

    botonNo.style.top =
        Math.random()*alto+"px";
}

function aceptar(){

document.body.innerHTML = `

<div style="
height:100vh;
background:#111;
color:#00ff99;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
font-family:monospace;
padding:30px;
text-align:left;
">

<pre id="resultado"></pre>

</div>

`;

let texto =

`Procesando respuesta...

██████████ 100%

Analizando respuesta...

Respuesta recibida: SÍ ✅

Solicitud:
¿Puedo ser tu novia? ❤️

Estado:
ACEPTADA ✅

Nivel de felicidad:
∞`;

let i = 0;

let destino =
document.getElementById(
"resultado"
);

let intervalo = setInterval(()=>{

destino.textContent +=
texto.charAt(i);

i++;

if(i >= texto.length){

clearInterval(intervalo);

setTimeout(()=>{

mostrarPantallaFinal();

},2000);

}

},200);

}
function mostrarPantallaFinal(){

document.body.innerHTML = `

<div style="
height:100vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
text-align:center;
padding:30px;
background:linear-gradient(
135deg,
#ffd1dc,
#ffe4ec,
#fff0f5
);
">

<h1 style="
color:#d63384;
font-size:clamp(2.5rem,7vw,4rem);
">
❤️ ¡SÍ! ❤️
</h1>

<p style="
font-size:1.3rem;
max-width:700px;
line-height:1.8;
color:#5c2a4a;
">
No sabes lo feliz que me acabas de hacer.
</p>

<p style="
font-size:1.3rem;
line-height:1.8;
color:#5c2a4a;
">
Gracias por darme la oportunidad de compartir esta aventura contigo.
</p>

<h2 style="
margin-top:25px;
color:#c2185b;
font-size:2rem;
">
❤️ 11 de Noviembre ❤️
</h2>

<p style="
font-size:1.2rem;
color:#5c2a4a;
">
El día en que comenzó oficialmente nuestra historia.
</p>

<h2 style="
margin-top:40px;
color:#d63384;
">
✨ Y espero que sea solo el primero de muchos recuerdos juntas ✨
</h2>

</div>

`;

crearCorazones();

}
