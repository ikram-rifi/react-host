import React from 'react';

function App() {
  // Define the Etudiant class inside the App component
  class Etudiant {
    constructor(nom, age) {
      this.nom = nom;
      this.age = age;
    }

    info() {
      return `Etudiant nom: ${this.nom} a pour age: ${this.age}`;
    }
  }

  // Create an instance of the Etudiant class
  const et1 = new Etudiant("rami", 23);

  // Use the `info` method to display the information
  return <div>{et1.info()}</div>;
}

export default App;
