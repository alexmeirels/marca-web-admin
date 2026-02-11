export const SupportedSport = {
  Society: "Society",
  Futsal: "Futsal",
  BeachTennis: "Beach Tennis",
  Volei: "Vôlei",
  VoleiDePraia: "Vôlei de Praia",
  Futevolei: "Futevôlei",
  Basquete: "Basquete",
  Handebol: "Handebol",
  Outro: "Outro",
} as const;

export type SupportedSport = (typeof SupportedSport)[keyof typeof SupportedSport];
