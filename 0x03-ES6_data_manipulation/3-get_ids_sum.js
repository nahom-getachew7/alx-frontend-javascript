export default function getStudentIdsSum(lst) {
  return lst.reduce((counter, currentObj) => counter + currentObj.id, 0);
}
