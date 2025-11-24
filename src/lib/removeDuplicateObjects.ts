export default function removeDuplicateObjects(arr: Object[]) {
  const seen = new Set();
  return arr.filter(obj => {
    // Convert the object to a stable string representation for comparison
    const stringifiedObj = JSON.stringify(obj);
    if (seen.has(stringifiedObj)) {
      return false; // Object is a duplicate
    } else {
      seen.add(stringifiedObj);
      return true; // Object is unique
    }
  });
}