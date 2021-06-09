import 'intl';
import 'intl/locale-data/jsonp/th';

export default function currencyFormat(number) {
  return Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',
  }).format(number);
}
