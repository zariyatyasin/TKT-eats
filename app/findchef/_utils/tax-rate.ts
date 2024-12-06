// This is a simplified tax rate table. In a real-world scenario, you'd want a more comprehensive and up-to-date list.
const stateTaxRates: { [key: string]: number } = {
  'AL': 0.04,
  'AK': 0.00,
  'AZ': 0.056,
  'AR': 0.065,
  'CA': 0.0725,
  // Add more states here...
  'WY': 0.04,
};

export function getStateTaxRate(stateCode: string): number {
  const rate = stateTaxRates[stateCode.toUpperCase()];
  return rate !== undefined ? rate : 0;
}

export function calculateTax(subtotal: number, taxRate: number): number {
    return subtotal * taxRate;
  }
  
  export function calculateTotalWithTax(subtotal: number, taxAmount: number): number {
    return subtotal + taxAmount;
  }