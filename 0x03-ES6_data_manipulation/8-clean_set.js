export default function cleanSet(set, str) {
    if (!str || !str.length) return '';
    let values = '';
    for (const i of set) {
      if (i && i.startsWith(str)) {
        values += values.length === 0 ? i.replace(str, '') : i.replace(str, '-');
      }
    }
    return values;
  }
