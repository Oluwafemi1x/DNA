// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,

    // Method to mutate a base in the DNA
    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = generateRandomBase();
      while (newBase === this.dna[randomIndex]) {
        // Ensure the new base is different from the original
        newBase = generateRandomBase();
      }
      this.dna[randomIndex] = newBase;
      return this.dna;
    },

    // Method to compare the DNA similarity with another pAequor
    compareDNA(otherOrganism) {
      const matchingBases = this.dna.filter((base, index) => base === otherOrganism.dna[index]);
      const similarityPercentage = (matchingBases.length / this.dna.length) * 100;
      return `Specimen #${this.specimenNum} and Specimen #${otherOrganism.specimenNum} have ${similarityPercentage.toFixed(2)}% DNA similarity.`;
    },

    // Method to check if the DNA has a high likelihood of survival
    willLikelySurvive() {
      const cgContent = this.dna.filter(base => base === 'C' || base === 'G').length;
      return (cgContent / this.dna.length) * 100 >= 60;
    },
  };
};

// Helper function to generate a random DNA base
const generateRandomBase = () => {
  const bases = ['A', 'T', 'C', 'G'];
  const randomIndex = Math.floor(Math.random() * bases.length);
  return bases[randomIndex];
};

// Example usage:
const organism1 = pAequorFactory(1, ['A', 'C', 'T', 'G', 'A', 'C', 'T', 'G', 'A', 'C', 'T', 'G', 'A', 'C', 'T']);
const organism2 = pAequorFactory(2, ['A', 'C', 'T', 'G', 'A', 'C', 'T', 'G', 'A', 'C', 'T', 'G', 'A', 'C', 'T']);

console.log(organism1);
console.log(organism2);

console.log(organism1.mutate());
console.log(organism1.compareDNA(organism2));
console.log(organism1.willLikelySurvive());









