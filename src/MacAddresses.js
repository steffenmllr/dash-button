import padLeft from 'lodash.padleft';

let MacAddresses = {
  getEthernetSource(packet): string {
    return MacAddresses.decimalToHex(packet.payload.shost.addr);
  },

  decimalToHex(numbers: Array<Number>): string {
    let hexStrings = numbers.map(decimal =>
      padLeft(decimal.toString(16), 2, '0')
    );
    return hexStrings.join(':');
  },
};

export default MacAddresses;