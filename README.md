Proyecto Javier B. EtherFix-Circuits

Paso 1 clonar mi carpeta : git clone https://github.com/scaffold-eth/scaffold-eth-2.git etherfix-circuits

<img width="188" height="116" alt="image" src="https://github.com/user-attachments/assets/f78b31b3-da53-447e-af1f-580d7900b09e" />


Paso 2 : cd etherfix-circuits y yarn install

<img width="191" height="124" alt="image" src="https://github.com/user-attachments/assets/184fa86e-bca0-4c11-bdd6-ed3b4f30c03d" />

Paso 3 $ yarn chain

<img width="179" height="117" alt="image" src="https://github.com/user-attachments/assets/94332904-ec40-49eb-ae2d-c3f4d30aa23b" />

Paso 4 $ yarn deploy

<img width="187" height="116" alt="image" src="https://github.com/user-attachments/assets/0ce31ef2-5592-4731-ab7b-e0305db449fa" />

Paso 5 yarn start

<img width="185" height="126" alt="image" src="https://github.com/user-attachments/assets/4c96e25c-c3c1-4eb1-b394-33b4b56dea8c" />

Paso 6

<img width="263" height="148" alt="image" src="https://github.com/user-attachments/assets/45d12b3b-d3af-49bb-abe7-d8b567b38c85" />

Paso 7 : en el visual studio se busca ¿Qué buscar aquí?
•	Carpeta packages/hardhat/contracts: Aquí es donde vive la "magia". Verás un contrato de ejemplo (probablemente YourContract.sol). Aquí es donde escribirás la lógica de tu proyecto.
•	Carpeta packages/nextjs/app: Aquí es donde modificarás la cara de tu dApp (el frontend).
Preparar el Combustible (Alchemy y Metamask)
Para que tu dApp "hable" con el espacio (la blockchain), necesitas una conexión.
•	Alchemy: Entra a tu dashboard de Alchemy y crea una App nueva. Elige la red Ethereum Sepolia. Copia la API KEY.
•	MetaMask: Asegúrate de tener seleccionada la red Sepolia. Si no tienes ETH de prueba, puedes buscar en Google "Sepolia Faucet" para pedir un poco (es gratis).
•	Archivo .env: En la carpeta packages/hardhat, busca un archivo llamado .env.example, cámbialo a .env y pega tu clave de Alchemy y tu llave privada de MetaMask (¡CUIDADO: nunca compartas tu llave privada con nadie!).
 El "Triángulo de Operaciones" (Terminales)
Para trabajar con Scaffold-ETH como un experto, necesitas tener 3 terminales abiertas al mismo tiempo:
1.	Terminal 1 (La Cadena): Ejecuta yarn chain. Esto levanta una blockchain local en tu PC para que las pruebas sean instantáneas y gratis.
2.	Terminal 2 (El Despliegue): Ejecuta yarn deploy. Esto toma tu contrato inteligente y lo "sube" a esa red local.
3.	Terminal 3 (La Interfaz): Es la que ya tienes abierta con yarn start
 Tu Primer Experimento (Paso Práctico)
En la página que tienes abierta en el navegador (localhost:3000), busca una pestaña que dice "Debug Contracts".
•	¿Qué hacer?: Intenta cambiar un valor desde esa interfaz. Si cambias algo y la página se actualiza sola, ¡felicidades! Ya estás interactuando con la blockchain.
¿Cuál es tu idea para el Proyecto Final?
•	Básico: Un "Token Faucet" para que tus compañeros practiquen.
•	Intermedio: Un sistema de "Certificados Académicos NFT" (muy útil para la universidad).
•	Avanzado: Un sistema de votación para el centro de estudiantes.

Paso 8

<img width="301" height="197" alt="image" src="https://github.com/user-attachments/assets/b99da547-f4e2-4d8a-a399-05f6dfe16704" />


Paso 9

<img width="288" height="200" alt="image" src="https://github.com/user-attachments/assets/6842f818-8dd8-45a0-b1e0-350789864261" />

Paso 10 Cambie el contrato y hacerle los comandos correspondientes 

<img width="333" height="187" alt="image" src="https://github.com/user-attachments/assets/3069cf5b-8f4c-49fe-9723-869f097039c7" />
<img width="204" height="144" alt="image" src="https://github.com/user-attachments/assets/91416e00-2218-4d60-920c-a235630a490c" />


Paso 11 yarm compile

<img width="176" height="112" alt="image" src="https://github.com/user-attachments/assets/213c95b2-fd4b-432f-86c0-609a8b3c13c4" />

Paso 12 reiniciando el sistema para que pueda desplegar el localhost Ya tienes las tres piezas del rompecabezas funcionando:
1.	El Motor: yarn chain (Terminal 1)
2.	El Contrato: yarn deploy (Terminal 2 - ¡Ya desplegado!)
3.	La Interfaz: yarn start (Terminal 3)

<img width="194" height="239" alt="image" src="https://github.com/user-attachments/assets/6ef4a997-0ec9-48d7-9df1-c52cefcc11ff" />


Paso 13

<img width="208" height="131" alt="image" src="https://github.com/user-attachments/assets/efae4092-2a3e-4fa6-929b-ba1f1c53a2cf" />


Paso 14

<img width="208" height="133" alt="image" src="https://github.com/user-attachments/assets/c4495f4d-8d22-4c8f-a285-de99d0eaf061" />

Paso 15 Configurar el menú (Navegación)
Para que no tengas que escribir siempre la URL, vamos a poner un botón directo a EtherFix Circuits.
1.	Ve a la carpeta packages/nextjs/components.
2.	Abre el archivo Header.tsx.
3.	Busca donde están los enlaces (links) y asegúrate de que haya uno que apunte a la página de debug o crea uno personalizado.


Paso 16  
cambiando el nombre de la pagina :
En la parte que muestra el logotipo y el nombre en la esquina superior izquierda.
El Menú (Línea 18 aproximadamente)
Busca donde dice export const menuLinks. Cámbialo por esto para que tu marca empiece a brillar:
TypeScript
export const menuLinks: HeaderMenuLink[] = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Panel de Reparaciones", // Cambiamos el nombre para que sea profesional
    href: "/debug",
    icon: <BugAntIcon className="h-4 w-4" />,
  },
];

El Nombre del Proyecto (Cerca del final del archivo)
Busca la etiqueta <Link href="/" ...>. Dentro de ella verás un div con la clase flex flex-col. Ahí es donde Scaffold-ETH pone su nombre por defecto.
Reemplaza ese bloque por este:
TypeScript
<div className="flex flex-col">
  <span className="font-bold leading-tight">EtherFix Circuits 🚀</span>
  <span className="text-xs">Reparación de Hardware & Blockchain</span>
</div>

¿Cómo saber si lo hiciste bien?
En cuanto guardes el archivo (Ctrl + S), la terminal donde tienes corriendo el yarn start se actualizará sola. Mira tu navegador:
1.	El título arriba a la izquierda ya no dirá "Scaffold-ETH", dirá EtherFix Circuits 🚀.
2.	El botón del menú ya no dirá "Debug Contracts", dirá Panel de Reparaciones.

<img width="296" height="300" alt="image" src="https://github.com/user-attachments/assets/a6e5594a-61a8-4acc-933a-3582defd1b8d" />


Paso 17:  Paso: Limpiando y personalizando la Home
Busca el archivo en: packages/nextjs/app/page.tsx.
Vamos a reemplazar el contenido principal para que se enfoque de: Reparación de Hardware y Software.
Busca el bloque de código que contiene el "Welcome" y cámbialo por este (o algo parecido):

<img width="416" height="234" alt="image" src="https://github.com/user-attachments/assets/655d2b39-d510-4667-bdf2-23c80eac06d5" />


Paso 18 La Solución: Conecta el cable principal 🔌
Para arreglarlo, asegúrate de que tu código en packages/nextjs/app/page.tsx tenga esta estructura (fíjate bien en la primera y la última línea):

<img width="336" height="242" alt="image" src="https://github.com/user-attachments/assets/3242c0ec-ee65-4951-986c-40dd48262a4f" />


Paso 19 al hacer el cambio tengo mi página para el negocio mi dApp

<img width="386" height="217" alt="image" src="https://github.com/user-attachments/assets/32212a64-e82b-40e0-b22c-104a49aad451" />


Paso 20 cambie este código:

<img width="334" height="252" alt="image" src="https://github.com/user-attachments/assets/187e28d9-e260-4167-a46f-4b2012cfc88d" />


Por este otro código:

<img width="294" height="282" alt="image" src="https://github.com/user-attachments/assets/927a3d93-8249-4eea-87a4-f9d8b0f49fa5" />


Lo actualicé y  lo cambie por este otro :

<img width="299" height="271" alt="image" src="https://github.com/user-attachments/assets/328ccce5-ccb0-4cd1-b051-2767273fdae0" />


Paso 21
el orden exacto para que EtherFix Circuits vuelva a marcar 0 y todo esté fresco:
1. En la Terminal del "Motor" (donde pusiste yarn chain)
1.	Haz clic en esa terminal y presiona Ctrl + C para detenerla.
2.	Escribe de nuevo:
Bash
yarn chain
Esto borra la memoria de la blockchain local y genera cuentas nuevas con 10,000 ETH cada una.
En la Terminal del "Despliegue" (donde pusiste yarn deploy)
Como la red es nueva, el contrato "murió" con la red anterior. Tienes que revivirlo:
Bash
yarn deploy --reset
Al terminar, verás de nuevo el cohete 🚀 y la dirección del contrato.
En el Navegador
No necesitas cerrar la terminal de yarn start, el frontend detectará el cambio solo. Pero por seguridad:
1.	Dale F5 a tu página http://localhost:3000.
2.	¡Listo! El contador dirá 0.


Paso 22

<img width="397" height="224" alt="image" src="https://github.com/user-attachments/assets/9113cdb3-c08d-489c-a644-02ab1f762b8f" />


Paso 23 El proceso de "Re-instalación"
estoy cambiando las reglas del contrato (añadiendo una función), la blockchain necesita saberlo. Haz lo siguiente en tus terminales:
1.	En la terminal de Deploy: Ejecuta yarn deploy --reset.
2.	En el Navegador: Refresca la página (F5).
Modifica tu botón de Video en page.tsx
Ahora que el contrato ya tiene la función, asegúrate de que el botón en tu archivo de frontend (page.tsx) llame a esa función exacta:

<img width="180" height="209" alt="image" src="https://github.com/user-attachments/assets/239cb676-e0f3-485d-8d7f-e044e1805af3" />
<img width="372" height="209" alt="image" src="https://github.com/user-attachments/assets/38222b93-2afc-48aa-a4bf-46bc70255354" />


Paso 24

<img width="400" height="248" alt="image" src="https://github.com/user-attachments/assets/9aeba5bd-f7f2-42c3-931e-bb9983ed0686" />


Paso 25 Importar la cuenta a MetaMask (Detallado)
Sigue estos clics exactos:
Abre la extensión de MetaMask en tu navegador.
Haz clic en el selector de cuentas: Es el círculo de colores (o el icono que tengas) que está en la parte de arriba, justo en el centro o a la derecha.
Se abrirá una lista de tus cuentas. Busca abajo del todo un botón que dice "Añadir cuenta o billetera hardware" (en algunas versiones aparece un símbolo de +)
Al hacer clic ahí, se abrirá un menú pequeño. Elige la opción que dice "Importar cuenta".
Te aparecerá un recuadro que dice "Pegue aquí su cadena de clave privada".
Pega el código largo que copiaste de tu terminal de Hardhat (el que estaba debajo de Account #0).
Dale al botón azul de "Importar".


Paso 26
Primera pruebe a de pago ;Escribe en el cuadro azul: Pon una falla técnica, por ejemplo: "Reparación de puerto HDMI - Cambio de pines".
Haz clic en "Registrar en Bitácora": El botón ahora debería estar habilitado.
Confirma en MetaMask: Se abrirá una ventana emergente de MetaMask pidiéndote permiso para la transacción. Dale a Confirmar.

<img width="368" height="218" alt="image" src="https://github.com/user-attachments/assets/9dc6cfc3-4b5b-4ed6-83ed-4d3c39dbc893" />


se ve claramente la notificación de Chrome: "Confirmed transaction - Transaction 0 confirmed". Eso significa que tu código de Solidity, tu frontend en Next.js y tu MetaMask están hablando perfectamente entre sí.  ya  se tienes una dApp funcional!


 Paso27

 <img width="144" height="135" alt="image" src="https://github.com/user-attachments/assets/5e760c47-4680-4162-bfaf-d03682d3e507" />


 Paso28
¡Lo lograste! Esa es la señal que estábamos esperando. La terminal te acaba de confirmar que tu billetera 0x74Ae1be27ea6Fb85deb2Dc64e228a892EE69D84C ha sido importada correctamente y es la que tiene los 0.18 ETH.
Ahora que Scaffold-ETH ya sabe quién eres, solo falta subir el contrato al "espacio" de Sepolia.
El último paso (Despliegue)
Ejecuta este comando en la misma terminal:
Bash
yarn deploy --network sepolia
Nota: Es posible que la terminal te pida la contraseña que acabas de crear (1234, admin, o la que hayas puesto) para poder usar la llave y pagar el gas del despliegue.
¿Qué verificar en tu dApp?
Mientras el comando corre, fíjate en tu navegador (el de la imagen image_adf25a.png):
Saldo Actualizado: Si cambiaste el targetNetworks en scaffold.config.ts, el balance de $ 0.00 debería cambiar a 0.18 ETH.
Red Correcta: El letrero naranja que decía "Hardhat" debería decir ahora Sepoli
Bitácora Activa: Una vez que el deploy termine con éxito, intenta escribir una falla técnica en el cuadro de texto y dale a "Registrar en Bitácora". ¡Debería abrirse MetaMask para confirmar tu primera transacción real!

<img width="232" height="126" alt="image" src="https://github.com/user-attachments/assets/826943a8-98b6-4dd9-a3a3-fb9525516a14" />


Paso29   El último paso (Despliegue)
Ejecuta este comando en la misma terminal:
Bash
yarn deploy --network sepolia
Nota: Es posible que la terminal te pida la contraseña que acabas de crear (1234, admin, o la que hayas puesto) para poder usar la llave y pagar el gas del despliegue.
¿Qué verificar en tu dApp?
Mientras el comando corre, fíjate en tu navegador (el de la imagen image_adf25a.png):
Saldo Actualizado: Si cambiaste el targetNetworks en scaffold.config.ts, el balance de $ 0.00 debería cambiar a 0.18 ETH.
Red Correcta: El letrero naranja que decía "Hardhat" debería decir ahora Sepolia.
Bitácora Activa: Una vez que el deploy termine con éxito, intenta escribir una falla técnica en el cuadro de texto y dale a "Registrar en Bitácora". ¡Debería abrirse MetaMask para confirmar tu primera transacción real!

<img width="282" height="185" alt="image" src="https://github.com/user-attachments/assets/b23de1c6-3380-4c21-81a3-48b402ed27dd" />


Paso30 Enter password to decrypt private key:
Nothing to compile
No need to generate any newer typings.
deploying "EtherFix" (tx: 0x8e71d2f37b324ae7658ffcc9c49e9baa82105cb8dc11c21e2b267d937ad21b49)...: deployed a
t 0xbEc63809082d2345116C871c29CCaCDdb84c15FB with 540900 gas
🚀 Contrato EtherFix desplegado en la dirección: 0xbEc63809082d2345116C871c29CCaCDdb84c15FB
📝 Updated TypeScript contract definition file on ../nextjs/contracts/deployedContracts.ts

Paso31 contrato desplegado
https://sepolia.etherscan.io/address/0xbEc63809082d2345116C871c29CCaCDdb84c15FB#code

<img width="351" height="197" alt="image" src="https://github.com/user-attachments/assets/4003b8b1-3292-45b0-8015-cc143c648552" />


Paso32 contrato verificado

<img width="232" height="189" alt="image" src="https://github.com/user-attachments/assets/e8317c0c-9899-46dd-a155-9e7e81b4fd25" />


Paso33 ya verificado https://sepolia.etherscan.io/address/0xbEc63809082d2345116C871c29CCaCDdb84c15FB#code

<img width="405" height="176" alt="image" src="https://github.com/user-attachments/assets/052bfaef-79f7-42f7-9ebe-c7609286527f" />


el contrato desplegado y verificado, lo cual es el 90% del trabajo pesado. ya está en órbita en Sepolia.
🚀 Comandos para iniciar el proyecto (En la noche)


Abre dos terminales diferentes dentro de la carpeta etherfix-circuits:
Terminal 1: El Corazón (Frontend)
Esto encenderá tu página web de EtherFix.
Bash
yarn start

Terminal 2: El Puente (Contratos)
Aunque ya hiciste el deploy, a veces es necesario para tareas de mantenimiento o si quieres probar algo rápido en local.
Bash
yarn chain


Lista de Pendientes para "Pulir"
Cuando regreses, nos enfocaremos en estos 3 puntos para que tu tarea brille:
Vercel: Subiremos tu dApp a internet para que pueda entrar desde su propio teléfono o PC.
Sincronizar Localhost: Asegurarnos de que el botón de "Connect Wallet" muestre tus 0.18 ETH de Sepolia de inmediato.
Diseño: Ajustar los colores y la tabla de bitácora para que se vea impecable.
💡 Recordatorio de tu Wallet
Tu dirección es: 0x74Ae1be27ea6Fb85deb2Dc64e228a892EE69D84C
Tu contrato verificado es: 0xbEc63809082d2345116C871c29CCaCDdb84c15FB
EtherFix Circuits. 


Paso34 ya teniendo mi cartera en sepolia

<img width="350" height="197" alt="image" src="https://github.com/user-attachments/assets/93c4f0a8-c75b-457f-86a0-05a7538af70f" />


Paso35

<img width="383" height="215" alt="image" src="https://github.com/user-attachments/assets/9095f866-24e9-4508-bd07-78e9d3f3d298" />


Paso36 

<img width="461" height="259" alt="image" src="https://github.com/user-attachments/assets/4c3f87bd-53de-4bc1-9720-97e3d3528a7f" />
<img width="386" height="217" alt="image" src="https://github.com/user-attachments/assets/03d88bb3-4902-4584-9862-f3f969ac7666" />
<img width="389" height="219" alt="image" src="https://github.com/user-attachments/assets/ef221ceb-ae9c-4bf7-94cc-f0b5b9734e3d" />
<img width="406" height="228" alt="image" src="https://github.com/user-attachments/assets/2bae14d1-7482-427d-88d6-f5f09f4a1892" />
<img width="412" height="224" alt="image" src="https://github.com/user-attachments/assets/37e5c1da-12fa-4cc6-955f-f6df2a55ec43" />


Paso 37

<img width="413" height="232" alt="image" src="https://github.com/user-attachments/assets/d97a476b-d2a6-4f87-b0ee-46ce0a3d2567" />















































