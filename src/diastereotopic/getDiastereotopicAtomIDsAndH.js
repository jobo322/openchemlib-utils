import { getOCL } from '../OCL';

import { getDiastereotopicAtomIDs } from './getDiastereotopicAtomIDs';
// Previously getExtendedDiastereotopicAtomIDs

export function getDiastereotopicAtomIDsAndH(originalMolecule) {
  const OCL = getOCL();
  const molecule = originalMolecule.getCompactCopy();
  molecule.addImplicitHydrogens();
  // TODO Temporary code ???
  molecule.ensureHelperArrays(OCL.Molecule.cHelperNeighbours);

  const diaIDs = getDiastereotopicAtomIDs(molecule);
  const newDiaIDs = [];

  for (let i = 0; i < diaIDs.length; i++) {
    const diaID = diaIDs[i];
    const newDiaID = {
      oclID: diaID,
      hydrogenOCLIDs: [],
      nbHydrogens: 0,
    };
    for (let j = 0; j < molecule.getAllConnAtoms(i); j++) {
      const atom = molecule.getConnAtom(i, j);
      if (molecule.getAtomicNo(atom) === 1) {
        newDiaID.nbHydrogens++;
        if (newDiaID.hydrogenOCLIDs.indexOf(diaIDs[atom]) === -1) {
          newDiaID.hydrogenOCLIDs.push(diaIDs[atom]);
        }
      }
    }

    newDiaIDs.push(newDiaID);
  }

  return newDiaIDs;
}
