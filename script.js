/**Tâche 01 : Itérer avec Async/Await */

async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Attendre 1 seconde
      console.log(value); // Enregistrer la valeur
    }
}

    const values = [1, 2, 3, 4];
    iterateWithAsyncAwait(values);


/**Tâche 02 : Attendre un appel */
async function awaitCall() {
    try {
        const response = await new Promise((resolve) => {
            setTimeout(() => resolve("Données de l'API"), 2000); // Simule un appel API
        });
        console.log(response); // Enregistrer les données
    } catch (error) {
        console.error("Erreur lors de l'appel : ", error);
        }
    }
    
    awaitCall();

/**Tâche 03 : Gérer les erreurs avec Async/Await */
async function awaitCall() {
    try {
        const response = await new Promise((resolve, reject) => {
            setTimeout(() => reject("Échec de l'appel API"), 2000); // Simule un échec d'API
        });
        console.log(response);
    } catch (error) {
        console.error("Erreur lors de l'appel API : ", error); // Gérer l'erreur
    }
}

awaitCall();


