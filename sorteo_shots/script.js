let cantidad;
        let participantes = [];
        let shotsMax;
        let currentParticipant = 0;

        function mostrarParticipantes() {
            cantidad = parseInt(document.getElementById("cantidad").value);

            if (isNaN(cantidad) || cantidad < 1) {
                alert("¡Por favor ingresa un número válido de participantes!");
                return;
            }

            // Ocultar el formulario inicial
            document.querySelector("h1").style.display = "none";
            document.querySelector("label").style.display = "none";
            document.getElementById("cantidad").style.display = "none";
            document.querySelector("button").style.display = "none";

            // Mostrar el formulario para ingresar los nombres
            const participantesForm = document.getElementById("participantsForm");
            participantesForm.style.display = "block";

            mostrarCampoDeParticipante();
        }

        function mostrarCampoDeParticipante() {
            const participantesInputs = document.getElementById("participantesInputs");
            participantesInputs.innerHTML = `<label for="participante">Participante ${currentParticipant + 1}:</label>
                                             <input type="text" id="participante" placeholder="Nombre del participante">`;
        }

        function siguienteParticipante() {
            let nombre = document.getElementById("participante").value.trim();

            if (!nombre) {
                alert("¡Por favor ingresa un nombre!");
                return;
            }

            participantes.push(nombre);
            currentParticipant++;

            if (currentParticipant < cantidad) {
                mostrarCampoDeParticipante();
            } else {
                document.getElementById("participantsForm").style.display = "none";
                document.getElementById("shotsForm").style.display = "block";
            }
        }

        function confirmarShots() {
            shotsMax = parseInt(document.getElementById("shotsMax").value);

            if (isNaN(shotsMax) || shotsMax < 1) {
                alert("¡Por favor ingresa un número válido de shots!");
                return;
            }

            document.getElementById("shotsForm").style.display = "none";
            document.getElementById("realizarSorteoBtn").style.display = "block";
        }

        function realizarSorteo() {
            // Mostrar el texto de "Pensando..."
            document.getElementById("thinking").style.display = "block";
            document.getElementById("realizarSorteoBtn").style.display = "none";

            // Simular el "pensamiento" antes del sorteo
            setTimeout(() => {
                // Seleccionar un participante aleatorio
                let ganador = participantes[Math.floor(Math.random() * participantes.length)];

                // Generar un número aleatorio de shots entre 1 y el máximo
                let shots = Math.floor(Math.random() * shotsMax) + 1;

                // Ocultar el texto de "Pensando..." y mostrar el resultado
                document.getElementById("thinking").style.display = "none";
                document.getElementById("resultado").innerText = `${ganador} toma ${shots} shots! 🍻`;
                document.getElementById("resultado").style.display = "block";

                // Mostrar el botón de volver a sortear
                document.getElementById("volverSorteoBtn").style.display = "block";
            }, 2000); // Simula 2 segundos de suspense antes de mostrar el ganador
        }

        function volverASorteo() {
            // Solo se reinicia el sorteo, no los datos
            document.getElementById("thinking").style.display = "none";
            document.getElementById("resultado").style.display = "none";
            document.getElementById("volverSorteoBtn").style.display = "none";
            document.getElementById("realizarSorteoBtn").style.display = "block";
        }