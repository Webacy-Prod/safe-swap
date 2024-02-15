/**
 * Truncates an ethereum address to the format 0x0000…0000
 * @param {string} address Full address to truncate
 * @param {number} length default 6 number of chars to keep on either side
 * @returns Truncated address
 */
export const truncateEthAddress = (
  address: string,
  length = 6,
  noBeginning?: boolean
) => {
  if (address) {
    if (noBeginning) {
      return `0x...${address.slice(address.length - length, address.length)}`;
    }

    return `${address.slice(0, length + 2)}...${address.slice(
      address.length - length,
      address.length
    )}`;
  }

  return 'null';
};