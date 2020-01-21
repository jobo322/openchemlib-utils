import OCL from 'openchemlib';

import { getDiastereotopicAtomIDs } from '../getDiastereotopicAtomIDs';
import { initOCL } from '../../OCL';

initOCL(OCL);
describe('getDiastereotopicAtomIDs', () => {
  it('CC(Cl)CC', () => {
    let molecule = OCL.Molecule.fromSmiles('CC(Cl)CC');
    let ids = getDiastereotopicAtomIDs(molecule);
    expect(ids).toStrictEqual([
      'gJPHADIMuTe@XbhOtbIpj`',
      'gJPHADILuTe@XdhOtbQpj`',
      'gJPHADILuTe@X`hOtbCpfuP',
      'gJPHADILuTe@XbhOtbIpj`',
      'gJPHADILuTe@XahOtbEpj`',
    ]);
  });
});
