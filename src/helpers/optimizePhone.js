export function optimizePhone(numbertoformat) {
    if (
      (numbertoformat.includes('+') && !numbertoformat.includes('-')) ||
      numbertoformat.length >= 12
    ) {
      const formatNumber = numbertoformat.replace(
        /(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})/,
        '$1 ($2) $3-$4-$5'
      );
      return formatNumber;
    } else if (!numbertoformat.includes('-') && numbertoformat.length <= 9) {
      const formatNumber = numbertoformat.replace(
        /(\d{3})(\d{2})(\d{1})/,
        '$1-$2-$3'
      );
      return formatNumber;
    } else if (!numbertoformat.includes('-') && numbertoformat.length >= 10) {
      const formatNumber = numbertoformat.replace(
        /(\d{3})(\d{3})(\d{2})(\d{2})/,
        '$1-$2-$3-$4'
      );
      return formatNumber;
    } else {
      return numbertoformat;
    }
  }