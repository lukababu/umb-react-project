import axios from 'axios';

export async function getCptCodes() {
  return await axios
    .get("http://localhost:3001/api/cptCodes")
    .then((res) => res.data)
}

export async function getCptCostsById(cptCodeId) {
  return await axios
    .get(`http://localhost:3001/api/cptCodes/${cptCodeId}/costs`)
    .then((res) => res.data)
}

export async function createNewCostByCptId({cptCostId, newCost, newCopay, newFacilityType}) {
  return await axios
    .post(`http://localhost:3001/api/cptCodes/${cptCostId}/costs`, {
      cost: newCost,
      copay: newCopay,
      facilityType: newFacilityType,
    })
    .then(res => res.data)
}