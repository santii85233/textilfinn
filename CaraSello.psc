Algoritmo CaraSello
	//Incluir libreria <cstdlib> encargada del numero random
	//Tambien incluir <cstime> para el delay del lanzamiento
	Definir resultado, eleccion, lanzamiento como enteros
	definir enter Como Caracter
	lanzamiento = 0
	Escribir "========================="
	Escribir "Bienvenido a Cara o Sello"
	Escribir "========================="
	Escribir "Presione Enter para seguir:"
	Leer enter
	Escribir "¡Se ha lanzado una moneda!"
		Repetir
			Escribir "|		"
			esperar 1 segundos
			Escribir "/		"
			esperar 1 Segundos
			Escribir "-		"
			esperar 1 segundos
			Escribir "\	"
			esperar 1 Segundos
			lanzamiento= lanzamiento +1
		Hasta Que lanzamiento>1
		Escribir "¡La moneda ha caido!"
	resultado= azar(2)+1
	Escribir "Escribe tu opcion para revelar si has acertado"
	Escribir "1. Sello"
	Escribir "2. Cara"
	Leer eleccion
	
	si eleccion==resultado
		Escribir "¡Felicidades, has acertado!"
	SiNo 
		Escribir " Has fallado. Intenta de nuevo."
	FinSi


	
	
	
	
FinAlgoritmo
